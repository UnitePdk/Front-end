const solution = (angle: number): 1 | 2 | 3 | 4 | 0 => {
  if (angle > 180) return 0;
  else if (angle == 180) return 4;
  else if (angle > 90) return 3;
  else if (angle == 90) return 2;
  else if (angle > 0) return 1;
  else return 0;
};
