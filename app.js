var Emitter = require('./emitter');  // if we switch './emitter'  to  'events'  we will be using the emitter built into the code of node.js
var eventConfig = require('./config').events // grab events property from the config object

var emtr = new Emitter();  // create a new instance of an event emitter

emtr.on(eventConfig.GREET, function() {  // we can replace the 'greet' string with a value from the config object's event property, this helps us avoid issues with magic strings
  console.log('Somewhere, someone said hello.')  // add this console.log function to the 'greet' 'type' on the events object
})

emtr.on('greet', function() {
  console.log('A greeting occurred!')
})

emtr.on('diss', function() {  // add this console.log function to the 'diss' 'type' on the events object
  console.log('You are so fat!')
})

emtr.on('diss', function() {
  console.log('Your mom is so fat!')
})

emtr.emit('diss'); // invoke all the 'listener' functions sitting in the 'diss' 'type' on the events object