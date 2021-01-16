export interface LineConfig {
  x: number;
  y: number;
  width: number;
  degree: number;
}

/**
 * getLineConfig.
 * @params {HTMLElement} boxFrom - html element for start point
 * @params {HTMLElement} boxTo - html element for end point
 * @returns data of line
 */
export const getLineConfig = (boxFrom: HTMLElement, boxTo: HTMLElement): LineConfig => {
  // find x1 x2 y1 y2
  const x1 = boxFrom.offsetLeft + Math.floor(boxFrom.clientWidth / 2);
  const x2 = boxTo.offsetLeft + Math.floor(boxTo.clientWidth / 2);
  const y1 = boxFrom.offsetTop + Math.floor(boxFrom.clientHeight / 2);
  const y2 = boxTo.offsetTop + Math.floor(boxTo.clientHeight / 2);
  const xPoint = x2 - x1;
  const yPoint = y2 - y1;
  // a = y, b = x
  const c = Math.round(Math.sqrt(xPoint * xPoint + yPoint * yPoint));
  const degree = (Math.atan2(yPoint, xPoint) * 180) / Math.PI;

  const result = {
    x: x1,
    y: y1,
    width: c,
    degree,
  };
  return result;
};
