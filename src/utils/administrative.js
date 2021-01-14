import provinsiData from "@data/provinsi.json";

export const provinsiList = () => provinsiData;

export const kotaList = (idProvinsi) => {
  try {
    const kotaData = require(`@data/kota/${idProvinsi}.json`);
    return kotaData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
