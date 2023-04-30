export const capitalizeString = (text) => {
  return text && text.length > 2
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : "";
};
