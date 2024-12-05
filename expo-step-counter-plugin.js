module.exports = function withPedometerPermission(config) {
  if (!config.ios) {
    config.ios = {};
  }

  if (!config.ios.infoPlist) {
    config.ios.infoPlist = {};
  }

  config.ios.infoPlist["NSMotionUsageDescription"] =
    "Needs permissions for tracking steps";

  return config;
};
