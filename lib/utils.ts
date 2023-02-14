export function calculateConversion(
  amount: any,
  baseCurrency: string,
  currency: string,
  rates: { [key: string]: number },
) {
  if (!isNumber(amount)) {
    return '';
  }

  return formatPrice(
    (parseFloat(amount) * rates[currency]) / rates[baseCurrency],
  );
}

export function formatPrice(price: any) {
  const formattedPrice = Math.round(Number(price) * 100) / 100;
  return formattedPrice > 0
    ? formattedPrice.toLocaleString()
    : parseFloat(price).toFixed(10);
}

const regex = /^[-+]?\d+(\.\d+)?$/;

export function isNumber(value: any) {
  return regex.test(value);
}

export function relativeTime(timestamp: string): string {
  if (!timestamp) return '';

  const date = new Date(timestamp);
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsAgo < 60) {
    return 'just now';
  }

  const minutesAgo = Math.floor(secondsAgo / 60);

  if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  }

  const hoursAgo = Math.floor(minutesAgo / 60);

  if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  }

  const daysAgo = Math.floor(hoursAgo / 24);

  if (daysAgo < 30) {
    return `${daysAgo} days ago`;
  }

  const monthsAgo = Math.floor(daysAgo / 30);

  if (monthsAgo < 12) {
    return `${monthsAgo} months ago`;
  }

  const yearsAgo = Math.floor(monthsAgo / 12);

  return `${yearsAgo} years ago`;
}

export function isXDaysOld(timestamp: string, days: number): boolean {
  const date = new Date(timestamp);
  const now = new Date();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const daysAgo = Math.floor(
    (now.getTime() - date.getTime()) / millisecondsPerDay,
  );

  return daysAgo >= days;
}
