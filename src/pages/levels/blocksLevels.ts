export const blueBallLevels = [
  "....e" +
  "....." +
  "....." +
  "....." +
  "s....",

  "xx..e" +
  "....." +
  "...xx" +
  "....." +
  "xxx.s",

  "xx.xx" +
  "x...x" +
  "..s.." +
  "x...x" +
  "xx.xx"
];

export const boxLevels = [
  "xxxx." +
  "b...." +
  "xxxx." +
  "s...." +
  "xxxxe"
]

export const blockLevelsConfig = [
  {
    label: 'blueball',
    levels: blueBallLevels,
  },
  {
    label: 'box',
    levels: boxLevels,
  }
]

export default blockLevelsConfig;