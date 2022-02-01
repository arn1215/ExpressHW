const express = require('express');
const routes = require('./routes');

// Create the Express app.
const app = express()


// Define routes.
// app.get('/', (req, res) => {
//     // TODO Send a response back to the client.
//     res.send('Hello from express')
// });

app.all('*', (req,res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request path: ${req.path}`);

    const pageData = { title: 'Welcome', heading: 'Home'}
    
    res.render('layout', { title: 'Pug Template Syntax Sandbox', heading: 'Welcome to the Sandbox!' });
});
// Define a port and start listening for connections.

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}....`))



//set the pug view engine
app.set('view engine', 'pug');

//test the app with node scratch.js



//using router
// const express = require('express');
// const routes = require('./routes');

// // Create the Express app.
// const app = express();

// // Mount router instances.
// app.use('/portland-thorns', routes);
// app.use('/orlando-pride', routes);

// // Define a port and start listening for connections.

// const port = 8081;

// app.listen(port, () => console.log(`Listening on port ${port}...`));