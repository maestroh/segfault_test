var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var SegfaultHandler = require('segfault-handler');
SegfaultHandler.registerHandler();

gulp.task('app', function(){
	nodemon({ script: 'app.js', ext: 'js',  watch: 'test.js'})
		.on('change', ['test'])
		.on('restart', function(){ console.log('restarted!')});
});

gulp.task('test', function(){
	return gulp.src(
				['./test.js']
				, {read:false})
			.pipe(mocha({reporter: 'dot'}));
});

gulp.task('default', ['test', 'app']);