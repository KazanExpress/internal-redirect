# Internal redirect

It's a simple node js service that accepts `redirect` query param, prints some message and redirects to passed url on pressing button or clicking url.

<img width="1276" alt="изображение" src="https://user-images.githubusercontent.com/7482065/212831557-c5cc90f7-b057-4b94-b7dc-51ee10f2dc58.png">

## Configuration

This page could be parametrized using these environment variables:

* `TITLE` - h1 and page title string
* `MESSAGE` - message under title
* `BUTTON` - text on redirect button
* `PARAM` - name of query parameter from which redirect url should be extracted. Default is `redirect`

## Usage

```bash
docker pull ghcr.io/kazanexpress/internal-redirect:latest

docker run -p 3000:3000 ghcr.io/kazanexpress/internal-redirect:latest
```
