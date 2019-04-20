module.exports.validateSize = (size) => {
  const sizes = [`ty`, `sm`, `md`, `lg`, `xl`, `tiny`, `small`, `medium`, `large`, `xlarge`, `100`, `90`, `80`, `75`, `70`, `66`, `60`, `50`, `40`, `33`, `30`, `25`, `20`, `15`, `10`, `100px`, `125px`, `150px`, `175px`, `200px`, `225px`, `250px`, `300px`, `350px`, `400px`, `450px`, `500px`, `550px`, `600px`, `650px`, `700px`, `750px`, `800px`, `900px`, `1000px`, `1100px`, `1200px`];
  const sizeClass = [`t-flex-ty`, `t-flex-sm`, `t-flex-md`, `t-flex-lg`, `t-flex-xl`, `t-flex-ty`, `t-flex-sm`, `t-flex-md`, `t-flex-lg`, `t-flex-xl`, `t-flex-100`, `t-flex-90`, `t-flex-80`, `t-flex-75`, `t-flex-70`, `t-flex-66`, `t-flex-60`, `t-flex-50`, `t-flex-40`, `t-flex-33`, `t-flex-30`, `t-flex-25`, `t-flex-20`, `t-flex-15`, `t-flex-10`, `t-flex-100px`, `t-flex-125px`, `t-flex-150px`, `t-flex-175px`, `t-flex-200px`, `t-flex-225px`, `t-flex-250px`, `t-flex-300px`, `t-flex-350px`, `t-flex-400px`, `t-flex-450px`, `t-flex-500px`, `t-flex-550px`, `t-flex-600px`, `t-flex-650px`, `t-flex-700px`, `t-flex-750px`, `t-flex-800px`, `t-flex-900px`, `t-flex-1000px`, `t-flex-1100px`, `t-flex-1200px`];
  
  if ( !sizes.includes(size) )
    throw new RangeError(`Trinium.validateSize(): Invalid size '${size}', must be ty, sm, md, lg, xl, tiny, small, medium, large, xlarge, or for percentages, 10, 15, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100, or for pixels, 100px, 125px, 150px, 175px, 200px, 225px, 250px, 300px, 350px, 400px, 450px, 500px, 550px, 600px, 650px, 700px, 750px, 800px, 900px, 1000px, 1100px, or 1200px.`);
  
  return sizeClass[sizes.findIndex(x => x == size)];
};
