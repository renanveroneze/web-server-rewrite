# Web Server Rewrite

### Install
```bash
    npm install -g web-server-rewrite
```

### Usage example:
In first step, create a file called `rewrite.json` where is folder root.

**rewrite.json**
```
    {
        "pages": {
            "/": "index.html",
            "/product/(.*)": "products.html"
        }
    }
```

After create the `json` file, start server with command in root folder:

```bash

Usage: web-server [options]

Options:

  -p, --port     change port to server listen
  -b, --base     root folder for web access

Examples:

  $ web-server --port=3000
  $ web-server -p=3000
  
  $ web-server --base=public_html/
  $ web-server -b=public_html/


```

