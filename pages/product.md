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

spotlight-info:
  title:  Background
  content: |
    <p>In traditional lung cancer diagnosis, a sample of living tissue is extracted from the patient through lung biopsy.</p>

    <p>The sample is prepared into a Whole Slide Image (WSI) and is examined by an expert pathologist under a microscope. The report provides information to determine which treatment to undertake.</p>

    <p>We have developed the necessary data pipeline and deep learning model for this process. The following picture shows one of the biopsy slide.</p>
  button:
    show: false
    url: ""
    text: LEARN MORE
  image_url: '../images/product/biopsy.jpeg'

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

<!-- Background Info -->
{% include _spotlight.html key='spotlight-info' style='style1' orient='left' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}


<!-- <section class="spotlight mostscreen style6 invert orient-center content-align-center onscroll-image-fade-in">

  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src = '../images/product/slider/18S4174-12_2019-05-20 17_06_17.scn_heatmap.png'></div>
      <div class="swiper-slide"><img src = '../images/product/slider/18S4174-12_2019-05-20 17_06_17.scn_prediction_heatmap.png'></div>
      <div class="swiper-slide"><img src = '../images/product/slider/18S5470-5_2019-05-20 15_31_58.scn_heatmap.png'></div>
      <div class="swiper-slide"><img src = '../images/product/slider/18S5470-5_2019-05-20 15_31_58.scn_prediction_heatmap.png'></div>
      <div class="swiper-slide"><img src = '../images/product/slider/18S5470-7_2019-05-20 19_40_27.scn_heatmap.png'></div>
      <div class="swiper-slide"><img src = '../images/product/slider/18S5470-7_2019-05-20 19_40_27.scn_prediction_heatmap.png'></div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</section> -->

<section class="wrapper style1 align-center invert">
  <div class="spotlight onscroll-image-fade-in style6 fullscreen orient-center content-align-center">
    <div class="content">
      <h2 class="motto">Model Prediction</h2>
        <p>Example 1</p>
          <div id="container1" class="twentytwenty-container">
              <img src="../images/product/slider/display1.png" />
              <img src="../images/product/slider/display2.png" />
          </div>
          <br>
          <br>
        <p>Example 2</p>
          <div id="container1" class="twentytwenty-container">
              <img src="../images/product/slider/display3.png" />
              <img src="../images/product/slider/display4.png" />
          </div>
          <br>
          <br>
        <p>Example 3</p>
          <div id="container1" class="twentytwenty-container">
              <img src="../images/product/slider/display5.png" />
              <img src="../images/product/slider/display6.png" />
          </div>
      </div>
  </div>
</section>


<!-- Make a Difference -->
{% include _spotlight.html key='spotlight-difference' style='style1' orient='right' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}

<!-- Properties -->
{% include _spotlight.html key='spotlight-time' style='style1' orient='right' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='' %}

{% include _spotlight.html key='spotlight-effort' style='style1' orient='left' scheme='invert' color='' size='fifty' content_align='right' img_pos='center' id='' %}

{% include _spotlight.html key='spotlight-knowledge' style='style1' orient='right' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='' %}