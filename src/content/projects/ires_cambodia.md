---
title: Explosive Ordnance Disposal Roboticist - IRES Cambodia
duration: Jun 2018 - Aug 2018
description: 'Worked on location in Phnom Penh, Cambodia with Golden West Humanitarian Foundation.
Implemented PID control for nodding LIDAR systems on EOD robots.
Prototyped sun tracking solar panel array using OpenCV Python on Raspberry Pi, controlled panels via Arduino and linear actuator receiving inputs from Matlab/Simulink inverse kinematic models.
Taught microcontroller fundamentals and construction of sensors from basic electrical components to enable Cambodian grad students to operate efficiently and overcome supply chain constraints.'

publishDate: 'Jun 01 2018'
isFeatured: true
badges: ['Arduino', 'C', 'Matlab', 'Simulink']
seo:
  image:
    src: '/project-3.jpg'
---

![Project preview](/ires_cambodia.jpg)

**Project Overview:**
This NSF funded international research experience for students - [IRES](https://new.nsf.gov/funding/opportunities/ires-international-research-experiences-students) - program focuses providing U.S. undergraduate and graduate students with research opportunities abroad.The project that I was involved in was focused on using mechatronics and robotics in the field of humanitarian mine-action and explosive ordnance disposal. I was part of the 2018 team that spent 10 weeks in Phnom Penh, Cambodia. Learn more at [IRES Cambodia](https://irescambodia.com/).

## Technology Stack

- Main Robot: Robot Operating System ([ROS](https://www.ros.org/) )
- Lidar System: C ([Arduino](https://www.arduino.cc/))
- Grad Student Work: Python, Linux

## Objectives

The multi year project had the overall objective of producing a design for an Unexploded Ordnance Disposal robot. Existing offerings could cost tens of thousands of dollars, the goal for ours was to keep it under ten thousand.

One of the main difficulties with this price point was not the motors or body materials, but in navigation and orientation. Cambodia has many areas of dense jungle, making GPS navigation untenable at times. Instead, [visual odometry](https://en.wikipedia.org/wiki/Visual_odometry) is an alternative. We opted for a [LIDAR](https://en.wikipedia.org/wiki/Lidar) based system and endeavored to keep it as affordable as possible.

Sophisticated LIDAR systems use multiple beams of light to form full 3-dimensional representations of the spaces they measure, but they are also extremely expensive relative to simple range finders. My work was centered around supporting a team that was attempting to take an inexpensive spinning range finder and move it in a nodding motion to get a full picture.

## Outcomes

An example of one of the nodding LIDAR systems we trialed can be seen in this [blog post](https://irescambodia.com/index.php/2018/07/19/the-lidar-cradle-a-brief-introduction-to-pid-control/). We were successful in getting some prototypes running, but more importantly, in establishing connections and an understanding of the local supply chain. Sourcing basic electronic components proved to be difficult, but with the help of grad students from the Institute of Technology of Cambodia, we tracked down sources for most of what we needed.

I ended up working with two mechanical engineering grad students at the institute on one of their final projects: a solar panel that rested on three linear actuators. We worked through several methods of orienting towards the brightest part of the sky, from the basic photoresister approach all the way to using python and OpenCV to take pictures and detect various parts of the sky. This experience would inform a lot of work I did at my following job at Hardwire LLC, which leveraged OpenCV for a number of quality control applications.
