const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Определение схемы для падежей
const CaseSchema = new Schema({
  nominativ: { type: String, required: true },
//   genitiv: { type: String, required: true },
//   dativ: { type: String, required: true },
//   akkusativ: { type: String, required: true }
}, { _id: false });

// Определение схемы для слов
const WordSchema = new Schema({
//   word: { type: String, required: true },
//   wordRu: { type: String, required: true },
  singular: {
    type: CaseSchema,
    required: true
  },
//   plural: {
    // type: CaseSchema,
    // required: true
//   }
}, { _id: true });

// Определение схемы для каждой буквы алфавита
const AlphabetSchema = new Schema({
  A: [WordSchema],
  B: [WordSchema],
  C: [WordSchema],
  D: [WordSchema],
  E: [WordSchema],
  F: [WordSchema],
  G: [WordSchema],
  H: [WordSchema],
  I: [WordSchema],
  J: [WordSchema],
  K: [WordSchema],
  L: [WordSchema],
  M: [WordSchema],
  N: [WordSchema],
  O: [WordSchema],
  P: [WordSchema],
  Q: [WordSchema],
  R: [WordSchema],
  S: [WordSchema],
  T: [WordSchema],
  U: [WordSchema],
  V: [WordSchema],
  W: [WordSchema],
  X: [WordSchema],
  Y: [WordSchema],
  Z: [WordSchema]
}, { minimize: false }); // minimize: false чтобы не удалять пустые объекты, strict: false чтобы позволить любые поля

const Words = mongoose.models.words || mongoose.model('words', AlphabetSchema);

module.exports = Words;