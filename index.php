<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Boilersite</title>
  <meta name="description" content="Boilersite">
  <meta name="author" content="Håkon Underbakke &amp; Morten Hauge">
  <link href="https://fonts.googleapis.com/css?family=PT+Serif|Raleway:300,400,600,700" rel="stylesheet">
  <link rel="icon" href="http://i.imgur.com/Gu47ouy.png" type="image/png" />
  <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/pace.css">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/default.min.css">
  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->
  <noscript>
  <style>
  .section{
    display:none;
  }
  h1.subpage-header:after {
    content: "Please enable javascript to use Boilersite";
    display: block;
    padding: 20px 10px;
    font-size: 15px;
    background: var(--red);
    color: #fff;
    text-align: center;
}
  </style>
  </noscript>
</head>
<!-- ===============================
WARNING FOR USING INSPECTOR TOOLS:

If you are logged in as guest,
your progress is saved with directly
saving the HTML content in "Sites", in
localstorage - which means that any
changes you make to the HTML will stay
that way when you save or reload the
page..

================================ -->

<body>
  <div id="container">
    <div class="left-menu">
    <?php require_once realpath('templates/leftmenu.php'); ?>
    </div>
    <div class="main" id="main">

      <h1 class="subpage-header">
      <img src="http://i.imgur.com/Gu47ouy.png" /> Boilersite
  </h1>

      <div class="section" style="display:none;">
        <h2>Account</h2>
        <div class="radio">
          <input type="radio" checked name="accountradio" class="ac-guest" id="ac-guest" /> <label for="ac-guest">Guest</label> <input type="radio" name="accountradio" id="ac-account" class="ac-account" /> <label for="ac-account">Account</label>
        </div>
        <div class="section account">
          <div class="fifty-cont">
            <div class="fifty">
              <table>
                <tr>
                  <th colspan="2">Existing account</th>
                </tr>
                <tr class="afterth">
                  <td>Email
                  </td>
                  <td><input type="email" value="" />
                  </td>
                </tr>
                <tr>
                  <td>Password
                  </td>
                  <td><input type="password" value="" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="go"><button>Login</button>
                  </td>
                </tr>


              </table>
            </div>
            <div class="fifty">
              <table>

                <tr>
                  <th colspan="2">New account
                  </th>
                </tr>
                <tr class="afterth">
                  <td>Email</td>
                  <td><input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td><input type="password" />
                  </td>
                </tr>
                <tr>
                  <td>Confirm password</td>
                  <td><input type="password" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="go"><button>Create account</button>
                  </td>
                </tr>
              </table>

            </div>
          </div>
          <div class="clear"></div>
          <p>
            Your progress is usually saved in localstorage. If you create an account, it will be saved on our servers.</p>
        </div>
      </div>

      <div class="section sites-section">
        <h2>Sites</h2>
        <div class="site-buttons">
          <a href="#" class="button-navy large show-createSite">Create site</a><!--
          <a href="#" class="button-red large massedit">Start editing</a>-->
        </div>
        <table class="createSite">
          <tr>
            <th colspan="2">Create site
            </th>
          </tr>
          <tr class="afterth">
            <td>Name</td>
            <td><input type="text" name="siteName" />
            </td>
          </tr>
          <tr>
            <td>Theme</td>
            <td><select name="siteTheme"><option>Boilerplate</option></select>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="go">
              <button class="button small cancel-createSite"><i class="fa fa-ban before"></i> Cancel</button> <button onClick="createSite()" class="go-createSite">Create <i class="fa fa-angle-right after"></i></button>
            </td>
          </tr>
        </table>
        <br />
        <select class="action">
      <option value="action">Action:</option>
      <option class="do-delete" value="delete">------ Delete</option><!--
      <option class="do-copy" value="copy">------ Duplicate</option>-->
      <option class="do-selectall" value="selectall">------ Select all</option>
      <option class="do-selectnone" value="selectnone">------ Select none</option>
      </select>
        <div class="sitesCont">

        </div>
      </div>
      <a href="#" class="button-green plusbutton btn3d success-btn useAnimations" onClick="doSave('button')"><i class="fa fa-floppy-o before"></i> Save</a>
      <div class="settings">

      </div>
    </div>
    <div class="clear">
    </div>
    <div class="themePopUp"></div>
  </div>
  </div>
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/i18n/jquery.spectrum-ar.js"></script>
  <script src="js/scripts.js"></script>
  <script src="js/formdesign.js"></script>
  <script src="js/pace.min.js"></script>
</body>

</html>
