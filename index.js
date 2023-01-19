const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const paramName = process.env.PARAM || 'redirect';
app.get('/', (req, res) => {
    var redirectUrl = req.query[paramName];
    if (redirectUrl) {
      var url = new URL(redirectUrl);
      // add all query parameters to the redirect url except the redirect parameter
      var params = new URLSearchParams(req.query);
      params.delete(paramName);
      redirectUrl = url.origin + url.pathname + '?' + params.toString();
      }
    res.render('index', { redirect: redirectUrl });
})
app.listen(3000, () => {
  console.log('Internal redirect app listening on port 3000!')
})
