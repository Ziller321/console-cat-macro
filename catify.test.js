const catify = require('./catify')

const catEmoji = '🐱';

const keywords = [
  "Cat",
  "Kat",
  "Mace",
  "Dimeti",
  "Qut",
  "Pişik",
  "Biṛāla",
  "Katu",
  "Kot",
  "Mačka",
  "Kotka",
  "Kwayar ngya",
  "Gat",
  "Iring",
  "Māo",
  "Māo",
  "Gattu",
  "Macka",
  "Kočka",
  "Kat",
  "Kat",
  "Kato",
  "Kass",
  "Pusa",
  "Kissa",
  "Chat",
  "Gato",
  "Katze",
  "Yata",
  // "Bilāḍī",
  "Chat",
  "Cat",
  "Anu",
  "Billee",
  "Miv",
  "Macska",
  "Pusi",
  "Köttur",
  "Kuching",
  "Gato",
  "Neko",
  "Kuching",
  "Bekku",
  "Mısıq",
  "Chhma",
  "Goyang-i",
  "Pisîk",
  "Mışık",
  "Cat",
  "Cattus",
  "Kakis",
  // "Katė",
  "Kaz",
  "Mačka",
  "Kucing",
  "Pūcca",
  "Qattus",
  "Māo",
  "Ngeru",
  "Mān̄jara",
  "Muur",
  "Katt",
  "Kot",
  "Gato",
  "Pisica",
  "Kowka",
  "Mayka",
  // "Baḷalā",
  "Macka",
  "Macka",
  "Gato",
  "Ucing",
  "Paka",
  "Katt",
  // "Koş",
  "Pūṉai",
  "Pilli",
  "Mæw",
  "Kedi",
  "Kot",
  "Mushuk",
  "Meo",
  "Cath",
  "Inkonti",
  "Kats",
  "O nran",
  "Ikati",
]

test('transforms text', () => {
  keywords.forEach(word => {
    expect(catify(word)).toBe(catEmoji);
    expect(catify(`${word} `)).toBe(`${catEmoji} `);
    expect(catify(` ${word} `)).toBe(` ${catEmoji} `);
    expect(catify(`this is ${word} `)).toBe(`this is ${catEmoji} `);
    expect(catify(`this is${word} `)).toBe(`this is${word} `);
  })
});