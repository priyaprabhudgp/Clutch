export function daysLate(dueAt) {
  const now = new Date();
  const due = new Date(dueAt);
  const diff = now - due;
  return diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
}
