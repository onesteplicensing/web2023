---
layout: page
title: CANAM Showcase - Video Games

banner:
  title: CANAM Showcase - Video Games
  desc:
  content: |
     Franzen vaporware taiyaki semiotics VHS small batch sriracha, meditation tbh la croix umami praxis lyft. JOMO ennui succulents swag sartorial taxidermy tumeric. Chia street art twee photo booth af letterpress vape gorpcore. Everyday carry ramps skateboard yr, poke distillery cray williamsburg selvage butcher. Palo santo asymmetrical prism, helvetica sustainable photo booth vegan hell of skateboard. Listicle kombucha man bun asymmetrical chambray 3 wolf moon.
  buttons:
    - show: True
      url: "#video_game"
      text: Learn More
    - show: False
      url: /pages/showcase_canam_video_games
      text: Video Games
  image_url: ../images/showcase/canam.jpg

spotlight-toys:
  title:  Toys
  content: |
    <p>Tito made some awesome ride-on toys for them</p>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  button:
    show: True
    url: "#video_game"
    text: And there's more...
  video_id: FYH9n37B7Yw

spotlight-video-games:
  title:  Video Games
  content: |
    <p>We even made some state-of-the-art video games.</p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  button:
    show: true
    url: "#trailer"
    text: Watch Trailer
  video_id: ar7xWaoEqpI

# this is a _header / navigation bar hack
lang: en #canam_showcase
---
<!-- Welcome Banner -->
{% include _banner_v2.html key='' style='style5' scheme='invert' color='' size='fullscreen' content_align='center' img_pos='left' %}

<!-- Toys: style1 is cropped and style2 is full image in a bubble -->
{% include _spotlight_yt.html key='spotlight-toys' style='style1' orient='left' scheme='' color='color7' size='fifty' content_align='left' img_pos='center' id='toys' %}

<!-- Video Game -->
{% include _spotlight_yt.html key='spotlight-video-games' style='style4' orient='right' scheme='' color='color7' size='' content_align='left' img_pos='center' id='video_game' %}

{% include _spotlight_yt.html key='spotlight-video-games' style='style5' orient='right' scheme='' color='color7' size='' content_align='left' img_pos='center' id='video_game' %}

<!-- Video Game Youtube -->
<section class="wrapper style1 align-center invert">
  <div class="spotlight onscroll-image-fade-in style6 color7 fullscreen orient-center content-align-center">
    <div class="content">
      <h3 class="motto" id="trailer">Dakar Desert Rally Trailer</h3>
      <iframe width="720" height="480" src="https://www.youtube-nocookie.com/embed/ar7xWaoEqpI?si=0gLO62U6Y31Qc0xg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</section>
