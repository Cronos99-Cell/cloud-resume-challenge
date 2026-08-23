# Cloud Resume Challenge ☁️

A production-style serverless resume website built on AWS to demonstrate practical cloud engineering, serverless architecture, Infrastructure as Code (IaC), security, API integration, Git/GitHub, and systematic troubleshooting.

## 🚀 Live Project

- **Live Resume:** https://d2kecljl2gk63a.cloudfront.net
- **GitHub Repository:** https://github.com/Cronos99-Cell/cloud-resume-challenge

The resume is delivered through **Amazon CloudFront** from a private **Amazon S3** bucket. A serverless visitor counter uses **Amazon API Gateway, AWS Lambda, and Amazon DynamoDB**.

---

## 🏗️ Architecture

```text
                         Internet
                            │
                            ▼
                     Amazon CloudFront
                            │
                   Private S3 Access (OAC)
                            │
                            ▼
                        Amazon S3
                            │
                            ▼
                      Static Resume
                    ┌───────┴───────┐
                    │               │
                style.css       script.js
                                    │
                                  fetch()
                                    │
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
Request Flow
Visitor accesses the CloudFront URL over HTTPS.
CloudFront retrieves the static assets from the private S3 origin using Origin Access Control (OAC).
The browser executes script.js.
script.js sends an asynchronous fetch() request to API Gateway.
API Gateway invokes the Lambda function.
Lambda reads and increments the visitor count stored in DynamoDB.
Lambda returns the updated count as JSON.
API Gateway returns the response to the browser.
JavaScript updates the visitor-count element.
📋 Project Overview

The Cloud Resume Challenge is a hands-on project designed to bridge the gap between theoretical cloud concepts and practical engineering.

The project started as a static HTML/CSS/JavaScript resume and was progressively transformed into a serverless AWS application.

Key Engineering Focus Areas
Modular Integration — building and testing individual components before full integration.
Security — S3 Block Public Access, private CloudFront origins, IAM permissions, and CORS configuration.
Systematic Troubleshooting — diagnosing AWS CLI authentication, regional configuration, CloudFront, API, and CORS issues.
Infrastructure as Code — importing an existing AWS resource into a version-controlled CloudFormation stack.
Version Control — tracking application and infrastructure changes with Git and GitHub.
Documentation — recording architecture, implementation decisions, problems, root causes, and solutions.
📊 Project Status
Status	Milestone	Date
✅	HTML Resume Structure	02 August 2026
✅	CSS Responsive Styling	02 August 2026
✅	JavaScript Foundation	02 August 2026
✅	GitHub Repository Setup	02 August 2026
✅	GitHub Pages Initial Deployment	02 August 2026
✅	Visitor Counter Frontend Logic	02 August 2026
✅	AWS CLI Authentication & Region Troubleshooting	15 August 2026
✅	Amazon S3 Deployment	15 August 2026
✅	Amazon CloudFront Distribution	15 August 2026
✅	Private S3 Access	15 August 2026
✅	Amazon API Gateway	15 August 2026
✅	AWS Lambda Backend	15 August 2026
✅	Amazon DynamoDB Persistence	15 August 2026
✅	JavaScript API Integration	15 August 2026
✅	API Gateway CORS Resolution	15 August 2026
✅	End-to-End Visitor Counter Verification	15 August 2026
✅	CloudFormation Infrastructure Import & Update	23 August 2026
🔄	IAM Least-Privilege Review	In Progress
⏳	Custom Domain & DNS (Route 53)	Planned
⏳	SSL/TLS Certificate (ACM)	Planned
⏳	GitHub Actions CI/CD	Planned
⏳	Terraform Infrastructure	Planned
🛠️ Core Technologies
Frontend
HTML5
CSS3
JavaScript
Fetch API
Responsive web design
AWS
Amazon S3
Amazon CloudFront
Amazon API Gateway
AWS Lambda
Amazon DynamoDB
AWS IAM
AWS CloudFormation
AWS CLI
AWS Region: af-south-1
DevOps & Version Control
Git
GitHub
YAML
AWS CloudFormation
Terraform — planned
GitHub Actions — planned
📂 Project Structure
cloud-resume-challenge/
│
├── AWS/
│   ├── playbooks/
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
⚙️ Implementation
Frontend
HTML

The resume uses semantic HTML5 to structure:

Professional Summary
Technical Skills
Professional Experience
Education
Certifications
Cloud Projects
AWS Visitor Counter
CSS

CSS provides:

Responsive layout
Visual styling
Readability improvements
Separation of presentation from HTML structure
JavaScript

JavaScript provides the client-side visitor-counter functionality.

script.js uses fetch() to call API Gateway asynchronously and update the visitor count in the page.

Defensive error handling was implemented so that API failures do not leave the page permanently displaying a loading state.

☁️ AWS Hosting & Content Delivery
Amazon S3

Bucket: cameron-cloud-resume-2026

Region: af-south-1

The S3 bucket stores the static resume assets:

cameron-cloud-resume-2026/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
S3 Security
S3 Block Public Access is enabled.
The bucket is not exposed as a public website endpoint.
CloudFront provides the public delivery layer.
CloudFront accesses the private S3 origin using Origin Access Control (OAC).
Amazon CloudFront

CloudFront provides global HTTPS delivery for the resume.

Distribution: cameron-cloud-resume

Default root object: index.html

Current endpoint:

https://d2kecljl2gk63a.cloudfront.net

A custom domain and ACM certificate are planned for a later stage.

🔢 Serverless Visitor Counter
API Gateway

API: CloudResumeVisitorCounter-API

Route: ANY /CloudResumeVisitorCounter

Endpoint:

https://yfsnyqf9rg.execute-api.af-south-1.amazonaws.com/default/CloudResumeVisitorCounter

API Gateway provides the public API boundary between the browser and Lambda backend.

AWS Lambda

Lambda provides the serverless application layer.

The function:

Receives the API request.
Reads the visitor count from DynamoDB.
Increments the count.
Writes the updated value.
Returns the count as JSON.

Example development response:

{
  "count": 25
}

The value above represents a development/live verification result and is not intended to represent a permanently fixed visitor count.

Amazon DynamoDB

DynamoDB provides persistent storage for the visitor counter.

The counter persists between API requests without requiring a traditional web server or relational database.

CORS Resolution

During development, direct API testing succeeded but browser-based JavaScript requests initially failed because of CORS.

The browser reported an error similar to:

Access to fetch ... has been blocked by CORS policy
No 'Access-Control-Allow-Origin' header is present

The issue was resolved by configuring CORS in API Gateway.

This demonstrated the difference between an API responding successfully when accessed directly and an API being accessible from browser-based JavaScript.

🔧 AWS CLI Troubleshooting

One of the most useful troubleshooting exercises involved AWS CLI authentication.

Initial Error
InvalidClientTokenId:
The security token included in the request is invalid
Diagnostics

The investigation included checking:

IAM credentials
Access-key status
AWS CLI configuration
Environment variables
AWS_SESSION_TOKEN
Proxy configuration
AWS endpoints
System time
AWS CLI version
AWS region configuration

AWS CLI version used during troubleshooting:

AWS CLI 2.36.19

Target region:

af-south-1
Root Cause

The Africa (Cape Town) af-south-1 region was not enabled for the AWS account.

After enabling the region, authentication was successfully verified with:

aws sts get-caller-identity --region af-south-1
Lesson Learned

Valid AWS credentials do not necessarily mean every AWS request will succeed.

AWS account configuration and the target region must also be verified when troubleshooting authentication and API errors.

📄 Infrastructure as Code — AWS CloudFormation

The project began with manually deployed AWS infrastructure and was later transitioned toward Infrastructure as Code.

The CloudFormation template is located at:

AWS/template.yaml
CloudFormation Template
AWSTemplateFormatVersion: '2010-09-09'

Description: Infrastructure definition for Cloud Resume Challenge

Parameters:
  BucketName:
    Type: String
    Default: cameron-cloud-resume-2026
    Description: Name of the existing S3 bucket used by the Cloud Resume

Resources:
  ResumeBucket:
    Type: AWS::S3::Bucket
    DeletionPolicy: Retain
    UpdateReplacePolicy: Retain
    Properties:
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        BlockPublicPolicy: true
        IgnorePublicAcls: true
        RestrictPublicBuckets: true
Resource Adoption & Import

The S3 bucket already existed before CloudFormation was introduced.

An initial stack creation therefore produced a resource-exists conflict because:

cameron-cloud-resume-2026

was already present.

Rather than deleting or recreating the live bucket, the existing S3 resource was imported into CloudFormation using an IMPORT Change Set.

The process involved:

Defining the ResumeBucket logical resource.
Validating the CloudFormation template.
Creating an IMPORT Change Set.
Mapping the existing S3 bucket to ResumeBucket.
Importing the resource into the cloud-resume-infrastructure stack.
Applying the updated S3 security configuration.
Verifying the stack update completed successfully.

Template validation was performed with:

aws cloudformation validate-template --template-body file://AWS/template.yaml

The CloudFormation resource reached:

ResumeBucket | AWS::S3::Bucket | UPDATE_COMPLETE
Resource Protection

The template uses:

DeletionPolicy: Retain
UpdateReplacePolicy: Retain

These policies help protect the existing resume bucket from accidental deletion or replacement.

🛡️ Security Implementation

Current security controls include:

S3 Block Public Access enabled.
Private S3 origin behind CloudFront.
CloudFront HTTPS delivery.
Origin Access Control (OAC) for S3 access.
API Gateway as the public API boundary.
IAM permissions controlling AWS resources.
CORS configured for browser-based API access.
CloudFormation retention policies protecting the S3 resource.
IAM least-privilege review as the next security improvement.
🔄 Development Workflow

The project follows an iterative engineering cycle:

Build
  ↓
Test
  ↓
Review
  ↓
Troubleshoot
  ↓
Improve
  ↓
Commit
  ↓
Document

Git and GitHub are used to track meaningful application and infrastructure changes.

Local Development
       ↓
      Git
       ↓
GitHub Repository
       ↓
AWS Deployment
       ↓
S3 → CloudFront

AI-assisted guidance was used as a learning aid, while implementation, testing, troubleshooting, and verification were performed as part of the hands-on development process.

🧪 Testing & Verification

The project was tested progressively rather than only at the final stage.

Testing included:

Frontend rendering
GitHub Pages deployment
S3 deployment
CloudFront delivery
Private S3 access
API Gateway endpoint testing
Lambda execution
DynamoDB persistence
Browser CORS behaviour
End-to-end visitor counter operation
CloudFormation template validation
CloudFormation resource import
CloudFormation stack updates
Live website verification after infrastructure changes

The live visitor counter successfully operated through the deployed AWS architecture during verification.

🗺️ Roadmap
Phase 1 — Infrastructure & Security
 Deploy frontend to S3
 Configure CloudFront
 Implement private S3 access
 Implement API Gateway
 Implement Lambda
 Implement DynamoDB visitor counter
 Configure CORS
 Import S3 into CloudFormation
 Apply S3 Block Public Access through CloudFormation
 Verify visitor counter
 Final IAM least-privilege review
Phase 2 — Custom Domain
 Register/configure domain
 Configure Route 53 DNS
 Request ACM certificate
 Attach certificate to CloudFront
 Configure custom resume domain
Phase 3 — CI/CD
 Configure GitHub Actions
 Automate S3 deployment
 Automate CloudFront cache invalidation
 Document deployment pipeline
Phase 4 — Terraform
 Build Terraform configuration
 Define providers and resources
 Configure variables and outputs
 Learn Terraform state management
 Compare Terraform with CloudFormation
 Document infrastructure lifecycle management
Phase 5 — Portfolio Finalization
 Final architecture diagram
 Security documentation
 CI/CD documentation
 Infrastructure as Code documentation
 Final project review
 Portfolio-ready project presentation
🎯 Key Learning Outcomes

This project has provided practical experience with:

Cloud Architecture
Serverless architecture
Static website delivery
CDN-based content delivery
API-driven application design
Managed AWS services
AWS
Amazon S3
Amazon CloudFront
Amazon API Gateway
AWS Lambda
Amazon DynamoDB
AWS IAM
AWS CLI
AWS CloudFormation
Security
S3 Block Public Access
Private S3 origins
Origin Access Control
IAM permissions
CORS
Least-privilege principles
Resource retention policies
DevOps
Git
GitHub
Incremental commits
Infrastructure as Code
CloudFormation resource import
AWS CLI automation
CI/CD planning
Problem Solving

The project reinforced the importance of:

Testing individual layers independently.
Reading error messages carefully.
Verifying assumptions.
Understanding service dependencies.
Finding root causes rather than repeatedly applying fixes.
Documenting both problems and solutions.
🏆 Project Achievement

The project progressed from a simple static resume into a working serverless AWS application.

The current architecture is:

Frontend
   │
   ▼
CloudFront
   │
   ▼
Private S3
   │
   │ JavaScript API request
   ▼
API Gateway
   │
   ▼
Lambda
   │
   ▼
DynamoDB

The visitor counter has been successfully tested end-to-end from the deployed resume.

The existing S3 bucket was subsequently imported into CloudFormation and successfully updated through Infrastructure as Code without disrupting the live application.

This provides a practical foundation for the next stages:

secure → reproducible → automated → production-ready

🎯 Final Objective

The Cloud Resume Challenge is being used as a practical foundation for developing cloud engineering and cybersecurity-oriented skills.

The project demonstrates practical exposure to:

AWS cloud architecture
Serverless application design
Cloud security
IAM
API integration
Database services
Infrastructure as Code
Git/GitHub
AWS CLI
Troubleshooting
Cloud deployment
Technical documentation

Rather than treating the challenge as a one-time website project, this repository documents the progression from a simple frontend application to a more secure, reproducible, and automated cloud architecture.


### Then save and run exactly these commands

After the paste:

**1. Save the file**

`Ctrl + S`

**2. In the terminal:**

```bash
git status

You should see:

modified: README.md

Then:

git add README.md AWS/template.yaml js/script.js

Then:

git status

You should see all three under Changes to be committed.

Then:

git commit -m "Improve Cloud Resume documentation and infrastructure"

Finally:

git push origin main

Then refresh your GitHub repository.

This version is specifically cleaned up for GitHub Markdown — proper headings, proper tables, properly closed code blocks, no **/\* corruption, and no accidental Markdown nesting.

And importantly, you only need to copy the single large code block above once and paste it once into README.md.