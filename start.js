const forever = require('forever-monitor');

var child = new (forever.Monitor)('index.js', {
    silent: true,
    args: []
});
 
child.on('exit', function () {
console.log('your-filename.js has exited after 3 restarts');
});

child.on('watch:restart', function(info) {
console.error('Restarting script because ' + info.file + ' changed');
});
 
child.on('restart', function() {
    console.error('Forever restarting script for ' + child.times + ' time');
});
 
child.start();

process.on('SIGINT',() =>{
    console.log("Gracefully shutdown the node");
    process.exit();
})
module.exports = child;