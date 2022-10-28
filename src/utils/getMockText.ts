const str =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi\n" +
  "            cumque dolor ea enim excepturi, illo impedit, incidunt iusto libero\n" +
  "            nemo nesciunt nisi, odit officiis perferendis quibusdam. Ab corporis\n" +
  "            sunt ullam.";

export const getMockText = (count?: number) => {
  return count ? str.slice(0, count) : str;
};
