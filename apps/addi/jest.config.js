module.exports = {
  name: "addi",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/addi/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
