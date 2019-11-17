---
layout: page
title: "Newsletter"
#subheadline: The newsletter archive
#teaser: "We are an Eastern Orthodox church in Vancouver, WA. We invite you to join us for worship and fellowship!"
permalink: "/newsletter/"
header:
    image_fullwidth: "header_ha1.jpg"
---

The newsletter archive

{% assign months = "January February March April May June July August September October November December" | split: " " %}
{% assign fs = site.static_files | where_exp: "f","f.path contains '/newsletter/'" | reverse %}
{% for f in fs %}
  {% assign parts = f.basename | split: '-' %}
  {% assign mo = parts[1] | minus: 1 %} 
  [{{ months[mo] }} {{ parts[0] }}]({{ f.path }})
{% endfor %}

<!--http://ashbrook.io/2018-04-26-listing-documents-via-jekyll-without-collections/-->
