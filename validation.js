module.exports.validateSize = (size) => {
  const sizes = [`ty`, `sm`, `md`, `lg`, `xl`, `tiny`, `small`, `medium`, `large`, `xlarge`];
  const sizeClass = [`trinium-ty`, `trinium-sm`, `trinium-md`, `trinium-lg`, `trinium-xl`, `trinium-ty`, `trinium-sm`, `trinium-md`, `trinium-lg`, `trinium-xl`];
  
  if ( !sizes.includes(size) )
    throw new RangeError(`Trinium.validateSize(): Invalid size '${size}', must be ty, sm, md, lg, xl, tiny, small, medium, large, or xlarge.`);
  
  return sizeClass[sizes.findIndex(x => x == size)];
};
