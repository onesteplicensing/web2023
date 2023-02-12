---
layout: index
title: # should be set by _config

lang: en
lang-ref: home.md

banner:
  big_title: ONESTEP LICENSING
  title:
  desc: your partner for increasing brand awareness, and revenue and driving customer loyalty.
  content: |

  image_url: 'https://source.unsplash.com/muS2RraYRuQ'

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
    show: false
    url: "pages/how"
    text: HOW?
  image_url: 'images/IMG_20190816_155236.jpg'

items-membership:
  title: WE ARE A MEMBER OF
  content:
  list:
    - title: iDENDRON
      content: HKU Innovation & Entrepreneurship Hub
      fa_class:
      image_url: "images/idendron.png"
    - title: Google Cloud Startup Program
      content:
      fa_class:
      image_url: "images/logo_lockup_cloud_rgb.png"

items-clients:
  title: OUR CLIENT
  content:
  list:
    - title:
      content: |
        <h5>Department of Anatomical & Cellular Pathology</h5>
      fa_class:
      image_url: "images/CU_logo_4C_horizontal_RGB.jpg"


---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='left' img_pos='center' %}

<!-- Scan and Detect -->
{% include _banner.html key='banner-scan' style='style1' orient='left' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}

<!-- Model Deployment -->
{% include _banner.html key='banner-model' style='style1' orient='right' scheme='' color='' size='' content_align='right' img_pos='center' id='' %}

<!-- clients -->
{% include _items.html key='items-clients' style='style1' size='big' id='clients' %}

<!-- MEMBERSHIP -->
{% include _items.html key='items-membership' style='style1' scheme='' size='big' id='membership' color='color7' %}
