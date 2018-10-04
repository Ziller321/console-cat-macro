function catify(string){
  // https://www.cat-world.com.au/cat-and-kitten-different-languages.html
  var regex = /\b(Cat|Kat|Mace|Dimeti|Qut|Pişik|Biṛāla|Katu|Kot|Mačka|Kotka|Kwayar ngya|Gat|Iring|Māo|Māo|Gattu|Macka|Kočka|Kat|Kat|Kato|Kass|Pusa|Kissa|Chat|Gato|Katze|Yata|Bilāḍī|Chat|Cat|Anu|Billee|Miv|Macska|Pusi|Köttur|Kuching|Gato|Neko|Kuching|Bekku|Mısıq|Chhma|Goyang-i|Pisîk|Mışık|Cat|Cattus|Kakis|Kaz|Mačka|Kucing|Pūcca|Qattus|Māo|Ngeru|Mān̄jara|Muur|Katt|Kot|Gato|Pisica|Kowka|Mayka|Macka|Macka|Gato|Ucing|Paka|Katt|Pūṉai|Pilli|Mæw|Kedi|Kot|Mushuk|Meo|Cath|Inkonti|Kats|O nran|Ikati)\b/gi;
  return string.replace(regex, '🐱');
}

module.exports = catify