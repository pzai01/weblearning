/**
 * Created by hasee on 2016/6/15.
 */
var gulp = require('gulp');
var uglify=require('gulp-uglify');
var pipe=require('gulp-pipe');
var concat=require('gulp-concat');
gulp.task('yasuo',function () {
    gulp.src('./src/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
    console.log("hello world");
})
gulp.watch('./src/*.js',['yasuo']);
gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    console.log("hello world");
});