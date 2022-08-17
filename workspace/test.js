const { BaseName } = require('./src/index');
const basename = new BaseName();

basename.on('start', (e) => {
    return e; 
});