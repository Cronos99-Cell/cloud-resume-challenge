# Cloud Resume Challenge

## Project Overview

This repository documents my implementation of the Cloud Resume Challenge, a hands-on project designed to develop practical cloud engineering skills by building and deploying a serverless resume website on AWS.

The project combines front-end development, cloud infrastructure, serverless computing, security, version control, troubleshooting, API integration, and automation to demonstrate practical cloud engineering concepts.

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
| ✅      | Amazon API Gateway                              | 15 August 2026 |
| ✅      | AWS Lambda Visitor Counter                      | 15 August 2026 |
| ✅      | Amazon DynamoDB Visitor Counter                 | 15 August 2026 |
| ✅      | JavaScript API Integration                      | 15 August 2026 |
| ✅      | API Gateway CORS Configuration                  | 15 August 2026 |
| ✅      | End-to-End Visitor Counter                      | 15 August 2026 |
| ⏳      | IAM Least-Privilege Review                      | Remaining      |
| ⏳      | Custom Domain / DNS                             | Remaining      |
| ⏳      | AWS Certificate Manager (ACM)                   | Remaining      |
| ⏳      | CI/CD Automation                                | Remaining      |
| ⏳      | Infrastructure as Code — Terraform              | Remaining      |

---

# Front-End Development Completed ✅

**Completion Date:** 02 August 2026

The front-end portion of the Cloud Resume Challenge was successfully completed.

The project was developed using an iterative approach, focusing on understanding each technology before moving to the next.

The resume includes:

* Professional Summary
* Technical Skills
* Professional Experience
* Education
* Certifications
* Cloud Projects
* AWS Visitor Counter

The visitor-counter interface was initially prepared on 02 August 2026 and was subsequently connected to the AWS serverless backend on 15 August 2026.

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

* Created the foundation for client-side functionality.
* Organised client-side functionality into a dedicated JavaScript file.
* Implemented the visitor-counter API request.
* Connected the resume frontend to Amazon API Gateway.
* Added handling for API responses and errors.

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
* Manage the project incrementally.
* Maintain the project source code and AWS deployment configuration.

GitHub serves as the central source repository for the project.

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
      ├──────────────► GitHub Pages
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
* AWS CLI authentication problems.
* AWS regional configuration.
* S3 deployment.
* CloudFront configuration.
* Private S3 access through CloudFront.
* API Gateway route configuration.
* Lambda integration.
* DynamoDB visitor-counter implementation.
* Browser CORS restrictions.
* Testing API responses independently from the frontend.

Resolving these issues improved my troubleshooting skills and reinforced the importance of incremental development and testing each layer independently.

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

### Current CloudFront Endpoint

```text
https://d2kecljl2gk63a.cloudfront.net
```

The AWS-generated CloudFront URL is currently being used for testing.

A custom domain will be configured at a later stage.

---

# Milestone 3 — Amazon API Gateway

**Completed:** 15 August 2026

Created the API:

```text
CloudResumeVisitorCounter-API
```

API Gateway is configured with the route:

```text
ANY /CloudResumeVisitorCounter
```

Stage:

```text
default
```

The API Gateway endpoint used by the resume is:

```text
https://yfsnyqf9rg.execute-api.af-south-1.amazonaws.com/default/CloudResumeVisitorCounter
```

The API was tested independently before connecting it to the resume frontend.

A successful API request returned:

```json
{
  "count": 6
}
```

---

# Milestone 4 — AWS Lambda

**Completed:** 15 August 2026

The API Gateway route was connected to the Lambda integration responsible for processing visitor-counter requests.

Lambda provides the serverless compute layer between API Gateway and DynamoDB.

The Lambda function processes the API request and retrieves/updates the visitor count stored in DynamoDB.

---

# Milestone 5 — Amazon DynamoDB

**Completed:** 15 August 2026

DynamoDB was implemented as the persistent data store for the visitor counter.

The visitor counter was successfully tested through the public API.

The API subsequently returned:

```json
{
  "count": 7
}
```

This confirmed that the serverless backend was successfully processing visitor-counter requests.

---

# Milestone 6 — API Gateway CORS

**Completed:** 15 August 2026

The initial API request worked when accessed directly in a browser but failed when called from the deployed resume.

The browser reported:

```text
Access to fetch ... has been blocked by CORS policy
No 'Access-Control-Allow-Origin' header is present
```

The issue was resolved by configuring CORS in API Gateway.

The API was configured to allow browser requests from the resume frontend.

This demonstrated an important distinction between:

* An API working when accessed directly.
* An API being accessible from browser-based JavaScript.

After configuring CORS, the live resume successfully retrieved the visitor count.

---

# Milestone 7 — End-to-End Visitor Counter

**Completed:** 15 August 2026

The visitor counter is now fully operational.

The complete request flow is:

```text
Visitor
   │
   ▼
Resume Website
   │
   │ JavaScript fetch()
   ▼
API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
DynamoDB
   │
   ▼
Visitor Count
   │
   ▼
API Gateway
   │
   ▼
Resume Website
```

The live resume successfully displayed:

```text
👀 Total Visitors: 7
```

This confirms that the frontend, API Gateway, Lambda, DynamoDB, and CORS configuration are working together successfully.

---

# Current AWS Architecture

The current architecture is:

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
                       Resume
                  ┌─────────┴─────────┐
                  │                   │
             style.css          script.js
                                      │
                                      │ API Request
                                      ▼
                             Amazon API Gateway
                                      │
                                      ▼
                                 AWS Lambda
                                      │
                                      ▼
                               Amazon DynamoDB
                                      │
                                      ▼
                               Visitor Count
```

The S3 bucket is not directly exposed as a public website.

CloudFront acts as the public-facing content delivery layer.

API Gateway provides the public API endpoint used by the JavaScript visitor counter.

Lambda provides serverless compute.

DynamoDB provides persistent visitor-count storage.

---

# Current Live Deployment

### CloudFront

```text
https://d2kecljl2gk63a.cloudfront.net
```

### API Gateway

```text
https://yfsnyqf9rg.execute-api.af-south-1.amazonaws.com/default/CloudResumeVisitorCounter
```

### Current Visitor Counter Test

```json
{
  "count": 7
}
```

---

# AWS Infrastructure Development ☁️

**Status:** In Progress

The AWS implementation phase of the Cloud Resume Challenge is now substantially complete for the core website and serverless visitor counter.

The initial infrastructure work is being defined using AWS CloudFormation.

## CloudFormation

The project currently contains:

```text
AWS/
├── playbooks/
├── README.md
└── template.yaml
```

The CloudFormation infrastructure will continue to be reviewed and expanded so that the manually created AWS resources can eventually be represented and managed consistently through Infrastructure as Code.

---

# What Was Completed Today — 15 August 2026

Today was the main AWS serverless implementation session.

### AWS Authentication & Infrastructure

* Resolved AWS CLI authentication problems.
* Confirmed AWS IAM credentials were valid.
* Identified that `af-south-1` needed to be enabled.
* Successfully authenticated AWS CLI against the Cape Town region.
* Created and configured the S3 deployment.
* Uploaded the resume files to S3.
* Configured CloudFront.
* Configured `index.html` as the CloudFront default root object.
* Configured private S3 access through CloudFront.

### Serverless Visitor Counter

* Created/configured API Gateway.
* Created the `CloudResumeVisitorCounter` route.
* Connected API Gateway to Lambda.
* Implemented the Lambda/DynamoDB visitor counter.
* Tested the API independently.
* Confirmed the API returned visitor-count JSON.
* Connected the JavaScript frontend to the API.
* Diagnosed the browser CORS error.
* Configured CORS in API Gateway.
* Tested the live website.
* Confirmed the live resume displayed:

```text
👀 Total Visitors: 7
```

### Result

The core Cloud Resume Challenge website is now functioning as a **serverless AWS application**, rather than simply being a static resume.

---

# Current Status

**Last Updated:** 15 August 2026

## Completed

* ✅ HTML resume
* ✅ CSS styling
* ✅ JavaScript foundation
* ✅ Git and GitHub version control
* ✅ GitHub Pages deployment
* ✅ Visitor-counter frontend
* ✅ AWS CLI authentication troubleshooting
* ✅ AWS Cape Town region configuration
* ✅ Private Amazon S3 bucket
* ✅ Resume deployment to S3
* ✅ Amazon CloudFront distribution
* ✅ CloudFront HTTPS deployment
* ✅ CloudFront default root object
* ✅ Private S3 access through CloudFront
* ✅ Amazon API Gateway
* ✅ AWS Lambda
* ✅ Amazon DynamoDB
* ✅ JavaScript API integration
* ✅ API Gateway CORS
* ✅ End-to-end visitor counter
* ✅ Live visitor count successfully tested

## Currently In Progress

* 🔄 AWS CloudFormation infrastructure
* 🔄 Review and document IAM configuration

---

# Remaining Work After 15 August 2026

The core Cloud Resume Challenge functionality is now working. The remaining work is primarily focused on **security, automation, Infrastructure as Code, and production improvements**.

## Phase 1 — Infrastructure & Security

### 1. CloudFormation Completion

* Review the existing `template.yaml`.
* Determine which resources should be represented in CloudFormation.
* Validate the template.
* Test deployment and updates.
* Document the infrastructure.

### 2. IAM Security Review

* Review Lambda execution permissions.
* Apply least-privilege permissions.
* Confirm Lambda only has the DynamoDB permissions it requires.
* Review API Gateway permissions.
* Remove unnecessary permissions where applicable.

---

# Phase 2 — Custom Domain

### 3. Domain / DNS

Configure a custom domain for the resume.

Potential architecture:

```text
Custom Domain
      │
      ▼
    DNS
      │
      ▼
CloudFront
      │
      ▼
     S3
```

### 4. AWS Certificate Manager

Create and validate an ACM certificate for the custom domain.

Configure CloudFront to use the certificate for HTTPS.

---

# Phase 3 — CI/CD Automation

### 5. GitHub Actions

Implement automated deployment so that:

```text
Git Commit
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ▼
AWS Deployment
    │
    ├── S3
    └── CloudFront
```

The objective is to remove the need for manual deployment after each approved change.

---

# Phase 4 — Infrastructure as Code

### 6. Terraform

After the AWS architecture is stable, reproduce the infrastructure using Terraform.

The Terraform implementation will provide additional practical experience with:

* Providers
* Resources
* Variables
* Outputs
* State
* Modules
* Dependencies
* Infrastructure lifecycle management

The existing CloudFormation work will also provide a useful comparison between AWS-native Infrastructure as Code and Terraform.

---

# Phase 5 — Documentation & Portfolio

### 7. Final Documentation

Document:

* AWS architecture.
* API Gateway configuration.
* Lambda implementation.
* DynamoDB design.
* IAM permissions.
* CORS configuration.
* CloudFront/S3 architecture.
* Troubleshooting experiences.
* Security decisions.
* Infrastructure as Code.
* CI/CD pipeline.

### 8. Portfolio Presentation

Once the infrastructure and automation are complete, the project can be presented as a portfolio project demonstrating practical experience with:

* AWS
* Serverless architecture
* Cloud infrastructure
* API development
* IAM
* DynamoDB
* Lambda
* API Gateway
* CloudFront
* S3
* Git/GitHub
* GitHub Actions
* CloudFormation
* Terraform

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

The core serverless application is now operational. The next stage of the project will focus on making the infrastructure **more secure, automated, reproducible, and production-ready**.

---

# Project Achievement — 15 August 2026

The most significant milestone achieved today was moving the project from a **static cloud-hosted resume** to a **working serverless AWS application**.

The final architecture now demonstrates:

```text
Frontend
   │
   ▼
CloudFront
   │
   ▼
S3
   │
   │ JavaScript
   ▼
API Gateway
   │
   ▼
Lambda
   │
   ▼
DynamoDB
```

The visitor counter was successfully tested from the live website and returned:

```text
👀 Total Visitors: 7
```

This marks the completion of the core functional portion of the Cloud Resume Challenge.

The remaining work will focus on security hardening, Infrastructure as Code, custom domain configuration, CI/CD automation, and final documentation.


