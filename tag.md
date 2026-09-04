---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tag/{{ tag | slugify }}/
layout: layout.html
eleventyComputed:
  title: 'Tagged "{{ tag }}"'
---

<ul>
{% assign taglist = collections[ tag ] | sort_exp: "a", "b", "return new Date(b.date).getTime() - new Date(a.date).getTime()" %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> (<time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | fmtdate }}</time>)</li>
{% endfor %}
</ul>