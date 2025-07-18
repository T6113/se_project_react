export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../images/day/Day.1.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "cloudy",
    url: new URL("../images/day/Day.2.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "rain",
    url: new URL("../images/day/Day.3.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunder",
    url: new URL("../images/day/Day.4.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../images/day/Day.5.png", import.meta.url).href,
  },

  {
    day: true,
    condition: "gloomy",
    url: new URL("../images/day/Day.6.png", import.meta.url).href,
  },

  //add remainding day images//

  {
    day: false,
    condition: "clear",
    url: new URL("../images/night/night.1.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "cloudy",
    url: new URL("../images/night/night.2.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../images/night/night.3.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunder",
    url: new URL("../images/night/night.4.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../images/night/night.5.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "gloomy",
    url: new URL("../images/night/night.6.png", import.meta.url).href,
  },

  //add remaining night images//
];

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 99,
    name: "Dress",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 9999,
    name: "Potato",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 28.04125,
  longitude: -97.042511,
};

export const APIkey = "e5a9d79fa7627ef9fe990e80e99ce522";
