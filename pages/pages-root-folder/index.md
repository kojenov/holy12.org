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
  title: "Calendar"
  url: '/calendar/'
  image: candles-302.jpg
  text: 'Regular services:<br/>Saturday - 6pm Vespers<br/>Sunday - 9am Liturgy<br/>+ weekday services'
widget2:
  title: "Our faith"
  url: '/orthodox-christianity/'
  image: christ-302.jpg
  text: 'The Orthodox Faith traces back to the Apostolic times, after Christ’s Resurrection. There are approximately 250 million Orthodox Christians worldwide and 1.3 percent of the population in the United States.'
widget3:
  title: "About us"
  url: '/about/'
  image: group-2015-302.jpg
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

