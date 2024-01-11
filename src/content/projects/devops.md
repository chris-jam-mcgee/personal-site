---
title: Senior DevOps Engineer - DUST Identity
duration: Jun 2021 - Sep 2023
description: 'Automated feature deployments for AWS stacks to unblock QA and UX during migration to Kubernetes.
Translated legacy architecture from AWS ECS into Kubernetes. Adapted containerized architecture to work on an air gapped alternative to DUST Identity’s cloud offering.
Increased testing and deployment speeds with differential deployments, caching, and test parallelization.
Migrated all access control from password and key auth to SSO across databases, Kubernetes, and AWS.
Built tooling to securely discover and connect to databases in development and production automatically.
Executed production deployments, smoke testing, communication, and troubleshooting.
Performed customer demos and directly interfaced with both technical managers and users.
Automated smoke testing of web applications with Selenium and Pytest.
Diagnosed resource utilization issues in Postgres databases to improve ORM efficiency.'

publishDate: 'Jun 01 2021'
isFeatured: true
badges: ['AWS', 'CircleCI', 'Postgres','Python', 'RedHat']
seo:
  image:
    src: '/dust_shield_alone_logo_r.png'
---

![Project preview](/dust_shield_alone_logo_r.png)

**Overview:**
[DUST Identity](https://www.dustidentity.com) is a unique supply chain security company. The company offers DUST, or Diamond Unclonable Security Tags, physical markings made from diamond dust suspended in a variety of high performance materials. These tags can be used to link a physical object to its digital records.

## Technology Stack

Dust had a varied tech stack during this period. The following applies to the core cloud offering:

- Frontend: React
- Backend: Python, Flask web framework
- Mobile: Swift
- Database: Postgres

## Objectives

The scope of DevOps varies from company to company, but they can be generally summarize under the umbrella of observability, access, and CI/CD (continuous integration, continuous deployment). At Dust, DevOps was tasked with building and deploying services, generating developer tooling to make interacting with cloud resources easier, curating logs, traces, and metrics dashboards to summarize the state of the system, and alerting on critical errors.

Some of the major projects were:

1. Parallelize CircleCI Jobs
2. Develop a self service feature branch deployment system
3. Replace password auth with SSO AWS Iam based auth for database access
4. Work on an air-gapped solution that adapted the cloud offering into a format that could be delivered on a laptop.

Working at a startup often affords opportunities to work outside of a given silo. I had the opportunity to take part in the following non DevOps projects as well:

1. Meet directly with customers to demo the product and solicit direct feedback.
2. Utilize Python and Selenium to automate tests for the webapp
3. Work directly on the backing API code with the development team

## Outcomes

### DevOps

1. Parallelizing the jobs was the first step in a never ending investment in the build and test process. I went on to cache dependencies, and eventually work with the team to migrate away from CircleCI over to AWS Codebuild and Github actions. Differential deployments also helped to save time and money by greatly reducing the number of triggered jobs.

2. QA testers and UX designers often suffered from the clutter of competing features being tested in dev. I worked to develop a self service method of testing feature branches that had been checked in to version control but not merged to the dev environment yet. A user could message a slackbot with a given branch's name and it would kick off an AWS codebuild job that would make them a fresh environment with some randomly generated data. The slackbot could communicate passwords, warn about impending expiration, and let the user know when environments had finished initializing. A daily job in AWS cleaned up any unused resources. While this project taught me a lot, I would never do it the same way again. One of the most valuable things to learn early in a career centered around code is what not to do. I would reach for a tool like Kubernetes which benefits from much more stability and support than a tool chain I had personally assembled between slack, AWS lambda, CDK and codebuild.

3. Database access had previously been password base with an IP allowlist gating access. I migrated all of this the AWS Iam auth tied to company gmail accounts. I wrote a simple python script that could be leveraged by many database console programs (e.g., [Dbeaver](https://dbeaver.io/)) that would install the list of dev databases and automatically connect with SSO.

4. I worked with the developers to translate the cloud architecture to a form that could be run via containers on an air gapped system. This was eventually migrated to Kubernetes([k3s](https://k3s.io/)) in order to unify architectures and make it easier to maintain both incarnations of the product. This process put me in closer contact with the processes underpinning RedHat linux. I gained some useful experience working with common access cards ([CAC](https://www.cac.mil/Common-Access-Card/)), PAM settings, Security technical implementation guides (STIGs), and many aspects of hardening machines for a variety of security requirements.

### Non DevOps

1. I traveled to several customer with members of the sales team and the CEO to perform customer demonstrations and take feedback. I have a high tolerance for dealing with systems that have an uncomfortable user experience, something that I think I have in common with many developers. Meeting with customers is a good way to re-experience the product with attention drawn to all of its rough edges and workflows with friction.

2. During a major push for testing coverage, I wrote a variety of tests for the web app in addition to building out the jobs that would run to initialize test resources and report back with details on the various failures. This was another moment that allowed me to interrogate the logic behind out workflows by capturing them in tests.

3. I had worked on several smaller python utilities already at DUST before working on the API itself. I have some general knowledge of programming best practices, but nothing beats working with a dedicated team when it comes to absorbing some of the nuance that comes with enterprise grade programming. It is always my ambition to write the cleanest and most maintainable code possible, so I took the opportunities to work on the API when they arose and paid close attention to the feedback that resulted.

# Transition to Management

In September of 2023, John Ramsey, the head of engineering at DUST, left the company to create his own [security tech consultancy](https://ramsecconsulting.com/). I admired the team John had built and felt that I had a solid grasp of their technical skills and interpersonal dynamics. I applied for the position of engineering manager and was successfully promoted, leading to my next career phase.
