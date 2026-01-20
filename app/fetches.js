// words
export const loadWords = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/words', {
            cache: 'no-cache'
        });
        if (!res.ok) {
            throw new Error('no res ok');
        }
        return res.json()

    } catch (error) {
        console.log('loadWords error', error);
        return { words: [] };
    }
}


import { GoogleGenerativeAI } from "@google/generative-ai";

// Функция для паузы
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default async function aiHandler(req) {
  // 1. Используйте обычную переменную (без NEXT_PUBLIC) для безопасности!
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: { responseMimeType: "application/json" }
  });

  const prompt = `
    вот существительное "${req}". переведи его на немецкий и поставь ему правильный артикль в разных падежах в единственном и множественном числе.
    Если у слова нет множественного числа, проставь "-", ты должен обрабатывать только существительные, иначе возвращай вместо объекта логическое значение false. 
    Строго следуй структуре JSON.
    Пример объекта:
    {
      "word": "Apfel",
      "wordRu": "яблоко",
      "singular": {
        "nominativ": "der Apfel",
        "genitiv": "des Apfels",
        "dativ": "dem Apfel",
        "akkusativ": "den Apfel"
      },
      "plural": {
        "nominativ": "die Äpfel",
        "genitiv": "der Äpfel",
        "dativ": "den Äpfeln",
        "akkusativ": "die Äpfel"
      }
    }`;

  let attempts = 0;
  const maxRetries = 3; // Максимум 3 попытки
  let waitTime = 2000;  // Начальная задержка 2 секунды

  while (attempts < maxRetries) {
    try {
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      
      // Пробуем распарсить JSON перед возвратом
      return JSON.parse(responseText);

    } catch (error) {
      attempts++;
      
      // Проверяем, является ли ошибка перегрузкой (Rate Limit - 429)
      if (error.status === 429 || error.message?.includes("429")) {
        console.warn(`Попытка ${attempts} не удалась (429). Ждем ${waitTime}мс...`);
        
        if (attempts >= maxRetries) {
          throw new Error("Превышено количество попыток запроса к API.");
        }

        await delay(waitTime);
        waitTime *= 2; // Увеличиваем время ожидания вдвое (экспоненциально)
      } else {
        // Если ошибка другая (например, 400 или 500), выбрасываем её сразу
        console.error("Ошибка API:", error);
        throw error;
      }
    }
  }
}
// import { GoogleGenerativeAI } from "@google/generative-ai";

// export default async function aiHandler(req) {
//     const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel(
//         {
//             model: "gemini-2.0-flash",
//             generationConfig: { responseMimeType: "application/json" }
//         });

//     const prompt = `
//        вот слово ${req}. переведи его на немецкий и поставь ему правильный артикль в разных падежах в единственном и множественном числе. оформить в объект. ничего не убирай и ничего лишнего не дописывай.  Если у слова нет множественного числа, проставь \"-\", ты должен обрабатывать только существительные, иначе возвращай вместо объекта false. строго следуй структуре объекта. вот пример объекта.
//             {
//             "word": "Apfel",
//             "wordRu": "яблоко",
//             "singular": {
//                 "nominativ": "der Apfel",
//                 "genitiv": "des Apfels",
//                 "dativ": "dem Apfel",
//                 "akkusativ": "den Apfel"
//             },
//             "plural": {
//                 "nominativ": "die Äpfel",
//                 "genitiv": "der Äpfel",
//                 "dativ": "den Äpfeln",
//                 "akkusativ": "die Äpfel"
//             }
//         },
//         `
//     const result = await model.generateContent(prompt);

//     return result.response.text();
   
// }




