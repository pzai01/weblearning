var gulp =require("gulp");
var less =require('gulp-less');
var uglify =require('gulp-uglify');
var htmlmin =require('gulp-htmlmin');
var cssmin =require('gulp-clean-css');
var imgmin =require('gulp-imagemin');
var autoprefixer =require('gulp-autoprefixer');
var del = require('del');


//清楚dest文件夹
gulp.task('clean', del.bind(null, ['dest']));


//将less文件编译成css文件
gulp.task('lesstocss',function(){
    return gulp.src('./src/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dest/stylesheets/'))
    }
)

//压缩js文件
gulp.task('minMyjs',function(){
    return gulp.src('./src/js/jikexueyuan.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest/js/'))
    }
)
// gulp.task('minJqjs',function(){
//     return gulp.src('./bower_components/jquery/dist/jquery.min.js')
//     // .pipe(uglify())
//     .pipe(gulp.dest('./dest/js/'))
// })


//jquery导入到最终目录
gulp.task('minJqjs',function(){
    return gulp.src('./src/js/jquery.min.js')
    .pipe(gulp.dest('./dest/js/'))
})

//压缩css
gulp.task('mincss',function(){
    return gulp.src('./dest/stylesheets/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('./dest/stylesheets/'))
    }
)

//压缩html页面
gulp.task('minhtml',function(){
    return gulp.src('./src/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest/views/'))
    }
)

//压缩图片
gulp.task('minimg',function(){
    return gulp.src('./src/img/*')
    .pipe(imgmin())
    .pipe(gulp.dest('./dest/img/'))
    }
)

//生成最终的文件
gulp.task('build',['lesstocss','minMyjs','minJqjs','mincss','minhtml','minimg'])

//先执行清楚，然后生成最终文件
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});