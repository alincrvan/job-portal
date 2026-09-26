export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-AT", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
  }).format(date);
};
