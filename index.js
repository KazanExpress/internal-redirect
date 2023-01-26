const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const paramName = process.env.PARAM || 'redirect';
const patterns = process.env.ALLOWED_URL_PATTERNS
  ? process.env.ALLOWED_URL_PATTERNS.split(',').map(s => new RegExp(s.trim()))
  : [new RegExp('.*')];

console.log("allowed patterns: %s", patterns);

function isAllowedURL(url, patterns) {

  for (let i = 0; i < patterns.length; i++) {
    if (url.match(patterns[i])) {
      return true;
    }
  }
  return false;
}

app.get('/', (req, res) => {
  var redirectUrl = req.query[paramName];
  if (redirectUrl) {
    var url = new URL(redirectUrl);
    // add all query parameters to the redirect url except the redirect parameter
    var params = new URLSearchParams(req.query);
    params.delete(paramName);
    var strParams = params.toString();
    redirectUrl = url.origin + url.pathname + (strParams.length > 0 ? '?' + strParams : '');
    if (!isAllowedURL(redirectUrl, patterns)) {
      console.log('URL not allowed: %s', redirectUrl)
      redirectUrl = "";
    }
  }
  res.render('index', { redirect: redirectUrl });
})

// /*eslint no-unused-vars: "next"*/
app.use((err, req, res, next) => {
  console.error('Internal redirect app error: %s', err)
  res.status(400).send('Internal redirect app error')
})

app.listen(3000, () => {
  console.log('Internal redirect app listening on port 3000!')
})
