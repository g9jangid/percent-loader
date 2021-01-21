export const convertProgressToCircumference = (radius, progress) => {
  let c = Math.PI * (radius * 2);
  return ((100 - progress) / 100) * c;
};
