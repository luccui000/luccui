const MONTH = [...Array(12).keys()].map((e) => `Tháng ${e}`);

export const dateFormat = (data) => {
  const date = new Date(data);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}, ${MONTH[month]}, ${year}`;
};
export const limitText = (str, length = 100) => {
  let arrayStr = str.split(" ");
  if (arrayStr.length < length) {
    return [...arrayStr.join(" "), "..."];
  }
  return [
    ...arrayStr.filter((e, i) => (i < length ? e : "")).join(" "),
    " ...",
  ];
};
