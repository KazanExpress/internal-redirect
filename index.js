const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    var redirectUrl = req.query.redirect;
    res.render('index', { redirect: redirectUrl });
})
app.listen(3000, () => {
  console.log('Internal redirect app listening on port 3000!')
})
