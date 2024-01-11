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
    src: '/psp.jpg'
    alt: Project preview
---

![Project preview](/psp.jpg)

**Project Overview:**
The Parker Solar Probe ([PSP](https://en.wikipedia.org/wiki/Parker_Solar_Probe)) made the [closest approach to the sun](https://science.nasa.gov/science-research/heliophysics/nasas-parker-solar-probe-makes-history-with-closest-pass-to-sun/#:~:text=Breaking%20its%20previous%20record%20by,made%20object%20has%20ever%20moved.) of any satellite mission and had a peak speed [faster than any other human made object](https://science.nasa.gov/science-research/heliophysics/nasas-parker-solar-probe-makes-history-with-closest-pass-to-sun/#:~:text=Breaking%20its%20previous%20record%20by,made%20object%20has%20ever%20moved.) in history. My NASA internship focused on the thermal engineering efforts to protect and regulate the core systems.

The engineering teams could not tolerate schedule slip of any kind without risking a missed [launch window](https://en.wikipedia.org/wiki/Launch_window), delaying the mission by years. This pressure let me participate across teams on a variety of projects, giving me an thorough introduction to systems engineering and cross team coordination.

## Objectives

1. Optimize the thermal Modeling code for the PSP solar panels
2. Develop model louvers to help prepare radiation blanketing
3. Assist the Thermal Vacuum lab with any and all testing to avoid schedule slip

## Technology Stack

Like many mechanical engineering teams, the PSP thermal engineering team made use of Matlab and Simulink, in addition to Thermal Desktop. My work was primarily with the matlab models that drove the simulations tracking the temperature of various parts of the satellite's water cooling loop from the time that it launched up until its final approach.

## Outcomes

1. Optimize the thermal Modeling code

The PSP has to strike a balance between power generation and heat absorption. It has two solar panels that deploy post launch to provide power, but as the thermal radiation from the sun increases as the satellite nears its final orbit, the panels can fold back to decrease the surface exposed. A matlab test suite spanning a number of scenarios was developed between the thermal team and the guidance navigation and control team. Each test case was taking ~60 seconds, and a full run of all tests could span a few hours.

I profiled the code and found that the vast majority of the time spent per run was in the execution of Matlab's default ordinary differential equation solver [ode45](https://www.mathworks.com/help/matlab/ref/ode45.html).
A quick search into Matlab's ode solvers reveled that the original author of the test suite had not checked the problems for their [stiffness](https://en.wikipedia.org/wiki/Stiff_equation). After some experimentation, switching to alternative solvers produced identical results but with a ~2-3 second runtime per test case.

2. Develop model louvers to help prepare radiation blanketing

The art of making custom [multi layer aluminized kapton blanketing](https://en.wikipedia.org/wiki/Multi-layer_insulation) is still largely a manual process. At the time that I was at Johns Hopkins, there only two who worked on this aspect of space exploration. In order to avoid waiting for finished parts to come to their workshop, which was becoming increasingly busy as the launch date approached, I modeled the louvers for the PSP in advance. I laser cut mocks and made sure they would function as substitutes that could be blanketed ahead of time. The louvers would be used to vent heat as the PSP got increasingly close to the sun, but could remain closed for the first part of the journey which would subject the satellite to relatively cold temperatures.

3. Assist the Thermal Vacuum lab with any and all testing to avoid schedule slip

The thermal vacuum testing chambers at Johns Hopkins Applied Physics lab were in demand during the prep for the PSP launch. I spent several weeks working late night shifts starting around 11:00 PM and running until 2:00 AM or 3:00 AM. I spent the majority of my time testing frangibolts, a brand of bolt made with [nitinol](https://en.wikipedia.org/wiki/Nickel_titanium), a shape memory alloy. These bolts could be heated up with resistance heaters in order to break them on command. They were used to fasten the solar panels to the body of the satellite during launch. They were extremely reliable, but there was always the risk that some of the heaters failed to turn off. To make sure this wouldn't be an issue, they were tested exhaustively in a chamber with a TQCM (Temperature controlled Quartz Crystal Microbalance).

Working with one of the structural engineers who was in charge of the Solar panel deployment lead to my next engagement with Johns Hopkins, this time working on the structural team.

Overall, being exposed to the rigor of the engineering infrastructure around a multibillion dollar satellite project prepared me well for future work. I was exposed to high tolerance machining, clean room best practices, soldering, the nuances of test procedure writing, streamlined inter-team and intra-team communication, and myriad other aspects of the profession that are best demonstrated practically. I was happy to return the following year to work for the structural engineers and branch out.
