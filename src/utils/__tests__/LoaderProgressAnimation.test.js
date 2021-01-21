import React from "react";
import { convertProgressToCircumference } from "../LoaderProgressAnimation";

it("is Circumference working correctly", () => {
  expect(convertProgressToCircumference(90, 20)).toEqual(452.38934211693027);
  expect(convertProgressToCircumference(210, 60)).toEqual(527.7875658030853);
});
