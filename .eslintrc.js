module.exports = {
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": { "jsx": true }
	},
    "extends": "airbnb",
    "rules": {
    	"indent": ["error", 2],
    	"no-console": [0],
			"react/jsx-filename-extension": [0],
			"jsx-a11y/label-has-associated-control": [0],
			"jsx-a11y/label-has-for": [0],
			"no-alert": [0],
			"react/button-has-type": [0]
    },
    "env": {
    	"browser": true,
    	"jest": true
    }
};
