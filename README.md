# Cloud Resume Challenge ☁️

A serverless resume website built on AWS to demonstrate practical cloud engineering, AWS services, Infrastructure as Code, security, API integration, Git/GitHub, and troubleshooting.

## 🚀 Live Project

**Live Resume:**  
https://d2kecljl2gk63a.cloudfront.net

**GitHub Repository:**  
https://github.com/Cronos99-Cell/cloud-resume-challenge

---

## 🏗️ Architecture

```text
                    Internet
                       │
                       ▼
                Amazon CloudFront
                       │
                Private S3 Origin
                    (OAC)
                       │
                       ▼
                   Amazon S3
                       │
                 Static Resume
                       │
              JavaScript fetch()
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
                Visitor Counter

Request Flow
Visitor accesses the resume through CloudFront.
CloudFront retrieves the static files from the private S3 bucket.
JavaScript sends a request to API Gateway.
API Gateway invokes Lambda.
Lambda reads and increments the DynamoDB visitor counter.
The updated count is returned to the browser.
📊 Project Status
Milestone	Status	Date
HTML Resume	✅ Complete	02 Aug 2026
CSS & Responsive Design	✅ Complete	02 Aug 2026
JavaScript Visitor Counter	✅ Complete	02 Aug 2026
AWS CLI & Region Troubleshooting	✅ Complete	15 Aug 2026
S3 Deployment	✅ Complete	15 Aug 2026
CloudFront Distribution	✅ Complete	15 Aug 2026
Private S3 Access	✅ Complete	15 Aug 2026
API Gateway	✅ Complete	15 Aug 2026
Lambda	✅ Complete	15 Aug 2026
DynamoDB	✅ Complete	15 Aug 2026
CORS Configuration	✅ Complete	15 Aug 2026
Visitor Counter Verification	✅ Complete	15 Aug 2026
CloudFormation Resource Import	✅ Complete	23 Aug 2026
IAM Least-Privilege Review	🔄 Next	
Custom Domain & DNS	⏳ Planned	
GitHub Actions CI/CD	⏳ Planned	
Terraform Infrastructure	⏳ Planned	
🛠️ Technologies
Frontend
HTML5
CSS3
JavaScript
Fetch API
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
DevOps
Git
GitHub
YAML
CloudFormation
Terraform (planned)
GitHub Actions (planned) 

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

☁️ AWS Infrastructure
Amazon S3

The resume files are stored in:

cameron-cloud-resume-2026

Region:

af-south-1

The bucket has S3 Block Public Access enabled and is accessed privately through CloudFront.

Amazon CloudFront

CloudFront provides HTTPS delivery and global edge caching.

The S3 origin uses Origin Access Control (OAC) to prevent direct public access to the bucket.

Serverless Visitor Counter

The visitor counter uses:

Browser
   ↓
API Gateway
   ↓
Lambda
   ↓
DynamoDB

📄 Infrastructure as Code

AWS CloudFormation was introduced after the initial infrastructure had already been deployed manually.

The existing S3 bucket was imported into CloudFormation using an IMPORT Change Set rather than deleting and recreating the live resource.

Template:

AWS/template.yaml

The template applies:

S3 Block Public Access
DeletionPolicy: Retain
UpdateReplacePolicy: Retain

The CloudFormation resource was successfully imported and updated without disrupting the live application.

🔧 Troubleshooting Experience

During development, several AWS issues required root-cause analysis.

AWS CLI Authentication

Initial AWS CLI commands returned:

🔧 Troubleshooting Experience

During development, several AWS issues required root-cause analysis.

AWS CLI Authentication

Initial AWS CLI commands returned:

InvalidClientTokenId:
The security token included in the request is invalid

After investigating credentials, environment variables, system time, CLI configuration and region settings, the root cause was identified as the af-south-1 region not being enabled for the AWS account.

The configuration was corrected and verified using:

aws sts get-caller-identity --region af-south-1

CORS

The visitor counter initially failed from browser JavaScript because of CORS restrictions.

The issue was diagnosed and resolved by configuring the appropriate CORS response headers through API Gateway.

🛡️ Security

Current security measures include:

S3 Block Public Access
Private S3 origin
CloudFront Origin Access Control
HTTPS delivery through CloudFront
IAM permissions for AWS resources
API Gateway as the public API boundary
CORS configuration
CloudFormation resource retention policies
Least-privilege IAM review planned

🧪 Testing

The application was progressively tested across individual components and the complete architecture.

Testing included:

Frontend rendering
S3 deployment
CloudFront delivery
Private S3 access
API Gateway
Lambda execution
DynamoDB persistence
Browser CORS behaviour
End-to-end visitor counter
CloudFormation template validation
CloudFormation resource import
CloudFormation stack updates
Live website verification

🔄 Development Workflow

Build
  ↓
Test
  ↓
Troubleshoot
  ↓
Improve
  ↓
Commit
  ↓
Document

Git and GitHub are used to track application and infrastructure changes.

🗺️ Roadmap
Phase 1 — Security
Complete IAM least-privilege review
Phase 2 — Custom Domain
Route 53 DNS
AWS Certificate Manager
Custom HTTPS domain
Phase 3 — CI/CD
GitHub Actions
Automated S3 deployment
CloudFront cache invalidation
Phase 4 — Terraform
Recreate infrastructure using Terraform
Learn Terraform state management
Compare Terraform and CloudFormation
Phase 5 — Portfolio
Final architecture documentation
Security documentation
CI/CD documentation
Final project presentation

🎯 Key Learning Outcomes

This project provided practical experience with:

AWS cloud architecture
Serverless application design
S3 and CloudFront
API Gateway and Lambda
DynamoDB
IAM and cloud security
Infrastructure as Code
CloudFormation resource import
AWS CLI
Git and GitHub
Troubleshooting and root-cause analysis
Technical documentation

🏆 Project Achievement

The project evolved from a static HTML resume into a working serverless AWS application.

The final architecture combines:

CloudFront → Private S3

and

API Gateway → Lambda → DynamoDB

The live visitor counter has been tested end-to-end, and the existing S3 infrastructure has successfully been brought under CloudFormation management without disrupting the application.

The next stage is to make the infrastructure increasingly secure, reproducible and automated.
