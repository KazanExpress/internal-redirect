# Internal redirect

It's a simple node js service that accepts `redirect` query param, prints some message and redirects to passed url on clicking the link.

<img width="1276" alt="изображение" src="https://user-images.githubusercontent.com/7482065/212831557-c5cc90f7-b057-4b94-b7dc-51ee10f2dc58.png">

## Configuration

This page could be parametrized using these environment variables:

* `TITLE` - h1 and page title string
* `MESSAGE` - message under title
* `PARAM` - name of query parameter from which redirect url should be extracted. Default is `redirect`
* `ALLOWED_URL_PATTERNS` - comma separated list of allowed url to redirect regex patterns. By default everything is allowed (`.*`)

## Usage

```bash
docker pull ghcr.io/kazanexpress/internal-redirect:latest

docker run -p 3000:3000 ghcr.io/kazanexpress/internal-redirect:latest
```
