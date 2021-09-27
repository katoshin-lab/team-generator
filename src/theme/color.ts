const color: Color = {
  light: {
    main: "#f6f7d7",
    sub: "#fbfcef",
    second: "#3ec1d3",
    third: "#ff9a00",
    fourth: "#ff165d",
    mainText: "#252525",
    secondText: "#454545"
  },
  dark: {
    main: "#1c1d06",
    sub: "#131304",
    second: "#3ec1d3",
    third: "#ff9a00",
    fourth: "#ff165d",
    mainText: "#D1D1D1",
    secondText: "#B1B1B1"
  }
};

export default color;

export interface Color {
  light: ColorSet;
  dark: ColorSet;
}

interface ColorSet {
  main: string;
  sub: string;
  second: string;
  third: string;
  fourth: string;
  mainText: string;
  secondText: string;
}
