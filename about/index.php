<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Boilersite</title>
  <base href="../index.php">
  <meta name="description" content="Boilersite">
  <meta name="author" content="Håkon Underbakke &amp; Morten Hauge">
  <link href="https://fonts.googleapis.com/css?family=PT+Serif|Raleway:300,400,600,700" rel="stylesheet">
  <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/pace.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/default.min.css">
  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
</head>

<body>
  <div id="container">
    <div class="left-menu">
    <?php include("../templates/leftmenu.php"); ?>
    </div>
    <div class="main">

      <h1 class="subpage-header">
        About
      </h1>
      <div class="section">
      <h2>What is Boilersite?</h2>
      <p>Boilersite is a website that makes boilerplate zip packages for web designers, so that they don't have to start from scratch and do all the boring stuff for every new project.</p>
      </div>
      <div class="section">
      <h2>How does it work?</h2>
      <p>Mainly by use of jQuery and Javascript to "template" your saved settings to easily create a downloadable zip file of your own custom boilerplate. Boilerplate uses localstorage saving, and will soon support user accounts for cross-network saving.</p>
      </div>
      <div class="section sitecreation">
      <h2>More information</h2>
      <p>Boilerplate started out as a cooperative UI project, and soon turned into a templating machine. It was started in 2017 by <a href="http://haakon.underbakke.net">Håkon Underbakke</a> and <a href="http://mhauge.no/portfolio">Morten Hauge</a>.</p>
      </div> 
    </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script>
  $(".togglesettings").click(function(e){
    e.preventDefault();
    window.location = "#settings";
    return false;
  });
  </script>
</body>