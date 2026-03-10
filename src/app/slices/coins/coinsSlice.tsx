import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { TCoin } from "../../../types";

export type TCoinsState = {
  coinsData: TCoin | null;
  isLoading: boolean;
  error: string | undefined;
  selectDate: string;
  selectCoin: string;
}


const initialState: TCoinsState = {
  coinsData: null,
  isLoading: false,
  error: "",
  selectDate: '2020',
  selectCoin: 'GBP'
};

export const fetchCoinsData = createAsyncThunk("post/coinsData", async (selectYear: string = '2022') => {
  const response = await axios.get(
    `https://api.currencybeacon.com/v1/historical?api_key=CDoLoWJVKT7h4odO3jKAgJ2hYmlnjBqH&base=USD&date=${selectYear}-01-01`,
  );
  return response.data;
});

export const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    changeSelectCoin: (state, action) => {
      state.selectCoin = action.payload
    },
    changeselectDate: (state, action) => {
      state.selectDate = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchCoinsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.coinsData = action.payload;
    });
    builder.addCase(fetchCoinsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "ошибка подгрузки монет";
      state.coinsData = null;
    });
    builder.addCase(fetchCoinsData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export const {changeSelectCoin, changeselectDate} = coinsSlice.actions

export default coinsSlice.reducer;
