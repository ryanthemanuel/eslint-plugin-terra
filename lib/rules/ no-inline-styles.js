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
      JSXOpeningElement: function (node) {
        const props = {};

        node.attributes.forEach(decl => {
          if (decl.type === 'JSXSpreadAttribute') {
            return;
          }

          let name = decl.name.name;

          if (typeof name !== 'string') {
            return;
          }

          if (name === 'style') {
            context.report({
              node: decl,
              message: 'No inline styles allowed'
            });
          }
        });
      }
    };
  },
};
