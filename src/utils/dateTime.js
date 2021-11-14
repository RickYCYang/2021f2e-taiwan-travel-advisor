export const addSeconds = (date, seconds) => {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
};

export const getHoursAndMinuteStr = (date) => {
  return fillZero(date.getHours()) + " : " + fillZero(date.getMinutes());
};

export const fillZero = (digit) => {
  if (digit.toString().length < 2) {
    digit = "0" + digit;
  }
  return digit;
};
