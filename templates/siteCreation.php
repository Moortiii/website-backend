<?php
$name = $_POST['name'];
$theme = $_POST['theme'];
if ($name == "New site"){
  $name = "";
}
?><form action="createSite.php" method="post">
<table>
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
    <td colspan="2" class="info">...</td>
  </tr>
</table>