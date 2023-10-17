---
title: "NSA Codebreaker - Challenge 3"
date: 2023-12-22T00:00:00-00:00
draft: true
toc: false
images:
tags:
  - nsa-codebreaker-2023
  - emulation
---

Leveraging that datasheet enabled you to provide the correct pins and values to properly communicate with the device over UART. Because of this we were able to communicate with the device console and initiate a filesystem dump.

To begin analysis, we loaded the firmware in an analysis tool. The kernel looks to be encrypted, but we found a second-stage bootloader that loads it. The decryption must be happening in this bootloader. There also appears to be a second UART, but we don't see any data coming from it.

Can you find the secret key it uses to decrypt the kernel?

---
