'use strict';

// Import node events
const EventEmitter = require('node:events');

// Extends emitter
class BaseName extends EventEmitter {
    // Create constructor options
    constructor(options = {}) {
        super(options);

        // Define options
        this.options = options;
    }

    // Create on for callback
    on(listener = { callback: (event) => {
        // Define on function
        this.on = on;

        // Construct event callback to get
        return listener.callback[event];
    }}) {
        // Return true on because it's finish
        return true;
    }
}

module.exports = BaseName;