README. md
Tech Trend Hub - Automation Platform
Your all-in-one platform for phone gadgets and accessories with integrated automation workflows.
Technology Stack
Astro - Modern web framework for building fast, content-focused websites
Tailwind CSS v4 - Utility-first CSS framework for rapid UI development
shadcn/ui - Re-usable component library built on Radix UI primitives (54 components pre-installed)
React 19 - JavaScript library for building interactive user interfaces
Lucide - Beautiful, consistent icon library with tree-shakeable ES modules
Vite - Fast build tool and dev server (powers Astro under the hood)
🚀 Task 2: API Infrastructure & Automation Workflows
This section documents the automation infrastructure set up for Tech Trend Hub, addressing Google Merchant Center compliance and multi-channel order conversion.
1. Automated Social Posting (TikTok & Instagram)
Purpose: Generate and automatically post product videos to TikTok and Instagram to increase visibility and drive traffic.
Configuration:
Environment variables in .env.local for API credentials
Video scripts stored in /src/content/automation/ with 30s, 1-min, and 5-min versions
Product catalog metadata in /src/content/automation/catalog.json
Workflow:
1. Video scripts (30s/1min/5min) stored in markdown format
   ↓
2. Scheduled automation (via Zapier, Make, or backend service)
   ↓
3. Generate videos using AI/automation tools
   ↓
4. Post to TikTok and Instagram using respective APIs
   ↓
5. Track engagement and conversion metrics

API Keys Required:
TIKTOK_API_KEY, TIKTOK_API_SECRET, TIKTOK_ACCESS_TOKEN
INSTAGRAM_GRAPH_API_TOKEN, INSTAGRAM_BUSINESS_ACCOUNT_ID
Posting Schedule (Cron):
TikTok: 10:00 AM, 2:00 PM, 6:00 PM daily
Instagram: 9:00 AM, 3:00 PM, 8:00 PM daily
2. Order Conversion via WhatsApp Integration
Purpose: Streamline customer order placement and wholesale inquiries through WhatsApp, reducing friction in the buying process.
WhatsApp Phone: +60 16-678 7883
Features:
Dynamic order links in all product category pages
WhatsApp Business API integration for automated responses
Custom message templates for orders and wholesale inquiries
Order confirmation tracking
Message Templates:
Order: "Hi, I want to order [PRODUCT_NAME] (#[ITEM_NUMBER]). Please provide payment details and delivery options."
Bulk: "Hi, I'm interested in bulk wholesale orders. Can you provide pricing and MOQ details?"

Implementation:
All "Order via WhatsApp" buttons use pre-filled message format
Button href format: https://wa.me/60166787883?text=[encoded_message]
Buttons present on: Caps, Screen Protectors, Phone Cases, and other category pages
3. Legal Compliance Pages (Google Merchant Center)
Purpose: Resolve Google Merchant Center misrepresentation issues by providing complete legal documentation.
Pages Created:
a) Refund Policy (/refund-policy)
Covers:
Return eligibility (14-day window)
Return process and shipping
Refund methods and timelines
Non-returnable items
Warranty claims
Wholesale-specific return terms
Damaged-in-transit procedures
Self-pickup return options
Contact information
b) Terms of Service (/terms-of-service)
Covers:
Agreement to terms and use restrictions
Product information and pricing policies
Order acceptance and cancellation procedures
Shipping and delivery terms
Payment terms and security
Warranty limitations
Wholesale-specific terms (MOQ, resale restrictions)
Limitation of liability
User conduct guidelines
Intellectual property rights
Privacy and data protection (PDPA compliance)
Dispute resolution and Malaysian law governance
Why This Fixes Google Merchant Center Issues:
✅ Provides transparent return/refund policy
✅ Clear terms of service for all customers
✅ Separate wholesale terms
✅ Malaysia-specific legal compliance (Consumer Protection Act 1999, PDPA 2010)
✅ Resolves "Missing or Unclear Return Policy" misrepresentation
✅ Establishes trust with customers and payment processors
4. Environment Configuration (.env.example)
The .env.example file provides template for all required API keys and configuration:
Sections:
WhatsApp Automation - Business phone, API keys, message templates
Social Media APIs - TikTok and Instagram credentials and scheduling
Google Merchant Center - Compliance and feed generation
Security Keys - API secrets and encryption keys
Email Notifications - SMTP for order confirmations and notifications
Database Configuration - Optional backend database setup
Automation Settings - Feature flags and polling intervals
To Use:
Copy .env.example to .env.local
Fill in your actual API keys and credentials
Update phone numbers and account IDs
Adjust scheduling cron expressions as needed
📋 Setup Instructions
Step 1: Configure Environment Variables
cp .env.example .env.local
# Edit .env.local with your API credentials

Step 2: Enable Social Media APIs
TikTok: Register at TikTok Business Center, create developer app, generate API keys
Instagram: Use Meta Business Suite, generate Graph API tokens for your business account
WhatsApp: Set up WhatsApp Business API (can use official Twilio or similar service)
Step 3: Set Up Automation Services
Choose one of these approaches:
Option A: Zapier/Make (Recommended for beginners)
Create webhooks for each automation workflow
Set up schedules for video posting and feed generation
Add filtering and conditional logic
Option B: Backend Service (Node.js/Python)
Implement API endpoints for each workflow
Deploy as scheduled jobs or serverless functions
Handle API rate limiting and error retry logic
Option C: GitHub Actions (Free & Simple)
Create workflow files in .github/workflows/
Trigger on schedule using cron expressions
Call external services or APIs directly
Step 4: Configure Google Merchant Center
Verify ownership of your website
Add feed generation URL (if using backend)
Ensure Refund Policy and Terms pages are linked
Submit feed for approval
🔄 Automation Workflows in Detail
Workflow 1: Daily Video Posting
Trigger: Daily at scheduled times (10am, 2pm, 6pm for TikTok; 9am, 3pm, 8pm for Instagram)
Steps:
Read video script from /src/content/automation/beats-studio-pro-navy.md
Extract product metadata from /src/content/automation/catalog.json
Call AI video generation API (e.g., Runway, Synthesia) with script and product info
Add branded overlays (logo, website URL, WhatsApp link)
Post to TikTok API with description, hashtags, and product tags
Post to Instagram API with similar metadata
Log engagement metrics for analytics
Error Handling: Retry failed posts 2x with exponential backoff; notify via email on persistent failures
Workflow 2: Order Conversion Tracking
Trigger: Continuous (real-time on website)
Implementation:
All product pages include WhatsApp links with UTM parameters
Track clicks using Google Analytics (utm_source, utm_medium, utm_campaign)
WhatsApp Business API integration for order confirmations
Automatic inventory sync when orders received
Workflow 3: Google Merchant Center Feed Generation
Trigger: Daily at midnight (00:00 UTC+8)
Steps:
Query product database (products.json)
Generate XML/CSV feed compliant with Google Merchant Center specs
Include required fields: product ID, title, description, price, availability, image, link, refund policy link
Validate against Google's merchant feed requirements
Upload to Google Merchant Center via API or SFTP
Monitor feed status for errors or policy violations
Key Fields for Compliance:
<item>
  <id>PRODUCT_ID</id>
  <title>Product Name</title>
  <description>Full product description</description>
  <link>https://techtrendhub.my/categories/[category]</link>
  <image_link>Product image URL</image_link>
  <price>RM [price]</price>
  <availability>in stock/out of stock</availability>
  <return_policy_label>https://techtrendhub.my/refund-policy</return_policy_label>
</item>

📞 Contact for Orders & Support
WhatsApp: +60 16-678 7883
Location: Shah Alam, Malaysia
Hours: Monday - Friday, 9:00 AM - 6:00 PM
📚 Additional Resources
Refund Policy
Terms of Service
Video Scripts & Product Catalog
Product Data
⚠️ Important Notes
API Rate Limits: TikTok and Instagram have rate limits; implement caching and throttling
Compliance: Ensure all posted content complies with platform guidelines
Testing: Test all automations in sandbox/staging before production
Monitoring: Set up alerts for failed automations or policy violations
PDPA Compliance: All customer data collection must comply with Malaysia's Personal Data Protection Act 2010
Last Updated: May 2026
