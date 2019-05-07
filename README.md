# eslint-plugin-terra

ESLint rules for terra

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-terra`:

```
$ npm install eslint-plugin-terra --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-terra` globally.

## Usage

Add `terra` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "terra"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "terra/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





