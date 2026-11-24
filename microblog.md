---
title: cezram.xyz Microblog
layout: layout.html
---

{%- capture microblog -%}
{% render 'microblog.yaml' %}
{%- endcapture -%}
{%- assign entries = microblog | yamlparse | sort_exp: "a", "b", "return new Date(b.date).getTime() - new Date(a.date).getTime()" -%}
<dl class="microblog">
{%- for entry in entries -%}
<dt><time datetime="{{ entry.date | toDateObject | date_to_xmlschema }}">{{ entry.date | toDateObject | fmtFullDate }}</time></dt>
<dd>

{{ entry.text }}
</dd>
{%- endfor -%}
</dl>
{% # Dedent intentional. %}