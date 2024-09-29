export function formatNumber(number: number) {
  let result = number;
  let numberUnit = '';
  if (number >= 1000000000000) {
    result = number / 1000000000000;
    numberUnit = 't';
  } else if (number >= 1000000000) {
    numberUnit = 'b';
    result = number / 1000000000;
  } else if (number >= 1000000) {
    numberUnit = 'm';
    result = number / 1000000;
  } else if (number >= 1000) {
    numberUnit = 'k';
    result = number / 1000;
  }

  result = Math.floor(result * 100) / 100;

  if (result % 1 === 0) {
    return String(result.toFixed(0)) + numberUnit;
  }
  return String(result.toFixed(2)) + numberUnit;
}
