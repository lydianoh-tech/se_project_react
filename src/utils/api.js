import { APIkey } from "./constants.js";

const baseUrl = "http://localhost:3000";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function postItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function getWeatherData(coordinates) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
}

export { getItems, postItem, deleteItem, getWeatherData };
