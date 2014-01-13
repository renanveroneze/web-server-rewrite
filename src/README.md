# Web Server Rewrite

### Install
```bash
    npm install -g web-server-rewrite
```

### Usage example:
In first step, create a file called `rewrite.json` where is folder root.

**rewrite.json**
```js
    {
        "pages": {
            "\": "index.html",
            "products/(.*)": "index.html"
        }
    }
```

After create the `json` file, start server with command in root folder:

```bash
web-server [port](optional)
```

