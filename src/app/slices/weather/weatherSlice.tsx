import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCity, TWeather } from "../../../types";


export type TWeatherState = {
  weatherData: TWeather | null;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: TWeatherState = {
  weatherData: null,
  isLoading: false,
  error: "",
};

export const fetchWeatherData = createAsyncThunk(
  "post/weatherData",
  async ( {latitude, longitude}: TCity ) => {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=7`,
    );
    return response.data;
  },
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: { },
  extraReducers(builder) {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.weatherData = action.payload;
    });
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "ошибка загрузки данных о погоде";
      state.weatherData = null;
    });
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const {  } = weatherSlice.actions;

export default weatherSlice.reducer;