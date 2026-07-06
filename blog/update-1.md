---
title: First Update Post-Deployment & How It's Made
tags:
    - About cezram.xyz
---

In this post, I'm revealing details of the newest website update, and how it's made.

You may be asking how this website is made. Here I answer your question: this website is built with [Eleventy](https://11ty.dev), a static site generator. I decided to challenge myself to navigate an unfamiliar framework, since my previous site is built with Astro instead.

## Changes

These are the changes that took place since the latest update of cezram.xyz.

- I added a list of the latest six blog entries on the front page.
- The header had inconsistent image rendering when zoomed in. The logo and wordmark were rendered pixelated, but the background was not. This was since fixed, so the whole header is rendered pixelated.
- I uploaded my own variant of [Iosevka](https://typeof.net/Iosevka), called [RareZen](https://github.com/C-Ezra-M/rarezen)! It is rendered narrow and proportional outside of code blocks, but wide and monospaced inside code blocks.
    - It was previously featured in [FLOW 0](/blog/flow-0), but I decided to change the lowercase Y.
        - As seen in [*Sick and Tired of New "Online Safety" Laws*](/blog/sick-and-tired-of-online-safety-laws), the change has already taken place.
    - The font now shows regardless of you having it installed or not, thanks to the CSS at-rule `@font-face`!

## Current issues

- The tag system is not yet complete. Tags can be assigned to posts, but right now I have no way to display all posts with a certain tag.
- The webring still links to my old website, but I submitted a pull request to correct it: https://github.com/bucketfish/bucket-webring/pull/476