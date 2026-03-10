import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { type TCardsState } from "../../../types";
import { toast } from "react-toastify";
import { Slide, Flip  } from 'react-toastify';

const initialState: TCardsState = {
  cardsData: null,
  isLoading: false,
  error: "",
};

export const fetchCardsData = createAsyncThunk("post/fetchData", async () => {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=4",
  );
  return response.data;
});

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCardsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.cardsData = action.payload;
      toast.success("Успешная загрузка данных", {
        transition: Flip,
        autoClose: 5000,
      })
    });
    builder.addCase(fetchCardsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "ошибка подгрузки карт";
      state.cardsData = null;
      toast.error("Ошибка загрузки", {
        transition: Slide

      })
    });
    builder.addCase(fetchCardsData.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
  },
});

export default cardsSlice.reducer;
