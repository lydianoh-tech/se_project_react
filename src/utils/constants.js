export const weatherOptions = [
  {
    isDay: true,
    condition: "clear",
    url: new URL('../assets/day/sunny-day.png', import.meta.url).href,
  },
  {
    isDay: true,
    condition: "cloudy",
    url: new URL('../assets/day/cloudy-day.png', import.meta.url).href,
  },
  {
    isDay: false,
    condition: "clear",
    url: new URL('../assets/night/moon-night.png', import.meta.url).href,
  },
  {
    isDay: false,
    condition: "cloudy",
    url: new URL('../assets/night/cloudy-night.png', import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL('../assets/day/default-day.png', import.meta.url).href,
  },
  night: {
    url: new URL('../assets/night/default-night.png', import.meta.url).href,
  },
};

export const defaultClothingItems = [
  {
    id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  }
];

export const coordinates = {
  latitude: 38.954926,
  longitude: -76.945541,
};

export const APIkey = "44005c5bfa3da23dde7eb1bb15293d10";