---
title: "NSA Codebreaker - Challenge 4"
date: 2023-12-22T00:00:00-00:00
draft: true
toc: false
images:
tags:
  - nsa-codebreaker-2023
  - dynamic-reverse-engineering
  - cryptography
---

We were able to extract the device firmware, however there isn't much visible on it. All the important software might be protected by another method.

There is another disk on a USB device with an interesting file that looks to be an encrypted filesystem. Can you figure out how the system decrypts and mounts it? Recover the password used to decrypt it. You can emulate the device using the QEMU docker container from task 3.

Enter the password used to decrypt the filesystem.

