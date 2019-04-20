module.exports.validateSize = (size) => {
  const sizes = [`ty`, `sm`, `md`, `lg`, `xl`, `tiny`, `small`, `medium`, `large`, `xlarge`, `100`, `90`, `80`, `75`, `70`, `66`, `60`, `50`, `40`, `33`, `30`, `25`, `20`, `15`, `10`, `100px`, `125px`, `150px`, `175px`, `200px`, `225px`, `250px`, `300px`, `350px`, `400px`, `450px`, `500px`, `550px`, `600px`, `650px`, `700px`, `750px`, `800px`, `900px`, `1000px`, `1100px`, `1200px`];
  const sizeClass = [`flex-ty`, `flex-sm`, `flex-md`, `flex-lg`, `flex-xl`, `flex-ty`, `flex-sm`, `flex-md`, `flex-lg`, `flex-xl`, `flex-100`, `flex-90`, `flex-80`, `flex-75`, `flex-70`, `flex-66`, `flex-60`, `flex-50`, `flex-40`, `flex-33`, `flex-30`, `flex-25`, `flex-20`, `flex-15`, `flex-10`, `flex-100px`, `flex-125px`, `flex-150px`, `flex-175px`, `flex-200px`, `flex-225px`, `flex-250px`, `flex-300px`, `flex-350px`, `flex-400px`, `flex-450px`, `flex-500px`, `flex-550px`, `flex-600px`, `flex-650px`, `flex-700px`, `flex-750px`, `flex-800px`, `flex-900px`, `flex-1000px`, `flex-1100px`, `flex-1200px`];
  
  if ( !sizes.includes(size) )
    throw new RangeError(`Trinium.validateSize(): Invalid size '${size}', must be ty, sm, md, lg, xl, tiny, small, medium, large, xlarge, or for percentages, 10, 15, 20, 25, 30, 33, 40, 50, 60, 66, 70, 75, 80, 90, 100, or for pixels, 100px, 125px, 150px, 175px, 200px, 225px, 250px, 300px, 350px, 400px, 450px, 500px, 550px, 600px, 650px, 700px, 750px, 800px, 900px, 1000px, 1100px, or 1200px.`);
  
  return sizeClass[sizes.findIndex(x => x == size)];
};
