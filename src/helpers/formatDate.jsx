//tarihi alir ve geriye ay/gun olarak dondurur
const formatDate = (dateStr) => {
  // metin formatindaki tarihi aralardaki - ye gore parcalara ayirir
  const date = dateStr.split(".");
  //formatlatip dondur
  return date[1] + "/" + date[2];
};
export default formatDate;
