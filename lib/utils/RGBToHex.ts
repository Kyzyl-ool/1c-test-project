export const RGBToHex = (r: number, g: number, b: number): string => {
  return '#' + Number(r).toString(16) + Number(g).toString(16) + Number(b).toString(16);
};
