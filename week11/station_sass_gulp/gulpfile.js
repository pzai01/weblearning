var gulp=require('gulp');
var sass=require('gulp-sass');
var mincss=require('gulp-cssnano');
var htmlmin =require('gulp-htmlmin');
var autoprefixer =require('gulp-autoprefixer');
var del= require('del');

gulp.task('clean', del.bind(null, ['dest']));

gulp.task('scsstocss',function () {
	return gulp.src('./app/styles/main.scss')
	.pipe(sass())
	.pipe(autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
	.pipe(mincss())
	.pipe(gulp.dest('./dest/'))
})

gulp.task('minhtml',function(){
	return gulp.src('./app/index.html')
	.pipe(htmlmin())
	.pipe(gulp.dest('./dest/'))
})

gulp.task('build',['scsstocss','minhtml'])

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});