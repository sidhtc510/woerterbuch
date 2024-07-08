const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conjugationSchema = new Schema({
    present: {
        ich: String,
        du: String,
        er_sie_es: String,
        wir: String,
        ihr: String,
        sie_Sie: String
    },
    past: {
        ich: String,
        du: String,
        er_sie_es: String,
        wir: String,
        ihr: String,
        sie_Sie: String
    },
    future: {
        ich: String,
        du: String,
        er_sie_es: String,
        wir: String,
        ihr: String,
        sie_Sie: String
    },
    perfect: {
        ich: String,
        du: String,
        er_sie_es: String,
        wir: String,
        ihr: String,
        sie_Sie: String
    },
    pluperfect: {
        ich: String,
        du: String,
        er_sie_es: String,
        wir: String,
        ihr: String,
        sie_Sie: String
    },
    future_perfect: {
        ich: String,
        du: String,
        er_sie_es: String,
        wir: String,
        ihr: String,
        sie_Sie: String
    }
});

const verbSchema = new Schema({
    verb: { type: String, required: true },
    translation: { type: String, required: true },
    conjugation: conjugationSchema,
    examples: [String],
    notes: String
});

const Verb = mongoose.models.verbs || mongoose.model('verbs', verbSchema);

module.exports = Verb;