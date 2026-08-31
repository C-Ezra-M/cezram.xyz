---
title: Welcome to C.Ezra.M's website
layout: layout.html
---

## Latest Blog Entries

{% assign postList = collections.post | sort_exp: "a", "b", "return b.date.getTime() - a.date.getTime()" | slice: 0, 6 -%}
<div class="blog-posts-wrapper">
    <section class="blog-posts">
        {%- for post in postList -%}
        <article>
        <h3><a href="{{post.url}}">{{post.data.title}}</a></h3>
        <section class="page-info">
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | fmtdate }}</time>
        </section>
        <p>
        {%- if post.data.description != null -%}
        {{- post.data.description | strip_html | truncatewords: 30 | replace_last: "....", "..." -}}
        {%- else -%}
        {{- post.content | strip_html | truncatewords: 30 | replace_last: "....", "..." -}}
        {%- endif -%}
        </p>
        </article>
        {%- endfor -%}
    </section>
</div>

- [List of all blog entries](/blog)
- [RSS feed](/blog/feed.xml)

## Latest Artworks

{% assign artList = collections.art | sort_exp: "a", "b", "return b.date.getTime() - a.date.getTime()" | slice: 0, 6 -%}
<div class="blog-posts-wrapper">
    <section class="blog-posts">
        {%- for post in artList -%}
        <article>
        <h3><a href="{{post.url}}">{{post.data.title}}</a></h3>
        <section class="page-info">
            <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | fmtdate }}</time>
        </section>
        <p>
        {%- if post.data.description != null -%}
        {{- post.data.description | strip_html | truncatewords: 30 | replace_last: "....", "..." -}}
        {%- else -%}
        {{- post.content | strip_html | truncatewords: 30 | replace_last: "....", "..." -}}
        {%- endif -%}
        </p>
        </article>
        {%- endfor -%}
    </section>
</div>

- [List of all artworks](/art)

## Microblog Posts

See all at [the dedicated page](/microblog)

{%- capture microblog -%}
{% render 'microblog.yaml' %}
{%- endcapture -%}
{%- assign entries = microblog | yamlparse | sort_exp: "a", "b", "return new Date(b.date).getTime() - new Date(a.date).getTime()" -%}
<dl class="microblog scroll-container">
    {%- for entry in entries -%}
    <dt><time datetime="{{ entry.date }}">{{ entry.date | toDateObject | fmtFullDate }}</time></dt>
    <dd>{{ entry.text }}</dd>
    {%- endfor -%}
</dl>

<iframe id="bucket-webring" title="Webring navigation" style="width: 100%; height: 3rem; border: none;" src="https://webring.bucketfish.me/embed.html?name=C.Ezra.M"></iframe>

[![Stop Killing the Internet](/stop-killing-the-internet.png)](https://www.stopkillingtheinternet.com)