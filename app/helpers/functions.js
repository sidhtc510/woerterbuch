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