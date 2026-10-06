# 🏠 HomelyHub

### AI-Powered Stay Booking & Trip Planning Platform

> A full-stack accommodation platform built during an online internship
> at **Web Stack Academy**, combining stay discovery, property listing,
> booking, secure authentication, and AI-powered travel planning in one
> application.

```{=html}
<p align="center">
```
`<a href="https://homelyhub-wsa.netlify.app">`{=html}
`<img src="https://img.shields.io/badge/Live%20Demo-HomelyHub-0F8B57?style=for-the-badge" alt="Live Demo">`{=html}
`</a>`{=html}
`<a href="https://github.com/hashimiryhaan/homelyhub-WSA-">`{=html}
`<img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">`{=html}
`</a>`{=html}
`<img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">`{=html}
`<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">`{=html}
`<img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">`{=html}
`<img src="https://img.shields.io/badge/AI-Groq-111827?style=for-the-badge" alt="Groq AI">`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## 🌐 Project Links

  --------------------------------------------------------------------------------------------------------------------------------
  Resource                            Link
  ----------------------------------- --------------------------------------------------------------------------------------------
  🚀 **Live Application**             [homelyhub-wsa.netlify.app](https://homelyhub-wsa.netlify.app)

  ⚙️ **Backend API**                  `https://homelyhub-wsa.onrender.com`

  💻 **GitHub Repository**            [github.com/hashimiryhaan/homelyhub-WSA-](https://github.com/hashimiryhaan/homelyhub-WSA-)

  🔗 **LinkedIn**                     [linkedin.com/in/hashimi-ryhaan](https://www.linkedin.com/in/hashimi-ryhaan)
  --------------------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## ✨ Overview

**HomelyHub** is an Airbnb-inspired full-stack web application for
discovering, listing, and booking accommodation.

The platform allows travellers to search for stays based on **location,
dates, budget, guests, property type, room type, and amenities**.
Property owners can publish their accommodation with photos and use AI
to generate an attractive property description from the information they
provide.

HomelyHub also includes **Trip Genie**, an AI-powered trip planner that
creates a day-by-day itinerary based on the destination, budget, number
of days, number of travellers, and interests.

### 🎯 The idea

**Search → Discover → Book → Plan the Trip**

Instead of separating accommodation booking and trip planning across
different platforms, HomelyHub brings both experiences together.

------------------------------------------------------------------------

## 🚀 Key Features

### 🔐 Authentication & User Management

-   User signup, login, and logout
-   JWT-based authentication using cookies
-   Protected routes and authentication middleware
-   Forgot-password functionality
-   Email-based password reset
-   Reset tokens stored securely as hashes
-   Reset tokens expire after 10 minutes
-   User profile and booking history

### 🔎 Smart Stay Search

-   Search by destination
-   Filter by price
-   Filter by property type
-   Filter by room type
-   Filter by amenities
-   Filter by number of guests
-   Date-based availability checking
-   Pagination with 12 properties per page
-   Already-booked properties are excluded for conflicting dates

### 🏡 Property Listing

Property owners can: - Add a property title and address - Upload
property photos - Select property and room type - Choose available
amenities - Define house rules - Set check-in/check-out details -
Specify guest capacity and price - Add a property description - Use AI
to generate the description

### 📅 Booking System

-   Select check-in and check-out dates
-   Enter guest information
-   Create a booking
-   Verify the booking flow
-   Prevent overlapping bookings
-   Store booked dates against the property
-   View bookings through **My Bookings**

> 💳 **Payment:** The current project uses a **mock/test payment flow**.
> Real payment gateway integration is planned for a future version.

### 🤖 AI-Powered Features

#### ✍️ AI Property Description

Owners provide basic property information and HomelyHub uses **Groq AI**
to generate a concise property description.

The AI is instructed to use only the details supplied by the owner
rather than inventing amenities or unsupported property information.

#### 🧳 Trip Genie

Trip Genie generates a personalised itinerary using:

-   Destination
-   Budget
-   Number of days
-   Number of people
-   Travel interests

It produces a **day-by-day travel plan** and recommends available stays
that fit the planned budget.

### 🗺️ Maps & Location

-   Interactive maps using **Leaflet**
-   Property location display
-   Location-aware stay discovery

### 🖼️ Image Management

-   Property image uploads through **ImageKit**
-   Cloud-hosted property images
-   Image URLs stored with property data

------------------------------------------------------------------------

## 🧠 How HomelyHub Solves the Problem

  -----------------------------------------------------------------------
  Challenge                           HomelyHub Solution
  ----------------------------------- -----------------------------------
  Finding suitable accommodation      Smart search and multiple filters
  takes time                          

  Double booking can occur            Date-overlap validation

  Owners need attractive property     AI description generation
  descriptions                        

  Trip planning happens separately    Integrated AI Trip Genie

  Password recovery needs to be       Hashed, time-limited reset tokens
  secure                              

  Large property collections are      Pagination and filtered search
  difficult to browse                 
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🏗️ Application Flow

``` text
                         ┌──────────────────────┐
                         │      HomelyHub       │
                         └──────────┬───────────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
      ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
      │   Explore   │       │ List Place  │       │  Trip Genie │
      │    Stays    │       │   / Owner   │       │     / AI     │
      └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
             │                     │                     │
             ▼                     ▼                     ▼
      Search & Filters      Property Details       Trip Inputs
             │                     │                     │
             ▼                     ▼                     ▼
      Availability Check     ImageKit Upload       Groq AI
             │                     │                     │
             └──────────────┬──────┴──────────────┬──────┘
                            ▼                     ▼
                       ┌─────────┐         ┌────────────┐
                       │ MongoDB │         │ AI Results │
                       └────┬────┘         └────────────┘
                            │
                            ▼
                     Booking / My Trips
```

------------------------------------------------------------------------

## 🛠️ Tech Stack

### Frontend

  Technology          Purpose
  ------------------- ----------------------
  **React + Vite**    Frontend application
  **Redux Toolkit**   State management
  **React Router**    Client-side routing
  **Axios**           API communication
  **Ant Design**      UI components
  **Leaflet**         Interactive maps

### Backend

  Technology       Purpose
  ---------------- -------------------------------
  **Node.js**      Backend runtime
  **Express.js**   REST API framework
  **MongoDB**      Database
  **Mongoose**     MongoDB ODM
  **JWT**          Authentication
  **Cookies**      Secure session/auth transport
  **bcrypt**       Password hashing
  **Nodemailer**   Email functionality
  **Mailtrap**     Email testing

### AI & Cloud Services

  Technology                    Purpose
  ----------------------------- -----------------------------------------------------
  **Groq SDK**                  AI-powered description generation and trip planning
  **ImageKit**                  Cloud image upload and delivery
  **Leaflet / OpenStreetMap**   Property maps

### Development Tools

-   Git & GitHub
-   Postman
-   VS Code
-   Netlify
-   Render

------------------------------------------------------------------------

## 📸 Application Preview

> Add the screenshots below to a `screenshots/` folder in the repository
> using the suggested filenames.

### 🏠 Explore Stays

```{=html}
<p align="center">
```
`<img src="screenshots/home.png" alt="HomelyHub Explore Stays" width="900">`{=html}
```{=html}
</p>
```
### 🏡 Property Details & Booking

```{=html}
<p align="center">
```
`<img src="screenshots/property-details.png" alt="Property Details and Booking" width="900">`{=html}
```{=html}
</p>
```
### 📝 List Your Place

```{=html}
<p align="center">
```
`<img src="screenshots/list-property.png" alt="List Your Place" width="700">`{=html}
```{=html}
</p>
```
### 👤 User Profile

```{=html}
<p align="center">
```
`<img src="screenshots/profile.png" alt="User Profile" width="900">`{=html}
```{=html}
</p>
```
### ✨ Trip Genie

```{=html}
<p align="center">
```
`<img src="screenshots/trip-genie.png" alt="Trip Genie" width="900">`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## 📁 Project Structure

``` text
HomelyHub/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── routes/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   ├── config/
│   ├── package.json
│   └── ...
│
└── README.md
```

> The folder names above describe the intended frontend/backend
> separation. Adjust individual subfolders if your repository uses
> different names.

------------------------------------------------------------------------

## ⚙️ Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/hashimiryhaan/homelyhub-WSA-.git
cd homelyhub-WSA-
```

### 2. Set up the backend

``` bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add the required environment
variables.

Then start the backend:

``` bash
npm run dev
```

### 3. Set up the frontend

Open a new terminal:

``` bash
cd frontend
npm install
```

Create the frontend environment file and configure:

``` env
VITE_API_BASE_URL=your_backend_api_url
```

Then start the frontend:

``` bash
npm run dev
```

------------------------------------------------------------------------

## 🔑 Environment Variables

### Frontend

``` env
VITE_API_BASE_URL=
```

### Backend

``` env
PORT=
MONGO_URI=

GROQ_API_KEY=

JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=

ORIGIN_ACCESS_URL=

MAILTRAP_SMTP_HOST=
MAILTRAP_SMTP_PORT=
MAILTRAP_SMTP_USER=
MAILTRAP_SMTP_PASS=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

### ⚠️ Security

**Never commit your `.env` files, API keys, passwords, JWT secrets, or
private ImageKit credentials to GitHub.**

Add them to `.gitignore`:

``` gitignore
.env
.env.*
!.env.example
```

For collaboration, provide a safe `.env.example` containing variable
names only.

------------------------------------------------------------------------

## 🔐 Security Highlights

HomelyHub includes several security-focused implementation details:

-   Passwords are hashed using **bcrypt**
-   Password fields are hidden from normal database queries
-   Authentication uses **JWT cookies**
-   Protected API routes use authentication middleware
-   Password reset tokens are stored as hashes
-   Password reset tokens expire after 10 minutes
-   Previous reset tokens become invalid after password changes
-   CORS is configured for frontend/backend communication
-   Environment variables are used for sensitive credentials

------------------------------------------------------------------------

## 🧩 Booking Availability Logic

HomelyHub checks whether requested dates overlap with existing bookings
before allowing a property to be booked.

The overlap condition follows:

``` text
Existing booking starts before requested checkout
AND
Existing booking ends after requested check-in
```

Conceptually:

``` text
existingStart < requestedEnd
AND
existingEnd > requestedStart
```

This prevents conflicting reservations and ensures already-booked dates
are excluded from relevant searches.

------------------------------------------------------------------------

## 🤖 AI Architecture

``` text
Owner Details
     │
     ▼
┌───────────────┐
│ React Frontend│
└───────┬───────┘
        │
        ▼
┌────────────────┐
│ Express Backend│
└───────┬────────┘
        │
        ▼
┌────────────────┐
│    Groq AI     │
└───────┬────────┘
        │
        ▼
 Structured AI Response
        │
        ├──────────────► Property Description
        │
        └──────────────► Trip Genie Itinerary
```

------------------------------------------------------------------------

## 🧪 API Testing

The backend APIs were tested using **Postman**, covering authentication,
property operations, search, booking, and related API workflows.

------------------------------------------------------------------------

## 🧗 Challenges & Solutions

  -----------------------------------------------------------------------
  Challenge                           Approach
  ----------------------------------- -----------------------------------
  Preventing double bookings          Stored booking dates and
                                      implemented date-overlap validation

  Date conflict detection             Compared existing start/end dates
                                      with requested dates

  Password security                   bcrypt hashing and protected
                                      password fields

  Login persistence after refresh     Authentication state restored
                                      through the `/me` API

  Frontend/backend cookies            Configured CORS with credentials
                                      and appropriate cookie settings

  Inconsistent AI output              Strict prompting and structured
                                      JSON responses
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 📈 Project Outcome

HomelyHub provides an end-to-end accommodation workflow:

``` text
Sign Up
   ↓
Search Stays
   ↓
View Property
   ↓
Check Availability
   ↓
Book
   ↓
My Bookings
```

Alongside this, property owners can list their accommodation with
AI-assisted descriptions, while travellers can use Trip Genie to plan
their journey.

------------------------------------------------------------------------

## 🔮 Future Scope

Planned improvements include:

-   💳 Real Razorpay payment integration
-   ⭐ Reviews and ratings
-   🛡️ Admin dashboard
-   Further improvements to AI-powered travel recommendations
-   Additional booking and property-management capabilities

------------------------------------------------------------------------

## 👨‍💻 My Contribution

I worked on the project as a **full-stack developer**, contributing
across the complete application lifecycle.

### Development Areas

-   Frontend development with React and Vite
-   Backend REST API development with Node.js and Express
-   MongoDB database design and integration
-   Authentication and authorization
-   JWT and cookie-based security
-   Property search, filtering, and pagination
-   Booking and availability logic
-   AI integration using Groq
-   AI-powered property descriptions
-   AI Trip Genie
-   Image upload integration using ImageKit
-   Email/password-reset workflow
-   API testing with Postman
-   Frontend-backend integration
-   Deployment and configuration

------------------------------------------------------------------------

## 🎓 Internship Project

**HomelyHub** was developed as part of an **online internship at Web
Stack Academy**.

The project provided hands-on experience in:

-   MERN stack development
-   REST API design
-   Authentication and security
-   Database modelling
-   State management
-   AI API integration
-   Cloud image handling
-   Deployment
-   Full-stack application development

------------------------------------------------------------------------

## 📚 Key Learnings

Through this project, I gained practical experience with:

-   Building a complete MERN application
-   Designing REST APIs
-   Working with MongoDB and Mongoose
-   Implementing JWT authentication
-   Securing passwords with bcrypt
-   Managing application state with Redux Toolkit
-   Integrating third-party APIs
-   Working with generative AI
-   Handling cloud-hosted images
-   Testing APIs with Postman
-   Deploying frontend and backend applications

------------------------------------------------------------------------

## 👤 Author

### Hashimi Ryhaan

Full-Stack Developer \| MERN Stack \| AI Integration

```{=html}
<p>
```
`<a href="https://github.com/hashimiryhaan">`{=html}GitHub`</a>`{=html}
•
`<a href="https://www.linkedin.com/in/hashimi-ryhaan">`{=html}LinkedIn`</a>`{=html}
```{=html}
</p>
```

------------------------------------------------------------------------

## ⭐ Support

If you find **HomelyHub** interesting, consider giving the repository a
⭐ on GitHub.

```{=html}
<p align="center">
```
`<strong>`{=html}🏠 HomelyHub --- Search. Book. List.
Plan.`</strong>`{=html}
```{=html}
</p>
```
