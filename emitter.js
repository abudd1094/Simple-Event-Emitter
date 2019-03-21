function Emitter() {                         
  this.events = {};  // the events object on the constructor
}

Emitter.prototype.on = function(type, listener) { // add an on method that adds a 'type' property to events object
  this.events[type] = this.events[type] || [];  // this 'type' property should have an array as its value
  this.events[type].push(listener);  // push 'listener' functions into this array
}

Emitter.prototype.emit = function(type) {  // add an emit method that iterates through the 'type' property array
  if (this.events[type]) {  // if this type of event exists execute the following code
    this.events[type].forEach(function(listener) {   // iterate through the 'type' property array
      listener();  // invoke each 'listener' function in the 'type' property array
    });
  }
}

module.exports = Emitter;