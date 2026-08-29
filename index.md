---
title: Welcome to cezram.xyz
layout: layout.vto
---

## Latest Blog Entries

{{ set postList = search.pages("post").toSorted((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 6) }}
<div class="blog-posts-wrapper">
    <section class="blog-posts">
        {{ for post of postList }}
            <article>
            <h3><a href="{{post.url}}">{{post.data.title}}</a></h3>
            <section class="page-info">
                <time datetime="{{ post.date |> date('ATOM') }}">{{ post.date |> date('FULL_DATE') }}</time>
            </section>
            <p>
            {{ if post.data.description }}
            {{ post.data.description }}
            {{ else }}
            {{ post.content }}
            {{ /if }}
            </p>
            </article>
        {{ /for }}
    </section>
</div>

{{# 
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
        {{- post.data.description | strip_html | truncatewords: 30 -}}
        {%- else -%}
        {{- post.content | strip_html | truncatewords: 30 -}}
        {%- endif -%}
        </p>
        </article>
        {%- endfor -%}
    </section>
</div>

- [List of all blog entries](/blog)
- [RSS feed](/blog/feed.xml)

## Latest Artworks

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
        {{- post.data.description | strip_html | truncatewords: 30 -}}
        {%- else -%}
        {{- post.content | strip_html | truncatewords: 30 -}}
        {%- endif -%}
        </p>
        </article>
        {%- endfor -%}
    </section>
</div> #}}

<iframe id="bucket-webring" title="Webring navigation" style="width: 100%; height: 3rem; border: none;" src="https://webring.bucketfish.me/embed.html?name=C.Ezra.M"></iframe>

[![Stop Killing the Internet](/stop-killing-the-internet.png)](https://www.stopkillingtheinternet.com)