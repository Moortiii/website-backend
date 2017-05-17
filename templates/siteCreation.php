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
        <input type="checkbox" name="themeStylesheet" id="themeStylesheet" checked> <label for="themeStylesheet">Theme stylesheet</label>
        </td>
      </tr>
       <tr>
        <td></td><td>
        <input type="checkbox" name="themeJquery" id="themejQuery"> <label for="themejQuery">Theme jQuery</label>
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
