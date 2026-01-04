
---

# **Category Management Dashboard**

A full-stack **Category Management Dashboard** for an e-commerce platform. Users can **sign up, log in**, and view clothing categories in a clean, responsive dashboard. Optional features include **adding and editing categories** with images and item counts.

---

## **Demo**

* **Deployed Frontend (Vercel):** [category-management-dashboard-bice.vercel.app](https://category-management-dashboard-bice.vercel.app)
* **Deployed Backend (Render):** [https://category-management-dashboard-wwtk.onrender.com](https://category-management-dashboard-wwtk.onrender.com)

---

## **Tech Stack**

* **Frontend:** React.js (Functional Components & Hooks)
* **Backend:** Node.js & Express.js
* **Database:** MongoDB (or SQLite / any preferred DB)
* **Authentication:** JWT-based authentication
* **Hosting:** Frontend on Vercel, Backend on Render

---

## **Features**

### **Authentication**

* Signup and Login functionality
* JWT-based secure authentication
* Session persistence (user remains logged in until logout)

### **Dashboard**

* View list of **clothing categories** in a **grid layout**
* Each category card displays:

  * Category image
  * Category name (e.g., “Summer Clothes”)
  * Item count (e.g., “26 items”)

### **Add New Category (Optional)**

* Add a new category via **+ Add Category** form
* Fields:

  * Category Name
  * Item Count
  * Upload Image (stored locally or in cloud)
* Newly added categories are displayed immediately in the dashboard

### **Edit Category (Optional)**

* Edit existing category details:

  * Change category name
  * Update item count
  * Replace category image

---

## **Folder Structure**

```
Category-Management-Dashboard/
│
├── backend/
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── controllers/   # Optional controllers for route logic
│   ├── server.js      # Entry point for backend
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components (CategoryCard, Navbar, Forms)
│   │   ├── pages/       # Login, Signup, Dashboard
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
└── README.md
```

---

## **Setup Instructions (Local)**

### **Backend**

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file and add:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:

   ```bash
   npm start
   ```

### **Frontend**

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React app:

   ```bash
   npm start
   ```

> The frontend will run at `http://localhost:3000` and interact with the backend server.

---

## **Evaluation Highlights**

* **Secure Authentication:** JWT-based login & session management
* **Responsive UI:** Clean, professional layout with React hooks
* **CRUD Operations:** Add/Edit category functionality
* **API Efficiency:** Well-structured Express routes & Mongoose models
* **Code Quality:** Modular folder structure for easy maintenance

---
## **Author**

**BONAGIRI SAHITHYA**

* GitHub: [https://github.com/BonagiriSahithya](https://github.com/BonagiriSahithya)
* Email: [bonagirisahithya8@gmail.com](mailto:bonagirisahithya8@gmail.com)

---
