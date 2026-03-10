import React, { useEffect } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import chartsSlice, {
  fetchChartsData,
} from "../../app/slices/Chart/ChartSlice";

const Chart = () => {
  const { selectCoin, selectDate } = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  const { chartsData } = useAppSelector((state) => state.charts);


  const normalizeData =
  chartsData?.rates
    ? Object.entries(chartsData.rates).map(([date, rate]) => ({
        date,
        [selectCoin]: rate?.[selectCoin]
      }))
    : [];

  console.log(chartsData);
  console.log(selectCoin);
  console.log(normalizeData);

  useEffect(() => {

    if(!selectCoin) return
    
    console.log(selectCoin)
    dispatch(
      fetchChartsData({
        startDate: `${selectDate}-01-01`,
        endDate: `${selectDate}-02-01`,
        base: "USD",
        selectCoin: selectCoin,
      }),
    );

    console.log(chartsData);
  }, [dispatch, selectDate, selectCoin]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={normalizeData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#010101" />
          <Line type="monotone" dataKey={selectCoin}  stroke="#3b09ee" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
