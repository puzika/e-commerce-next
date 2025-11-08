export function daysToSeconds(days: number) {
  return days * 60 * 60 * 24;
}

export function daysToMilliseconds(days: number) {
  return daysToSeconds(days) * 1000;
}