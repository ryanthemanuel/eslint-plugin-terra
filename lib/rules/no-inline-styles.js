module.exports = {
  meta: {
    type: 'suggestion', // "problem" will be.....

    docs: {
      description: 'disallow the use of css id selectors in webdriver commands',
      category: 'Possible Errors',
      recommended: false,
      url: 'https://github.com/cerner/eslint-plugin-terra/docs/rules/no-css-id-selector',
    },

    fixable: 'code',

    messages: {
      message: "Driver commands may not accept css id selectors. Expected '{{ received }}' to be {{ expected }}.",
    },
  },

  create: (context) => {
    return {
      JSXAttribute: (node) => {
        let name = node.name.name;

        if (typeof name !== 'string') {
          return;
        }

        if (name === 'style') {
          context.report({
            node,
            message: 'No inline styles allowed'
          });
        }
      }
    };
  },
};
