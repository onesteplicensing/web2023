---
layout: page
title: CANAM Showcase

banner:
  title: CANAM Showcase
  desc:
  content: |
    We partnered with Canada's best maker of off road vehicles!
  button:
    show: True
    url: "#toys"
    text: Learn More
  image_url: 'https://lh3.googleusercontent.com/drive-viewer/AK7aPaA-nWrbNrw5vOHOwODmzqvMuljtJtXWuSTaL-O91S7KjeC5-8NwVDYmdzLNtqwHO2t5oK8u8FRkclyLZl-fxBUwAHzEgA=s1600'

spotlight-toys:
  title:  Toys
  content: |
    <p>Tito made some awesome ride-on toys for them</p>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  button:
    show: True
    url: "#video_game"
    text: And there's more...
  image_url: 'https://lh3.googleusercontent.com/drive-viewer/AK7aPaDd2k3w0zquJ_hk5rJtyp7KD42-G0RIqNdyVSI9T-nSo9iYxjkn9BYlZzoZsSsUhky1XYoCbxl6OnStupPaQa1szO2r=s1600'
  #'https://drive.google.com/uc?id=1EN9pBmjf32qhlZ1xX44VeeY2jPh8SN2g'

spotlight-video-games:
  title:  Video Games
  content: |
    <p>We even made some state-of-the-art video games.</p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  button:
    show: true
    url: "#trailer"
    text: Watch Trailer
  image_url: 'https://lh3.googleusercontent.com/drive-viewer/AK7aPaBh7k-zQ8Yoefc3JNdkClaEMa3Bih1KDE9vglVXKOkZ90NbgE3LXthLyjCCM9x8Ix1Td4O3SoH3BOd1fIIC6Y7cGKYNtA=s1600'

lang: en
lang-ref: why.md
---
<!-- Welcome Banner -->
{% include _banner.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='center' img_pos='left' %}

<!-- Toys: style1 is cropped and style2 is full image in a bubble -->
{% include _spotlight.html key='spotlight-toys' style='style1' orient='left' scheme='' color='' size='fifty' content_align='left' img_pos='center' id='toys' %}

<!-- Video Game -->
{% include _spotlight.html key='spotlight-video-games' style='style1' orient='right' scheme='' color='' size='' content_align='left' img_pos='center' id='video_game' %}

<!-- Video Game Youtube -->
<section class="wrapper style1 align-center invert">
  <div class="spotlight onscroll-image-fade-in style6 fullscreen orient-center content-align-center">
    <div class="content">
      <h3 class="motto" id="trailer">Dakar Desert Rally Trailer</h3>
      <iframe width="720" height="480" src="https://www.youtube-nocookie.com/embed/ar7xWaoEqpI?si=0gLO62U6Y31Qc0xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</section>
