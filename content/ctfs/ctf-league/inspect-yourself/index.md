---
title: "Inspect Yourself"
date: 2023-10-09T20:00:00-00:00
draft: false
toc: false
images:
  - inspect-yourself-1.png
  - inspect-yourself-2.png
  - inspect-yourself-3.png
  - inspect-yourself-4.png
  - inspect-yourself-5.png
  - inspect-yourself-6.png
  - inspect-yourself-7.png
  - inspect-yourself-8.png
  - inspect-yourself-9.png
tags:
  - ctf-league-2023
  - web
---

**Download/Access**: http://inspect_yourself.ctf-league.osusec.org/

**Description**: Boss told me to share my to-do list with everyone else to hold me accountable or something. He gave me an hour so I didn't have time to check but hopefully I didn't leave anything sensitive on there...

---

## Challenge 1

{{< image src="inspect-yourself-1.png" alt="Inspect Yourself Image 1" position="center" >}}

The only real information we were given going into this challenge is the website and the name of the challenge. Since we were not given much info, the first thing you should do when looking for a flag on a website is to either view the page source code or inspect it. Because the name of the challenge is "Inspect Yourslef", I think inspecting it first is a good idea.

{{< image src="inspect-yourself-2.png" alt="Inspect Yourself Image 2" position="center" >}}

Here's how you do it:
1. Right-click on the page
2. Select *Inspect*

{{< image src="inspect-yourself-3.png" alt="Inspect Yourself Image 3" position="center" >}}

And what do you know! Right off the bat there's flag 1! Now remove the comment tags and be on your way

```osu{7h3_l157_k33p5_g3771ng_l0ng3r}```

---

## Challenge 2

For this challenge, we were given a bit more information with the mention of "cookies".

{{< image src="inspect-yourself-4.png" alt="Inspect Yourself Image 4" position="center" >}}

Here's how you view a website's cookies
1. While still on the Inspect page, click the storage tag
2. On the left, there should be a cookies drop down, make sure you click it
3. Select the first (and only) cookie there

Huh, that's weird... the cookie has a name of "notflag". I think we should investigate that more.

Here's the value of the cookie: ```b3N1ezNuMHVnaF8wZl95MHVyX2I0czNsMzU1X2NsNDFtc30=```

It looks like this value is encoded. I also think it might be base64 since it seems to be padded out with an equals sign. Let's throw this into a [base64 decoder](https://www.base64decode.org/) and see if we can get english out of it.

That worked! We got the flag!

```osu{3n0ugh_0f_y0ur_b4s3l355_cl41ms}```

---

## Challenge 3

For this last challenge, we were told that the flag might be hiding in another page. Instead of gobustering (a tool which allows you to brute force the most common file and directory names on a website), lets first look at a few files.

1. sitemap.xml

According to google, "A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently". Essentially, a sitemap can help search engines find all the different files and paths within a website without a lot of effort. Let's see if sitemap.xml can help us by appending "/sitemap.xml" to the website url.

{{< image src="inspect-yourself-5.png" alt="Inspect Yourself Image 5" position="center" >}}

Rats! Let's try a different way.

2. robots.txt

According to google, "A robots.txt file tells search engine crawlers which URLs the crawler can access on your site". This file can be accessed by typing "/robots.txt" onto the end of the url. Let's try that and see if we find anything.

{{< image src="inspect-yourself-6.png" alt="Inspect Yourself Image 6" position="center" >}}

Interesting...

Since we are looking for a flag, let's try /flag first by appending it to teh url.

{{< image src="inspect-yourself-7.png" alt="Inspect Yourself Image 7" position="center" >}}

Rick Rolled...

Now let's try /other using the same method.

{{< image src="inspect-yourself-8.png" alt="Inspect Yourself Image 8" position="center" >}}

Huh. That's weird. It loaded a page, but it's completely blank. Let's inspect it to see what's happening.

{{< image src="inspect-yourself-9.png" alt="Inspect Yourself Image 9" position="center" >}}

Wow! There's the last flag in the paragraph element within the body!

```osu{y0u_can_n3v3r_7ru57_y0ur_3y35}```

Let this be a lesson to always inspect a page, since you never know what could be lurking there.
