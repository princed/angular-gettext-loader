# [angular-gettext](https://github.com/rubenv/angular-gettext)-loader
Webpack loader for angular-gettext. Intended to be used for compilation only. 
Employ [angular-gettext-cli](https://github.com/huston007/angular-gettext-cli) together with [npm scripts](https://docs.npmjs.com/misc/scripts) for extraction.

### Parameters

See official angular-gettext [developer guide](https://angular-gettext.rocketeer.be/dev-guide/) 

#### format 
Choices: `javascript`, `json`. Default value: `javascript`

Compilation format, where `javascript` means Angular module. 

#### module
Type: `{string}`, default value: `gettext` 
 
Angular module name.  

### Usage examples

```js
module.exports = {
  module: {
    loaders: [
      // Bundle as angular module 
      {
        test: /basic.*\.po$/,
        loader: 'angular-gettext?module=myApp'
      },
      // Bundle as json, to be injected with gettextCatalog.setStrings(). json-loader is required as well 
      {
        test: /\.po$/,
        loader: 'json!angular-gettext?format=json'
      },
      // Copy as json, to be loaded with gettextCatalog.loadRemote()  
      {
        test: /additional.*\.po$/,
        loader: 'file?name=translations/[name].[hash].json!angular-gettext?format=json'
      }
    ]
  }
}  
```
