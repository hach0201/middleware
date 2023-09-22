const app = require('express')();
const port = 3000;

app.listen(
    port , 
    () => console.log(`server is running in ${port}`));


app.get('/', (req, res) => {
    res.send('Welcome to my Express.js server!')
})