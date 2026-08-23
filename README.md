# Cloud Resume Challenge ☁️

A production-style serverless resume website built on AWS to demonstrate practical cloud engineering, serverless architecture, Infrastructure as Code, security, API integration, Git/GitHub, and systematic troubleshooting skills.

---

## 🚀 Live Project

* **Live Resume:** [https://d2kecljl2gk63a.cloudfront.net](https://d2kecljl2gk63a.cloudfront.net)
* **GitHub Repository:** [https://github.com/Cronos99-Cell/cloud-resume-challenge](https://github.com/Cronos99-Cell/cloud-resume-challenge)

The live resume is delivered globally through **Amazon CloudFront** and hosted using a private **Amazon S3** bucket. A serverless visitor counter is integrated using **Amazon API Gateway, AWS Lambda, and Amazon DynamoDB**.

---

## 🏗️ Architecture

```text
                         Internet
                            │
                            ▼
                     Amazon CloudFront
                            │
                    (Private S3 Access)
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
Request Flow
Visitor accesses the CloudFront URL over HTTPS.

CloudFront fetches static assets (index.html, style.css, script.js) from the private S3 origin using Origin Access Control (OAC).

Browser executes script.js, sending an asynchronous fetch() API call to API Gateway.

API Gateway passes the request to an AWS Lambda function.

Lambda reads and increments the counter in Amazon DynamoDB, returning the updated count as JSON.

API Gateway forwards the JSON response back to the client, and script.js dynamically updates the DOM element.

📋 Project Overview
The Cloud Resume Challenge is a hands-on project designed to move beyond theoretical cloud knowledge and demonstrate practical application delivery. The project originated as a static HTML/CSS/JavaScript resume and was systematically transformed into a serverless AWS application.

Key Engineering Focus Areas:

Modular Integration: Building and verifying individual components before full end-to-end integration.

Security Practices: Enforcing S3 Block Public Access, CloudFront private origins, and tight CORS policies.

Systematic Troubleshooting: Diagnosing root causes for AWS CLI authentication failures, regional activation issues, and CORS restrictions.

Infrastructure as Code (IaC): Importing pre-existing manually deployed resources into version-controlled AWS CloudFormation templates.

Status,Milestone,Date
✅,HTML Resume Structure,02 August 2026
✅,CSS Responsive Styling,02 August 2026
✅,JavaScript Foundation,02 August 2026
✅,GitHub Repository Setup,Completed
✅,GitHub Pages Initial Deployment,Completed
✅,Visitor Counter Frontend Integration,02 August 2026
✅,AWS CLI Auth & Region Troubleshooting,15 August 2026
✅,Amazon S3 Static Hosting Deployment,15 August 2026
✅,Amazon CloudFront Distribution Setup,15 August 2026
✅,Private S3 Access Configuration,15 August 2026
✅,Amazon API Gateway Setup,15 August 2026
✅,AWS Lambda Serverless Function,15 August 2026
✅,Amazon DynamoDB NoSQL Table,15 August 2026
✅,JavaScript API Integration (fetch),15 August 2026
✅,API Gateway CORS Policy Resolution,15 August 2026
✅,End-to-End Visitor Counter Verification,15 August 2026
✅,CloudFormation Infrastructure Import & Update,23 August 2026
🔄,IAM Least-Privilege Policy Audit,In Progress
⏳,Custom Domain & DNS Setup (Route 53),Planned
⏳,SSL/TLS Certificate Provisioning (ACM),Planned
⏳,Automated GitHub Actions CI/CD Pipeline,Planned
⏳,Multi-Cloud IaC Parity (Terraform),Planned

🛠️ Core Technologies
Frontend: HTML5, CSS3, JavaScript (ES6+ fetch API)

AWS Services: Amazon S3, Amazon CloudFront, Amazon API Gateway, AWS Lambda, Amazon DynamoDB, AWS IAM, AWS CloudFormation, AWS CLI (af-south-1)

DevOps & Version Control: Git, GitHub, YAML (AWS CloudFormation & Terraform planned)

📂 Project Structure
Plaintext
cloud-resume-challenge/
│
├── AWS/
│   ├── playbooks/
│   └── template.yaml       # AWS CloudFormation infrastructure definition
│
├── css/
│   └── style.css           # Responsive styling and design
│
├── js/
│   └── script.js           # Client-side API fetch logic and counter updates
│
├── index.html              # Main resume content structure
└── README.md               # Project documentation

⚙️ Frontend & Serverless Backend Implementation
Frontend Development
HTML: Built with semantic tags structured for summary, experience, certifications, skills, and the visitor counter display.

CSS: Responsive layout separating visual structure from semantic markup.

JavaScript: Executes client-side requests using standard fetch(). Includes defensive error handling to prevent UI locking if the API fails to return a response.

AWS Hosting & Content Delivery
Amazon S3 Bucket: cameron-cloud-resume-2026 (Region: af-south-1)

S3 Security: All public access is blocked (S3 Block Public Access). The bucket is not exposed as a public web endpoint.

Amazon CloudFront Distribution: cameron-cloud-resume serves files via HTTPS directly from the private S3 origin.

Serverless Visitor Counter
API Gateway Name: CloudResumeVisitorCounter-API

Route: ANY /CloudResumeVisitorCounter

Endpoint: https://yfsnyqf9rg.execute-api.af-south-1.amazonaws.com/default/CloudResumeVisitorCounter

AWS Lambda & DynamoDB: Lambda processes incoming REST requests, increments the persisted integer stored inside Amazon DynamoDB, and returns the response as JSON ({"count": 25}).

CORS Resolution: Fixed origin blocking policy by configuring valid Access-Control-Allow-Origin headers on API Gateway responses.

🔧 AWS CLI Troubleshooting & Root Cause Analysis
Problem Identification
During initial CLI deployment attempts, commands failed with:
InvalidClientTokenId: The security token included in the request is invalid

Diagnostics Performed
Verified IAM user access keys and secret tokens.

Verified active IAM credentials status.

Tested AWS environment variable overrides (AWS_SESSION_TOKEN).

Confirmed network proxy and endpoint configurations.

Checked system time synchronization and AWS CLI release version (AWS CLI 2.36.19).

Evaluated active region configuration (af-south-1).

Root Cause & Fix
The target region Africa (Cape Town) — af-south-1 was not enabled on the AWS account level. Enabling the region resolved authentication issues immediately, confirmed via:
Bash
aws sts get-caller-identity --region af-south-1

📄 Infrastructure as Code (CloudFormation)
The core S3 bucket infrastructure is managed as code under AWS/template.yaml.

Template Definition
YAML
AWSTemplateFormatVersion: '2010-09-09'
Description: Infrastructure for Cloud Resume Challenge

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
Resource Adoption & Import Process
Because the S3 bucket already existed prior to implementing IaC, initial stack deployment produced a resource collision error (Resource of type 'AWS::S3::Bucket' with identifier 'cameron-cloud-resume-2026' already exists).

Rather than tearing down live assets, the bucket was imported into CloudFormation using an IMPORT Change Set:

Defined logical resource ResumeBucket inside template.yaml.

Validated syntax using aws cloudformation validate-template --template-body file://template.yaml.

Executed an import operation to bring the existing S3 resource under the cloud-resume-infrastructure stack.

Applied DeletionPolicy: Retain and updated the bucket configuration to enforce S3 Block Public Access (UPDATE_COMPLETE).

🔄 Development Approach & Workflow
The project follows an iterative cycle:

Plaintext
Build ──► Test ──► Review ──► Troubleshoot ──► Improve ──► Commit ──► Document
Version Control Strategy
Git and GitHub track incremental commits across both code and infrastructure templates:

Plaintext
Local Development ──► Git ──► GitHub Repository ──► AWS Deployment (S3/CloudFront)
🛡️ Security Implementation
S3 Security: Block Public Access enabled; direct access disabled.

CDN Edge Access: Content served exclusively through CloudFront HTTPS.

API Boundary: API Gateway exposes only designated routes.

Least Privilege: IAM roles restricted (IAM least-privilege audit in progress).

Resource Retention: Explicit CloudFormation retention policies applied to prevent accidental deletion.

🗺️ Future Roadmap
Phase 1 — Infrastructure & Security: Finalize IAM least-privilege review for the Lambda function.

Phase 2 — Custom Domain & DNS: Provision Route 53 DNS records and SSL/TLS certificates via AWS Certificate Manager (ACM).

Phase 3 — CI/CD Automation: Construct a GitHub Actions pipeline to automatically deploy frontend updates to S3 and invalidate CloudFront edge caches.

Phase 4 — Multi-Cloud IaC Parity: Develop a parallel Terraform workflow to contrast state management and declarative syntax against AWS CloudFormation.

Phase 5 — Portfolio Finalization: Document complete architecture diagrams, operational procedures, and security decisions.