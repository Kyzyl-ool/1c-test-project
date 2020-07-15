export const RGBToHex = (r: number, g: number, b: number): string => {
  return (
    '#' +
    Number(r).toString(16).padStart(2, '0') +
    Number(g).toString(16).padStart(2, '0') +
    Number(b).toString(16).padStart(2, '0')
  );
};

export const randomHexColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return RGBToHex(r, g, b);
};
