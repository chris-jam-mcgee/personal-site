---
title: Design Engineer - Hardwire LLC
duration: Sep 2018 - Sep 2019
description: 'Built an internal shipping web app to track orders using Python, Flask, and SQL Server.
Designed and prototyped a hydraulic and pneumatic press production line for the production of body armor.
Designed and built fatigue test machines. Developed software to automate and integrate barcode generation and scanning into RFID printer workflows.
Employed spectrometers and wrote Python-based computer vision tools to perform quality control on ballistic windows.
Helped design production lines to take R&D products from prototype to mass production.'

publishDate: 'Sep 01 2018'
isFeatured: true
badges: ['Arduino','Flask','OpenCV', 'Python', 'Raspberry Pi']
seo:
  image:
    src: '/hardwire.webp'
---

![Project preview](/hardwire.webp)

**Project Overview:**
[Hardwire LLC](https://hardwirellc.com/) is a Maryland based company that designs and manufactures a variety of armour solutions including ceramic backed plates, soft inserts armour, and [bridge armour](https://hardwirellc.com/pages/infrastructure?srsltid=AfmBOoq2GpkyuIuFrg3CEYG56KHT7MKoZgguEqP5xukAhjc6ODxaWM9M).

## Technology Stack

- Frontend: Flask
- Backend: python, C
- Database: SQL Server

## Objectives

1. Develop proof of concept automation for future production lines
2. Integrate an Internal site to tracking outgoing shipments
3. Outfit thermal presses with thermocouples, graph system state live on an internal site
4. Develop test machines and instrument worn body armour to study effective lifetime
5. Automate barcode generation and scanning on the factory floor
6. Develop a means for quality controlling bullet proof windows

## Outcomes

1. Hardwire made use of a variety of custom built production machines that were driven by Programmable Logic Controllers ([PLC](https://en.wikipedia.org/wiki/PLC)). Programming these controllers required prohibitively expensive licenses to propriety software. In order to build and test machines rapidly and get quick feedback on new ideas, I began to make use of Raspberry PI computers and Arduino Microcontrollers. Having lived near a Microcenter for some time, I had a lot of exposure to the inexpensive Inland brand line of microcontroller. I was able to outfit several test machines with microcontroller driven pneumatic valves that could be used to quickly asses viability without investing the time and money in a polished PLC iteration.

2. Hardwire made use of an extremely flexible internal manufacturing system that was made with [Delphi](<https://en.wikipedia.org/wiki/Delphi_(software)>). All of the information that was needed on a given topic was in an organized database already, it just needed an easily accessible display. I wrote a simple python webapp that organized and color coded all outgoing shipments within a given time range. The project was small enough to avoid using an ORM, and the styling was done with bootstrap.

3. When the need for flexible and inexpensive instrumentation for thermal presses arose, I again reached for microcontrollers and Raspberry Pis. The microcontroller connected to a simple array of thermocouple interfaces. The microcontroller then communicated with a raspberry pi over a serial connection on a set cadence. The Pi ran its own Flask site that leveraged Bootstrap charts to offer a graph of all the thermal couples being tracked.

4. Hardwire's worn body armour is leather soft. Unlike traditional kevlar, it does not suffer from the fibers wearing out after normal use after 5 years or so. I assisted in a variety of testing efforts to demonstrate the armor's longevity. I automated pneumatic machines that twisted the armor, attached stretch sensors, and graphed live data with [processing](https://processing.org/).

5. Some of the bottlenecks in manufacturing lines come down to very simple problems. The ballistic window manufacturing line had a variety of parts that went into a complete kit. I was focusing on python at this point, so I wrote a simple python executable that worked with the Zebra RFID label printers in house. It allowed a floor worker to scan in all the tags for an assembly at once, then forward them as a batch to the printer. Making python executables with the help of tools like [pyinstaller](https://pyinstaller.org/en/stable/) is not the best choice for long term production use, but at this stage I was just begging to learn python seriously and it proved to be a reasonable solution for the time frame.

6. Thick bullet proof windows are often made of layers of glass, epoxy, and plastic. Over the years, changes in temperature and moisture can cause these layers to warp and delaminate. I was tasked with developing a system of grading these windows according to the military specifications for allowable distortion. In addition to using some specialized spectrography equipment, I would also place the window in front of a grid and photograph it. I then wrote a python program that leveraged OpenCV for corner detection. If the window had any distortion, it would be evident in the slope that it imparted to the grid behind it. It was a fairly simple process to leverage existing corner detection algorithms and build up a list of all the slopes between adjacent points.

Note on bottlenecks

Hardwire was the first time I came into contact with a real production line at scale. One of my favorite parts of the job was the freedom that my role afforded between major tasks. I was able to go to the shop floor and ask about annoying points of friction or difficult steps in an assembly. Sometimes problems were very simple, like the difficulty in using a table dispenser for gorilla tape. In trying to pull off precise amounts of tape, floor workers invariable cut their knuckles on the serrated edge of the tape dispenser if they worker at that particular station. Adding two automatic tape dispensers ended up saving time, money, and a lot of bandaids for a relatively cheap price. The desire to continually optimize and remove points of friction is an obsession that underlies almost all computer programming tasks. I am grateful that I have a very concrete grounding in the practice before I pivoted to programming full time.
