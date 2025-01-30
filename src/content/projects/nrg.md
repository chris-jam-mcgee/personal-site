---
title: Web Programmer Analyst - NRG Energy
duration: Sep 2019 - Jun 2021
description: 'Managed CI/CD pipeline across AWS and Azure clouds.
Authored infrastructure-as-code in Ansible for deploying and managing AWS resources.
Implemented a data-driven product engine using Django, Postgres, AWS Elastic Beanstalk, and AWS SQS Migrated legacy databases to AWS S3 for query with AWS Athena to lower costs and preserve auditability.
Enhanced local Docker images to run servers, database migrations, linting and unit tests Implemented a standard caching structure for daily pricing runs to avoid unnecessary API calls.
Standardized onboarding; capturing Docker, WSL, Git, Jira, and Python team best practices'

publishDate: 'Sep 01 2019'
isFeatured: true
badges: [ 'Ansible','AWS','Django','Jenkins','Python']
seo:
  image:
    src: '/nrg.png'
---

![Project preview](/nrg.png)

**Overview:**
[NRG](https://www.nrg.com) is an American energy company based in Houston, Texas and Princeton, New Jersey. I worked on the pricing team that maintained an engine which would process tens of thousands of customers daily. These responsibilities grew to include all of the team's DevOps needs as our efforts to streamline deployments increased.

## Technology Stack

- Frontend: Django
- Backend: Python, Django,
- Databases: Oracle DB, Postgres
- CI/CD: Jenkins, Azure Pipelines, AWS Codebuild
- IAC: Ansible

## Objectives

1. Configure a database driven rules engine for evaluating customer pricing
2. Ensure all Infrastructure was secure and maintainable
3. Archive Pricing Engine Data to be better prepared for audits

NRG was my first brush with DevOps practices. There were multiple teams within the company being served by a DevOps team of one.I did my best to partner with them and develop the skills that my team needed to compensate.

## Outcomes

1. NRG has a large number of customer accounts that need to be evaluated on a daily basis. Whether it be to check regulatory compliance, adjust prices, trigger mailed communications, etc, NRG's pricing engine needed to be executed daily in full. Whether or not the results for a given customer were directly actionable, they were archived. I worked to make the evaluation system easier for the business ops side of the organization to operate upon. Many business ops team members were very comfortable with SQL, so placing the rules for pricing inside a table and assigning them a hierarchical ranking made the process of making business changes self service.

2. There was no unified agreement between the teams in regards to their internal build and testing infrastructure. As a result, Chef, Ansible, AWS CDK, Team City, Jenkins, Azure Pipelines, and AWS codebuild were all in use. I met with the DevOps engineer who was trying to support these disparate efforts and settled on taking ownerships of my team's Jenkins builds, Azure Pipelines, and AWS architecture.

3. As the pricing database continued to scale daily, it became apparent that the business ops team would need an easier means of interrogating the data for auditing purposes. In my first large scale DevOps project, I built out a data pipeline using the AWS database migration service in conjunction with Athena. Data was replicated from the database and stored in S3 in the [parquet file format](https://parquet.apache.org/). This allowed business ops team members to use a query language similar to the SQL they were used to through Athena to query archived data.
