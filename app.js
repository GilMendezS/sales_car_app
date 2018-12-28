const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(morgan('combined'));
app.listen(PORT, () => {
    console.log(`Server running... ${PORT}`)
})