---
title: The Directory of All Blog Posts
layout: layout.vto
---

This is a reverse chronological list of all blog posts at cezram.xyz. The blog also has a [RSS feed](/blog/feed.xml) limited to the latest 20 posts.

{%- assign postList = collections.post | sort_exp: "a", "b", "return b.date.getTime() - a.date.getTime()" -%}
{% for post in postList %}
- [{{post.data.title}}]({{post.url}}) (<time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | fmtdate }}</time>)
{%- endfor %}