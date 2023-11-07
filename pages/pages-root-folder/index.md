---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header_ha1.jpg
widget1:
  title: "Schedule"
  url: '/calendar/'
  image: candles-302.jpg
  text: 'Regular services:<br/>- Saturday: 6pm Vespers<br/>- Sunday: 9:30am Liturgy<br/><br/><a href="/calendar/">see online calendar</a>'
widget2:
  title: "Our faith"
  url: '/orthodox-christianity/'
  image: christ-302.jpg
  text: 'The Orthodox Faith traces back to the Apostolic times, after Christ’s Resurrection. There are approximately 250 million Orthodox Christians worldwide and 1.3 percent of the population in the United States.'
widget3:
  title: "About us"
  url: '/about/'
  image: HA-2023-302.jpg
  text: 'We are an Eastern Orthodox church in Vancouver, WA. We invite you to join us for worship and fellowship!'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
#callforaction:
#  url: https://tinyletter.com/feeling-responsive
#  text: Inform me about new updates and features ›
#  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

{% assign f = site.static_files | where_exp: "f","f.path contains '/newsletter/'" | last %}
<div class="row t60 b60">
    <div class="small-12 text-center columns">
        <a class="button large radius {{ page.callforaction.style }}" href="{{ site.url }}{{ f.path }}" target="_blank" >Download the latest newsletter</a>
    </div>
</div>

<div class="row t60 b60">
    <div class="small-12 text-center columns">
        <h2 class="font-size-h3 t10 b15">Random photo</h2>
        <div id="random-image-frontpage"></div>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script type="text/javascript">
        /*idea: https://piwigo.org/forum/viewtopic.php?id=28334*/
        var pwg_api = "https://photo.holy12.org/ws.php?format=json&method=pwg.categories.getImages&per_page=1&page=1&order=random";
        $.getJSON(pwg_api, function (json) {
            var images = json.result.images;
            $.each( images, function ( i, image ) {
            var src = image.derivatives.small.url;
            var height = image.derivatives.small.height;
            var name = image.file;
            var link = image.categories[0].page_url;
            $('#random-image-frontpage').append('<a href="' + link + '" target="_blank"><img class="img-shadow" src="' + src + '"/></a>');
            });
        });
        </script>
    </div>
</div>
