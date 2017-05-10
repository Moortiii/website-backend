<?php

$name;
$theme;
$jQuery;
$normalize;
$meta_name;
$meta_keywords;
$meta_description;

function includejQuery() {
  if(isset($_POST['includejQuery'])) {
    $jquery = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  } else {
    $jquery = "";
  }
}

function includeNormalize() {
  if(isset($_POST['normalizeCSS'])) {
    $normalize = '<link rel="stylesheet" href="css/normalize.css">';
  } else {
    $normalize = "";
  }
}

// Assigns the basic info to the proper variables
function setBasicInfo() {
  if(isset($_POST['name'])) {
    $name = $_POST['name']; // Get the site name
  }
  if(isset($_POST['name'])) {
    $theme = $_POST['theme']; // Grabs the selected theme
  }
  includejQuery();
  includeNormalize();
}

// Assigns the meta-data to the proper variables
function setMetaData() {
  if(isset($_POST['meta-name'])) {
    $meta_name = $_POST['meta-name']; // Get the site name
  }
  if(isset($_POST['meta_keywords'])) {
    $meta_keywords = $_POST['meta_keywords']; // Get the site name
  }
  if(isset($_POST['meta_description'])) {
    $meta_description = $_POST['meta_textarea']; // Get the site name
  }
}

setBasicInfo();
setMetaData();
?>

<script type="text/javascript">
var name = "<?php echo($name); ?>";
var theme = "<?php echo($theme); ?>";
var jQuery = "<?php echo($jQuery); ?>";
var normalize = "<?php echo($normalize); ?>";
var meta_name = "<?php echo($meta_name); ?>";
var meta_keywords = "<?php echo($meta_keywords); ?>";
var meta_description = "<?php echo($meta_description); ?>";

var str = `
<html>
  <head>
    <meta name="author" content="${meta_name}">
    <meta name="keywords" content="${meta_keywords}">
    <meta name="description" content="${meta_description}">
    ${normalize}
    <link rel="stylesheet" href="css/main.css">
    <title>${name}</title>
    <body>
      <script src="${jQuery}"></script>
    </body>
    ${jQuery}
  </head>
</html>
`;
</script>
