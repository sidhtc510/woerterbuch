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
                    allSingularValues.push(value.singular.nominativ); // Push the singular value
                } else if (typeof value === 'object') {
                    iterateThroughValues(value); // Recursively iterate if nested object
                }
            }
        }
    }
    return allSingularValues;
}