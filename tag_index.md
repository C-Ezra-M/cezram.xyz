---
permalink: /tag/
layout: layout.html
title: List of All Tags
templateEngineOverride: vto,md
---
<ul>
{{ for tag of Object.keys(collections).filter(e => e !== "all").toSorted((a, b) => {
    if (filters.slugify(a) < filters.slugify(b)) {
        return -1
    } else if (filters.slugify(a) > filters.slugify(b)) {
        return 1
    } return 0 }) }}
    <li><a href="/tag/{{ tag |> slugify }}">{{ tag }}</a> ({{ collections[tag].length }} entries)</li>
{{ /for }}
</ul>