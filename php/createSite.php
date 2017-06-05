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
    function normalize_css_styles() {
      var normalizeCSS;
      $.ajax({
        url: '../templateCSS/normalize.css',
        async: false,
        success: function(response) {
            normalizeCSS = response;
        }
      });
      return normalizeCSS;
    }

    function includeFlexGrid() {
      var flexGrid;
      $.ajax({
        url: '../templateCSS/flexgrid.css',
        async: false,
        success: function(response) {
          flexGrid = response;
        }
      })
      return flexGrid;
    }

    function btn_default_styles() {
      var buttonCSS;
      $.ajax({
        url: '../templateCSS/buttons.css',
        async: false,
        success: function(response) {
          buttonCSS = response;
        }
      })
      return buttonCSS;
    }

    function btn_3d_styles() {
      var btn_3d_css;
      $.ajax({
        url: '../templateCSS/btn-3d.css',
        async: false,
        success: function(response) {
          btn_3d_css = response;
        }
      })
      return btn_3d_css;
    }

    function btn_rounded_styles() {
      var btn_rounded_css;
      $.ajax({
        url: '../templateCSS/btn-rounded.css',
        async: false,
        success: function(response) {
          btn_rounded_css = response;
        }
      })
      return btn_rounded_css;
    }

    function btn_flat_styles() {
      var btn_flat_css;
      $.ajax({
        url: '../templateCSS/btn-flat.css',
        async: false,
        success: function(response) {
          btn_flat_css = response;
        }
      })
      return btn_flat_css;
    }

    var name = "<?php echo($name); ?>";
    var titleformat = "<?php echo($titleformat); ?>";
    var theme = "<?php echo($theme); ?>";
    var jQuery = "<?php echo($jQuery); ?>";
    var normalize = "<?php echo($normalize); ?>";
    var meta_name = "<?php echo($meta_name); ?>";
    var meta_author = "<?php echo($meta_author); ?>";
    var page = "<?php echo ($page) ?>";
    var filename = name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + "_" + page.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".zip";
    var list = [];
    document.title = name;

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

// This has to be formatted in an ugly way in order to make it look nice on the final page.
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
    ${list}
    ${jQuery}
  </body>
</html>`;

      /* Create a new ZIP */
      var root = new JSZip();
      root.file("index.html", str);

      var normalize_css = normalize_css_styles();
      var button_default_css = btn_default_styles();

      /* Include default button styles */
      var btn_complete = button_default_css;

      /* Create the folder to hold the CSS */
      var css = root.folder("css");
      css.file("normalize.css", normalize_css);

      /* Create the folder to hold the scripts */
      var scripts = root.folder("scripts");

      /* Include Flexgrid */
      <?php if(isset($_POST['themeGrid'])) { ?>
        var flexGrid = includeFlexGrid();
        css.file("flexgrid.css", flexGrid);
      <?php } ?>

      /* Include the button styles the user selected using checkboxes */
      <?php if(isset($_POST['enableFormDesign'])) {
              if(isset($_POST['flat-check'])) { ?>
                var btn_flat_css = btn_flat_styles();
                btn_complete += btn_flat_css;
              <?php }
              if(isset($_POST['rounded-check'])) { ?>
                var btn_rounded_css = btn_rounded_styles();
                btn_complete += btn_rounded_css;
              <?php }
              if(isset($_POST['btn3d-check'])) { ?>
                var btn_3d_css = btn_3d_styles();
                btn_complete += btn_3d_css;
            <?php } ?>
            css.file("btn-styles.css", btn_complete);
          <?php } ?>

    function downloadBoilerplate() {
      root.generateAsync({
        type: "blob"
      }).then(function(blob) {
        saveAs(blob, filename);
      });
    }

    downloadBoilerplate();
  </script>
