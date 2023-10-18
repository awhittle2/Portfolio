---
title: "CTF League - Smokey Binaries"
date: 2023-10-02T20:00:00-00:00
draft: true
toc: false
images:
tags:
  - ctf-league-fall-2023
  - pwn
---

**Download/Access**:
- https://chal.ctf-league.osusec.org/smokey 
- https://chal.ctf-league.osusec.org/bytes
- https://chal.ctf-league.osusec.org/printf

**Description**: SMOKEY is here to help train you in becoming a pwn sage. Be prepared to send your bits and bytes as you prove yourself to SMOKEY and exploit your way to victory. Variables are an illusion. Compilers are a distraction. Architecture is an abstraction. There are only bits. Become one with the bits.

---

Background on pwn

- pwn is a category of CTFs which have binary exploitation challenges
    - Making a program do something it isn't supposed to do
    - Using malicious user input to cause a process to execute instructions that it normally shouldn't
- Corrupt/override memory, take advantage of how a binary executes and reads values from memory
- Exploit how a program handles user input to corrupt and override memory
- A binary is a program, specifically an executable file
    - Everything that runs on your computer is a binary executable
    - A compiler converts source code into a binary
- Binaries are often reachable over the internet
    - A webserver
    - SSH
    - A database
    - File server
    - A Minecraft server
        - These programs are meant to do one thing, but what is you make them do something they are not supposed to do?
- pwntools - a *very* useful scripting tool
    - It is a python library used to interact with processes programmatically
- Ghidra - a NSA tool
    - Decompiler attempts to convert a binary back into readable C code
        - Hard to get exactly right, there might be some issues
        - It is much easier to find exploits in C code
- Data takes up space
    - Variables are given RAM space
    - RAM is a list of bytes that you can read and write
        - You can refer to values in RAM with the index (ie byte 0, byte 1...)
    - Buffer - A contiguous series of bytes in memory used to store something
        - Often used in the context of a string
    - Local variables are kept in RAM on a space called the "stack"
        - The stack is essentially a variables all bunched together in memory
- Buffer Overflow
    - A very common pwn caused by a programming bug
        - You told the compiler that you want n-bytes of data for a buffer
        - During runtime, you accept much more bytes than what can fit into the buffer
    - The bytes esentially flow into the next slots in memory
    - Writing down the stack with a buffer overflow will cause bytes to get corrupted
    - You will be overriding memory that another variable is using

---

## Challenge 1

---

## Challenge 2

---

## Challenge 3

