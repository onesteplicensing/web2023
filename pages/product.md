---
layout: page
title: PRODUCT

banner:
  title: MEET SCANCER
  desc:
  content: 
  button:
    show: false
    url: "#team"
    text: Continue
  image_url: '../images/product/scott-webb-OxHPDs4WV8Y-unsplash.jpg'

spotlight-difference:
  title:  MAKE A DIFFERENCE
  content: |
    <p>We use state-of-the-art deep learning architecture developed by Google.</p>

    <p>Using data from International Conference on Image Analysis and Recognition 2018 (ICIAR 2018). We achieve 0.95 F1-score.</p>

    ​<p>The model helps pathologist in screening whole slide images in cell level and detect areas with anomalous cells.</p> 
  button:
    show: false
    url: ""
    text: LEARN MORE
  image_url: '../images/codes.jpg'

spotlight-time:
  title: 
  content: |
    <h3><b>SAVE TIME</b></h3>
    <p>[expand]</p>
    <p>​SCANCER can run 24/7 to spot cancer cells.</p>
    <p>Compared with the traditional process, time and cost can be minimised.</p>
    <p>[/expand]</p>
  button:
    show: false
    url: "#"
    text: #Back to Top
    custom_class: icon style2 fas fa-chevron-up
  image_url: '../images/why/thomas-bormans-JsTmUnHdVYQ-unsplash.jpg'

spotlight-effort:
  title: 
  content: |
    <h3><b>SAVE EFFORT</b></h3>
    <p>[expand]</p>
    <p>Pathologists can better utilize their time to screen as much as cases  and work on researches time as fast as they can.</p>
    <p>[/expand]</p>
  button:
    show: false
    url: "#"
    text: #Back to Top
    custom_class: icon style2 fas fa-chevron-up
  image_url: '../images/why/joao-silas-I_LgQ8JZFGE-unsplash.jpg'

spotlight-knowledge:
  title: 
  content: |
    <h3><b>SAVE KNOWLEDGE</b></h3>
    <p>[expand]</p>
    <p>Preserve pathologist knowledge across different countries and generation.</p>
    <p>Our vision is to accumulate expert experience and build a worldwide knowledge hub for cancer cell prediction.</p>
    <p>[/expand]</p>
  button:
    show: false
    url: "#"
    text: #Back to Top
    custom_class: icon style2 fas fa-chevron-up
  image_url: '../images/why/kai-dahms-_-OH99MLy5g-unsplash.jpg'



lang: en
lang-ref: product.md

---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='center' img_pos='center' %}

<!-- Make a Difference -->
{% include _spotlight.html key='spotlight-difference' style='style1' orient='right' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}

<!-- Properties -->
{% include _spotlight.html key='spotlight-time' style='style1' orient='right' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='' %}

{% include _spotlight.html key='spotlight-effort' style='style1' orient='left' scheme='invert' color='' size='fifty' content_align='right' img_pos='center' id='' %}

{% include _spotlight.html key='spotlight-knowledge' style='style1' orient='right' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='' %}