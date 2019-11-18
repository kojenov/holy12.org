---
layout: page
permalink: "/randomphoto/"
---

<div id="recent-image"></div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script type="text/javascript">
// var pwg_api = "http://photo.holy12.org/ws.php?format=json&method=pwg.categories.getImages&recursive=true&per_page=5&recursive=true&order=date_available%20desc";

var pwg_api = "http://photo.holy12.org/ws.php?format=json&method=pwg.categories.getImages&per_page=1&page=1&order=random"

$.getJSON(pwg_api, function (json) {
    var images = json.result.images;

    $.each( images, function ( i, image ) {
       var src = image.derivatives.thumb.url;
       var height = image.derivatives.thumb.height;
       var name = image.file;
       var link = image.categories[0].page_url;

       $('#recent-image').append('<a href="' + link + '"><img class="img-fluid" src="' + src + '" alt="' + name + '"/></a>');
    });
});
</script>
