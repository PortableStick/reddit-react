export function formatTime(time) {
  const now = Date.now() / 1000;
  let seconds = now - time;
  if (seconds < 60) {
    seconds = parseInt(seconds, 10);
    return 'less than a minute ago';
  }
  let minutes = seconds / 60;
  if (minutes < 60) {
    minutes = parseInt(minutes, 10);
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  }
  let hours = minutes / 60;
  if (hours < 24) {
    hours = parseInt(hours, 10);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  }
  let days = hours / 24;
  if (days < 365) {
    days = parseInt(days, 10);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }
  const years = parseInt(days / 365, 10);
  return `more than ${years === 1 ? 'a' : years} year${years === 1 ? '' : 's'} ago`;
}
