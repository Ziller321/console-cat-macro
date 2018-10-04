const {createMacro}  = require('babel-plugin-macros')
module.exports = createMacro(emojiLog)
function emojiLog({ references, state, babel }) {
  references.default.forEach(referencePath => {
    const [catPath] = referencePath.parentPath.parentPath.get('arguments')

    const s = catPath.node.value;
    // https://www.cat-world.com.au/cat-and-kitten-different-languages.html
    const regex = /\b(Cat|Kat|Mace|Dimeti|Qut|Pişik|Biṛāla|Katu|Kot|Mačka|Kotka|Kwayar ngya|Gat|Iring|Māo|Māo|Gattu| Macka|Kočka|Kat|Kat|Kato|Kass|Pusa|Kissa|Chat|Gato|Katze|Yata|Bilāḍī|Chat|Cat|Anu|Billee|Miv|Macska|Pusi| Köttur|Kuching|Gato|Neko|Kuching|Bekku|Mısıq|Chhma|Goyang-i|Pisîk|Mışık|Cat|Cattus|Kakis|Katė|Kaz|Mačka| Kucing|Pūcca|Qattus|Māo|Ngeru|Mān̄jara|Muur| Katt|Kot|Gato|Pisica|Kowka|Mayka|Baḷalā|Macka|Macka|Gato|Ucing|Paka|Katt|Koş|Pūṉai|Pilli|Mæw|Kedi|Kot|Mushuk|Meo|Cath|Inkonti|Kats|O nran|Ikati)\b/gi;
    const catString = s.replace(regex, '🐱');

    const catNode = babel.types.stringLiteral(catString)
    catPath.replaceWith(catNode)

 })

}