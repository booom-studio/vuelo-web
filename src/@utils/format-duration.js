import parseMs from 'parse-ms';

const padDigits = number => ('0' + number).slice(-2);

export default ms => {
  const { days, hours, minutes, seconds } = parseMs(ms || 0);

  const HH = padDigits(Math.abs(hours + days * 24));
  const mm = padDigits(Math.abs(minutes));
  const ss = padDigits(Math.abs(seconds));

  return `${HH}:${mm}:${ss}`;
};
