# Telemetry Tracker API (Node.js + Express + MongoDB)

Logs automation runs per project/client and auto-calculates **time saved** and **cost saved**.  
Built with Express + Mongoose. Simple, fast, and ready to plug into a React/Power BI dashboard.

---

## Features

- Clients & Projects (one client → many projects)
- Telemetry logs per project (manual vs automated time, runs)
- Derived metrics: `timeSavedMinutes`, `costSaved` (uses `HOURLY_RATE`)
- Summary endpoint (group by project/client/month, optional date range)
- CORS enabled for frontends
- Environment-based config via `.env`

---

## Tech Stack

- **Node.js**, **Express**
- **MongoDB** + **Mongoose**
- **dotenv**, **cors**, **nodemon**

---

## Project Structure

