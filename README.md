# 🕌 Islamic Prayer Times App (Development)

A **beautiful and modern Islamic prayer times application** built with **React.js** (frontend) and **Laravel 12** (backend).  
It features a stunning **green & dark color theme**, along with **daily health tips** and **Quran verses** for spiritual and physical well-being.(beta 1)

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Laravel](https://img.shields.io/badge/Laravel-10.x-red)
![Material UI](https://img.shields.io/badge/Material--UI-5.x-green)

---

## ✨ Features

### 🕋 Prayer Times
- **Accurate timings** fetched from [Aladhan API](https://aladhan.com/prayer-times-api)
- **Multiple locations** with worldwide city support
- **Real-time updates** and beautiful icons
- **Clean and modern UI**

### 💚 Daily Health
- **Health checklist** with daily wellness reminders . 
- **Progress tracking** to maintain healthy habits  
- **Motivational interface** for daily engagement  

### 📖 Daily Quran
- **Inspirational Quranic verses** with Surah & Ayah references  
- **Automatically refreshed daily**  
- **Spiritual guidance** for a positive mindset  

---

## 🎨 Design Highlights
- Elegant **green & dark theme**
- **Responsive design** for all devices  
- Built with **Material-UI** components  
- **Smooth animations** and hover effects  

---

## 🚀 Quick Start

### 🧩 Prerequisites
- Node.js (v14+)
- PHP (v8.1+)
- Composer
- MySQL

---

### 🖥 Backend Setup (Laravel)

```bash
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

# Start Laravel server
php artisan serve --port=8000

```
### 💻 Frontend Setup (React)
```bash
cd ../frontend
```
# Install dependencies
npm install

# Start development server
npm start
App will be available at:

Frontend → http://localhost:3000

Backend API → http://localhost:8000

🛠️ Technology Stack
Layer	Technologies
Frontend	React.js, Material-UI, Axios, Emotion
Backend	Laravel, MySQL, GuzzleHTTP, CORS
APIs	Aladhan API (Prayer Times), Geolocation API

📁 Project Structure
bash
Copy code
islamic-prayer-times/
├── backend/
│   ├── app/
│   │   ├── Http/Controllers/PrayerTimeController.php
│   │   ├── Models/PrayerTime.php
│   │   └── Providers/
│   ├── database/migrations/
│   ├── routes/api.php
│   └── config/cors.php
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
🕋 Prayer Times Display
Fajr, Dhuhr, Asr, Maghrib, Isha, and Sunrise times

Location-based calculations

Real-time clock updates

📍 Location Management
City and country selection

Manual and auto geolocation support

💚 Health Tracker
Daily health goals and progress

Motivational layout

📖 Quran Section
Daily verses with proper references

Easy reading and inspirational content

🔧 Configuration
Backend .env
env
Copy code
APP_NAME="Islamic Prayer Times"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=prayer_times
DB_USERNAME=root
DB_PASSWORD=

CORS_ALLOWED_ORIGINS=http://localhost:3000
Frontend .env
env
Copy code
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_NAME="Islamic Prayer Times"
🎨 Customization
Color Theme
javascript
Copy code
primary: {
  main: '#2E7D32', // Dark Green
  light: '#4CAF50',
  dark: '#1B5E20',
},
secondary: {
  main: '#66BB6A', // Light Green
},
background: {
  default: '#0A0F0D', // Dark background
  paper: '#1A231F',   // Dark green cards
}
Adding New Cities
In LocationSelector.js:

javascript
Copy code
<MenuItem value="Mecca">Mecca</MenuItem>
<MenuItem value="Madina">Madina</MenuItem>
<MenuItem value="Dubai">Dubai</MenuItem>
<MenuItem value="Cairo">Cairo</MenuItem>
📱 Responsive Design
Fully optimized for:

📱 Mobile phones

💻 Tablets

🖥️ Desktops

🖥️ Large screens

🔄 API Endpoints
Method	Endpoint	Description
GET	/api/prayer-times	Get daily prayer times
GET	/api/prayer-times/monthly	Get monthly prayer times
GET	/api/test	API health check

🚀 Deployment
Backend (Laravel)
bash
Copy code
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan migrate --force
Frontend (React)
bash
Copy code
npm run build
npm install -g serve
serve -s build
🤝 Contributing
We welcome all contributions! 🙌
To contribute:

Fork the repo

Create a new branch (git checkout -b feature/amazing-feature)

Commit changes (git commit -m "Add amazing feature")

Push the branch (git push origin feature/amazing-feature)

Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

🙏 Acknowledgments
Aladhan API for prayer data

Material-UI for UI components

React.js and Laravel communities

All contributors and testers

📞 Support
For setup help or issues:

Check the Issues page

Create a new issue with full details

🌟 Star History
If you find this project useful, please give it a ⭐ on GitHub!

Made with ❤️ for the Muslim Ummah
May Allah accept our prayers and good deeds.
