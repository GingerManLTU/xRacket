const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
require("dotenv").config();

const PORT = 3001;

app.use(cors());
app.use(express.json());

function windDegreeConversation(deg) {
  const windDirections = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const i = Math.round(deg / 45);
  if (i === 8) i = 0;
  return windDirections[i];
}

app.get("/api/weather", async (req, res) => {
  const { city } = req.query;
  if (!city || typeof city !== "string" || city.length > 169) {
    return res.status(400).send({ error: "Incorrect city name. Try again!" });
  }

  const sanitizedName = city
    .replace(/[^a-zA-ZĄČĘĖĮŠŲŪŽąčęėįšųūž\s\-]/g, "")
    .trim();

  try {
    const weatherKey = process.env.WEATHER_API;
    const results = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: sanitizedName,
          appid: weatherKey,
          units: "metric",
        },
      }
    );

    const windDirection = windDegreeConversation(results.data.wind.deg);
    res.json({
      city: results.data.name,
      temp: Math.round(results.data.main.temp),
      description: results.data.weather[0].description,
      humidity: results.data.main.humidity,
      windspeed: Math.round(results.data.wind.speed),
      winddeg: windDirection,
      icon: results.data.weather[0].icon,
    });
  } catch (error) {
    res.status(500).send({
      error: "We can't find your city.. Is it spelled correctly?",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
