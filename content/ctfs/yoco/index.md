---
title: "CTF League - YOCO"
date: 2023-10-23T20:00:00-00:00
draft: false
toc: false
images:
tags:
  - ctf-league-fall-2023
  - crypto
---

**Download/Access**:
- http://chal.ctf-league.osusec.org/yoco/reuse.py
- http://chal.ctf-league.osusec.org/yoco/reduce.py
- http://chal.ctf-league.osusec.org/yoco/recycle.py

**Description**: Here at You Only Cryptography Once, we take your security and privacy seriously! That's why whenever you use one of our products we generate a new random key that will never be used again! Oh, what's that? I'm getting a call from my legal team, surely that couldn't mean anything bad...

---

## Challenge 1

```python
import re
from pwn import *

p = remote("chal.ctf-league.osusec.org", 1306)


p.readuntil("The encrypted flag is ")
recFirstStr = p.recvline()
recFirstStr1 = recFirstStr.split(b",", 1)
recFirstStr2 = recFirstStr1[0].decode()

myStrLen = len(recFirstStr2)
myStr = b"a" * (myStrLen // 2)
p.sendline(myStr)

p.readuntil("Here's your encrypted message: ")
recSecondStr = p.recvline()
recSecondStr = recSecondStr.rstrip(b'\n')
recSecondStr1 = recSecondStr.split(b" ", 1)
recSecondStr2 = recSecondStr1[0].decode()

key = xor(bytes.fromhex(recSecondStr2), myStr)
flag = xor(key, bytes.fromhex(recFirstStr2))
print("\n",flag.decode(),"\n")

p.interactive()
```

```osu{y0u_w0uldn't_r3us3_4_0n3_t1m3_p4d}```
---

## Challenge 2

```python
import re
from pwn import *

p = remote("chal.ctf-league.osusec.org", 1307)

p.readuntil("I didn't give you the key, right?")
p.recvline()
recFirstStr = p.recvline()
recFirstStr1 = recFirstStr.split(b",", 1)
recFirstStr2 = recFirstStr1[0].decode()

flagFirst4B = b"osu{"
first4B = recFirstStr2[:8]
numBytes = len(recFirstStr2) // 2
index = 8
flag = flagFirst4B

key = xor(bytes.fromhex(first4B), flagFirst4B)
numBytes -= 4

while numBytes > 0:
    if numBytes == 1:
        nextB = recFirstStr2[index:index+2]
        keyB = key[:1]
        flag += xor(bytes.fromhex(nextB), keyB)
        numBytes -= 1
        index += 2
    elif numBytes == 2:
        next2B = recFirstStr2[index:index+4]
        key2B = key[:2]
        flag += xor(bytes.fromhex(next2B), key2B)
        numBytes -= 2
        index += 4
    elif numBytes == 3:
        next3B = recFirstStr2[index:index+6]
        key3B = key[:3]
        flag += xor(bytes.fromhex(next3B), key3B)
        numBytes -= 3
        index += 6
    else:
        next4B = recFirstStr2[index:index+8]
        flag += xor(bytes.fromhex(next4B), key)
        numBytes -= 4
        index += 8

print("\n", flag, "\n")

p.interactive()
```

```osu{m4yb3_1'm_n07_4_wr4p_g0d_4f73r_4ll}```
---

## Challenge 3

```python
import re
from pwn import *

p = remote("chal.ctf-league.osusec.org", 1308)

myMsg = b"a" * 24

p.readuntil("Please a message to encrypt: ")
p.sendline(myMsg)

p.readuntil("Your ciphertext (in hex) is: ")
recFirstStr = p.recvline()
recFirstStr1 = recFirstStr.split(b" ", 1)
recFirstStr2 = recFirstStr1[0].decode()

p.readuntil("Please a message to encrypt: ")
p.sendline(myMsg)

p.readuntil("Your ciphertext (in hex) is: ")
recSecondStr = p.recvline()
recSecondStr1 = recSecondStr.split(b" ", 1)
recSecondStr2 = recSecondStr1[0].decode()

p.readuntil("Please a message to encrypt: ")
p.sendline(myMsg)

p.readuntil("Your ciphertext (in hex) is: ")
recThirdStr = p.recvline()
recThirdStr1 = recThirdStr.split(b" ", 1)
recThirdStr2 = recThirdStr1[0].decode()

p.readuntil("we didn't reuse any one-time pads :)")
p.recvline()
encFlag = p.recvline()
encFlag1 = encFlag.split(b" ", 1)
encFlag2 = encFlag1[0].decode()

# print("\n",recFirstStr2)
# print("\n",recSecondStr2)
# print("\n",recThirdStr2)
# print("\n",encFlag2,"\n")

# numBytes = len(encFlag2) // 2
# print(numBytes)

key1 = xor(bytes.fromhex(recFirstStr2), myMsg)
key2 = xor(bytes.fromhex(recSecondStr2), myMsg)
key3 = xor(bytes.fromhex(recThirdStr2), myMsg)

mixedKeys = b''

for i in range(numBytes):
    mixedKeys += key1[i:i+1] + key2[i:i+1]  + key3[i:i+1]

flag = xor(bytes.fromhex(encFlag2), mixedKeys)

print("\n", flag, "\n")

p.interactive()
```

```osu{r3duc3_r3u53_r3cycl3_my_53cur1ty}```
