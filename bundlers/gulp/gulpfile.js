const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

/*
exports.default = (done) => {
  console.log("default");
  done();
};
*/
exports.default = async () => {
  console.log("default");
};

exports.copy = async () => {
  return src("./style/*.scss").pipe(dest("output"));
};

exports.transform = async () => {
  return src("./style/*.scss").pipe(sass()).pipe(dest("build"));
};

function styles() {
  return src("./style/*.scss").pipe(sass()).pipe(dest("build"));
}

exports["build:watch"] = () => {
  return watch("./style/*.scss", styles);
};
