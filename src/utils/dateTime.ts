export const addSeconds = (date: Date, seconds: number): Date => {
  const _date = new Date(date.getTime() + seconds * 1000);
  return _date;
};

export const getHoursAndMinuteStr = (date: Date): string => {
  return fillZero(date.getHours()) + " : " + fillZero(date.getMinutes());
};

export const fillZero = (digit: number): string => {
  let _digit = digit.toString();
  if (_digit.length < 2) {
    _digit = "0" + digit;
  }
  return _digit;
};
