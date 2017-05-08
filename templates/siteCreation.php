<?php
$name = $_POST['name'];
$theme = $_POST['theme'];
if ($name == "New site"){
  $name = "";
}
?><!--<form action="createSite.php" method="post">-->
<div class="fifty-cont">
  <div class="fifty">
    <table>
    <tr>
    <th colspan="2">Base information</th>
    </tr>
       <tr>
        <td>Site name
        </td>
        <td><input type="text" value="<?php echo($name); ?>" class="loadedSiteName" />
        </td>
      </tr>
      
      <tr>
              <td>Theme</td>
              <td><select name="siteTheme"><option>Boilerplate</option></select>
              </td>
        </td>
      </tr>
    <tr>
    <th colspan="2">Includes</th>
    </tr>
        <tr>
              <td>Include jQuery</td>
              <td><input type="checkbox" name="includejQuery" checked />
              </td>
        </td>
        <tr>
              <td>Normalize CSS</td>
              <td><input type="checkbox" name="includejQuery" checked />
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
        <input type="radio" name="titleformat" checked> Sitename / Pagename
        </td>
      </tr>
       <tr>
        <td></td><td>
        <input type="radio" name="titleformat"> Sitename
        </td>
      </tr>

       <tr>
        <td></td><td>
        <input type="radio" name="titleformat"> Pagename
        </td>
        </tr>
    <tr>
    <th colspan="2">Finish</th>
    </tr>
        <tr>
        <td colspan="2" class="go">
        <button class="button light"><i class="fa fa-arrow-circle-down before downloadSiteButton"></i> Download</button> <button class="button light saveSiteButton"><i class="fa fa-floppy-o before"></i> Save</button>
        </td>
        </tr>
    </table>
  </div>
  <div class="clear"></div>
</div>
<a href="#" class="openSiteButton"><i class="fa fa-pencil"></i></a>
<a href="#" class="downloadSiteButtonLarge"><i class="fa fa-arrow-circle-down"></i></a>
<!--</form>-->