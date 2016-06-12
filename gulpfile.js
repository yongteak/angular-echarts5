var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    del = require('del');
var reload = browserSync.reload;

gulp.task('build', function() {
    gulp.src('./src/app/angular-echarts3.js')
        .pipe(gulp.dest('./dist'))
        .pipe(reload({ stream: true }));
})

gulp.task('s', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            routes: {
                "/echarts": "bower_components/echarts/dist/echarts.min.js",
                "/angular": "bower_components/angular/angular.min.js",
            }
        },
        files: ["./src/**/*.html", "./src/**/*.js"],
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: false
        }
    });
});
