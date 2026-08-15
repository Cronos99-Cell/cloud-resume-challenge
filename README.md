# Cloud Resume Challenge

## Project Overview

This repository documents my implementation of the Cloud Resume Challenge, a hands-on project designed to develop practical cloud engineering skills by building and deploying a serverless resume website on AWS.

The project combines front-end development, cloud infrastructure, serverless computing, security, version control, troubleshooting, and automation to demonstrate practical cloud engineering concepts.

The project is being developed incrementally, with each component implemented, tested, documented, and reviewed before progressing to the next stage.

---

# Project Progress

| Status | Milestone                                       | Date           |
| ------ | ----------------------------------------------- | -------------- |
| ✅      | HTML Resume                                     | 02 August 2026 |
| ✅      | CSS Styling                                     | 02 August 2026 |
| ✅      | JavaScript Foundation                           | 02 August 2026 |
| ✅      | GitHub Repository                               | Completed      |
| ✅      | GitHub Pages Deployment                         | Completed      |
| ✅      | Visitor Counter Front-End Preparation           | 02 August 2026 |
| ✅      | AWS CLI Authentication & Region Troubleshooting | 15 August 2026 |
| ✅      | Amazon S3 Bucket Created                        | 15 August 2026 |
| ✅      | Resume Files Deployed to S3                     | 15 August 2026 |
| ✅      | Amazon CloudFront Distribution                  | 15 August 2026 |
| ✅      | CloudFront Default Root Object (`index.html`)   | 15 August 2026 |
| ✅      | Private S3 Access Through CloudFront            | 15 August 2026 |
| 🔄     | AWS CloudFormation Infrastructure               | In Progress    |
| ⏳      | Amazon API Gateway                              | Planned        |
| ⏳      | AWS Lambda                                      | Planned        |
| ⏳      | Amazon DynamoDB Visitor Counter                 | Planned        |
| ⏳      | IAM Security Configuration                      | Planned        |
| ⏳      | Custom Domain / DNS                             | Planned        |
| ⏳      | AWS Certificate Manager (ACM)                   | Planned        |
| ⏳      | CI/CD Automation                                | Planned        |
| ⏳      | Infrastructure as Code (Terraform)              | Planned        |

---

# Front-End Development Completed ✅

**Completion Date:** 02 August 2026

The front-end portion of the Cloud Resume Challenge was successfully completed.

The project was developed using an iterative approach, focusing on understanding each technology before moving to the next. Each component was built, tested, reviewed, and refined throughout the development process.

The resume currently includes a prepared visitor-counter interface that will later be connected to the AWS serverless backend.

---

# Development Approach

This project is being completed using a practical, hands-on learning methodology supported by official documentation, experimentation, testing, troubleshooting, and AI-assisted guidance to better understand each implementation step.

The development process follows these stages:

1. Build one feature at a time.
2. Test functionality.
3. Review the implementation.
4. Troubleshoot and resolve issues.
5. Refactor where improvements are identified.
6. Commit working changes using Git.
7. Document important implementation decisions and lessons learned.

The primary goal is to understand *why* each component is implemented rather than simply producing a finished website.

---

# Technologies Used

## HTML

* Built a semantic and accessible resume website.
* Structured professional experience, education, certifications, and projects.
* Added the visitor-counter interface.

## CSS

* Applied responsive styling.
* Improved layout and readability.
* Separated presentation from content.

## JavaScript

* Created the foundation for future interactivity.
* Organised client-side functionality into a dedicated JavaScript file.
* Prepared the visitor-counter interface for future API integration.
* Prepared the application for integration with AWS serverless services.

---

# Project Structure

```text
cloud-resume-challenge/
│
├── AWS/
│   ├── playbooks/
│   ├── README.md
│   └── template.yaml
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

# Git & Version Control

Throughout development I used Git and GitHub to:

* Track project changes.
* Create meaningful commits.
* Maintain version history.
* Correct implementation mistakes.
* Safely update the project.
* Manage the project incrementally throughout development.
* Maintain the project source code and AWS deployment configuration.

GitHub serves as the central source repository for the project.

The AWS deployment currently uses the project files stored in the GitHub repository.

### Git Workflow

```text
Project Source
      │
      ▼
    Git
      │
      ▼
GitHub Repository
      │
      ▼
AWS Deployment
      │
      ▼
S3 → CloudFront
```

CI/CD automation will be added as a future stage of the project.

---

# Challenges & Problem Solving

During development I encountered and resolved several common front-end, Git, AWS CLI, and cloud infrastructure issues.

These included:

* File and folder organisation.
* Incorrect CSS and JavaScript asset paths.
* CSS and JavaScript linking.
* Git tracking and repository updates.
* GitHub Pages deployment validation.
* Preparing the front end for future API integration.
* AWS CLI authentication problems.
* AWS regional configuration.
* S3 deployment.
* CloudFront configuration.
* Private S3 access through CloudFront.

Resolving these issues improved my troubleshooting skills and reinforced the importance of incremental development.

---

# AWS CLI Authentication Troubleshooting

During the AWS setup for the Cloud Resume Challenge, I encountered the following error when testing the AWS CLI:

```text
InvalidClientTokenId
The security token included in the request is invalid
```

## Troubleshooting Steps

I verified the following:

* AWS access key and secret access key were correct.
* The original unused access key was deactivated and removed.
* A new AWS CLI access key was created.
* The new access key was confirmed as **Active** in IAM.
* AWS CLI was correctly reading the new access key.
* No `AWS_*` environment variables were overriding the credentials.
* No `AWS_SESSION_TOKEN` was configured.
* No proxy or custom AWS endpoint variables were configured.
* The AWS CLI configuration contained the correct default region: `af-south-1`.
* The AWS CLI version was `AWS CLI 2.36.19`.
* The system clock was correctly synchronized.

## Root Cause

The AWS account's **Africa (Cape Town) — `af-south-1`** region had not yet been enabled.

Although the credentials were valid, AWS CLI requests targeting the Cape Town region were failing with:

```text
InvalidClientTokenId
The security token included in the request is invalid
```

I enabled **Africa (Cape Town) / `af-south-1`** in the AWS account's Region settings.

After enabling the region, the following command successfully authenticated:

```bash
aws sts get-caller-identity --region af-south-1
```

## Lesson Learned

AWS credentials can be valid while requests to a specific AWS Region still fail if that Region has not been enabled for the account.

Before repeatedly rotating credentials, verify the target AWS Region and AWS CLI configuration.

This provided practical experience with AWS IAM authentication, regional configuration, AWS CLI troubleshooting, and cloud account configuration.

---

# AWS Deployment Milestones ☁️

## Milestone 1 — Amazon S3 Deployment

**Completed:** 15 August 2026

Created the S3 bucket:

```text
cameron-cloud-resume-2026
```

Region:

```text
af-south-1
```

The completed HTML, CSS, and JavaScript files were uploaded to S3.

The deployed structure is:

```text
cameron-cloud-resume-2026
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

The S3 bucket remains private, with S3 Block Public Access enabled.

Rather than exposing the S3 bucket directly to the internet, CloudFront is used as the public distribution layer.

---

## Milestone 2 — Amazon CloudFront

**Completed:** 15 August 2026

Created an Amazon CloudFront distribution:

```text
cameron-cloud-resume
```

CloudFront was configured with the private S3 bucket as its origin.

Private S3 access was enabled so that CloudFront can retrieve objects from the bucket without requiring the S3 bucket itself to be publicly accessible.

The CloudFront distribution was configured with:

```text
Default Root Object: index.html
```

The resume is now publicly accessible through the CloudFront HTTPS endpoint.

### Current Live Deployment

```text
https://d2kecljl2gk63a.cloudfront.net
```

The AWS-generated CloudFront URL is currently being used for testing.

A custom domain will be configured at a later stage.

---

# Current AWS Architecture

The current deployed architecture is:

```text
                    Internet
                       │
                       ▼
              Amazon CloudFront
                       │
              Private S3 Access
                       │
                       ▼
             Amazon S3 Bucket
      cameron-cloud-resume-2026
                       │
                       ▼
                index.html
                       │
              ┌────────┴────────┐
              ▼                 ▼
          style.css         script.js
```

The S3 bucket is not directly exposed as a public website.

CloudFront acts as the public-facing content delivery layer.

---

# Planned Serverless Architecture

The visitor counter will extend the architecture to include:

```text
                         User
                           │
                           ▼
                   Amazon CloudFront
                           │
                           ▼
                     Amazon S3
                           │
                           ▼
                    Resume Website
                           │
                           │ JavaScript API Request
                           ▼
                   Amazon API Gateway
                           │
                           ▼
                      AWS Lambda
                           │
                           ▼
                    Amazon DynamoDB
```

The visitor counter will eventually use JavaScript to communicate with an API exposed through Amazon API Gateway.

AWS Lambda will process the request and interact with Amazon DynamoDB to retrieve and update the visitor count.

---

# AWS Infrastructure Development ☁️

**Status:** In Progress

The AWS implementation phase of the Cloud Resume Challenge has started.

The project is being developed incrementally, following a hands-on approach where each AWS component is implemented, tested, and documented before progressing to the next stage.

The initial infrastructure work is being defined using AWS CloudFormation.

## Initial AWS Infrastructure

The initial CloudFormation template is being developed to provision AWS resources required for the project.

The infrastructure work currently includes:

* AWS CloudFormation template definition.
* Configurable resource parameters.
* Amazon S3 infrastructure.
* CloudFormation intrinsic function usage with `!Ref`.

The infrastructure will be expanded as additional AWS services are implemented.

---

# Current Status

**Last Updated:** 15 August 2026

The front-end has been successfully developed and deployed using GitHub Pages.

The AWS deployment phase has now successfully started.

### Completed

* Responsive HTML resume.
* CSS styling.
* JavaScript foundation.
* Git and GitHub version control.
* Visitor-counter front-end preparation.
* AWS CLI authentication troubleshooting.
* AWS Cape Town region configuration.
* Private Amazon S3 bucket.
* Resume deployment to Amazon S3.
* Amazon CloudFront distribution.
* CloudFront private access to S3.
* CloudFront HTTPS deployment.
* `index.html` configured as the default root object.
* Live AWS-hosted resume.

### Current Live Endpoint

```text
https://d2kecljl2gk63a.cloudfront.net
```

### Currently In Progress

* AWS CloudFormation infrastructure.
* Serverless visitor counter.

---

# Next Phase – Serverless Visitor Counter ☁️

The next stage will focus on implementing the serverless visitor counter.

Planned services:

* Amazon API Gateway.
* AWS Lambda.
* Amazon DynamoDB.
* IAM roles and least-privilege policies.
* JavaScript API integration.

The objective is to allow the resume website to retrieve and update a visitor count through a serverless AWS backend.

---

# Future AWS Development

Following the visitor counter, planned improvements include:

* Custom domain registration.
* DNS configuration.
* AWS Certificate Manager (ACM).
* CI/CD automation using GitHub Actions.
* Automated deployment from GitHub to AWS.
* Infrastructure as Code using Terraform.
* Additional security and monitoring improvements.

---

# Learning Objective

This project is focused on developing practical cloud engineering skills through hands-on implementation.

Rather than simply completing the challenge, the objective is to understand the architecture, technologies, security considerations, troubleshooting processes, and design decisions behind each stage of the solution.

The project is intended to build practical experience in:

* Cloud infrastructure.
* Serverless architecture.
* AWS services.
* API development.
* Security and IAM.
* Version control.
* CI/CD automation.
* Infrastructure as Code.
* Troubleshooting and problem solving.
* Cloud architecture and design decisions.

The project will continue to evolve as additional AWS services and automation are implemented.

