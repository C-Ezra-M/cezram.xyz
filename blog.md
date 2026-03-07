---
title: The Directory of All Blog Posts
layout: layout.html
---

This is a reverse chronological list of all blog posts at *The Ezranians*.

{% for post in collections.post %}
- [{{post.data.title}}]({{post.url}}){% endfor %}

{%comment%} endfor is on the same line to prevent a <p> from being created {%endcomment%}