---
title: Thermal Engineering Intern - NASA
duration: Jun 2016 - Aug 2016
description: 'Optimized the Parker Solar Probe’s solar array MATLAB thermal model, decreasing runtime by a factor of 200.
  Designed and executed tests to qualify, record, and present thermostat performance, saving $5,000 by allowing the reuse of equipment that lacked documentation.'

publishDate: 'Jun 01 2016'
isFeatured: true
badges: ['Python', 'Matlab', 'Raspberry Pi', 'Simulink']
seo:
  image:
    src: '/project-1.jpg'
    alt: Project preview
---

![Project preview](/project-1.jpg)

**Project Overview:**
The NASA internship was focused on the thermal engineering efforts to protect and regulate the Parker Solar Probe(PSP). The launch required was a plantenary launch, meaning that it required the planet to be in the correct position for the launch. Given that this kind of schedule can not tolerate slip of any kind, it provided me with the opportunity to particiate accross teams on a variety of projects.

## Objectives

1. Optimize the thermal Modeling code for the PSP solar panels
2. Develop model louvers to help prepare radiation blanketing
3. Assist the Thermal Vacuum lab with any and all testing to avoid schedule slip

## Technology Stack

Like many mechanical engineering teams, the PSP thermal engineering team made use of Matlab and Simulink, in addition to Thermal Desktop. My work was primarily with the matlab models that drove the simulations.

## Outcome

1. Optimize the thermal Modeling code

The PSP has to strike a balance between power generation and heat absorption. It has two solar panels that deploy post launch to provide power, but as the thermal radiation from the sun increases as the satellite nears its final orbit, the panels can fold back to decrease the surface exposed. A matlab test suite spanning a number of scenarios was developed between the thermal team and the guidance naviagtion and control team. Each test case was taking ~60 seconds, and a full run of all tests could span a few hours.

I profiled the code and found that the vast majority of the time spent per run was in the execution of Matlab's default ordinary differential equation solver _ode45_.
A quick search into Matlab's ode solvers reveled that the original author of the test suite had not checked the problems for their [stiffness ](https://en.wikipedia.org/wiki/Stiff_equation). After some experimenation, switching to alternative solvers produced identical results but with a ~2-3 second runtime per test case.

2. Develop model louvers to help prepare radiation blanketing

The art of making Multi Layer Aluminized kaptop blanketing is still largely a manual process. At the time that I was at Johns Hopkins, there only two who worked on this aspect of space exploration. In order to avoid waiting for finished parts to come to their workshop, I modeled the louvers for the PSP. Using Solidworks, I laser cut mocks and made sure they would function as substitues that could be blanketed ahead of time. The louvers would be used to vent heat as the PSP got increasingly close to the sun.

3. Assist the Thermal Vacuum lab with any and all testing to avoid schedule slip
