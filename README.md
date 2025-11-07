🛍️ Shop Connector

Shop Connector bridges the gap between local shop owners and customers — helping shoppers easily discover nearby stores, explore product categories, and find shop locations in seconds.

🚀 About the Project

Shop Connector is a modern web platform that allows shop owners to share their products, services, and locations, while customers can:

🔍 Browse by category (clothes, electronics, food, etc.)

🗺️ View nearby shops using Google Maps

🛒 Explore product details and offers

🤝 Connect directly with verified shop owners

It’s the ultimate local marketplace connector — simple, fast, and built for real-world convenience.

💡 Key Features

✅ For Customers:

Discover shops nearby using Google Maps

Search and filter by categories

View products, prices, and shop info instantly

✅ For Shop Owners:

Create a shop profile

Upload products and details easily

Share exact shop location for better reach

✅ Technical Highlights:

⚡ Built with Next.js 14 and Tailwind CSS

🔐 Authentication via BetterAuth

🗄️ Database: Neon Postgres

☁️ File Uploads with AWS S3

🧭 Map integration with Google Maps API

🧩 Clean, responsive UI with ShadCN UI components

🧱 Project Structure

shop-connector/
├── app/ # Next.js App Router pages
├── components/ # Reusable UI components
├── lib/ # Utilities and helpers
├── styles/ # Global styles
├── public/ # Static assets
├── prisma/ # Prisma ORM schema
└── README.md

⚙️ Tech Stack
Category Technology
Frontend Next.js, Tailwind CSS, ShadCN UI
Backend API Routes (Next.js), Prisma ORM
Database Neon Postgres
Auth BetterAuth
Storage AWS S3
Maps Google Maps API
Deployment Vercel
🧠 Future Enhancements

    📱 Mobile app version using React Native

    💬 Real-time chat between customers and shop owners

    ⭐ Shop rating and review system

    🧾 Order and delivery tracking

🧑‍💻 Setup Instructions

    Clone the repository

git clone https://github.com/yourusername/shop-connector.git
cd shop-connector

Install dependencies

npm install

Set up environment variables
Create a .env.local file:

DATABASE_URL=your_neon_postgres_url
AUTH_SECRET=your_betterauth_secret
GOOGLE_MAPS_API_KEY=your_api_key
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_BUCKET_NAME=your_bucket_name

Run the development server

npm run dev

Open in browser

    http://localhost:3000

🌐 Live Demo

👉 Visit Shop Connector
👨‍💻 Author

Abdi Gashahun
💼 Software Engineer | Full Stack Developer
📧 abdigashahun0@gmail.com

🌍 Portfolio Website
⭐ Support

If you like this project, don’t forget to star ⭐ the repo and share it with others!
Your support motivates me to keep improving and adding new features. 💖
