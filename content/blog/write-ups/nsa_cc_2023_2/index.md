---
title: "NSA Codebreaker - Challenge 2"
date: 2023-12-22T00:00:00-00:00
draft: true
toc: false
images:
tags:
  - nsa-codebreaker-2023
  - hardware-analysis
  - datasheets
---

Thanks to your efforts the USCG discovered the unknown object by trilaterating the geo and timestamp entries of their record with the correlating entries you provided from the NSA databases. Upon discovery, the device appears to be a device with some kind of collection array used for transmitting and receiving. Further visual inspection shows the brains of this device to be reminiscent of a popular hobbyist computer. Common data and visual ports non-responsive; the only exception is a boot prompt output when connecting over HDMI. Most interestingly there is a 40pin GPIO header with an additional 20pin header. Many of these physical pins show low-voltage activity which indicate data may be enabled. There may be a way to still interact with the device firmware...

Find the correct processor datasheet, and then use it and the resources provided to enter which physical pins enable data to and from this device

**Prompts**:
- Provide the correct physical pin number to power the GPIO header
- Provide a correct physical pin number to ground the board
- Provide the correct physical pin number for a UART transmit function
- Provide the correct physical pin number for a UART receive function

---
