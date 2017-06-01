<script type="text/javascript" src="../jszip/dist/jszip.js"></script>
<script type="text/javascript" src="../jszip/vendor/FileSaver.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/i18n/jquery.spectrum-ar.js"></script>

<?php
  $name;
  $page;
  $theme;
  $jQuery;
  $normalize;
  $getNormalize;
  $meta_name;
  $meta_author;
  $titleformat;

  function includejQuery() {
    global $jQuery;
    if(isset($_POST['includejQuery'])) {
      $jQuery = "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'><\/script>";
    }
  }

  function includeNormalize() {
    global $normalize;
    if(isset($_POST['includeNormalize'])) {
      /* $normalize = "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'>"; */
      $normalize = "<link rel='stylesheet' href='css/normalize.css'>";
    }
  }

  function getNormalize() {
    global $getNormalize;
    $getNormalize = $_POST['includeNormalize'];
  }

  function setInfo() {
    global $name, $theme, $meta_name, $meta_author, $page, $titleformat;
    if(!empty($_POST['name'])) {
      $name = $_POST['name'];
    }
    if(!empty($_POST['pagename'])) {
      $page = $_POST['pagename'];
    }
    if(!empty($_POST['siteTheme'])) {
      $theme = $_POST['siteTheme'];
    }
    if(!empty($_POST['meta-name'])) {
      $meta_name = $_POST['meta-name'];
    }
    if(!empty($_POST['meta-name'])) {
      $meta_author = $_POST['meta-author'];
    }
    includejQuery();
    includeNormalize();
    switch ($_POST['titleformat']){
      case "snpn":
        $titleformat = $name." / ".$page;
      break;
      case "sn":
        $titleformat = $name;
      break;
      case "pn":
        $titleformat = $page;
      break;
      case "custom":
        $titleformat = str_replace(
          array("{sitename}", "{pagename}"),
          array($name, $page),
        $_POST['titleformat-custom']);
      break;
    }
  }

  setInfo();

  $scriptarray = array();
  $scriptte = $_POST['customScriptType-0'];
  $scriptnr = 0;
  while (!empty($scriptte)){
    if (empty($scriptte)){
      return false;
    }else{
    $scriptarray[] = $scriptte;
      $scriptnr++;
      $scriptte = $_POST["customScriptType-".$scriptnr];
    }
  }

  $inputscriptarray = array();
  $inputscriptte = $_POST['customScriptLink-0'];
  $inputscriptnr = 0;
  while (!empty($inputscriptte)){
    if (empty($inputscriptte)){
      return false;
    }else{
    $inputscriptarray[] = $inputscriptte;
    $inputscriptnr++;
    $inputscriptte = $_POST["customScriptLink-".$inputscriptnr];
    }
  }
?>

<style>
  body {
    font-family: Sans-Serif, arial;
    padding: 10px;
    font-size: 18px;
  }
</style>

<p>Creating Download...</p>

<script type="text/javascript">

    // Function definitions

    function getNormalizeText() {
      var normalizeCSS;
      $.ajax({
        url: '../templateCSS/normalize.css',
        async: false,
        success: function(response) {
            normalizeCSS = response;
        }
      });
      return normalizeCSS
    }

    var name = "<?php echo($name); ?>";
    document.title = name;
    var titleformat = "<?php echo($titleformat); ?>";
    var theme = "<?php echo($theme); ?>";
    var jQuery = "<?php echo($jQuery); ?>";
    var normalize = "<?php echo($normalize); ?>";
    var meta_name = "<?php echo($meta_name); ?>";
    var meta_author = "<?php echo($meta_author); ?>";
    var page = "<?php echo ($page) ?>";
    var grid = "";
    var filename = name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + "_" + page.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".zip";
    var list = [];

    <?php
      $sCounter = 0;
      $scriptarray = array_filter($scriptarray);
      if (!empty($scriptarray)) {
        for ($i = 0; $i < count($scriptarray); $i++) { ?>
          list.push({
          <?php echo($scriptarray[$i]); ?>: "<?php echo($inputscriptarray[$i]); ?>"
        });
      <?php $sCounter++; } }
    ?>

    var str =
`<!DOCTYPE html>
<html>
  <head>
    <meta name="author" content="${meta_author}">
    <meta name="name" content="${meta_name}">
    ${normalize}
    <link rel="stylesheet" href="css/main.css">
    <title>${titleformat}</title>
  </head>
  <body>
    <h1>${name}</h1>
    ${grid}
    ${list}
    ${jQuery}
  </body>
</html>`;

    var zip = new JSZip();
    zip.file("index.html", str);

    var css = zip.folder("css");
    normalizeText = getNormalizeText();
    css.file("normalize.css", normalizeText);

    var scripts = zip.folder("scripts");
    scripts.file("scripts.js", "alert('Hello World')");

    function downloadBoilerplate() {
      zip.generateAsync({
        type: "blob"
      }).then(function(blob) {
        saveAs(blob, filename);
      });
    }

    downloadBoilerplate();
  </script>
