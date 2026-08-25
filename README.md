```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cloud Resume Challenge | AWS</title>

    <meta
        name="description"
        content="AWS Cloud Resume Challenge demonstrating cloud architecture, serverless services, Infrastructure as Code and cloud deployment."
    >

    <style>
        :root {
            --bg: #f5f7fa;
            --card: #ffffff;
            --text: #1f2937;
            --muted: #64748b;
            --heading: #0f172a;
            --border: #dbe3ec;
            --accent: #2563eb;
            --accent-light: #eff6ff;
            --success: #15803d;
            --success-bg: #dcfce7;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.7;
        }

        .container {
            width: min(1050px, 92%);
            margin: auto;
        }

        header {
            background: var(--heading);
            color: white;
            padding: 70px 0;
        }

        .eyebrow {
            color: #93c5fd;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.8rem;
            font-weight: bold;
            margin-bottom: 12px;
        }

        h1 {
            font-size: clamp(2.4rem, 5vw, 4rem);
            line-height: 1.1;
            margin-bottom: 20px;
        }

        .hero-text {
            max-width: 800px;
            color: #dbeafe;
            font-size: 1.08rem;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 25px;
        }

        .tag {
            padding: 7px 12px;
            border: 1px solid rgba(255,255,255,0.25);
            border-radius: 999px;
            background: rgba(255,255,255,0.08);
            font-size: 0.85rem;
        }

        nav {
            background: white;
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 10;
        }

        nav .container {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            padding: 10px 0;
        }

        nav a {
            color: var(--text);
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 0.9rem;
            text-decoration: none;
        }

        nav a:hover {
            background: var(--accent-light);
            color: var(--accent);
        }

        main {
            padding: 40px 0 70px;
        }

        section {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 24px;
            box-shadow: 0 5px 18px rgba(15, 23, 42, 0.05);
        }

        h2 {
            color: var(--heading);
            font-size: 1.65rem;
            margin-bottom: 15px;
        }

        h3 {
            color: var(--heading);
            margin: 20px 0 8px;
        }

        p {
            margin-bottom: 14px;
        }

        .lead {
            color: var(--muted);
            font-size: 1.05rem;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .card {
            padding: 20px;
            background: #f8fafc;
            border: 1px solid var(--border);
            border-radius: 9px;
        }

        .card h3 {
            margin-top: 0;
        }

        .card p {
            color: var(--muted);
            font-size: 0.92rem;
        }

        ul {
            margin: 10px 0 15px 22px;
        }

        li {
            margin-bottom: 6px;
        }

        .architecture {
            background: #f8fafc;
            border: 1px solid var(--border);
            padding: 20px;
            border-radius: 9px;
            overflow-x: auto;
            margin-top: 20px;
        }

        pre {
            font-family: Consolas, Monaco, monospace;
            line-height: 1.5;
        }

        .status {
            display: inline-block;
            background: var(--success-bg);
            color: var(--success);
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 999px;
            font-size: 0.78rem;
        }

        .callout {
            background: var(--accent-light);
            border-left: 4px solid var(--accent);
            padding: 16px 18px;
            margin-top: 20px;
            border-radius: 0 7px 7px 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th,
        td {
            padding: 11px 13px;
            border: 1px solid var(--border);
            text-align: left;
        }

        th {
            background: #f8fafc;
            color: var(--heading);
        }

        footer {
            background: var(--heading);
            color: #cbd5e1;
            text-align: center;
            padding: 35px 0;
        }

        footer a {
            color: #93c5fd;
        }

        @media (max-width: 650px) {
            section {
                padding: 22px;
            }

            nav .container {
                overflow-x: auto;
                flex-wrap: nowrap;
            }

            nav a {
                white-space: nowrap;
            }
        }
    </style>
</head>

<body>

<header>
    <div class="container">

        <div class="eyebrow">AWS Cloud Portfolio Project</div>

        <h1>Cloud Resume Challenge</h1>

        <p class="hero-text">
            A practical AWS cloud project demonstrating cloud architecture,
            serverless services, Infrastructure as Code, frontend development,
            version control and cloud deployment.
        </p>

        <div class="tags">
            <span class="tag">AWS</span>
            <span class="tag">CloudFormation</span>
            <span class="tag">S3</span>
            <span class="tag">CloudFront</span>
            <span class="tag">Lambda</span>
            <span class="tag">API Gateway</span>
            <span class="tag">DynamoDB</span>
            <span class="tag">IAM</span>
            <span class="tag">GitHub</span>
        </div>

    </div>
</header>

<nav>
    <div class="container">
        <a href="#overview">Overview</a>
        <a href="#architecture">Architecture</a>
        <a href="#services">AWS Services</a>
        <a href="#skills">Skills</a>
        <a href="#status">Status</a>
        <a href="#next">Next Steps</a>
    </div>
</nav>

<main class="container">

    <!-- OVERVIEW -->
    <section id="overview">

        <h2>Project Overview</h2>

        <p class="lead">
            This Cloud Resume Challenge was built as a practical demonstration
            of AWS cloud skills rather than simply as a static online resume.
        </p>

        <p>
            The project combines a responsive HTML/CSS/JavaScript resume with
            AWS cloud services to create a working serverless application.
            Infrastructure is managed through AWS CloudFormation and the
            source code is maintained using Git and GitHub.
        </p>

        <div class="callout">
            <strong>Objective:</strong>
            Demonstrate the ability to design, deploy, troubleshoot and
            document a real cloud-based application.
        </div>

    </section>

    <!-- ARCHITECTURE -->
    <section id="architecture">

        <h2>Architecture</h2>

        <p>
            The project uses a serverless AWS architecture consisting of a
            static frontend and a serverless backend for the visitor counter.
        </p>

        <div class="architecture">
<pre>
                    ┌─────────────────┐
                    │     Browser     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   CloudFront    │
                    │  HTTPS / CDN    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │      S3         │
                    │ Static Website  │
                    └─────────────────┘


        Visitor Counter Request
                    │
                    ▼
             ┌──────────────┐
             │ API Gateway  │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │    Lambda    │
             │    Python    │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │  DynamoDB    │
             │ Visitor Data │
             └──────────────┘
</pre>
        </div>

    </section>

    <!-- SERVICES -->
    <section id="services">

        <h2>AWS Services</h2>

        <div class="cards">

            <div class="card">
                <h3>Amazon S3</h3>
                <p>
                    Stores the static resume website files.
                </p>
            </div>

            <div class="card">
                <h3>Amazon CloudFront</h3>
                <p>
                    Provides content delivery and HTTPS access.
                </p>
            </div>

            <div class="card">
                <h3>API Gateway</h3>
                <p>
                    Provides the API endpoint for the visitor counter.
                </p>
            </div>

            <div class="card">
                <h3>AWS Lambda</h3>
                <p>
                    Processes visitor-counter requests using serverless
                    compute.
                </p>
            </div>

            <div class="card">
                <h3>Amazon DynamoDB</h3>
                <p>
                    Stores the visitor counter data.
                </p>
            </div>

            <div class="card">
                <h3>AWS IAM</h3>
                <p>
                    Controls access and permissions between AWS resources.
                </p>
            </div>

            <div class="card">
                <h3>AWS CloudFormation</h3>
                <p>
                    Defines and manages infrastructure as code.
                </p>
            </div>

            <div class="card">
                <h3>GitHub</h3>
                <p>
                    Provides source control, project management and
                    documentation.
                </p>
            </div>

        </div>

    </section>

    <!-- TECHNICAL SKILLS -->
    <section id="skills">

        <h2>Technical Skills Demonstrated</h2>

        <ul>
            <li>Cloud architecture and AWS service integration</li>
            <li>Serverless application design</li>
            <li>Amazon S3 static content hosting</li>
            <li>Amazon CloudFront content delivery</li>
            <li>API Gateway and REST API integration</li>
            <li>AWS Lambda with Python and boto3</li>
            <li>Amazon DynamoDB</li>
            <li>IAM and cloud security fundamentals</li>
            <li>AWS CloudFormation / Infrastructure as Code</li>
            <li>HTML, CSS and JavaScript</li>
            <li>Git and GitHub</li>
            <li>AWS CLI</li>
            <li>Cloud troubleshooting and debugging</li>
            <li>Cloud cost awareness</li>
        </ul>

    </section>

    <!-- FRONTEND -->
    <section>

        <h2>Frontend</h2>

        <p>
            The resume frontend was built using standard web technologies and
            completed before the AWS backend implementation.
        </p>

        <table>

            <thead>
                <tr>
                    <th>Technology</th>
                    <th>Purpose</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>HTML5</td>
                    <td>Resume structure and content</td>
                </tr>

                <tr>
                    <td>CSS3</td>
                    <td>Styling and responsive layout</td>
                </tr>

                <tr>
                    <td>JavaScript</td>
                    <td>Dynamic functionality and API integration</td>
                </tr>
            </tbody>

        </table>

    </section>

    <!-- CLOUDFORMATION -->
    <section>

        <h2>Infrastructure as Code</h2>

        <p>
            AWS CloudFormation was introduced to manage infrastructure through
            code rather than relying exclusively on manual AWS Console
            configuration.
        </p>

        <p>
            The infrastructure template is maintained in:
        </p>

        <pre class="architecture">
AWS/template.yaml
        </pre>

        <p>
            CloudFormation validation and AWS CLI commands were used during
            development, and an existing S3 resource was successfully brought
            under CloudFormation management through resource import.
        </p>

    </section>

    <!-- SECURITY -->
    <section>

        <h2>Security Considerations</h2>

        <ul>
            <li>IAM permissions and least-privilege principles</li>
            <li>S3 access controls</li>
            <li>API Gateway CORS configuration</li>
            <li>Lambda permissions</li>
            <li>DynamoDB access</li>
            <li>CloudFront HTTPS delivery</li>
            <li>AWS account and CLI credential management</li>
        </ul>

    </section>

    <!-- STATUS -->
    <section id="status">

        <h2>Project Status</h2>

        <table>

            <thead>
                <tr>
                    <th>Component</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td>HTML Resume</td>
                    <td><span class="status">Completed</span></td>
                </tr>

                <tr>
                    <td>CSS Styling</td>
                    <td><span class="status">Completed</span></td>
                </tr>

                <tr>
                    <td>JavaScript</td>
                    <td><span class="status">Completed</span></td>
                </tr>

                <tr>
                    <td>GitHub Repository</td>
                    <td><span class="status">Completed</span></td>
                </tr>

                <tr>
                    <td>GitHub Pages</td>
                    <td><span class="status">Completed</span></td>
                </tr>

                <tr>
                    <td>Amazon S3</td>
                    <td><span class="status">Implemented</span></td>
                </tr>

                <tr>
                    <td>Amazon CloudFront</td>
                    <td><span class="status">Implemented</span></td>
                </tr>

                <tr>
                    <td>API Gateway</td>
                    <td><span class="status">Implemented</span></td>
                </tr>

                <tr>
                    <td>AWS Lambda</td>
                    <td><span class="status">Implemented</span></td>
                </tr>

                <tr>
                    <td>DynamoDB</td>
                    <td><span class="status">Implemented</span></td>
                </tr>

                <tr>
                    <td>CloudFormation</td>
                    <td><span class="status">Implemented</span></td>
                </tr>

                <tr>
                    <td>IAM Security</td>
                    <td><span class="status">Ongoing</span></td>
                </tr>

                <tr>
                    <td>CI/CD Automation</td>
                    <td><span class="status">Next Stage</span></td>
                </tr>

                <tr>
                    <td>Terraform</td>
                    <td><span class="status">Planned</span></td>
                </tr>

            </tbody>

        </table>

    </section>

    <!-- TROUBLESHOOTING -->
    <section>

        <h2>Practical Troubleshooting</h2>

        <p>
            The project provided practical experience troubleshooting real
            cloud deployment issues, including:
        </p>

        <ul>
            <li>AWS CLI authentication and region configuration issues</li>
            <li>CloudFormation validation and rollback problems</li>
            <li>CloudFormation resource import</li>
            <li>API Gateway CORS errors</li>
            <li>CloudFront caching behaviour</li>
            <li>Browser caching during JavaScript updates</li>
            <li>HTTP 403 responses during asset testing</li>
        </ul>

        <div class="callout">
            <strong>Key takeaway:</strong>
            Troubleshooting became an important part of the project,
            reinforcing the need to understand how individual AWS services
            interact rather than treating them as isolated technologies.
        </div>

    </section>

    <!-- NEXT STEPS -->
    <section id="next">

        <h2>Next Steps</h2>

        <p>
            The completed project provides a foundation for continued cloud
            engineering development.
        </p>

        <ul>
            <li>Further IAM security refinement</li>
            <li>CI/CD automation</li>
            <li>Additional CloudFormation coverage</li>
            <li>Terraform Infrastructure as Code</li>
            <li>Further AWS cloud engineering projects</li>
            <li>Continued cloud security and governance development</li>
        </ul>

    </section>

    <!-- CONCLUSION -->
    <section>

        <h2>Conclusion</h2>

        <p>
            This project demonstrates practical experience building a working
            AWS cloud application from the frontend through to the backend,
            database and infrastructure layers.
        </p>

        <p>
            It provides a foundation for progressing from cloud fundamentals
            into Infrastructure as Code, DevOps, cloud security, cloud
            operations and eventually broader cloud governance and optimization.
        </p>

        <div class="callout">
            <strong>Project focus:</strong>
            Learn by building, troubleshoot real problems, document the
            architecture and continuously expand the implementation.
        </div>

    </section>

</main>

<footer>
    <div class="container">
        <p><strong>AWS Cloud Resume Challenge</strong></p>
        <p>Cloud Portfolio Project</p>
        <p>
            HTML • CSS • JavaScript • AWS • CloudFormation • GitHub
        </p>
    </div>
</footer>

</body>
</html>
```
