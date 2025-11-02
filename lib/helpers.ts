import { fetchWeatherApi } from "openmeteo";
import fs from "fs";
import path from "path";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

export function getCurrentDate() {
  const date = new Date();
  const dayOfWeek = weekdays[date.getDay()];
  const month = months[date.getMonth()];
  const day: string | number = date.getDate();

  return `${dayOfWeek}, ${month} ${day}`;
}

export function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;

  let minutes: string | number = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return `${hours}:${minutes}`;
}

export async function getCurrentTemperature() {
  const params = {
    latitude: 43.7064,
    longitude: -79.3986,
    hourly: "temperature_2m",
    current: "temperature_2m",
    timezone: "America/New_York",
  };
  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  const response = responses[0];
  const current = response.current()!;
  const hourly = response.hourly()!;
  // Attributes for timezone and location
  // const latitude = response.latitude();
  // const longitude = response.longitude();
  // const elevation = response.elevation();
  // const timezone = response.timezone();
  // const timezoneAbbreviation = response.timezoneAbbreviation();
  const utcOffsetSeconds = response.utcOffsetSeconds();

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature_2m: current.variables(0)!.value(),
    },
    hourly: {
      time: Array.from(
        { length: (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval() },
        (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
      ),
      temperature_2m: hourly.variables(0)!.valuesArray(),
    },
  };

  return weatherData.current.temperature_2m.toFixed(0).toString();
}