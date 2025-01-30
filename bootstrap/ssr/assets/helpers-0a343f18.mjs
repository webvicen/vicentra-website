const dateFormatIdn = (tanggal) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("id-ID", options).format(new Date(tanggal));
};
export {
  dateFormatIdn as d
};
