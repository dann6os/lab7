const fetch = require("node-fetch");

exports.handler = async function () {
  const apiKey = process.env.WEATHER_API_KEY;
  const city = "Halifax"; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: data.message }),
      };
    }

    const weather = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(weather),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unable to fetch weather" }),
    };
  }
};
