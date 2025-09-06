export function computeSavings({ manualMinutes, automatedMinutes, runs, hourlyRate }) {
  const perRunSaved = Math.max(0, (manualMinutes ?? 0) - (automatedMinutes ?? 0));
  const totalSavedMinutes = perRunSaved * (runs ?? 0);
  const costPerMinute = (hourlyRate ?? 250) / 60;
  const costSaved = +(totalSavedMinutes * costPerMinute).toFixed(2);
  return { timeSavedMinutes: totalSavedMinutes, costSaved };
}
