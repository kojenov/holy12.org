---
layout: page
newsletter: true
permalink: "/newsletter-last/"
header:
    image_fullwidth: "header_ha1.jpg"
---

{% assign months = "January February March April May June July August September October November December" | split: " " %}
{% assign f = site.static_files | where_exp: "f","f.path contains '/newsletter/'" | last %}
  {% assign parts = f.basename | split: '-' %}
  {% assign mo = parts[1] | minus: 1 %}
  [{{ months[mo] }} {{ parts[0] }}]({{ f.path }})

<!--http://ashbrook.io/2018-04-26-listing-documents-via-jekyll-without-collections/-->
