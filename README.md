# Cloud Resume Challenge — AWS

![AWS](https://img.shields.io/badge/AWS-Cloud%20Resume%20Challenge-orange?logo=amazon-aws)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CloudFormation](https://img.shields.io/badge/AWS%20CloudFormation-IaC-orange?logo=amazon-aws)

## Project Overview

This project is my implementation of the **Cloud Resume Challenge**, designed to demonstrate practical cloud, serverless, infrastructure, and web development skills using Amazon Web Services (AWS).

The project combines a responsive HTML/CSS/JavaScript resume with a serverless AWS backend that provides a live visitor counter.

The goal was not only to build a resume website, but to gain hands-on experience designing, deploying, troubleshooting, and documenting a real cloud-based application.

---

## Live Project

🌐 **Live Resume:**  
[View the Cloud Resume](https://d3xxxxxxxxxxxxx.cloudfront.net/)

> The website is delivered through Amazon CloudFront using HTTPS.

---

## AWS Architecture

The project uses a serverless architecture consisting of:

```text
                    ┌─────────────────────┐
                    │     Web Browser     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Amazon CloudFront │
                    │    HTTPS / CDN      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Amazon S3      │
                    │   Static Frontend   │
                    └─────────────────────┘


Visitor Counter

                    ┌─────────────────────┐
                    │     JavaScript      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   API Gateway       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Lambda        │
                    │      Python         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     DynamoDB        │
                    │  Visitor Counter   │
                    └─────────────────────┘

| Category               | Technology                 |
| ---------------------- | -------------------------- |
| Frontend               | HTML5                      |
| Styling                | CSS3                       |
| Client-side Logic      | JavaScript                 |
| Static Storage         | Amazon S3                  |
| Content Delivery       | Amazon CloudFront          |
| API                    | Amazon API Gateway         |
| Serverless Compute     | AWS Lambda                 |
| Database               | Amazon DynamoDB            |
| Backend Language       | Python / boto3             |
| Infrastructure as Code | AWS CloudFormation         |
| Source Control         | Git / GitHub               |
| Deployment             | GitHub Pages / AWS         |
| Security               | IAM                        |
| Region                 | AWS af-south-1 — Cape Town |


Project Features
Professional Resume Website

The frontend contains:

Professional summary
Technical skills
Professional experience
Cloud projects
Education
Certifications
Responsive styling
JavaScript functionality
Live Visitor Counter

A serverless visitor counter was implemented using:

JavaScript → API Gateway → Lambda → DynamoDB

Each visitor request is processed by AWS Lambda and the visitor count is stored in DynamoDB.

The value is then returned to the frontend and displayed on the resume.

HTTPS & CloudFront

Amazon CloudFront is used to deliver the website securely over HTTPS and provide content delivery through AWS edge infrastructure.

Infrastructure as Code

AWS CloudFormation is being used to define and manage AWS infrastructure rather than relying exclusively on manually created resources.

This provides experience with:

CloudFormation templates
Parameters
Resource definitions
Stack deployment
Resource imports
Infrastructure validation
AWS CLI
Infrastructure troubleshooting

Repository Structure

cloud-resume-challenge/
│
├── AWS/
│   └── template.yaml
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── documentation/
│
├── index.html
│
├── README.md
│
└── README.html

Documentation

Two README formats are maintained:

README.md — concise professional project overview for GitHub
README.html — comprehensive technical documentation covering the implementation and lessons learned

Project Milestones
Frontend
✅ HTML Resume — Completed 02 August 2026
✅ CSS Styling — Completed 02 August 2026
✅ JavaScript Foundation — Completed 02 August 2026
✅ GitHub Repository
✅ GitHub Pages Deployment
✅ Visitor Counter Front-End Preparation — Completed 02 August 2026
AWS Cloud Implementation
✅ Amazon CloudFront
✅ Amazon API Gateway
✅ AWS Lambda
✅ Amazon DynamoDB
🔄 Amazon S3
🔄 IAM Security Configuration
🔄 AWS CloudFormation
🔄 CI/CD Automation
⏳ Infrastructure as Code with Terraform
Key AWS Concepts Practiced

This project provided practical experience with:

AWS serverless architecture
S3 storage
CloudFront distributions
API Gateway
Lambda functions
DynamoDB
IAM
CloudFormation
AWS CLI
CORS
HTTPS
CloudFront caching
Infrastructure as Code
Git and GitHub
Troubleshooting AWS deployments
Troubleshooting & Lessons Learned

Building the project involved resolving several real-world cloud issues, including:

AWS CLI authentication errors
AWS region configuration
CloudFormation validation
CloudFormation stack rollback
Importing existing AWS resources into CloudFormation
API Gateway CORS configuration
Lambda and DynamoDB integration
CloudFront caching
Browser caching
Static asset deployment
Git version control

These issues provided practical experience beyond simply following a tutorial, particularly around diagnosing cloud infrastructure and deployment problems.

Current Status

Cloud Resume Challenge: Substantially Completed ✅

The core frontend and serverless visitor-counter architecture are operational.

The project is now being used as a foundation for continuing development in:

AWS
Infrastructure as Code
Git
Terraform
Cloud / DevOps
Cloud Security
FinOps
Governance
Author

Cameron Walters

AWS Cloud / Cybersecurity Career Transition

Currently building practical cloud engineering experience through AWS projects, certifications, and hands-on infrastructure work.

Certification

☁️ AWS Certified Cloud Practitioner — CLF-C02

Why This Project Matters

The Cloud Resume Challenge represents a transition from theoretical cloud learning into practical implementation.

Rather than only completing certification training, this project demonstrates the ability to:

Build → Deploy → Configure → Troubleshoot → Document

a real cloud-based application using AWS services.





