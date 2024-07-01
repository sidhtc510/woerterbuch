// words
export const loadWords = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/words', {
            cache: 'no-store'
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

export default async function aiHandler(req, res) {
    const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_GEMINI_API_KEY
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    const chatSession = await model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    {
                        text: "я даю слово на немецком языке.  тебе нужно поставить ему правильный артикль в разных падежах в единственном и множественном числе.  и оформить его в объект. вот пример объекта. строго следуй его структуре. ничего не убирай и ничего лишнего не дописывай.  Если у слова нет множественного числа, проставь \"-\", ты должен обрабатывать только существительные, иначе возвращай вместо объекта false \n{\"word\":\"Ofen\",\"wordRu\":\"печь\",\"singular\":{\"nominativ\":\"der Ofen\",\"genitiv\":\"des Ofens\",\"dativ\":\"dem Ofen\",\"akkusativ\":\"den Ofen\"},\"plural\":{\"nominativ\":\"die Öfen\",\"genitiv\": \"der Öfen\",\"dativ\":\"den Öfen\",\"akkusativ\":\"die Öfen\"}},"
                    },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(req);

    // return JSON.parse(result.response.text());
    return result.response.text();
}