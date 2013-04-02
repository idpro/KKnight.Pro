{{{
	"title" : "NodeJS, Express, & Grunt Makes Me Happy",
	"tags"  : [ "grunt", "express", "node", "javascript", "environments" ],
	"category" : "Node.js",
	"date" : "02-26-2013"
}}}

One issue that I had for a long time was trying to get [Grunt](http://gruntjs.com/) to run whenever I start my Node app. <!--more-->I run a Node app that deploys and initiates in different environments, which mean my Grunt code needs to run in different tasks in each environment.  
Such as running [Sass](https://github.com/gruntjs/grunt-contrib-sass) and [Regarde](https://github.com/yeoman/grunt-regarde) in development mode, but [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) in production.

We'll use the [Child Process](http://nodejs.org/api/child_process.html) library and will use that to run a secondary process with the server starting.

	var cp = require('child_process');  
	var grunt = cp.spawn('grunt', ['--force', process.env.NODE_ENV]);  
	grunt.stdout.on('data', function(data) {  
		console.log("%s", data);  
	});  

This will run the task named after the environment you're currently in. You can change your environments when starting your app: `NODE_ENV=development node app.js`

Then in your Gruntfile.js just build out tasks named after your environments.

	grunt.registerTask('development', ['sass:development', 'regarde']);  
	grunt.registerTask('production', ['sass:production', 'uglify']);

That's basically all it takes to have Grunt running when you initiate your Node app.

Happy Hacking.