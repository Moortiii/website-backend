<?php

// Initialize variables
$name;
$theme;
$jQuery;
$normalize;
$meta_name;
$meta_keywords;
$meta_description;

// Check if includejQuery is checked
function includejQuery() {
  if(isset($_POST['includejQuery'])) {
    $jquery = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>';
  } else {
    $jquery = "";
  }
}

// Check if normalizeCSS is checked
function includeNormalize() {
  if(isset($_POST['normalizeCSS'])) {
    $normalize = '<link rel="stylesheet" href="css/normalize.css">';
  } else {
    $normalize = "";
  }
}

// Assigns the basic info to the proper variables
function setBasicInfo() {
  if(isset($_POST['siteName'])) {
    $name = $_POST['siteName']; // Get the site name
  } else {
    $name = "hello-world";
  }
  if(isset($_POST['siteTheme'])) {
    $theme = $_POST['siteTheme']; // Grabs the selected theme
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

// Run the necessary functions
setBasicInfo();
setMetaData();

?>

<html>
<head>
</head>
<body>
  <p><?php echo($name); ?></p>
</body>
</html>
