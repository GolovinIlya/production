import { createSelector } from "@reduxjs/toolkit";
import { CounterSchema } from "../../types/CounterSchema";
import { getCounter } from "../getCounter/getCOunter";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
);
