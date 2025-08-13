# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# WTWR (What To Wear React) Project

A weather-driven wardrobe app built with **React** and **Vite**.  
Users can view the current weather, browse clothing suggestions, and add new garments to their collection.

---

## 🚀 Features

- **Weather Integration:** Fetches real-time weather data using OpenWeatherMap API.
- **Wardrobe Suggestions:** Displays clothing items based on the current weather.
- **Add Garments:** Modal form to add new clothing items.
- **Preview Items:** Click any item to preview details in a modal.
- **Responsive UI:** Clean, modern interface styled with CSS.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- CSS Modules

---

## 📦 Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/lydianoh-tech/se_project_react.git
   cd se_project_react
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Add your OpenWeatherMap API key:**
   - Edit `src/utils/weatherApi.js` and replace `"YOUR_API_KEY"` with your actual API key.

4. **Start the development server:**
   ```
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 📁 Project Structure

```
src/
  components/
    App/
    Header/
    Main/
    ItemCard/
    ItemModal/
    ModalWithForm/
    WeatherCard/
  utils/
    constants.js
    weatherApi.js
  assets/
    logo.svg
    ...
```

---

## 📝 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

## 🙌 Credits

Created by [Lydia Noh](https://github.com/lydianoh-tech)  
Inspired by the "Around the U.S." project.

---



MIT

---

**Live Demo:**  
https://github.com/lydianoh-tech/se_project_react