export const addSeconds = (date: Date, seconds: number) => {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
};

export const getHoursAndMinuteStr = (date: Date) => {
  return fillZero(date.getHours()) + " : " + fillZero(date.getMinutes());
};

const fillZero = (digit: number) => {
  let _digit = digit.toString();
  if (_digit.length < 2) {
    _digit = "0" + digit;
  }
  return _digit;
};
