# TrimTime – Barber Booking & Management System

A responsive static front-end prototype for IMS566. TrimTime brings appointment, service and customer management together with a data-driven dashboard and analytics.

## Features

- Simulated sign-in and registration, with session-based page protection
- Create, edit, cancel and delete appointments; search and filter by status; duplicate barber slots are prevented
- Manage services and customers; referenced records are protected from deletion
- Dashboard summaries, upcoming appointments and Chart.js analytics derived from local records
- Responsive Bootstrap sidebar, mobile offcanvas, tables, forms and modals

## Technologies

HTML5, CSS3, JavaScript, Bootstrap 5, Bootstrap Icons, Chart.js and Google Fonts. Libraries load from CDNs and require an internet connection.

## Structure

```
index.html, register.html       Authentication
 dashboard.html, appointments.html, services.html, customers.html, analytics.html
css/style.css                   Shared styles
js/data.js                      Shared data and sample records
js/main.js                      Authentication, UI, CRUD and charts
```

## Run and test in Chrome

Open the folder in a local static server (for example, run `python3 -m http.server 8000` in the project folder) and open `http://localhost:8000/` in Chrome. Sign in with **admin@trimtime.com** / **Admin123**, or register a demo account. Add a customer and service, then add an appointment using both. Try the same barber, date and time again to check duplicate prevention. Edit and cancel an appointment, search and filter the list, then inspect the dashboard and analytics. Refresh to check persistence. Use Chrome DevTools device toolbar to inspect mobile, tablet and desktop layouts. Logout and try opening a protected page.

Completed appointments count toward revenue; prices are captured at booking time. Charts count all statuses unless labelled as revenue. Customer and service records with appointments cannot be deleted until those appointments are removed. All records are fictional. Data and demo passwords are stored in browser storage, so this prototype is not secure and must not be used for sensitive or real customer data. Clearing site data resets the demo.

## Publish with GitHub Pages

Push these files to a GitHub repository. In **Settings → Pages**, select **Deploy from a branch**, choose the desired branch and `/ (root)`, then save. Open the Pages URL GitHub provides after deployment. All application links are relative and work under a project path.

## Customer and administrator views

Sign in with the demo administrator account to manage records and analytics. Register a new account and sign in to see the customer booking page, request appointments, and cancel pending or confirmed bookings. To see those bookings as the administrator, sign out and sign back in on the **same browser and site address**. This is a localStorage prototype: different browsers, devices, and site addresses do not share bookings. Roles and passwords are simulated in client-side code and do not provide real security.
