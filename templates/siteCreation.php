<?php
$name = $_POST['name'];
$theme = $_POST['theme'];
/*if ($name == "New site"){
  $name = "";
}*/
?>
  <form action="php/createSite.php" method="post" target="_blank">
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
            <td class="pagetd"><input type="text" value="" name="pagename" class="loadedPageName" class="" /><a href="#" class="newPage"><i class="fa fa-plus"></i></a>
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
            <th colspan="2">Boilersite header</th>
          </tr>
          <tr>
            <td>Background</td>
            <td><input type="color" name="boilerColour" id="boilerColour" value="#ffffff" />
            </td>
            </tr>
          <tr>
            <td>Text</td>
            <td><input type="color" name="boilerText" id="boilerText" value="#333333" />
            </td>
            </tr>
          <tr>
            <th colspan="2">External includes</th>
          </tr>
          <tr>
            <td>Include...</td>
            <td><label><input type="checkbox" name="includejQuery" id="includejQuery" checked /> jQuery</label>
            </td>
            </tr>
            <tr>
              <td></td>
              <td><label><input type="checkbox" name="includeNormalize" id="includeNormalize" checked /> Normalize</label>
              </td>
            </tr>
            <tr>
              <td colspan="2"><a href="#" class="addInclude"><i class="fa fa-plus"></i></a></td>
            </tr><tr>
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
                <td><input type="text" name="meta-keywords" placeholder="key, words" />
                </td>
              </tr>
              <tr>
                <td valign="top">Description</td>
                <td><textarea name="meta-textarea"></textarea>
                </td>
              </tr><tr>
            <th colspan="2">Apple-touch</th>
          </tr>
          <tr>
            <td>Icon <a href="https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html"  target="_blank" class="helpLink" data-help="appletouchicon"><i class="fa fa-question-circle"></i><span></span></a></td>
            <td><input type="text" name="appletouch-icon" placeholder="path/to/img.png" />
            </td></tr>
          <tr>
            <td>Launch screen</td>
            <td><input type="text" name="appletouch-icon" placeholder="path/to/img.png" />
            </td></tr>
            <tr>
            <td>App title</td>
            <td><input type="text" name="appletouch-title" value="" />
            </td>
            <tr>
            <td>Status bar</td>
            <td><select name="appletouch-statusbar" value="default">
            <option value="default" selected>Default</option>
            <option value="black">Black</option>
            <option value="black-translucent">Black-translucent</option>
            </select>
            </td>
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
              <label><input type="radio" name="titleformat" value="snpn" id="snpn" checked> Sitename / Pagename</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label><input type="radio" name="titleformat" value="sn" id="sn"> Sitename</label>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <label><input type="radio" name="titleformat" value="pn" id="pn"> Pagename</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label><input type="radio" name="titleformat" value="custom" value="custom" id="radiocustom"> Custom</label>
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
              <label><input type="checkbox" name="themeSlider" id="themeSlider"> Image slider</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label><input type="checkbox" name="themeHero" id="themeHero"> Hero</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label><input type="checkbox" name="themeHamburger" id="themeHamburger"> Hamburger menu</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label><input type="checkbox" name="themeGrid" id="themeGrid" checked> Flex grid</label>
            </td>
          </tr>
          <tr>
            <th colspan="2"><label><input type="checkbox" name="enableFormDesign" checked /> Form design</label></th>
          </tr>
          <tr>
            <td colspan="2" class="relativeTd">
              Option showcase:<br /><br />
              <label><input type="checkbox" name="haveAnimations" class="haveAnimations" checked /> Transitions</label>
              <fieldset class="resetstyles">
                <legend>
                  <select id="theme-select" style="margin: 10px;">
                    <option id="flat" value="Flat">Flat</option>
                    <option id="rounded" value="Rounded">Rounded</option>
                    <option id="btn3d" value="3D">3D</option>
                  </select>
                </legend>
                <div class="form-design">
                  <form class="test-form">
                    <div id="btn-showcase" class="btn-showcase useAnimations">Buttons:<br />
                      <button class="btn normal-btn flat useAnimations">Normal</button>
                      <button class="btn error-btn flat useAnimations">Error</button>
                      <button class="btn success-btn flat useAnimations">Success</button>
                      <button class="btn warning-btn flat useAnimations">Alternative</button>
                    </div>
                  </div>
                </fieldset>
                    <label class="oneInclude" style="display:inline;"><input type="checkbox" name="flat-check" id="flat-check" checked> Include</label>
                    <label class="oneInclude"><input type="checkbox" name="rounded-check" id="rounded-check" checked> Include</label>
                    <label class="oneInclude"><input type="checkbox" name="btn3d-check" id="btn3d-check" checked> Include</label>
              </form>
            </td>
          </tr>
          <tr>
            <th colspan="2">Finish</th>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" name="incDocumentation" id="incDocumentation" checked> <label for="incDocumentation" style="">Include documentation</label>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="go">
              <button class="button light downloadSiteButton warning-btn rounded" style="background:var(--blue);"><i class="fa fa-arrow-circle-down before"></i> Download</button> <button class="button light saveSiteButton rounded success-btn" style="background:var(--blue-light);"><i class="fa fa-floppy-o before"></i> Save</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="clear"></div>
    </div>
    <a href="#" class="openSiteButton"><i class="fa fa-pencil"></i></a>
    <a href="#" class="downloadSiteButtonLarge"><i class="fa fa-arrow-circle-down"></i></a>
  </form>
