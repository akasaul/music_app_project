export const formatTime = (duration) => {
  const minutes = Math.floor(duration / 60);
  let seconds = duration - minutes * 60;
  if(seconds < 10) {
    seconds = `${seconds}0`;
  }
  return `${minutes}:${seconds}`;
}