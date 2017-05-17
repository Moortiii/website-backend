<script type="text/javascript" src="../jszip/dist/jszip.js"></script>
<script type="text/javascript" src="../jszip/vendor/FileSaver.js"></script>

<?php
$name;
$page;
$theme;
$jQuery;
$normalize; // Link to normalize.css
$getNormalize; // Grab the actual code
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
    $normalize = "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'>";
  }
}

function getNormalize() {
  global $getNormalize;
  $getNormalize = $_POST['includeNormalize'];
}
/*function includeTitleFormat() {
  global $titleformat;

}*/

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
}/*
die($inputscriptarray[0]);*/
/*
die(print_r($scriptarray)."<br /><br />".print_r($inputscriptarray));*/
?>
<style>
body{
  font-family:Sans-Serif, arial;
  padding:10px;
  font-size:18px;
}
</style>
Creating download...
<script type="text/javascript">
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
  var filename = name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + "_" + page.replace(/[^a-z0-9]/gi, '_').toLowerCase() + ".html";
  var list = [];<?php
  $sCounter = 0;

  for ($i=0; $i<count($scriptarray);$i++) { ?>
  // list.push({
  //   <?php echo($scriptarray[$i]); ?>: "<?php echo($inputscriptarray[$i]); ?>"});<?php $sCounter++; } die(); ?>
  for ($i=0; $i<count($scriptarray);$i++) { ?>
  list.push({
    <?php echo($scriptarray[$i]); ?>: "<?php echo($inputscriptarray[$i]); ?>"});<?php $sCounter++; } ?>

  var str = `<html>
  <head>
    <meta name="author" content="${meta_author}">
    <meta name="name" content="${meta_name}">
    ${normalize}
    <link rel="stylesheet" href="css/main.css">
    <title>${titleformat}</title>
    <body>
      <h1>${name}</h1>
      ${grid}
      ${list}
      ${jQuery}
    </body>
  </head>
</html>
  `;

// Create zip
var zip = new JSZip();
// Create file
zip.file("index.html", str);
// Create folder
// var css = zip.folder("css");
// css.file("normalize.css", "body{margin:0 auto;}");
function downloadWithBlob() {
  zip.generateAsync({type:"blob"}).then(function (blob) {
    saveAs(blob, "hello.zip");
  }
}

downloadWithBlob();

window.location.replace("../");
setTimeout(function(){
  self.close();
  window.close();
}, 500);

// var hiddenElement = document.createElement('a');
//
// hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
// hiddenElement.target = '_blank';
// hiddenElement.download = filename;
// hiddenElement.click();
</script>
