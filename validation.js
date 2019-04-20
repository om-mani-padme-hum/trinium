module.exports.validateHeadingRank = (rank) => {
  if ( rank < 1 || rank > 6 )
    throw new RangeError(`Trinium.validateHeadingRank(): Invalid rank, must be a number from 1 to 6.`);
  
  return rank;
};

module.exports.validateSize = (size) => {
  const sizes = [`ty`, `sm`, `md`, `lg`, `xl`, `tiny`, `small`, `medium`, `large`, `xlarge`, `100`, `90`, `80`, `75`, `70`, `66`, `60`, `50`, `40`, `33`, `30`, `25`, `20`, `15`, `10`];
  const sizeClass = [`trinium-ty`, `trinium-sm`, `trinium-md`, `trinium-lg`, `trinium-xl`, `trinium-ty`, `trinium-sm`, `trinium-md`, `trinium-lg`, `trinium-xl`, `trinium-100`, `trinium-90`, `trinium-80`, `trinium-75`, `trinium-70`, `trinium-66`, `trinium-60`, `trinium-50`, `trinium-40`, `trinium-33`, `trinium-30`, `trinium-25`, `trinium-20`, `trinium-15`, `trinium-10`];
  
  if ( !sizes.includes(size) )
    throw new RangeError(`Trinium.validateSize(): Invalid size '${size}', must be ty, sm, md, lg, xl, tiny, small, medium, large, xlarge, or for percentages, 100, 90, 80, 75, 70, 66, 60, 50, 40, 33, 30, 25, 20, 15, or 10.`);
  
  return sizeClass[sizes.findIndex(x => x == size)];
};
