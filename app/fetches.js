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

export default async function aiHandler(req) {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel(
        {
            model: "gemini-2.0-flash",
            generationConfig: { responseMimeType: "application/json" }
        });

    const prompt = `
       вот слово ${req}. переведи его на немецкий и поставь ему правильный артикль в разных падежах в единственном и множественном числе. оформить в объект. ничего не убирай и ничего лишнего не дописывай.  Если у слова нет множественного числа, проставь \"-\", ты должен обрабатывать только существительные, иначе возвращай вместо объекта false. строго следуй структуре объекта. вот пример объекта.
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
        },
        `
    const result = await model.generateContent(prompt);

    return result.response.text();
    // const generationConfig = {
    //     temperature: 0.4,
    //     topP: 0.95,
    //     topK: 64,
    //     maxOutputTokens: 8192,
    //     // responseMimeType: "text/plain",
    //     responseMimeType: "application/json",
    // };

    // const chatSession = await model.startChat({
    //     generationConfig,
    //     history: [
    //         {
    //             role: "user",
    //             parts: [
    //                 {
    //                     text: "я даю слово на немецком языке.  тебе нужно поставить ему правильный артикль в разных падежах в единственном и множественном числе.  и оформить его в объект. вот пример объекта. строго следуй его структуре. ничего не убирай и ничего лишнего не дописывай.  Если у слова нет множественного числа, проставь \"-\", ты должен обрабатывать только существительные, иначе возвращай вместо объекта false \n{\"word\":\"Ofen\",\"wordRu\":\"печь\",\"singular\":{\"nominativ\":\"der Ofen\",\"genitiv\":\"des Ofens\",\"dativ\":\"dem Ofen\",\"akkusativ\":\"den Ofen\"},\"plural\":{\"nominativ\":\"die Öfen\",\"genitiv\": \"der Öfen\",\"dativ\":\"den Öfen\",\"akkusativ\":\"die Öfen\"}},"
    //                 },
    //             ],
    //         },
    //     ],
    // });

    // const result = await chatSession.sendMessage(req);

    // // return JSON.parse(result.response.text());
    // return result.response.text();
}




