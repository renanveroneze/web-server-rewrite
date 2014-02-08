# Web Server ReWrite

A beautiful http server with php process and rewrite options (.htaccess)


## Install

```bash
sudo npm install -g web-server-rewrite
```


## How to start

To activate options rewriting, you must create a file called `rewrite.json` in your root project folder

The structure of `rewrite.json` is:
```js
{
    "pages": {
        "/": "index.html",
        "/produtos": "produtos.html",
        "/produtos/:name/:id": "products.php?name=$1&id=$2",
        "/usuario/([a-z0-9.-_]+)": "user.php?user=$1"
    }
}
```

RegExp to RestFull style shortcuts:
```
:name, :page, :action, :module => ([\w]+)
:id => ([\d]+)
```



```bash

Usage: web-server [options]

Options:

  -p, --port     change port to server listen
  -b, --base     root folder for web access

Examples:

  $ web-server --port=3000
  $ web-server -b=public_html/

```
