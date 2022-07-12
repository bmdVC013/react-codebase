import { intervalToDuration } from "date-fns";

export const checkTypeOf = (value) => {
  const type = Object.prototype.toString.call(value).split(5);
  return type.substring(8, type.length - 1);
};

export const getDurationBetweenTwoDates = (start, end) => {
  return intervalToDuration({ start, end });
};
