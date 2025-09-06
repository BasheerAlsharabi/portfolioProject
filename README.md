# FrontEnd Template

**This template provides a minimal setup for FrontEnd's project structure**

- To configure Eslint to automatically fix errors or format your code when save.

1. Create a `.vscode` folder in your project's root directory

2. Create a `settings.json` file inside the `.vscode` folder
   and paste the following object in the `settings.json` file.

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```
