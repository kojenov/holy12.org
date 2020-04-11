---
layout: page
title: "Service materials"
subheadline: "Service texts and music"
permalink: "/service-materials/"
---

{% assign fs = site.static_files | where_exp: "f","f.path contains '/service-materials/'" %}
{% for f in fs %}
 - [{{ f.basename }}]({{ site.url }}{{ f.path }})
{% endfor %}

<!--http://ashbrook.io/2018-04-26-listing-documents-via-jekyll-without-collections/-->
