<?php
$name = $_POST['themeName'];

if ($name == "Boilerplate"){
?>
<h3>Boilerplate</h3>
<h4>index.html</h4>
<pre><code class="html">&lt;!doctype html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta name=&quot;author&quot; content=&quot;${meta_author}&quot;&gt;
    &lt;meta name=&quot;name&quot; content=&quot;${meta_name}&quot;&gt;
    ${normalize}
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/main.css&quot;&gt;
    &lt;title&gt;${titleformat}&lt;/title&gt;
    &lt;body&gt;
      &lt;h1&gt;${name}&lt;/h1&gt;
      ${grid}
      ${list}
      ${jQuery}
    &lt;/body&gt;
  &lt;/head&gt;
&lt;/html&gt;</code></pre>
<?php
}else{
	//...
}
?>