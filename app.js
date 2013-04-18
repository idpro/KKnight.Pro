var
  express       = require('express'),
  app           = express(),
  poet          = require('poet')( app ),
  colors        = require('colors'),
  configuration = require('./config/environment');

poet
  .set({
    postsPerPage : 3,
    posts        : './_posts',
    metaFormat   : 'json',
    readMoreLink : function ( post ) {
      var anchor = '<a class="read-more" href="'+post.url+'" title="Read more of '+post.title+'">read more</a>';
      return '<p>' + anchor + '</p>';
    }
  })
  .createPostRoute( '/posts/:post', 'post' )
  .createPageRoute( '/page/:page', 'page' )
  .createTagRoute( '/tag/:tag', 'tag' )
  .createCategoryRoute( '/category/:category', 'category' )
  .init();

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ));
app.use( app.router );

app.get( '/', function ( req, res ) { res.render( 'index' ) });

app.configure('development', function () {
  var cp    = require('child_process'),
      grunt = cp.spawn('grunt', ['--force', 'run']);

  grunt.stdout.on('data', function(data) {
    console.log("%s", data);
  });
});

app.listen(configuration.app.port);