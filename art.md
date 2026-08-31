---
title: The Directory of All Artworks
layout: layout.html
---

This is a reverse chronological list of all artworks at cezram.xyz.

{%- assign postList = collections.art | sort_exp: "a", "b", "return b.date.getTime() - a.date.getTime()" -%}
{% for post in postList %}
- [{{post.data.title}}]({{post.url}}) (<time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | fmtdate }}</time>)
{%- endfor %}