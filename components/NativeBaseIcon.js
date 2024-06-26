import React from "react";
import { Image } from "react-native";

const NativeBaseIcon = () => {
  return (
    <Image
      source={require('../assets/cubo.png')}
      style={{ width: 125, height: 125 }}
    />
  );
};
export default NativeBaseIcon;