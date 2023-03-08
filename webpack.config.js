module.exports = {
  module: {
    rules: [
      {
        // uncomment this line to see the behaviour similar to "mergeRules": {"module": {"rules": "append"}}
        // enforce: "pre",

        // test only *.component.ts
        test: /\.component.ts$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              //searching for a string from the templateUrl property
              search: /([\w-]+)\.component\.html/,
              replace: function (match, p1, offset, string) {
                // console log that can be used for a test and shows incoming content string
                console.log('INCOMING', string);
                // this is an example of content which is supposed to be in output
                console.log('EXPECTED', string.replace(/([\w-]+)\.component\.html/, `changed.${p1}.component.html`));
                // component name that must be replaced in string
                return `changed.${p1}.component.html`
              }
            }
          }
        ]
      }
    ]
  }
}
