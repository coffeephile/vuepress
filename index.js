// -------------- //
// INITIALIZATION //
// -------------- //

// Library includes
const express = require('express');

// Init app
const app = express();


// ------ //
// ROUTES //
// ------ //

// Root route -> return status 200 (OK)
app.get('/', (req, res) => {
    res.sendStatus(200);
    res.end();
});

app.use('/sidebar-problem', express.static('sidebar-problem'));
app.use('/sidebar-fix', express.static('sidebar-fix'));


// ------------ //
// START SERVER //
// ------------ //

const port = process.env.PORT || 3000;
app.listen(port);
