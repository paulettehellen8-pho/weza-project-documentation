/* Generated verbatim from WEZA_WI-FI_BILLING_SYSTEM.docx */
window.DECK = {
   "title": {
      "h1": "Weza Wi-Fi Project Scope",
      "meta": [
         {
            "k": "Project:",
            "v": "Weza Wi-Fi Billing System",
         },
         {
            "k": "Team:",
            "v": "Moringa School ECI Project Team",
         },
         {
            "k": "Team size:",
            "v": "6 full-stack developers",
         },
         {
            "k": "Project duration:",
            "v": "2–3 weeks",
         },
         {
            "k": "Project management:",
            "v": "Jira",
         },
         {
            "k": "Document status:",
            "v": "Proposed scope, awaiting team review and client confirmation",
         },
         {
            "k": "Date:",
            "v": "12 November 2026",
         },
      ],
   },
   "outline": "Outline.",
   "sections": [
      {
         "title": "1. Project Overview",
         "blocks": [
            {
               "t": "p",
               "html":
                  "We are building a new Wi-Fi billing and internet access management system for Weza Wi-Fi.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Customers will connect to Weza Wi-Fi, register, select an internet package, and pay via M-Pesa through Safaricom Daraja. The network will grant access automatically after payment verification.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "When a customer's package expires, the system will end their internet access.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Weza staff will have a separate dashboard to manage packages, view payments, monitor internet sessions, and investigate connection problems.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "We are building this system from scratch. Centipid Billing will serve as a reference for understanding existing Wi-Fi billing features.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Our priority is to solve a problem Weza raised during our meeting: customers sometimes lose several minutes of their purchased internet time while waiting to connect.",
               "keep": false,
            },
         ],
      },
      {
         "title": "2. Project Objectives",
         "blocks": [
            {
               "t": "p",
               "html":
                  "By the end of the project, we intend to deliver a working system where:",
               "keep": true,
            },
            {
               "t": "li",
               "html":
                  "Customers view and purchase available internet packages.",
               "n": 1,
            },
            {
               "t": "li",
               "html":
                  "M-Pesa payments are verified before internet access is granted.",
               "n": 2,
            },
            {
               "t": "li",
               "html":
                  "The system targets immediate usable internet access after payment verification. Weza and the project team will agree on a maximum elapsed time for pilot acceptance.",
               "n": 3,
            },
            {
               "t": "li",
               "html":
                  "Customers receive their full purchased internet duration.",
               "n": 4,
            },
            {
               "t": "li",
               "html":
                  "Internet access ends when the purchased package expires.",
               "n": 5,
            },
            {
               "t": "li",
               "html":
                  "Weza staff view payments, sessions, and connection problems through a dashboard.",
               "n": 6,
            },
            {
               "t": "p",
               "html":
                  "Our first delivery will focus on one working hotspot location.",
               "keep": false,
            },
         ],
      },
      {
         "title": "3. Features We Will Build",
         "blocks": [
            {
               "t": "h3",
               "html": "<strong>A. Customer Portal</strong>",
            },
            {
               "t": "p",
               "html":
                  "The customer portal is the page customers see when they connect to Weza Wi-Fi.",
               "keep": false,
            },
            {
               "t": "lead",
               "html": "<strong>Required features:</strong>",
               "keep": true,
            },
            {
               "t": "li",
               "html":
                  "Allow customers to register before purchasing a package.",
            },
            {
               "t": "li",
               "html": "Display available internet packages.",
            },
            {
               "t": "li",
               "html": "Show each package's price, speed, and duration.",
            },
            {
               "t": "li",
               "html": "Allow customers to select a package.",
            },
            {
               "t": "li",
               "html": "Allow customers to enter their M-Pesa phone number.",
            },
            {
               "t": "li",
               "html": "Initiate an M-Pesa payment request.",
            },
            {
               "t": "li",
               "html":
                  "Display payment status: pending, successful, or failed.",
            },
            {
               "t": "li",
               "html":
                  "Display connection status: waiting, active, expired, or failed.",
            },
            {
               "t": "li",
               "html":
                  "Display the remaining time for an active internet session.",
            },
            {
               "t": "li",
               "html":
                  "Allow customers to purchase another package after expiry.",
            },
            {
               "t": "p",
               "html":
                  "The portal must work on mobile phones and should be accessible before customers purchase internet.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "<strong>Expected result:</strong> A customer completes a purchase and gets online without staff assistance.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>B. Operator Dashboard</strong>",
            },
            {
               "t": "p",
               "html":
                  "The operator dashboard is the system Weza staff will use to manage the service.",
               "keep": false,
            },
            {
               "t": "lead",
               "html": "<strong>Required features:</strong>",
               "keep": true,
            },
            {
               "t": "li",
               "html": "Secure staff login.",
            },
            {
               "t": "li",
               "html":
                  "View internet packages in an editable table with columns for package name, price, speed, and duration.",
            },
            {
               "t": "li",
               "html": "Add packages and edit their details in the table.",
            },
            {
               "t": "li",
               "html": "View customer payment records.",
            },
            {
               "t": "li",
               "html": "View successful, pending, and failed payments.",
            },
            {
               "t": "li",
               "html": "View active and expired internet sessions.",
            },
            {
               "t": "li",
               "html":
                  "View customers whose payments succeeded but whose internet access failed.",
            },
            {
               "t": "li",
               "html":
                  "View the time payment was confirmed and the time access started.",
            },
            {
               "t": "li",
               "html": "View basic totals for payments and sessions.",
            },
            {
               "t": "p",
               "html":
                  "<strong>Expected result:</strong> Weza staff see what customers purchased, whether payment succeeded, and whether internet access was activated.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>C. Payment Integration</strong>",
            },
            {
               "t": "p",
               "html": "The system will support M-Pesa payments.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Weza has confirmed Safaricom Daraja for the pilot M-Pesa integration.",
               "keep": false,
            },
            {
               "t": "lead",
               "html": "<strong>Required features:</strong>",
               "keep": true,
            },
            {
               "t": "li",
               "html": "Initiate an M-Pesa payment request.",
            },
            {
               "t": "li",
               "html": "Receive and verify payment confirmation.",
            },
            {
               "t": "li",
               "html": "Save payment details in the database.",
            },
            {
               "t": "li",
               "html": "Connect each payment to the correct customer purchase.",
            },
            {
               "t": "li",
               "html":
                  "Grant internet access only after successful payment verification.",
            },
            {
               "t": "li",
               "html":
                  "Prevent repeated payment notifications from creating duplicate sessions.",
            },
            {
               "t": "li",
               "html": "Record failed and pending payments.",
            },
            {
               "t": "p",
               "html":
                  "Use the Daraja sandbox to test payment requests and confirmations. Confirm the available reversal or refund procedures and test conditions before including a reversal or refund in the test plan. If any test requires real funds, agree separately on who pays and how the funds will be handled. Refunds are subject to the applicable procedure and outcome.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "<strong>Expected result:</strong> Every successful payment is recorded correctly and triggers the appropriate internet activation process.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>D. Network Integration</strong>",
            },
            {
               "t": "p",
               "html":
                  "The network integration connects our application to the router or network management system.",
               "keep": false,
            },
            {
               "t": "lead",
               "html": "<strong>Required features:</strong>",
               "keep": true,
            },
            {
               "t": "li",
               "html": "Identify the customer's device or network session.",
            },
            {
               "t": "li",
               "html":
                  "Receive a verified request to activate internet access.",
            },
            {
               "t": "li",
               "html": "Grant access according to the purchased package.",
            },
            {
               "t": "li",
               "html": "Apply the package's speed limit.",
            },
            {
               "t": "li",
               "html": "Track when access becomes active.",
            },
            {
               "t": "li",
               "html": "Enforce the purchased session duration.",
            },
            {
               "t": "li",
               "html": "End access when the package expires.",
            },
            {
               "t": "li",
               "html": "Report whether activation succeeded or failed.",
            },
            {
               "t": "p",
               "html":
                  "MikroTik RouterOS remains the proposed integration. Daniel will provide a router or test environment. The team will confirm the equipment and supported integration before testing.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "The router must enforce access restrictions. A countdown displayed on the customer portal is not sufficient to control internet access.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "<strong>Expected result:</strong> A customer receives the correct speed and duration, and the network ends access when the package expires.",
               "keep": false,
            },
         ],
      },
      {
         "title": "4. How the Complete System Should Work",
         "blocks": [
            {
               "t": "p",
               "html":
                  "For our first demonstration, we will use a 10-minute internet package.",
               "keep": false,
            },
            {
               "t": "li",
               "html": "The customer connects to Weza Wi-Fi.",
               "n": 1,
            },
            {
               "t": "li",
               "html": "The customer portal opens.",
               "n": 2,
            },
            {
               "t": "li",
               "html": "The customer registers before selecting a package.",
               "n": 3,
            },
            {
               "t": "li",
               "html": "The customer selects the 10-minute package.",
               "n": 4,
            },
            {
               "t": "li",
               "html": "The customer enters their M-Pesa number.",
               "n": 5,
            },
            {
               "t": "li",
               "html": "The system sends a Daraja M-Pesa payment request.",
               "n": 6,
            },
            {
               "t": "li",
               "html":
                  "The customer completes the payment step in the test flow.",
               "n": 7,
            },
            {
               "t": "li",
               "html": "Our backend verifies payment confirmation.",
               "n": 8,
            },
            {
               "t": "li",
               "html": "The backend requests the router to activate access.",
               "n": 9,
            },
            {
               "t": "li",
               "html": "The router confirms activation.",
               "n": 10,
            },
            {
               "t": "li",
               "html":
                  "The customer's 10-minute session starts when access is active.",
               "n": 11,
            },
            {
               "t": "li",
               "html": "The customer browses using the purchased package.",
               "n": 12,
            },
            {
               "t": "li",
               "html": "The router ends access after the purchased duration.",
               "n": 13,
            },
            {
               "t": "li",
               "html":
                  "The operator dashboard records the payment and session details.",
               "n": 14,
            },
            {
               "t": "p",
               "html":
                  "If payment succeeds but activation fails, the system must record the failure and show staff which purchase needs attention.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "The system must never mark internet access as active solely because payment succeeded.",
               "keep": false,
            },
         ],
      },
      {
         "title": "5. Features Outside Our Initial Delivery",
         "blocks": [
            {
               "t": "p",
               "html":
                  "The following features are excluded from the proposed first delivery:",
               "keep": true,
            },
            {
               "t": "li",
               "html": "Native Android or iOS applications.",
            },
            {
               "t": "li",
               "html": "Support for multiple independent Wi-Fi businesses.",
            },
            {
               "t": "li",
               "html": "Advanced financial reports and forecasting.",
            },
            {
               "t": "li",
               "html":
                  "Integration with multiple payment providers at the same time.",
            },
            {
               "t": "li",
               "html": "Full accounting and invoicing software.",
            },
            {
               "t": "li",
               "html": "Advanced marketing tools.",
            },
            {
               "t": "li",
               "html": "Large-scale network deployment across multiple sites.",
            },
            {
               "t": "li",
               "html":
                  "A complete replacement for every feature offered by Centipid.",
            },
            {
               "t": "p",
               "html":
                  "These exclusions apply to our proposed 2–3 week delivery. They do not prevent Weza from requesting additional development later.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>Features Awaiting Scope Confirmation</strong>",
            },
            {
               "t": "p",
               "html":
                  "The following were raised during the client discussion or included in the original proposal. Their first-release status is not yet settled.",
               "keep": false,
            },
            {
               "t": "table",
               "head": [
                  "<strong>Feature</strong>",
                  "<strong>Decision needed</strong>",
               ],
               "rows": [
                  [
                     "PPPoE home internet",
                     "Confirm whether home subscriptions must be included now",
                  ],
                  [
                     "Expiry reminders",
                     "Confirm whether customers need a warning two minutes before expiry",
                  ],
                  [
                     "Package renewal",
                     "Confirm whether customers should extend an active session",
                  ],
                  [
                     "Customer feedback",
                     "Confirm whether customers should submit reviews or support reports",
                  ],
                  [
                     "Vouchers",
                     "Confirm whether voucher creation and redemption are required",
                  ],
               ],
            },
            {
               "t": "p",
               "html":
                  "We will not remove these requirements. We will ask for approval of their inclusion or deferral before finalising the delivery commitment.",
               "keep": false,
            },
         ],
      },
      {
         "title": "6. What We Need From Weza",
         "blocks": [
            {
               "t": "p",
               "html": "The following information or decisions are required.",
               "keep": false,
            },
            {
               "t": "table",
               "head": [
                  "<strong>Requirement</strong>",
                  "<strong>What we need</strong>",
               ],
               "rows": [
                  [
                     "Daraja sandbox access",
                     "Provide sandbox access through a secure channel and confirm available test payment and reversal procedures.",
                  ],
                  [
                     "Network equipment",
                     "Confirm the router model, configuration, access date, and permissions for the environment Daniel will provide.",
                  ],
                  [
                     "Activation target",
                     "Agree on the maximum time from verified payment to usable internet access. The goal is immediate access.",
                  ],
                  [
                     "Home internet",
                     "Confirm whether PPPoE belongs in the first delivery",
                  ],
                  [
                     "Additional features",
                     "Confirm whether expiry reminders, renewal of active sessions, feedback, and vouchers belong in the pilot.",
                  ],
                  [
                     "Router or testing environment",
                     "Provide a router or testing environment for activation and expiry testing. Confirm the router model, configuration, access date, and testing permissions.",
                  ],
               ],
            },
            {
               "t": "p",
               "html":
                  "If required information is delayed, we will continue developing and testing the independent parts of the system. We will record the affected work as blocked in Jira.",
               "keep": false,
            },
         ],
      },
      {
         "title": "7. Technology Stack",
         "blocks": [
            {
               "t": "table",
               "head": [
                  "<strong>Component</strong>",
                  "<strong>Technology</strong>",
               ],
               "rows": [
                  ["Customer portal", "React"],
                  ["Operator dashboard", "React"],
                  ["Backend", "FastAPI, Python"],
                  ["Database", "PostgreSQL"],
                  ["Database access and migrations", "Prisma"],
                  ["Payments", "Safaricom Daraja for M-Pesa"],
                  [
                     "Network",
                     "MikroTik RouterOS API proposed, subject to equipment confirmation",
                  ],
                  ["Version control", "Git and GitHub"],
                  ["Project management", "Jira"],
                  ["Backend testing", "Pytest"],
                  [
                     "API testing",
                     "FastAPI Swagger UI and Postman where needed",
                  ],
               ],
            },
            {
               "t": "p",
               "html":
                  "Before building database-dependent features, the team must verify that the selected Prisma setup works reliably with our Python backend.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "If the test fails, the technical lead will present a compatible alternative for approval.",
               "keep": false,
            },
         ],
      },
      {
         "title": "8. Successful Delivery",
         "blocks": [
            {
               "t": "p",
               "html":
                  "We will consider the project successfully delivered when the following tests pass.",
               "keep": false,
            },
            {
               "t": "table",
               "head": [
                  "<strong>Test</strong>",
                  "<strong>Expected result</strong>",
               ],
               "rows": [
                  [
                     "Customer connects to hotspot",
                     "Customer portal is accessible",
                  ],
                  [
                     "Customer registers",
                     "Registration succeeds and the customer proceeds to package selection.",
                  ],
                  [
                     "Customer selects package",
                     "Correct price, speed, and duration are displayed",
                  ],
                  [
                     "Customer initiates payment",
                     "The Daraja sandbox payment request is received in the test flow.",
                  ],
                  [
                     "Payment succeeds",
                     "The backend verifies and records the Daraja sandbox payment.",
                  ],
                  ["Payment fails", "No internet access is granted"],
                  [
                     "Payment confirmation repeats",
                     "No duplicate internet session is created",
                  ],
                  [
                     "Access activates",
                     "Customer gets usable internet within the agreed target",
                  ],
                  [
                     "Session starts",
                     "Purchased time begins when network access becomes active",
                  ],
                  ["Speed limit", "Router applies the purchased speed limit"],
                  ["Package expires", "Router ends internet access at expiry"],
                  [
                     "Operator opens dashboard",
                     "Staff see payments and session information",
                  ],
                  [
                     "Activation fails",
                     "Staff see the failed activation linked to its payment",
                  ],
                  [
                     "Staff login",
                     "Unauthorised users cannot access operator functions",
                  ],
                  [
                     "Staff edit a package",
                     "The edited name, price, speed, or duration is saved and shown on the customer portal.",
                  ],
               ],
            },
            {
               "t": "p",
               "html":
                  "Test the end-to-end flow on a phone connected to the hotspot Daniel provides, with mobile data switched off.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Record when the backend verifies payment, when the router confirms activation, and when the phone first reaches the internet. Use the elapsed time from payment verification to successful browsing for the activation acceptance test.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Immediate activation is the goal. Weza and the project team must agree on the maximum elapsed time before the activation test has a pass threshold.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "All required tests must pass before we declare the delivery complete.",
               "keep": false,
            },
         ],
      },
      {
         "title": "9. Project Timeline",
         "blocks": [
            {
               "t": "p",
               "html":
                  "Our maximum development period is three weeks, with a target of completing the main system within two weeks where feasible.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>Week 1: Foundations and Early Testing</strong>",
            },
            {
               "t": "li",
               "html": "Finalise the scope with Weza.",
            },
            {
               "t": "li",
               "html": "Confirm technical responsibilities.",
            },
            {
               "t": "li",
               "html": "Set up GitHub and Jira tasks.",
            },
            {
               "t": "li",
               "html": "Create the frontend and backend project structures.",
            },
            {
               "t": "li",
               "html": "Set up the database.",
            },
            {
               "t": "li",
               "html": "Build the initial customer and operator interfaces.",
            },
            {
               "t": "li",
               "html": "Test basic communication with the router.",
            },
            {
               "t": "li",
               "html": "Prepare a simulated purchase and activation flow.",
            },
            {
               "t": "p",
               "html":
                  "<strong>Week 1 target:</strong> Demonstrate the basic customer journey with simulated payment and prove communication with the test network.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>Week 2: Integration and Main Features</strong>",
            },
            {
               "t": "li",
               "html":
                  "Complete customer registration and the portal purchase flow.",
            },
            {
               "t": "li",
               "html": "Complete operator dashboard functions.",
            },
            {
               "t": "li",
               "html":
                  "Integrate Safaricom Daraja and test payment flows in the sandbox.",
            },
            {
               "t": "li",
               "html": "Connect verified payments to network activation.",
            },
            {
               "t": "li",
               "html": "Implement package expiry and session tracking.",
            },
            {
               "t": "li",
               "html":
                  "Test failed payments, failed activations, and duplicate confirmations.",
            },
            {
               "t": "li",
               "html": "Fix issues identified during integration.",
            },
            {
               "t": "p",
               "html":
                  "<strong>Week 2 target:</strong> Demonstrate a complete purchase, activation, and expiry using the test network.",
               "keep": false,
            },
            {
               "t": "h3",
               "html": "<strong>Week 3: Testing, Fixes, and Handover</strong>",
            },
            {
               "t": "p",
               "html": "If the third week is available:",
               "keep": true,
            },
            {
               "t": "li",
               "html": "Run full customer journey tests.",
            },
            {
               "t": "li",
               "html": "Check mobile usability.",
            },
            {
               "t": "li",
               "html": "Test access controls and payment handling.",
            },
            {
               "t": "li",
               "html": "Fix outstanding defects.",
            },
            {
               "t": "li",
               "html": "Prepare setup and usage instructions.",
            },
            {
               "t": "li",
               "html": "Demonstrate the system to Weza.",
            },
            {
               "t": "li",
               "html":
                  "Record client feedback and hand over the agreed deliverables.",
            },
            {
               "t": "p",
               "html":
                  "<strong>Week 3 target:</strong> Deliver the tested system, documentation, and final demonstration.",
               "keep": false,
            },
         ],
      },
      {
         "title": "10. Team Working Agreement",
         "blocks": [
            {
               "t": "p",
               "html":
                  "All six team members are full-stack developers. Responsibilities will be assigned according to the work required and each member's availability.",
               "keep": false,
            },
            {
               "t": "p",
               "html": "We will follow these rules:",
               "keep": true,
            },
            {
               "t": "li",
               "html": "All project tasks must be recorded in Jira.",
               "n": 1,
            },
            {
               "t": "li",
               "html": "Every task must have one named owner and a deadline.",
               "n": 2,
            },
            {
               "t": "li",
               "html":
                  "Team members must communicate blockers as soon as they arise.",
               "n": 3,
            },
            {
               "t": "li",
               "html":
                  "All code changes must be submitted through GitHub pull requests.",
               "n": 4,
            },
            {
               "t": "li",
               "html":
                  "Code must be reviewed before merging into the main branch.",
               "n": 5,
            },
            {
               "t": "li",
               "html": "Members must test their work before requesting review.",
               "n": 6,
            },
            {
               "t": "li",
               "html":
                  "Any change affecting another member's work must be communicated.",
               "n": 7,
            },
            {
               "t": "li",
               "html":
                  "A task is complete only when its agreed requirements have been met and verified.",
               "n": 8,
            },
            {
               "t": "li",
               "html":
                  "Scope changes must be discussed and approved before implementation.",
               "n": 9,
            },
            {
               "t": "p",
               "html":
                  "The Scrum Master will coordinate progress, follow up on blockers, and keep the team aligned with the delivery schedule.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "Technical decisions will be discussed with the technical lead and the members responsible for the affected work.",
               "keep": false,
            },
         ],
      },
      {
         "title": "11. Changes to the Scope",
         "blocks": [
            {
               "t": "p",
               "html":
                  "Once the team and Weza approve this document, we will use it as our agreed reference.",
               "keep": false,
            },
            {
               "t": "p",
               "html": "Any new feature request must answer:",
               "keep": true,
            },
            {
               "t": "li",
               "html": "What exactly is being requested?",
            },
            {
               "t": "li",
               "html": "Why is the change needed?",
            },
            {
               "t": "li",
               "html": "How much additional work will it require?",
            },
            {
               "t": "li",
               "html": "Will it affect the delivery date?",
            },
            {
               "t": "li",
               "html": "What existing work, if any, must be postponed?",
            },
            {
               "t": "p",
               "html":
                  "No member should independently add major features or change agreed requirements without approval.",
               "keep": false,
            },
         ],
      },
      {
         "title": "12. Final Deliverables",
         "blocks": [
            {
               "t": "p",
               "html": "At the end of the project, we expect to hand over:",
               "keep": true,
            },
            {
               "t": "li",
               "html":
                  "A working customer portal with registration and package purchase.",
               "n": 1,
            },
            {
               "t": "li",
               "html":
                  "A working operator dashboard with an editable internet package table.",
               "n": 2,
            },
            {
               "t": "li",
               "html": "A backend connected to PostgreSQL.",
               "n": 3,
            },
            {
               "t": "li",
               "html":
                  "A Safaricom Daraja M-Pesa integration verified in the sandbox.",
               "n": 4,
            },
            {
               "t": "li",
               "html": "A working connection to the agreed test network.",
               "n": 5,
            },
            {
               "t": "li",
               "html": "Automated and manual test results.",
               "n": 6,
            },
            {
               "t": "li",
               "html": "Source code in the shared GitHub repository.",
               "n": 7,
            },
            {
               "t": "li",
               "html": "Setup and basic operating instructions.",
               "n": 8,
            },
            {
               "t": "li",
               "html":
                  "A final demonstration showing the full purchase and internet access journey.",
               "n": 9,
            },
            {
               "t": "p",
               "html":
                  "A live production rollout to all Weza customers is not included in this proposed pilot commitment. Any production deployment, hosting costs, credentials, and ongoing maintenance require separate agreement.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "<strong>Approval status:</strong> Awaiting team review and Weza's confirmation of outstanding requirements.",
               "keep": false,
            },
            {
               "t": "p",
               "html":
                  "<strong>Document owner:</strong> Scrum Master, Weza Wi-Fi Billing System Project Team.",
               "keep": false,
            },
         ],
      },
   ],
};
