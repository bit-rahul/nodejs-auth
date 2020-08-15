const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//------------ EJS Configuration ------------//
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));
app.set('view engine', 'ejs');

//------------ Routes ------------//
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/users'));

const PORT = process.env.PORT || 3006;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));