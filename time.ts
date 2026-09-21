export function minutesToHHMM(totalMinutes: number): string {
  const minutes = Math.max(0, Math.floor(totalMinutes));
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${rest.toString().padStart(2, '0')}`;
}

export function legalBreakMinutes(grossMinutes: number): number {
  if (grossMinutes > 9 * 60) return 45;
  if (grossMinutes > 6 * 60) return 30;
  return 0;
}

export function remainingUntilTenHours(netRelevantMinutes: number): number {
  return Math.max(0, 10 * 60 - netRelevantMinutes);
}
