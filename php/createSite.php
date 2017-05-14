<?php
// Initialize variables
$name;
$theme;
$jQuery;
$normalize; // Link to normalize.css
$getNormalize; // Grab the actual code
$meta_name;
$meta_author;

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
  $normalize =
}

function setInfo() {
  global $name, $theme, $meta_name, $meta_author;
  if(!empty($_POST['name'])) {
    $name = $_POST['name'];
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
}

setInfo();
?>
<style>
body{background:#06D6A0;}
</style>
<script type="text/javascript">
  var name = "<?php echo($name); ?>";
  var theme = "<?php echo($theme); ?>";
  var jQuery = "<?php echo($jQuery); ?>";
  var normalize = "<?php echo($normalize); ?>";
  var meta_name = "<?php echo($meta_name); ?>";
  var meta_author = "<?php echo($meta_author); ?>";

  var str = `
  <html>
    <head>
      <meta name="author" content="${meta_author}">
      <meta name="name" content="${meta_name}">
      ${normalize}
      <link rel="stylesheet" href="css/main.css">
      <title>${name}</title>
      <body>
        ${grid}
        ${jQuery}
      </body>
    </head>
  </html>
  `;

var hiddenElement = document.createElement('a');

hiddenElement.href = 'data:attachment/text,' + encodeURI(str);
hiddenElement.target = '_blank';
hiddenElement.download = 'myFile.html';
hiddenElement.click();
window.location.replace("../");
</script>
