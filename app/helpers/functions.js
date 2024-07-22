export async function createAlphabet(verbs) {
    const alphabet = [];

    // Проходимся по каждому объекту в массиве verbs
    verbs.forEach(({ verb }) => {
        // Получаем первую букву глагола и переводим ее в верхний регистр
        const firstLetter = verb.charAt(0).toUpperCase();
        // Если такой буквы еще нет в массиве firstLetters, добавляем ее
        if (!alphabet.includes(firstLetter)) {
            alphabet.push(firstLetter);
        }
    });
    // Сортируем массив firstLetters в алфавитном порядке
    return alphabet.sort();
}


export function iterateThroughValues(obj) {
    const allSingularValues = []
    for (const key in obj) {
        if (key !== '_id') { // Skip the "_id" property
            const values = obj[key];
            for (const value of values) {
                if (value.singular) {
                    if (value.singular.nominativ !== '-') { allSingularValues.push(value.singular.nominativ); } // Push the singular value
                } else if (typeof value === 'object') {
                    iterateThroughValues(value); // Recursively iterate if nested object
                }
            }
        }
    }
    return allSingularValues;
}

export function getRandomWord(arr) {
    if (arr.length === 0) {
        throw new Error("Массив пустой");
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return { word: arr[randomIndex].slice(4), wordWithArtikle: arr[randomIndex] };
}



import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function translateViaAi(req) {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel(
        {
            model: "gemini-1.5-flash",
            generationConfig: { responseMimeType: "application/json" }
        });

    const prompt = `Переведи немецкое "${req}" на русский язык. Верни string.`
    const result = await model.generateContent(prompt);

    return result.response.text();
}