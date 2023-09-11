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


    <p>OneStep Licensing is Bombardier Recreational Product’s official licensing agent and together we oversee BRP's licensing category. For more information regarding BRP products please visit <a href= "https://www.brp.com">BRP’s website.</a></p>

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
    <p>Welcome to OneStep Licensing!</p>

    <p>Our agency specializes in brand licensing and consultancy services and we have been in operation since 2019. Our goal is to help brands create a strong image that resonates with their target audience and sets them apart from their competitors. </p>

    <p>At OneStep Licensing, we have two main business segments: Brand Licensing and Brand Consultancy. As the official brand agency for Bombardier Recreational Products Inc., we are recognized for representing popular global brands.</p>

    <p>Our team has extensive knowledge in client management, product approvals, royalty service, marketing, advertising, market research, and consumer behaviour. With this expertise, we provide brand consultancy services and business leverage that help our clients develop a brand strategy aligned with their business goals and values.</p>

    <p>We offer a range of services, such as conducting market research to understand the target audience and competition, developing a brand strategy, creating visibility, developing marketing and advertising campaigns that align with the brand strategy, and providing ongoing support and guidance to ensure the brand remains consistent and effective over time.</p>

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
    - title: BRP
      content:
      fa_class:
      image_url: "images/clients/brp.png"
    - title: can-am
      content:
      fa_class:
      image_url: "images/clients/canam_square.png"
    - title: ski-doo
      content:
      fa_class:
      image_url: "images/clients/2.png"
    - title: sea-doo
      content:
      fa_class:
      image_url: "images/clients/3.png"
    - title: Koenigsegg
      content:
      fa_class:
      image_url: "images/clients/4.png"
    - title: TOYOTA
      content:
      fa_class:
      image_url: "images/clients/5.png"
    - title: LEXUS
      content:
      fa_class:
      image_url: "images/clients/6.png"
    - title: DUCATI
      content:
      fa_class:
      image_url: "images/clients/ducati.png" #should be 250 by 250
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
{% include _items.html key='items-clients' style='style3' scheme='' size='medium' id='showcase' color='color7' %}

<!-- Services -->
{% include _spotlight.html key='banner-services' style='style5' orient='right' scheme='' color='' size='' content_align='left' img_pos='center' id='services' %}
