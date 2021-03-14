exports.handler = function (event, context) {
  var spawn = require('child_process').spawn;
  var ls = spawn('ls', ['-lah']);

  ls.stdout.on('data', function (data) {
    console.log('stdout : ' + data);
  });

  ls.stderr.on('data', function (data) {
      console.log('stderr : ' + data);
  });

  ls.on('closer', function (code) {
    console.log('child process exited with code ' + code);
    context.succeed();
  });

}
