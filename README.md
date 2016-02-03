# drossel-json-parse
Unneccesary JSON parser

[![NPM](https://nodei.co/npm/drossel-json-parse.png)](https://nodei.co/npm/drossel-json-parse/)

## What is this?
"drossel-json-parse" is strict JSON.parse().  
If you specify argument other then JSON, returns "null".

## Install
```
npm install drossel-json-parse
```

## Usage
```
var drJSONParse = require('drossel-json-parse');
drJSONParse(json);
```

## Example
```
var str = '{"foo":"111","bar":"222"}'
drJSONParse(str);
// {foo: '111', bar: '222'}
```
```
var str = true;
drJSONParse(str);
// null
```
```
var str = function(){};
drJSONParse(str);
// null
```
