---
permalink: /tag/
layout: layout.html
title: List of All Tags
templateEngineOverride: ejs,md
---
<ul>
<% for (tag of Object.keys(collections).filter(e => e !== "all").toSorted()) { %>
    <li><a href="/tag/<%= filters.slugify(tag) %>"><%= tag %></a> (<%= collections[tag].length %> entries)</li>
<% } %>
</ul>