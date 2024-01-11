---
title: Structural Engineering Intern - Johns Hopkins Applied Physics Lab
duration: Jun 2017 - Apr 2018
description: Supported the structural and thermal efforts for the Solar Probe and Europa programs. Prototyped thermal vacuum compatible infrared and visible light camera using Raspberry Pi. Led mechanical assembly and testing of measurement instruments for internal research projects

publishDate: 'Jun 01 2017'
isFeatured: true
badges: ['Matlab', 'Python', 'Raspberry Pi', 'Simulink']
seo:
  image:
    src: '/jhuapl.jpeg'
    alt: Project preview
---

![Project preview](/jhuapl.jpeg)

**Project Overview:**
I returned to Johns Hopkins Applied Physics lab ([JHUAPL](https://www.jhuapl.edu/)), this time an employee proper and not a NASA intern. I had the opportunity to continue supporting the Parker Solar Probe ([PSP](https://en.wikipedia.org/wiki/Parker_Solar_Probe)) project in addition to a variety of other tasks ranging from satellite data post processing to test writing and execution.

## Technology Stack

- **Languages:** Matlab, Python, C ([Arduino](https://www.arduino.cc/)), Matlab
- **Operating Systems:** Ubuntu Linux, Raspbian

## Objectives

1. Develop load testing procedures for solar panel wiring harnesses
2. Develop low cost methods for water cooling terrestrial satellites
3. Post process STEREO satellite data
4. Reclassify and test unlabeled space grade thermostats in inventory
5. Assemble and program Raspberry Pi based thermal cameras for vacuum chamber use

## Outcomes

1. Over testing poses a risk for material and assemblies that will actually fly on the satellite. Working with the structural engineers on PSP, I was exposed to a number of testing methodologies for rigid structures and movable assemblies. [FEMAP](https://en.wikipedia.org/wiki/Femap), the Finite element analysis simulator, was leveraged to predict the stability of the rigid assemblies under launch induced stress. I continued my work with frangibolts that started in the NASA internship. All of our testing predictions concluded that the wiring harness and the bolts would work, and it has been satisfying to follow the news around the project since it has since [succeeded in making its closest approach to the sun](https://science.nasa.gov/science-research/heliophysics/nasas-parker-solar-probe-makes-history-with-closest-pass-to-sun/). The PSP was fist proposed in 1958, I was only involved in a small part of the engineering push, but I am grateful to have worked on a project of such magnitude that I have been able to follow in the news years later.

2. JHUAPL had a free makerspace that offered use of laser cutters, a variety of 3d printers, soldering irons, and a vast collection of basic electronic components to all employees. As a result, I had begun to pick up the basics of soldering, circuit design, and microcontroller programming with [Arduino](https://www.arduino.cc/). This gave me the chance to work on some of the smaller proposals including a project on water cooling terrestrial solar panels. I worked on voltage regulation and pump circuits driven by a Raspberry Pi, which became my introduction Linux.

3. I remained with JHUAPL as a temp on call during my senior year of college which allowed me to do data processing remotely. This mainly consisted of writing Matlab code to process shock propagation data from the [STEREO satellites](https://en.wikipedia.org/wiki/STEREO).

4. After I had started to spend all my free time on electronics, I discovered that there were a variety of older components in the thermal engineering department's inventory that lacked documentation. I used this as an opportunity to work on authoring and executing tests, in addition to the basic skill of soldering that I was developing. I wrote a test plan for classifying around $5,000 worth of space grade thermostat and was able to execute that plan and deliver the parts back into the inventory proper.

5. While I was a temp on call, the thermal engineering department would ship me [LEPTON FLIR cameras](https://www.flir.com/developer/lepton-integration/lepton-integration-raspberry-pi/?srsltid=AfmBOoozkuSRnzG70yZF62X_iDdKOOomXKlYP20i13GW35DBzHQ40d9j) and [low offgass wiring](https://en.wikipedia.org/wiki/Outgassing), and I would source [Raspberry Pi Zeros](https://www.raspberrypi.com/products/raspberry-pi-zero/) and assemble basic thermal cameras. This process was incredibly cheap. Since the cameras were for use in thermal vacuum chambers, I was able to buy the variant that lacked wireless capabilities, which where $1 at the time. In addition, the wire was essentially free at this scale of production. The driving cost was the camera module itself which still remained very inexpensive in comparison to the other types of hardware purpose built for thermal vacuum use. everything was assembled without an enclosure to keep materials that would offgass to a minimum. With the addition of some basic python code for streaming data over ethernet, the end result was a decent array of thermal cameras that were a rounding error in the budget.
