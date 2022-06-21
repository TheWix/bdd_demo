module.exports = {
  default: {
    requireModule: ["ts-node/register", "tsconfig-paths/register"],
    require: ["src/features/**/*.ts"],
    publishQuiet: true,
    format: ["progress-bar", "html:cucumber-report.html"],
  },
};
