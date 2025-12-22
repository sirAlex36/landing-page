Flex Solution | Full-Stack Engineering Agency
Flex Solution is a high-performance landing page for a Kenyan-based software engineering agency. It is architected to showcase full-stack capabilities, ranging from MVP development to complex enterprise ERP/CRM integrations, specifically optimized for the East African digital ecosystem.

🚀 Key Features
Conversion-Optimized UI: A professional Hero section with high-impact call-to-actions.

Kenyan Market Logic: Integrated pricing models in KES, featuring local-first solutions like M-Pesa STK Push and SMS gateway integrations.

Dynamic Portfolio: A categorized showcase of FinTech, E-commerce, and Corporate builds.

Real-time Contact System: Fully functional lead generation powered by EmailJS, sending inquiries directly to the agency's inbox.

Enterprise Tiering: Specialized service descriptions for "CTO as a Service" and "Zero-Trust Architecture."

Responsive Design: Mobile-first approach using React-Bootstrap for seamless viewing across devices.

🛠️ The Tech Stack
Frontend: React.js (v18+)

Build Tool: Vite (for lightning-fast HMR)

Styling: React-Bootstrap & Custom CSS3 Transitions

Icons: Lucide-React / Bootstrap Icons

Forms: EmailJS Browser SDK

Routing: React Router DOM (v6)

📁 Project Structure
Plaintext

src/
├── assets/
│   └── Components/
│       ├── Hero.jsx            # Impactful landing section
│       ├── Features.jsx        # Business logic & value props
│       ├── Portfolio.jsx       # Grid of completed projects
│       ├── Pricing.jsx         # Kenyan market KES pricing tiers
│       ├── ContactPage.jsx     # EmailJS integrated lead form
│       └── Reviews.jsx         # Social proof & testimonials
├── App.jsx                     # Main routing & component assembly
└── main.jsx                    # Entry point & Bootstrap styles
⚙️ Setup & Installation
Clone the repository:

Bash

git clone https://github.com/yourusername/flex-solution-landing.git
cd flex-solution-landing
Install dependencies:

Bash

npm install
Environment Variables: Create a .env file in the root directory to store your EmailJS credentials:

Code snippet

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
Run Development Server:

Bash

npm run dev
📈 Business Logic & Pricing
The project includes three primary pricing tiers tailored for the Kenyan market:

Startup Pack: KES 45,000 (Focus on entry-level MVP)

Full-Stack Build: KES 150,000 (Includes M-Pesa integration)

Retainer/Dev-Ops: KES 60,000/mo (Ongoing technical partnership)

📝 License
Distributed under the MIT License. See LICENSE for more information.
