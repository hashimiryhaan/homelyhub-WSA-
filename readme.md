# HomelyHub 🏡
**An AI-Powered Stay Booking Web Application**

HomelyHub is a full-stack, Airbnb-inspired vacation rental platform that seamlessly integrates searching, booking, and listing properties. Built with the MERN stack and enhanced with AI capabilities, HomelyHub solves real-world travel friction by offering smart date-overlap prevention, an AI-powered property description generator for hosts, and a comprehensive AI Trip Planner for guests.

🌐 **Live Demo:** [https://homelyhub-wsa.netlify.app](https://homelyhub-wsa.netlify.app)
⚙️ **Backend API:** `https://homelyhub-wsa.onrender.com`

---

## 📸 Screenshots

| Home Page | Property Details |
| :---: | :---: |
| <img src="./Screenshot_6-10-2026_0334_homelyhub-wsa.netlify.app.jpg" width="400" alt="Home Page"/> | <img src="./Screenshot_6-10-2026_079_homelyhub-wsa.netlify.app.jpg" width="400" alt="Property Details"/> |

| AI Trip Genie | List Your Property |
| :---: | :---: |
| <img src="./Screenshot_6-10-2026_0454_homelyhub-wsa.netlify.app.jpg" width="400" alt="AI Trip Genie"/> | <img src="./Screenshot_6-10-2026_0644_homelyhub-wsa.netlify.app.jpeg" width="400" alt="List Property"/> |

---

## 🚀 Key Features

* **Smart Search & Filters:** Filter properties by city, price, type, and amenities. Only properties with available dates are displayed.
* **Date Overlap Prevention:** Robust backend logic ensures that booked dates are blocked, preventing double-bookings.
* **AI Description Generator:** Hosts can input basic property details, and the integrated Groq AI generates professional, attractive descriptions.
* **AI Trip Planner (Trip Genie):** Input a destination, budget, and interests to receive a day-by-day JSON itinerary alongside matching stays.
* **Secure Authentication:** JWT-based authentication stored in secure cookies, complete with password hashing (bcrypt) and a 10-minute secure reset token flow.
* **Cloud Image Optimization:** Integrated with ImageKit for fast, optimized cloud storage of property photos.

---

## 🛠️ Technologies Used

### **Frontend**
* React