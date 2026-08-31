---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tag/{{ tag }}/
layout: layout.html
eleventyComputed:
  title: 'Tagged "{{ tag }}"'
---

<ol>
{% assign taglist = collections[ tag ] %}
{% for post in taglist | reverse %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> (<time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | fmtdate }}</time>)</li>
{% endfor %}
</ol>