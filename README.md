# 🎮 Game4You
Game4You is a sleek and powerful game discovery app built with Next.js, Tailwind CSS, and Zustand. It uses the IGDB API to let you search, rate, favorite, and organize games into your own custom lists – all from an intuitive and modern interface.

---

# ✨ Features
- 🔍 Search for games via the IGDB API

- ❤️ Favorite the games you love

- ⭐ Rate games with your personal score

- 🗂️ Create custom lists to organize games your way (via modal)

- 📱 Responsive design for all devices

- ⚡ Global state powered by Zustand

---

## 🛠️ Tech Stack
Tool	Description
- Next.js	React Framework for SSR and routing
- Tailwind CSS	Utility-first styling framework
- Zustand	Lightweight state management
- IGDB API	Game data and media API

---
## 📁 Project Folder Structure

Here's a breakdown of the core structure of **Game4You**:

- 📦 src/
- ├── 📂 app/ # Next.js App Router structure
- │ ├── 📂 api/ # API routes
- │ ├── 📂 list/ # Game lists & related pages
- │ ├── 📂 overview/ # Overview or dashboard views
- │ ├── 📂 ratings/ # Pages for user ratings
- │ ├── 📄 layout.tsx # Global layout for app
- │ └── 📄 page.tsx # Entry point page
- │
- ├── 📂 components/ # Reusable UI components
- │ ├── 📂 FavoriteList/ # Favorite games component
- │ ├── 📂 footer/ # Footer layout
- │ ├── 📂 gameList/ # Game listing display
- │ ├── 📂 modal/ # Modal for game info, list actions
- │ ├── 📂 nav/ # Navigation bar
- │ ├── 📂 Rating/ # Star rating component
- │ └── 📂 search/ # Search input and results
- │
- ├── 📂 hook/ # Custom React hooks
- ├── 📂 store/ # Zustand global state management
- ├── 📂 types/ # TypeScript types and interfaces
- ├── 📄 globals.css # Global styles (Tailwind base)

---


## 🚀 Getting Started
### Clone the project
```
git clone https://github.com/yourusername/Game4You.git
```
```
cd Game4You
then, cd api-project-f24
```
### Install dependencies
```
npm install
```
### Start the development server
```
npm run dev
```
---

## 🧪 Environment Variables
Make sure to set up your .env.local file with the following:
IGDB_CLIENT_ID=your_client_id
IGDB_ACCESS_TOKEN=your_access_token
```
https://www.igdb.com/api
```
---
## 📸 Screenshots
![Skärmbild 2025-05-11 203425](https://github.com/user-attachments/assets/f121b7de-6410-42d9-9e94-210c70c06ddb)
![Skärmbild 2025-05-11 203723](https://github.com/user-attachments/assets/8139fdd9-bddd-41bf-a849-d322c6c321e8)

---
## 🙌 Contribute
Feel free to fork, open issues, or submit pull requests!
Every bit of feedback or contribution is appreciated.
---
## 📄 License
This project is licensed under the MIT License.
