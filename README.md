# Cloud Resume Challenge

## Project Overview

This repository documents my implementation of the Cloud Resume Challenge, a hands-on project designed to develop practical cloud engineering skills by building and deploying a serverless resume website on AWS.

The project combines front-end development, cloud infrastructure, serverless computing, security, version control, and automation to demonstrate practical cloud engineering concepts.

---

# Project Progress

* ✅ HTML Resume
* ✅ CSS Styling
* ✅ JavaScript Foundation
* ✅ GitHub Repository
* ✅ GitHub Pages Deployment
* ✅ Visitor Counter Front-End Preparation
* ⏳ Amazon S3 Static Website Hosting
* ⏳ Amazon CloudFront Distribution
* ⏳ HTTPS with AWS Certificate Manager (ACM)
* ⏳ Amazon API Gateway
* ⏳ AWS Lambda
* ⏳ Amazon DynamoDB Visitor Counter
* ⏳ IAM Security Configuration
* ⏳ CI/CD Automation
* ⏳ Infrastructure as Code (Terraform)

---

# Front-End Development Completed ✅

**Completion Date:** 02 August 2026

The front-end portion of the Cloud Resume Challenge has been successfully completed.

The project was developed using an iterative approach, focusing on understanding each technology before moving to the next. Each component was built, tested, reviewed, and refined throughout the development process.

The resume currently includes a prepared visitor-counter interface that will later be connected to the AWS serverless backend.

---

# Development Approach

This project was completed using a practical, hands-on learning methodology supported by official documentation, experimentation, testing, troubleshooting, and AI-assisted guidance to better understand each implementation step.

The development process followed these stages:

1. Build one feature at a time.
2. Test functionality.
3. Review the implementation.
4. Troubleshoot and resolve issues.
5. Refactor where improvements were identified.
6. Commit working changes using Git.

The primary goal was to understand *why* each component was implemented rather than simply producing a finished website.

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
├── index.html          # Website structure
├── css/
│   └── style.css       # Styling
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # Project documentation
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

---

# Challenges & Problem Solving

During development I encountered and resolved several common front-end and version-control issues, including:

* File and folder organisation.
* Incorrect CSS and JavaScript asset paths.
* CSS and JavaScript linking.
* Git tracking and repository updates.
* GitHub Pages deployment validation.
* Preparing the front end for future API integration.

Resolving these issues improved my troubleshooting skills and reinforced the importance of incremental development.

---

# Key Lessons Learned

This stage of the project strengthened my understanding of:

* Semantic HTML and accessibility.
* Separation of HTML, CSS, and JavaScript.
* Clean project organisation.
* Git version control workflows.
* Incremental development and debugging.
* Preparing front-end applications for cloud integration.
* The importance of testing throughout the development process.

---

# Cloud Resume Challenge

The resume website is being developed as a serverless cloud project.

The planned architecture is:

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
 └── JavaScript
       │
       ▼
Amazon API Gateway
       │
       ▼
AWS Lambda
       │
       ▼
Amazon DynamoDB
```

The visitor counter will eventually use JavaScript to communicate with an API exposed through Amazon API Gateway. AWS Lambda will process the request and interact with Amazon DynamoDB to retrieve and update the visitor count.

The AWS backend has not yet been deployed. The current project contains the front-end foundation required for this integration.

---

# Current Status

The front-end has been successfully developed and deployed using GitHub Pages.

The project currently includes:

* A responsive HTML resume.
* CSS styling.
* JavaScript foundation.
* Git and GitHub version control.
* A prepared visitor-counter interface.
* Documentation of the planned AWS architecture.

The next stage is to begin implementing the AWS cloud infrastructure.

---

# Next Phase – AWS Cloud Implementation ☁️

The next stage of the project will focus on migrating the application to AWS and implementing the serverless architecture.

Planned services include:

* Amazon S3 for static website hosting.
* Amazon CloudFront for content delivery.
* AWS Certificate Manager (ACM) for SSL/TLS certificates.
* Amazon API Gateway to expose the visitor-counter API.
* AWS Lambda for serverless application logic.
* Amazon DynamoDB to store and update visitor counts.
* IAM roles and policies following least-privilege principles.
* JavaScript integration with the API.
* CI/CD automation.
* Infrastructure as Code using Terraform.

Each AWS component will be implemented, tested, and documented as the project progresses.

---

# Learning Objective

This project is focused on developing practical cloud engineering skills through hands-on implementation.

Rather than simply completing the challenge, the objective is to understand the architecture, technologies, security considerations, and design decisions behind each stage of the solution.

The project is intended to build practical experience in:

* Cloud infrastructure.
* Serverless architecture.
* AWS services.
* API development.
* Security and IAM.
* Version control.
* Automation.
* Infrastructure as Code.
* Troubleshooting and problem solving.

The project will continue to evolve as additional AWS services and automation are implemented.
