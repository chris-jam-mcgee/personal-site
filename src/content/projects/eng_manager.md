---
title: Senior Engineering Manager - DUST Identity
duration: Sep 2023 - Present
description: 'Led the core services and infrastructure team, managing both Software Engineering & DevOps. 
Coordinated third party audits, keeping accurate documentation of system architectures and inventory.  
Managed IT contractors and maintained security and accessibility of internal networking hardware and servers. 
Interfaced with executive leadership to translate business goals into developer objectives and contextualize the long-term DevOps road map.'

publishDate: 'Sep 01 2023'
isFeatured: true
badges: ['ArgoCD','AWS','Github Actions','Kubernetes', 'Python', 'Static sites', ]
seo:
  image:
    src: 'dust_shield_alone_logo_r.png'
---

![Project preview](/dust_shield_alone_logo_r.png)

**Overview:**
[DUST Identity](https://www.dustidentity.com) is a unique supply chain security company. The company offers DUST, or Diamond Unclonable Security Tags, physical markings constructed from diamond dust suspended in a variety of high performance materials. These tags can be used to link a physical object to its digital records.

Upon becoming a manager, I was responsible for the DevOps team, the MLOps team, two back end developers and an IT contractor. I continued to work as an individual contributor on some of the DevOps efforts in addition to organizing and defending roadmaps for each team.

## Technology Stack

- Frontend: React
- Backend: Python, FastAPI, Swift
- Database: Postgres, hosted via RDS in AWS

## Objectives

1. Re-write the mobile app to switch from swift to react native
2. Coordinate migration efforts for fingerprint extraction algorithms
3. Create and curate a long term road map for the DevOps and MLOps teams
4. Implemented better metrics and tracing
5. Switched to more Kubernetes native services
6. Refined app deployment process
7. Switched Internet Service providers with zero downtime
8. Audited physical assets, developed a process for patching

## Outcomes

1. With only one swift developer, and a variety of front end dev, the team felt that we were reaching a bottle neck when it came to the mobile app. We produced an MVP and successfully lobbied to cut over to [react native](https://reactnative.dev/).The added synchronicity between frontend and backend teams increased overall velocity.

2. DUST tags rely on an underlying matching algorithm that undergoes continuous improvement. Revamping the migration system for implementing a new algorithm version was a multi-team effort that spanned several weeks. Along with managing the required tasks and documentation in [notion](https://www.notion.com/) and [Jira](https://www.atlassian.com/software/jira), I also personally authored and maintained the Kubernetes jobs that represented the repeated steps in the validation process. The required steps were engineered such that no one programmer or subject matter expert was needed to run them, making it easier for a core team to proceed unblocked despite planned and unplanned absences.

3. Our team decided to consolidate on [Jira](https://www.atlassian.com/) for all ticket tracking. This allowed us to use their [plan](https://www.atlassian.com/software/jira/guides/advanced-roadmaps/overview#how-to-get-started) functionality. We were able to forecast out up to 3 months with a multi-team Gantt chart. As a manager, the most important function of a Gantt chart goes beyond the obvious estimation of deadlines. A long term roadmap is necessary to defend the work of the team from the vicissitudes of management. It is sometimes necessary to delay gratification to do unrewarding, hard groundwork that will yield dividends. When developing code that does not have a user facing polished interface, communication is key to champion the work of the team. This is especially true for DevOps, where the actual customers are the developers, an extra abstraction away from the company executives who are sometimes accustomed to curated demos of concrete features.

4. We hit a point of maturity that merited investing in better overall observability. We had been using an open source [Grafana](https://grafana.com/) stack for everything. [Loki](https://grafana.com/go/webinar/getting-started-with-logging-and-grafana-loki/?src=ggl-s&mdm=cpc&camp=nb-loki-exact&cnt=124221004773&trm=loki%20logs&device=c&redirecPath=loki-datasource&gad_source=1&gclid=Cj0KCQiA7se8BhCAARIsAKnF3ryDJbM_jkgxao5eqixigNk4ubS-jmyy2HfCIJkFqOZ__DcDQrp7zBsaAuJOEALw_wcB) and [Prometheus](https://prometheus.io/) metrics were already in place, we needed to more widely implement [Open Telemetry traces](https://opentelemetry.io/docs/concepts/signals/traces/). Our MlOps team spear headed implementing more tracing and formatting the results in consumable dashboards for the algorithms team.

5. To increase flexibility and avoid cloud vendor lockin, we started to make use of the [Cloud Native Postgres Operator](https://cloudnative-pg.io/) instead of RDS based postgres, [SeaweedFs](https://github.com/seaweedfs/seaweedfs) instead of S3, and a [Redis Operator](https://operatorhub.io/operator/redis-operator) instead of AWS based redis. This did not replace every instance of the cloud equivalents, but it did speed up development environments significantly.

6. The DevOps team had been deploying Kubernetes based services for long enough that the process was extremely streamlined. To define a new app, a few entries in a CDK file produced:

- All AWS roles that github actions would have to assume to publish images, restart Kubernetes deployments
- The ECR repositories and their attendant policies
- The Kubernetes namespaces within the EKS cluster
- S3 buckets
- Databases
- Secrets

After which point, some boiler plate yaml files (we use [kustomize](https://kustomize.io/)) could be used to stand up the basics of a web app or api:

- Deployments
- Services
- Ingresses (with Internet facing and internal VPN configurations automated)
- Configmaps
- External Secrets

Deploying a new service with containers that fit our internal app standard was reduced to a few minutes of work.

7. We began to experience more and more service disruption with the internet service provider in the Newton, Ma office. I coordinated the push to get quotes and eventually switch to a fiber optic provider with zero downtime during work hours. I also documented the procedures for configuring the onsite IT equipment and the restoration process in the event of a prolonged power outage.

8. To prepare proactively for upcoming security requirements from customers in the federal aerospace and defense space, I organized a monthly audit process to cover:

- Onsite camera server access and archival storage
- Tailscale VPN settings
- Employee offboarding
- Physical device manifests
- Endpoint protection software

I also worked with 3rd party auditors to outline the security architecture of the company's offerings in addition to an overview of all SasS solutions in use.
