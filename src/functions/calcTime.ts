export function calcTime(milseconds: number) {
  const min = Math.floor(milseconds/ 60000);
  const sec = Math.floor((milseconds % 60000) / 1000)

  return `${min}m and ${sec}s`
}