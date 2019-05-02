module.exports = {
  name: "nx-poc",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/nx-poc/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
