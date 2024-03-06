const { src, dest, watch } = require("gulp");
//*CSS

const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

function css(done) {
  //identificar archivo sass
  //Compilarlo
  //almacenarla en el disco duro
  src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));

  done();
}
function dev(done) {
  watch("src/scss/**/*.scss", css);
  done();
}
exports.css = css;

exports.dev = dev;
