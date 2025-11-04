---
layout: page
title: can-am Toys
permalink: /can-am-toys
---

<div class="can-am">
{% include showcase/toys.html toys_data=site.data.can_toys toys_brand_name="can_am" %}
{% comment %}
{% include can-am/can_toys.html %}
{% endcomment %}
</div>

<script src="{{ '/assets/js/toysGallery.js' | relative_url }}" defer></script>
