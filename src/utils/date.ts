export const getPeriodDuration = (start: Date, end: Date | undefined) => {
  const duration = new Date(
    (end ? end.getTime() : Date.now()) - start.getTime(),
  );
  const years = duration.getFullYear() - 1970;
  const months = duration.getMonth();
  return `${
    years > 0
      ? `${years} year${years > 1 ? 's' : ''}${
          years > 0 && months > 0 ? ', ' : ''
        }`
      : ''
  }${months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''}`;
};
