import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {  type TChart, type TChartParam } from '../../../types';
import { toast } from "react-toastify";
import { Slide, Flip  } from 'react-toastify';

type TInitialState = {
  chartsData: TChart | null;
  isLoading: boolean;
  error: string;
}

const initialState: TInitialState = {
  chartsData: null,
  isLoading: false,
  error: "",
};

export const fetchChartsData = createAsyncThunk("post/fetchChartData", async ({startDate, endDate, base, selectCoin = 'EUR'}: TChartParam) => {
  const response = await axios.get(
    `https://api.frankfurter.dev/v1/${startDate}..${endDate}?base=${base}&symbols=${selectCoin}`,
  );
  return response.data;
});

export const chartsSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchChartsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.chartsData = action.payload;
      toast.success("Успешная загрузка данных", {
        transition: Flip,
        autoClose: 5000,
      })
    });
    builder.addCase(fetchChartsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "ошибка подгрузки карт";
      state.chartsData = null;
      toast.error("Ошибка загрузки", {
        transition: Slide

      })
    });
    builder.addCase(fetchChartsData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export default chartsSlice.reducer;
