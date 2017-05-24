<?php
$name = $_POST['name'];
$theme = $_POST['theme'];
/*if ($name == "New site"){
  $name = "";
}*/
?><form action="php/createSite.php" method="post" target="_blank">
<div class="fifty-cont">
  <div class="fifty">
    <table>
    <tr>
    <th colspan="2">Base information</th>
    </tr>
       <tr>
        <td>Site name
        </td>
        <td><input type="text" name="name" value="<?php echo($name); ?>" class="loadedSiteName" />
        </td>
      </tr>
       <tr>
        <td>Page name
        </td>
        <td><input type="text" value="" name="pagename" class="loadedPageName" class="" />
        </td>
      </tr>

      <tr>
              <td valign="top">Theme</td>
              <td><select name="siteTheme"><option>Boilerplate</option></select>
              <a href="#" class="previewThemes">Preview</a>
              </td>
        </td>
      </tr>
    <tr>
    <th colspan="2">External includes</th>
    </tr>
        <tr>
              <td>Include...</td>
              <td><input type="checkbox" name="includejQuery" id="includejQuery" checked /> <label for="includejQuery">jQuery</label>
              </td>
        </td>
        <tr>
              <td></td>
              <td><input type="checkbox" name="includeNormalize" id="includeNormalize" checked /> <label for="includeNormalize">Normalize</label>
              </td>
        </tr>
        <tr>
              <td colspan="2"><a href="#" class="addInclude"><i class="fa fa-plus"></i></a></td>
        </tr>
    <th colspan="2">Meta-data</th>
    </tr>
        <tr>
              <td>Author</td>
              <td><input type="text" name="meta-author" value="" />
              </td>
        </td>
        <tr>
              <td>Name</td>
              <td><input type="text" name="meta-name" value="<?php echo($name); ?>" />
              </td>
        </td>
        <tr>
              <td>Keywords</td>
              <td><input type="text" name="meta-keywords" value="key, words" />
              </td>
        </tr>
        <tr>
              <td valign="top">Description</td>
              <td><textarea name="meta-textarea"></textarea>
              </td>
        </tr>
    </table>
  </div>
<div class="fifty">
    <table>
    <tr>
    <th colspan="2">Title format</th>
    </tr>
       <tr>
        <td>
        Format
        </td>
        <td>
        <input type="radio" name="titleformat" value="snpn" id="snpn" checked> <label for="snpn">Sitename / Pagename</label>
        </td>
      </tr>
       <tr>
        <td></td><td>
        <input type="radio" name="titleformat" value="sn" id="sn"> <label for="sn">Sitename</label>
        </td>
      </tr>

       <tr>
        <td></td><td>
        <input type="radio" name="titleformat" value="pn" id="pn"> <label for="pn">Pagename</label>
        </td>
        </tr>
        <tr>
        <td></td><td>
        <input type="radio" name="titleformat" value="custom" value="custom" id="radiocustom"> <label for="radiocustom">Custom</label>
        </td>
        </tr>
        <tr class="customtr">
        <td>Custom</td>
        <td>
        <input type="text" name="titleformat-custom" value="{sitename} - {pagename}" />
        </td>
        </tr>
    <tr>
    <th colspan="2">Extra features</th>
    </tr>
       <tr>
        <td>
        Include...
        </td>
        <td>
        <input type="checkbox" name="themeSlider" id="themeSlider" checked> <label for="themeSlider">Image slider</label>
        </td>
      </tr>
       <tr>
        <td></td><td>
        <input type="checkbox" name="themeHero" id="themeHero"> <label for="themeHero">Hero</label>
        </td>
      </tr>
       <tr>
        <td></td><td>
        <input type="checkbox" name="themeHamburger" id="themeHamburger"> <label for="themeHamburger">Hamburger menu</label>
        </td>
      </tr>
       <tr>
        <td></td><td>
        <input type="checkbox" name="themeGrid" id="themeGrid"> <label for="themeGrid">Flex grids</label>
        </td>
      </tr>
      <tr>
      <th colspan="2">Form design</th>
      </tr>
       <tr>
        <td>
          <form class="test-form">
            <label for="form-dropdown">Drop-down menu:</label>
            <select id="form-dropdown" name="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <label for="form-input">Input field:</label>
            <input id="form-input" class="form-input" value="Default Value">

            <label for="form-button">Buttons:</label>
            <button id="form-button" class="form-button">Simple Button</button>

            <label for="form-text">Textarea:</label>
            <textarea id="form-text" class="form-text">
              "Morten har stor tissefant" - Håkon Underbakke 2017. "I wish I was more like Morten!" - Barack Obama 2016. "Sad! Very sad!" - Donald Trump alldayerryday.
            </textarea>
        </form>
        </td>
        <td>

        </td>
      </tr>
    <tr>
    <th colspan="2">Finish</th>
    </tr>
        <tr>
        <td colspan="2" class="go"><br />
        <button class="button light downloadSiteButton"><i class="fa fa-arrow-circle-down before"></i> Download</button> <button class="button light saveSiteButton"><i class="fa fa-floppy-o before"></i> Save</button>
        </td>
        </tr>
    </table>
  </div>
  <div class="clear"></div>
</div>
<a href="#" class="openSiteButton"><i class="fa fa-pencil"></i></a>
<a href="#" class="downloadSiteButtonLarge"><i class="fa fa-arrow-circle-down"></i></a>
</form>
