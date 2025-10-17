🕌 Islamic Prayer Times App
A beautiful and modern Islamic prayer times application built with React.js frontend and Laravel backend. Features a stunning green and dark color theme with daily health tips and Quran verses.

https://img.shields.io/badge/React-18.2.0-blue https://img.shields.io/badge/Laravel-10.x-red https://img.shields.io/badge/Material--UI-5.x-green

✨ Features
🕋 Prayer Times
Accurate Prayer Times: Fetched from Aladhan API

Multiple Locations: Support for cities worldwide

Real-time Updates: Automatic time updates

Beautiful Display: Clean, modern interface with prayer icons

💚 Daily Health
Health Checklist: Daily wellness reminders

Progress Tracking: Track completed health goals

Motivational Design: Encourages healthy habits

📖 Daily Quran
Inspirational Verses: Daily Quranic verses

Reference Tracking: Complete with Surah and Ayah references

Spiritual Guidance: Curated selection of meaningful verses

🎨 Design
Green & Dark Theme: Beautiful color combination

Responsive Design: Works on all devices

Modern UI: Material-UI components with custom styling

Smooth Animations: Hover effects and transitions

🚀 Quick Start
Prerequisites
Node.js (v14 or higher)

PHP (v8.1 or higher)

Composer

MySQL

Installation
Backend (Laravel)
bash
# Clone the repository
git clone https://github.com/yourusername/islamic-prayer-times.git
cd islamic-prayer-times/backend

# Install dependencies
composer install

# Environment setup
cp .env.example .env
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=prayer_times
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Start server
php artisan serve --port=8000
Frontend (React)
bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start
The app will be available at:

Frontend: http://localhost:3000

Backend API: http://localhost:8000

🛠️ Technology Stack
Frontend
React.js - UI framework

Material-UI - Component library

Axios - HTTP client

Emotion - CSS-in-JS styling

Backend
Laravel - PHP framework

MySQL - Database

GuzzleHTTP - API requests

CORS - Cross-origin resource sharing

APIs
Aladhan API - Prayer times data

Geolocation API - Location services

📁 Project Structure
text
islamic-prayer-times/
├── backend/
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   └── PrayerTimeController.php
│   │   ├── Models/
│   │   │   └── PrayerTime.php
│   │   └── Providers/
│   ├── database/
│   │   └── migrations/
│   ├── routes/
│   │   └── api.php
│   └── config/
│       └── cors.php
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PrayerCard.js
│   │   │   ├── LocationSelector.js
│   │   │   └── CurrentTime.js
│   │   ├── theme.js
│   │   └── App.js
│   ├── public/
│   └── package.json
└── README.md
🎯 Key Components
Prayer Times Display
Fajr, Dhuhr, Asr, Maghrib, Isha times

Sunrise timing

Location-based calculations

Real-time clock

Location Management
City selection dropdown

Country support

Manual location update

Automatic geolocation (optional)

Health Tracker
Daily health goals

Progress indicators

Completion tracking

Motivational design

Quran Section
Daily verse rotation

Proper Arabic references

Inspirational content

Easy reading interface

🔧 Configuration
Environment Variables
Backend (.env)
env
APP_NAME="Islamic Prayer Times"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=prayer_times
DB_USERNAME=root
DB_PASSWORD=

CORS_ALLOWED_ORIGINS=http://localhost:3000
Frontend (.env)
env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_NAME="Islamic Prayer Times"
🎨 Customization
Color Theme
The app uses a custom green and dark color palette:

javascript
primary: {
  main: '#2E7D32', // Dark Green
  light: '#4CAF50',
  dark: '#1B5E20',
},
secondary: {
  main: '#66BB6A', // Light Green
},
background: {
  default: '#0A0F0D', // Very Dark Green/Black
  paper: '#1A231F', // Dark Green
}
Adding New Cities
Edit the city dropdown in LocationSelector.js:

javascript
<MenuItem value="Mecca">Mecca</MenuItem>
<MenuItem value="Madina">Madina</MenuItem>
<MenuItem value="Dubai">Dubai</MenuItem>
<MenuItem value="Cairo">Cairo</MenuItem>
// Add more cities as needed
📱 Responsive Design
The application is fully responsive and works on:

📱 Mobile phones

💻 Tablets

🖥️ Desktop computers

🖥️ Large screens

🔄 API Endpoints
Method	Endpoint	Description
GET	/api/prayer-times	Get daily prayer times
GET	/api/prayer-times/monthly	Get monthly prayer times
GET	/api/test	API health check
🚀 Deployment
Backend Deployment
bash
# Production build
composer install --optimize-autoloader --no-dev

# Cache configuration
php artisan config:cache
php artisan route:cache

# Run migrations
php artisan migrate --force
Frontend Deployment
bash
# Build for production
npm run build

# Serve built files
npm install -g serve
serve -s build
🤝 Contributing
We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

Development Guidelines
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Aladhan API for providing accurate prayer times

Material-UI for the excellent component library

React.js and Laravel communities

All contributors and testers

📞 Support
If you have any questions or need help with setup, please:

Check the Issues page

Create a new issue with detailed description

Contact the development team

🌟 Star History
If you find this project helpful, please consider giving it a star! ⭐

Made with ❤️ for the Muslim Ummah

May Allah accept our prayers and good deeds
