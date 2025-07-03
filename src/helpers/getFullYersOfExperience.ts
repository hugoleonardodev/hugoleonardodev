/**
 * Rertuns the number of years of experience working
 * @param startYear the year that you started to work
 * @param startMonth the month that you started to work where 1 is January and 12 is December
 * @returns Number of years of experience working
 * */
function getFullYearsOfExperience(
  startYear: number,
  startMonth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
): number {
  const startDate = new Date(startYear, startMonth - 1) // Month is 0-based
  const now = new Date()

  let years = now.getFullYear() - startDate.getFullYear()

  // If current month/day is before the start month/day, subtract 1 year
  if (
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() < startDate.getDate())
  ) {
    years--
  }

  return years
}

export default getFullYearsOfExperience
