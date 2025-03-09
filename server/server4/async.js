const grindBean = () => {
  return new Promise((sucs, fail) => {
    setTimeout(() => {
      sucs("커피콩 갈기 완료");
    }, 3000);
  });
};

const getHotWater = () => {
  return new Promise((sucs, fail) => {
    setTimeout(() => {
      sucs("뜨거운 물 받기");
    }, 2000);
  });
};

const makeCoffee = async () => {
  const getBean = await grindBean();
  const getWater = await getHotWater();
  console.log(getBean, getWater);
};
