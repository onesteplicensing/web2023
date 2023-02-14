---
layout: index
title: # should be set by _config

lang: en
lang-ref: home.md

banner:
  big_title:
  title: ONESTEP LICENSING
  desc: your partner for increasing brand awareness, revenue, and driving customer loyalty.
  content: |

  image_url: 'https://source.unsplash.com/ICTjWYzpoc0'
              #orGJcWVI6js' #garage
              #muS2RraYRuQ' #tito's
  button:
    show: False
    url: "index#aboutus"
    text: "&#8595;"
    custom_class: "small button"

banner-about:
  title: ABOUT US
  content: |
    <p>OneStep Licensing is focused on developing successful licensed partnerships in the retail marketplace. We view licensing as an extension of our client's core business. These efforts generate successful new product sales, create long-term exposure, as well as enhance and create positive touchpoints with consumers. Our service is designed to provide protection and profit, a full service licensing program that works as a turn-key operation for our Clients. </p>


    <p>OneStep Licensing is Bombardier Recreational Product’s official licensing agent and together we oversee BRP's licensing category.</p>

    Our strategy is to position the brand correctly for growth and to grow the licensing sustainably. Our benefit is a clear view of the changing marketplace that needs to nurture a consistent, powerful and emotional connection between the brands and our clients.

  button:
    show: True
    url: "index#showcase"
    text: "&#8595;"
    custom_class: "small button"
  image_url: 'https://source.unsplash.com/Lks7vei-eAg'

banner-services:
  title: SERVICES
  desc: Brand Consultancy- Extension
  content: |
    <p>OneStep Licensing is focused on developing successful licensed partnerships in the retail marketplace. We view licensing as an extension of our client's core business. These efforts generate successful new product sales, create long-term exposure, as well as enhance and create positive touchpoints with consumers. Our service is designed to provide protection and profit, a full-service licensing program that works as a turn-key operation for our Clients.</p>

    <p>OneStep Licensing is Bombardier Recreational Product’s official licensing agent and together we oversee BRP's licensing category.</p>

    <p>Our strategy is to position the brand correctly for growth and to grow the licensing sustainably. Our benefit is a clear view of the changing marketplace that needs to nurture a consistent, powerful and emotional connection between the brands and our clients.</p>

  button:
    show: True
    url: "index#showcase"
    text: "&#8593;"
    custom_class: "small button"
  image_url: 'https://source.unsplash.com/WUtT8cGRPog'   #MBgK-AHSrVs'
              #RQqFD_XH-MU/500x500'   # vaporwave
              #'images/background/services_gs.jpg'

items-clients:
  title: SHOWCASE
  content:
  list:
    - title: DUCATI
      content:
      fa_class:
      image_url: "images/clients/ducati.png" #should be 250 by 250
    - title: BRP
      content:
      fa_class:
      image_url: "images/clients/brp.png"
    - title: YAMAHA
      content:
      fa_class:
      image_url: "images/clients/yamaha_square.png"

---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='color5' size='fullscreen' content_align='left' img_pos='center' %}

<!-- About Us -->
{% include _banner.html key='banner-about' style='style1' orient='left' scheme='' color='' size='' content_align='left' img_pos='center' id='aboutus' %}

<!-- SHOWCASE -->
{% include _items.html key='items-clients' style='style1' scheme='' size='medium' id='showcase' color='color7' %}

<!-- Services -->
{% include _spotlight.html key='banner-services' style='style5' orient='right' scheme='' color='' size='' content_align='left' img_pos='center' id='services' %}
