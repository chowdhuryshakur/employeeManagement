Deployment Instructions

Requirements:
Node.js 18+
PostgreSQL 16+

Step 1:

bash
# Clone repository
git clone https://github.com/your-repo/employee-organogram.git
cd employee-organogram

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npm run migrate

# Start the application
npm start

# For production
npm install -g pm2
pm2 start server.js