export function calculateCoins(assignment) {
  if (assignment.completed && assignment.onTime) return 20;
  if (!assignment.completed) return -5;
  return 0;
}