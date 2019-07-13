---
layout: page
title: WHY

banner:
  title: WE BUILD FOR THE CAUSE
  desc:
  content: |
    Cancer is the leading cause of death in Hong Kong and breast cancer is the third leading cause of cancer deaths in women. 
    ​There was 702 breast cancer deaths in 2016.
    We want to make diagnosis more efficient by AI. ​
  button:
    show: false
    url: "#team"
    text: Continue
  image_url: '../images/why/ian-schneider-TamMbr4okv4-unsplash.jpg'

spotlight-patients:
  title:  PATIENTS CANNOT WAIT
  content: |
    <p>In 2016, 4,108 women were diagnosed with breast cancer. On average, about 11 women are diagnosed with breast cancer every day.</p>
    <p>The average processing time per 10 slice is two hours for a trained pathologist.</p>
    <p>At least 1,100 hours of dedication are required to examine just for the new diagnosis!</p>
    <p style="font-size:12px;">Local Statistics, Breast Cancer in Hong Kong. HK Breast Cancer Foundation.</p>
  button:
    show: false
    url: ""
    text: 
  image_url: '../images/patients.jpg'

spotlight-difference:
  title:  MAKE A DIFFERENCE
  content: |
    <p>We use state-of-the-art deep learning architecture developed by Google.</p>

    <p>Using data from International Conference on Image Analysis and Recognition 2018 (ICIAR 2018). We achieve 0.95 F1-score.</p>

    ​<p>The model helps pathologist in screening whole slide images in cell level and detect areas with anomalous cells.</p> 
  button:
    show: true
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
    show: true
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
    show: true
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
    show: true
    url: "#"
    text: #Back to Top
    custom_class: icon style2 fas fa-chevron-up
  image_url: '../images/why/kai-dahms-_-OH99MLy5g-unsplash.jpg'

lang: en
lang-ref: why.md

---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='center' img_pos='left' %}

<section class="wrapper style2 align-center">
  <div class='tableauPlaceholder' id='viz1563004785784' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;sc&#47;scancer&#47;Dashboard1&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='scancer&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;sc&#47;scancer&#47;Dashboard1&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1563004785784');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
</section>

<!-- Patients cannot wait -->
{% include _spotlight.html key='spotlight-patients' style='style1' orient='left' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}

<!-- Make a Difference -->
{% include _spotlight.html key='spotlight-difference' style='style1' orient='right' scheme='' color='' size='' content_align='left' img_pos='center' id='' %}

<!-- Properties -->
{% include _spotlight.html key='spotlight-time' style='style1' orient='right' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='' %}

{% include _spotlight.html key='spotlight-effort' style='style1' orient='left' scheme='invert' color='' size='fifty' content_align='right' img_pos='center' id='' %}

{% include _spotlight.html key='spotlight-knowledge' style='style1' orient='right' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='' %}