const {createMacro}  = require('babel-plugin-macros')
const catify = require('./catify');
module.exports = createMacro(emojiLog)


function emojiLog({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const [catPath] = referencePath.parentPath.parentPath.get('arguments')
    const catString = catify(catPath.node.value)

    const catNode = babel.types.stringLiteral(catString)
    catPath.replaceWith(catNode)

 })

}