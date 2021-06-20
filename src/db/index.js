import units from "../assets/units.json";

const getUnits = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(units);
    }, 1000);
  });
};

export default getUnits;
