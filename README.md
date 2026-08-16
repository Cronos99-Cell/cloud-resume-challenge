# Cloud Resume Challenge ☁️

A production-style serverless resume website built on AWS to demonstrate practical cloud engineering, serverless architecture, Infrastructure as Code, security, API integration, Git/GitHub, and troubleshooting skills.

## 🚀 Live Project

**Live Resume:**
https://d2kecljl2gk63a.cloudfront.net

**GitHub Repository:**
https://github.com/Cronos99-Cell/cloud-resume-challenge

The live resume is delivered through **Amazon CloudFront** and hosted using a private **Amazon S3** bucket. A serverless visitor counter is implemented using **Amazon API Gateway, AWS Lambda, and Amazon DynamoDB**.

---

# Architecture

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
                            │
                            ▼
                    Static Resume
                  ┌─────────┴─────────┐
                  │                   │
             style.css          script.js
                                      │
                                      │ fetch()
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

### Request Flow

```text
Visitor
   │
   ▼
CloudFront
   │
   ▼
Private S3
   │
   ▼
Resume JavaScript
   │
   │ API request
   ▼
API Gateway
   │
   ▼
Lambda
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
Resume
```

The architecture separates the static frontend from the serverless backend while keeping the S3 bucket private.

---

# Project Overview

The Cloud Resume Challenge is a hands-on cloud engineering project designed to move beyond theoretical cloud knowledge and demonstrate practical implementation.

The project started as a static HTML/CSS/JavaScript resume and was progressively transformed into a serverless AWS application.

The development process focuses on:

* Building each component incrementally.
* Understanding the purpose of each AWS service.
* Testing individual components before integration.
* Troubleshooting real implementation problems.
* Using Git for version control.
* Documenting architecture and design decisions.
* Progressively improving security and automation.

The goal is not simply to produce a working website, but to understand the architecture and engineering decisions behind it.

---

# Project Status

| Status | Milestone                                       | Date           |
| ------ | ----------------------------------------------- | -------------- |
| ✅      | HTML Resume                                     | 02 August 2026 |
| ✅      | CSS Styling                                     | 02 August 2026 |
| ✅      | JavaScript Foundation                           | 02 August 2026 |
| ✅      | GitHub Repository                               | Completed      |
| ✅      | GitHub Pages Deployment                         | Completed      |
| ✅      | Visitor Counter Frontend                        | 02 August 2026 |
| ✅      | AWS CLI Authentication & Region Troubleshooting | 15 August 2026 |
| ✅      | Amazon S3 Deployment                            | 15 August 2026 |
| ✅      | Amazon CloudFront                               | 15 August 2026 |
| ✅      | Private S3 Access                               | 15 August 2026 |
| ✅      | Amazon API Gateway                              | 15 August 2026 |
| ✅      | AWS Lambda                                      | 15 August 2026 |
| ✅      | Amazon DynamoDB                                 | 15 August 2026 |
| ✅      | JavaScript API Integration                      | 15 August 2026 |
| ✅      | API Gateway CORS                                | 15 August 2026 |
| ✅      | End-to-End Visitor Counter                      | 15 August 2026 |
| 🔄     | CloudFormation Infrastructure                   | In Progress    |
| 🔄     | IAM Least-Privilege Review                      | In Progress    |
| ⏳      | Custom Domain / DNS                             | Planned        |
| ⏳      | AWS Certificate Manager                         | Planned        |
| ⏳      | GitHub Actions CI/CD                            | Planned        |
| ⏳      | Terraform Infrastructure                        | Planned        |

---

# Core Technologies

### Frontend

* HTML5
* CSS3
* JavaScript
* Responsive web design

### AWS

* Amazon S3
* Amazon CloudFront
* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB
* AWS IAM
* AWS CloudFormation
* AWS CLI
* AWS Certificate Manager — planned
* Amazon Route 53 — planned

### DevOps / Infrastructure

* Git
* GitHub
* GitHub Actions — planned
* CloudFormation
* Terraform — planned

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
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

# Frontend Development

## HTML

The resume is structured using semantic HTML and contains:

* Professional Summary
* Technical Skills
* Professional Experience
* Education
* Certifications
* Cloud Projects
* AWS Visitor Counter

## CSS

CSS was used to:

* Create the resume layout.
* Improve readability.
* Provide responsive styling.
* Separate presentation from HTML structure.

## JavaScript

JavaScript provides the client-side functionality required for the visitor counter.

The frontend performs an API request using `fetch()` and updates the visitor-count element with the response returned by API Gateway.

Error handling was also implemented so that API failures do not leave the page permanently displaying a loading state.

---

# AWS Deployment

## Amazon S3

The resume files are deployed to:

```text
cameron-cloud-resume-2026
```

Region:

```text
af-south-1
```

The bucket contains:

```text
cameron-cloud-resume-2026/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

### S3 Security

The S3 bucket is configured with **Block Public Access enabled**.

S3 is therefore not being used as a publicly exposed website endpoint.

Instead, CloudFront provides the public-facing delivery layer.

---

# Amazon CloudFront

A CloudFront distribution was created to deliver the resume globally over HTTPS.

Distribution:

```text
cameron-cloud-resume
```

Default root object:

```text
index.html
```

Current CloudFront endpoint:

```text
https://d2kecljl2gk63a.cloudfront.net
```

CloudFront retrieves the website content from the private S3 origin.

A custom domain and ACM certificate are planned for a later stage.

---

# Serverless Visitor Counter

The visitor counter demonstrates integration between the frontend and AWS serverless services.

## API Gateway

API:

```text
CloudResumeVisitorCounter-API
```

Route:

```text
ANY /CloudResumeVisitorCounter
```

Stage:

```text
default
```

Endpoint:

```text
https://yfsnyqf9rg.execute-api.af-south-1.amazonaws.com/default/CloudResumeVisitorCounter
```

The API was tested independently before being integrated with the frontend.

Example response:

```json
{
  "count": 7
}
```

The number above represents a test result during development and is not intended to represent the current live visitor count.

---

# AWS Lambda

Lambda provides the serverless compute layer between API Gateway and DynamoDB.

The Lambda function:

1. Receives the API request.
2. Reads the visitor counter from DynamoDB.
3. Updates the stored count.
4. Returns the resulting count as JSON.

This removes the need for a traditional web server or continuously running backend infrastructure.

---

# Amazon DynamoDB

DynamoDB provides persistent storage for the visitor counter.

The database allows the visitor count to remain available between requests without requiring a traditional relational database server.

The successful end-to-end API tests confirmed that the Lambda function could interact with DynamoDB and return the resulting visitor count through API Gateway.

---

# API Gateway CORS

During development, the API initially worked when accessed directly but failed when called from JavaScript running on the deployed resume.

The browser reported a CORS error similar to:

```text
Access to fetch ... has been blocked by CORS policy
No 'Access-Control-Allow-Origin' header is present
```

The issue was resolved by configuring CORS in API Gateway.

This demonstrated an important distinction between:

* An API responding successfully when accessed directly.
* An API being accessible from browser-based JavaScript.

After the CORS configuration was corrected, the live resume successfully retrieved the visitor count.

---

# Security Considerations

Security is being incorporated progressively throughout the project.

Current security measures include:

* S3 Block Public Access enabled.
* Private S3 origin behind CloudFront.
* HTTPS delivery through CloudFront.
* API Gateway used as the public API boundary.
* Lambda used as the serverless application layer.
* IAM used to control AWS resource permissions.
* CORS configured for browser-based API access.

The next security-focused stage is an IAM least-privilege review.

The objective is to ensure that Lambda has only the DynamoDB permissions required by the visitor-counter application and that unnecessary permissions are removed.

---

# AWS CLI Troubleshooting

One of the most useful parts of the project was troubleshooting AWS CLI authentication.

Initially, the AWS CLI returned:

```text
InvalidClientTokenId
The security token included in the request is invalid
```

The troubleshooting process included verifying:

* AWS access key credentials.
* IAM access-key status.
* AWS CLI configuration.
* AWS environment variables.
* `AWS_SESSION_TOKEN`.
* Proxy configuration.
* AWS endpoint configuration.
* AWS region configuration.
* System time.
* AWS CLI version.

The AWS CLI version being used was:

```text
AWS CLI 2.36.19
```

The configured AWS region was:

```text
af-south-1
```

## Root Cause

The issue was ultimately traced to the **Africa (Cape Town) — `af-south-1` region not being enabled for the AWS account**.

After enabling the region, the following command successfully authenticated:

```bash
aws sts get-caller-identity --region af-south-1
```

### Lesson Learned

Valid AWS credentials do not necessarily mean that every regional AWS request will succeed.

When troubleshooting AWS CLI authentication, the target region and account configuration should be verified before repeatedly rotating credentials.

This provided practical experience with:

* IAM authentication.
* AWS CLI configuration.
* AWS regional configuration.
* AWS account settings.
* Systematic cloud troubleshooting.

---

# Development Approach

The project follows an incremental development methodology:

```text
Build
  │
  ▼
Test
  │
  ▼
Review
  │
  ▼
Troubleshoot
  │
  ▼
Improve
  │
  ▼
Commit
  │
  ▼
Document
```

Git commits are used to capture meaningful implementation milestones.

This approach makes it possible to identify when changes were introduced and provides a recoverable history throughout the project.

AI-assisted guidance was used as a learning aid, while implementation, testing, troubleshooting, and verification were performed as part of the hands-on development process.

---

# Git & Version Control

Git and GitHub are used throughout the project to:

* Track source-code changes.
* Maintain version history.
* Create meaningful commits.
* Correct implementation mistakes.
* Safely experiment with changes.
* Maintain AWS infrastructure configuration.
* Document project progress.

Current development flow:

```text
Local Development
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

GitHub Actions CI/CD will be added as a future stage.

---

# Infrastructure as Code

## AWS CloudFormation

The repository contains an AWS CloudFormation implementation under:

```text
AWS/template.yaml
```

CloudFormation is currently being reviewed and expanded so that AWS resources created during the manual implementation phase can progressively be represented through Infrastructure as Code.

The objective is to make the infrastructure:

* Reproducible.
* Documented.
* Version controlled.
* Easier to update.
* Easier to recreate.

The CloudFormation implementation will be validated before being used as the primary infrastructure deployment mechanism.

## Terraform

Terraform is planned after the AWS architecture has stabilised.

The Terraform implementation will provide practical experience with:

* Providers.
* Resources.
* Variables.
* Outputs.
* State management.
* Modules.
* Dependencies.
* Infrastructure lifecycle management.

It will also provide an opportunity to compare AWS-native CloudFormation with a multi-cloud Infrastructure as Code tool.

---

# CI/CD Roadmap

GitHub Actions is planned to automate frontend deployment.

The intended workflow is:

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
    │
    └── CloudFront
```

The objective is to move from manual deployment toward an automated deployment pipeline.

---

# Current AWS Architecture

The current production-style architecture consists of:

| Layer            | AWS Service        | Purpose                          |
| ---------------- | ------------------ | -------------------------------- |
| Content Delivery | Amazon CloudFront  | Public HTTPS delivery            |
| Storage          | Amazon S3          | Private static website content   |
| API              | Amazon API Gateway | Public visitor-counter API       |
| Compute          | AWS Lambda         | Serverless application logic     |
| Database         | Amazon DynamoDB    | Persistent visitor-count storage |
| Security         | AWS IAM            | Access control and permissions   |
| IaC              | AWS CloudFormation | Infrastructure definition        |

---

# Challenges Solved

During the project I encountered and resolved issues involving:

* HTML/CSS/JavaScript asset paths.
* Git tracking and repository updates.
* GitHub Pages deployment.
* AWS CLI authentication.
* AWS regional configuration.
* S3 deployment.
* CloudFront configuration.
* Private S3 access.
* API Gateway route configuration.
* Lambda integration.
* DynamoDB integration.
* Browser CORS restrictions.
* Frontend/API integration.
* Independent API testing.

These challenges provided practical experience in diagnosing problems across multiple layers of a cloud application rather than relying on a single-service troubleshooting approach.

---

# Key Learning Outcomes

This project has provided practical experience with:

### Cloud Architecture

* Designing a serverless AWS architecture.
* Separating frontend delivery from backend processing.
* Using managed AWS services instead of traditional servers.

### AWS

* Amazon S3
* Amazon CloudFront
* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB
* AWS IAM
* AWS CLI
* AWS CloudFormation

### Security

* S3 Block Public Access.
* Private S3 origins.
* IAM permissions.
* API security boundaries.
* CORS configuration.
* Least-privilege principles.

### DevOps

* Git.
* GitHub.
* Incremental commits.
* Infrastructure as Code.
* CI/CD planning.
* Deployment troubleshooting.

### Problem Solving

The project reinforced the importance of:

* Testing each layer independently.
* Reading error messages carefully.
* Verifying assumptions.
* Understanding service dependencies.
* Troubleshooting systematically.
* Documenting the root cause rather than only the final fix.

---

# Roadmap

## Phase 1 — Infrastructure & Security

* [x] Deploy frontend to S3.
* [x] Configure CloudFront.
* [x] Implement private S3 access.
* [x] Implement API Gateway.
* [x] Implement Lambda.
* [x] Implement DynamoDB visitor counter.
* [x] Configure CORS.
* [ ] Complete CloudFormation implementation.
* [ ] Complete IAM least-privilege review.

## Phase 2 — Custom Domain

* [ ] Configure DNS.
* [ ] Create ACM certificate.
* [ ] Attach certificate to CloudFront.
* [ ] Configure custom resume domain.

## Phase 3 — CI/CD

* [ ] Configure GitHub Actions.
* [ ] Automate S3 deployment.
* [ ] Automate CloudFront updates/invalidation.
* [ ] Document deployment pipeline.

## Phase 4 — Infrastructure as Code

* [ ] Finalise CloudFormation.
* [ ] Build Terraform configuration.
* [ ] Compare CloudFormation and Terraform approaches.
* [ ] Document infrastructure lifecycle management.

## Phase 5 — Final Portfolio

* [ ] Complete architecture documentation.
* [ ] Add final architecture diagram.
* [ ] Document security decisions.
* [ ] Document CI/CD pipeline.
* [ ] Document Infrastructure as Code.
* [ ] Perform final project review.

---

# Project Achievement

The most significant milestone reached during the AWS implementation phase was transforming the project from a static resume into a **working serverless AWS application**.

The completed architecture demonstrates:

```text
Frontend
   │
   ▼
CloudFront
   │
   ▼
Private S3
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

The visitor counter was successfully tested from the live deployed website, demonstrating end-to-end communication between the frontend and AWS serverless backend.

The core application is now operational.

The remaining work focuses on making the project increasingly:

**secure → reproducible → automated → production-ready**

---

# Final Objective

The Cloud Resume Challenge is being used as a practical foundation for developing cloud engineering and cybersecurity-oriented skills.

The final project will demonstrate practical understanding of:

* AWS cloud architecture.
* Serverless application design.
* Cloud security.
* IAM.
* API integration.
* Database services.
* Infrastructure as Code.
* CI/CD.
* Git/GitHub.
* Troubleshooting.
* Cloud deployment.
* Technical documentation.

Rather than treating the challenge as a one-time website project, this repository documents the progression from a simple frontend application to a more secure, automated, reproducible cloud architecture.


