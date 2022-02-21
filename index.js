import { Dimensions } from "react-native";

const heightMobileUI = 896;
const widthMobileUI = 414;

/**
 * width:responsiveWidth(100)
 * but you can also use responsiveHeight on width, it based on your height or width device
 * @param {Number} width
 * @returns
 * @author charismaaji
 * @url https://github.com/charismaaji/crs-responsive-size
 */
export const responsiveWidth = (width) => {
  return (Dimensions.get("window").width * width) / widthMobileUI;
};

/**
 * height:responsiveHeight(100)
 * but you can also use responsiveHeight on height, it based on your height or width device
 * @param {Number} height
 * @returns
 * @author charismaaji
 * @url https://github.com/charismaaji/crs-responsive-size
 */
export const responsiveHeight = (height) => {
  return (Dimensions.get("window").height * height) / heightMobileUI;
};
