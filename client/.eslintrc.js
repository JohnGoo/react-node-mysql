module.exports = {
	"parser": "babel-eslint", // 一个对Babel解析器的包装，使其能够与 ESLint 兼容(使用Babel解析，ESLin分析)
	"extends": "airbnb",
	"plugins": [
		"react",
    "jsx-a11y",
		"import"
	],
	"env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "max-len": [0, 150],
    "no-unused-expressions": ["error", {  // 短路
      "allowShortCircuit": true,
      "allowTernary": false
    }],
    "comma-dangle": ["error", {  // 对象尾逗号
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],

    "import/prefer-default-export": "off",  // import优先default输出
    "react/jsx-one-expression-per-line": "off", // react单行限制
    "react/jsx-filename-extension": "off",  // react限制为jsx文件
    "react/forbid-prop-types": [0], // 禁止某些proptypes
  }
}
