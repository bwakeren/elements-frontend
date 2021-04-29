export const updateObject = (object, update) => ({ ...object, ...update });

export const numberThausand = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const dateFormat = (date) =>
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
