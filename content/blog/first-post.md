---
title: "My First Post"
date: 2023-04-10T10:00:00-00:00
draft: false
toc: false
images:
tags:
  - random
---

## Introduction

This is **bold** text, and this is *emphasized* text.

Visit the [Hugo](https://gohugo.io) website!

## How to create this site

1. Download hugo and git

2. Type the commands:

```bash
hugo new site quickstart
cd quickstart
git init
git submodule add https://github.com/rhazdon/hugo-theme-hello-friend-ng
echo "theme = 'hello-friend-ng'" >> config.toml
hugo server
```

3. Add content:

```bash
hugo new posts/my-first-post.md
vim content/posts/my-first-post.md
```

4. Edit the config file: [Example Site](https://github.com/rhazdon/hugo-theme-hello-friend-ng/tree/master/exampleSite)

```bash
vim config.toml
```   

5. Build the new content:

```bash
hugo server --buildDrafts
hugo server -D
```

6. Publish:

```bash
hugo
```

7. You're done! Congrats on completing your first introduction to hugo!!
