# Customer Registration Form - Optronix Assignment

This is a basic frontend-only customer registration form built using HTML, CSS, and JavaScript. It was created as part of an assignment for field sales executives to register customers during visits. The form includes validations and uses the browser's geolocation API to capture the customer's location.

---

## 🔧 Features

* Full Name, Email, Phone, Gender, DOB, Address, and Password fields
* Password confirmation check
* Input validations for email format, phone number, and password length
* Latitude and Longitude fetched using browser Geolocation API
* Location fields are read-only
* Data stored in browser's localStorage
* Shows confirmation message on successful submission
* Handles geolocation permission errors gracefully

---

## 💻 Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript (ES6)

---

## 📁 Folder Structure

```
optronix/
├── Basic/
│   ├── public/
│   │   ├── app.js
│   │   ├── style.css
│   └── index.html
```

---

## 🚀 How to Run Locally

1. Clone or download this repository.
2. Navigate to the `Basic/` directory.
3. Open `index.html` file in any modern web browser (Chrome, Firefox, Edge, etc.).
4. Fill out the form and click on “Get Location” to auto-fill latitude and longitude.
5. On submit, form data will be stored in browser's `localStorage` and printed in the browser console (for testing).

---

## 🌐 How to Deploy Online (Optional)

You can deploy this static form using free platforms like:

### 📦 GitHub Pages

1. Push your code to a GitHub repository.
2. Go to **Repository Settings > Pages**.
3. Select the `Basic/` folder (or root if applicable) and set it as the deployment source.
4. Save and your form will be live at:
   `https://github.com/nikhilgupta-9/optronics-basic`

### 🌍 Hostinger / Netlify / Vercel

* Upload the entire `Basic/` folder to your hosting root (like Hostinger's `public_html`).
* Or drag & drop folder on [https://app.netlify.com/drop](https://app.netlify.com/drop).
* Or deploy via GitHub using Vercel's auto-deploy.

---

## 📝 Notes

* This is a frontend-only version. No backend/API is used.
* Suitable for prototyping or basic form demonstrations.
* Mobile responsive layout (with basic CSS).

---

## 🙋‍♂️ Author

Developed by **Nikhil Gupta**
This is a demo submission for a client assignment and can be enhanced further with backend integration.

---

