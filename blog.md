---
title: The Directory of All Blog Posts
layout: layout.html
---

{% for post in collections.post %}
- [{{post.data.title}}]({{post.url}})
{% endfor %}
