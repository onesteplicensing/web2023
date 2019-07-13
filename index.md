---
layout: index
title: # should be set by _config

lang: en
lang-ref: home.md

banner:
  title:
  desc: |
    Breast Cancer Cell Detection powered by A.I.<br>
    <h1>SCANCER</h1>
  content: |
    The Cancer Cell Detector
  image_url: 'images/background/microscope.jpg'

banner-scan:
  title: SCAN AND DETECT
  content: |
    Combining computer vision and deep learning algorithm, SCANCER is capable of detecting and recognising cancer cell in pathology microscopic images.​
  button:
    show: false
    url: ""
    text: 
  image_url: 'images/scan.jpeg'

banner-model:
  title: MODEL DEPLOYMENT
  content: |
    Our model has been tested on whole side images.
  button:
    show: true
    url: "pages/how"
    text: HOW?
  image_url: 'images/biopsy-fb.jpg'

items-membership:
  title: WE ARE A MEMBER OF
  content: 
  list:
    - title: iDENDRON 
      content: HKU INNOVATION & ENTREPRENEURSHIP HUB
      fa_class: 
      image_url: "images/idendron.png"
    - title: Google Cloud Startup Program
      content: <a href="pages/how#cloudcomputing" class="button">LEARN MORE</a>
      fa_class:
      image_url: "images/logo_lockup_cloud_rgb.png"


---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='left' %}

<!-- Scan and Detect -->
{% include _banner.html key='banner-scan' style='style1' orient='left' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}

<!-- Model Deployment -->
{% include _banner.html key='banner-model' style='style1' orient='right' scheme='' color='' size='' content_align='right' img_pos='center' id='' %}

<!-- Idendron -->
{% include _items.html key='items-membership' style='style1' size='big' id='membership' %}

