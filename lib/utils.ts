import dayjs from 'dayjs';

type CurrencyFormatParams = {
  value: number;
  currency?: string;
};

export function formatCurrency(
  valueOrParams: number | CurrencyFormatParams,
  currency = 'USD',
): string {
  const resolvedValue =
    typeof valueOrParams === 'number' ? valueOrParams : valueOrParams.value;
  const resolvedCurrency =
    typeof valueOrParams === 'number'
      ? currency || 'USD'
      : valueOrParams.currency || currency || 'USD';

  const normalizedValue = Number.isFinite(Number(resolvedValue))
    ? Number(resolvedValue)
    : 0;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: resolvedCurrency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(normalizedValue);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

  return `${month}/${day}`;
}

export default formatCurrency;


export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid() ? parsedDate.format("MM/DD/YYYY") : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
