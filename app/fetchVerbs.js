export const loadVerbs = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/verbs', {
            cache: 'no-cache'
        });
        if (!res.ok) {
            throw new Error('no res ok');
        }
        return res.json()

    } catch (error) {
        console.log('loadVerbs error', error);
        return { verbs: [] };
    }
}

export const loadVerb = async ({ id }) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/verbs/${id}`, {
            cache: 'default'
        });
        if (!res.ok) {
            throw new Error('no res ok');
        }
        return res.json()

    } catch (error) {
        console.log('loadVerb error', error);
        return { verbs: [] };
    }
}


// Я даю тебе глагол. напиши json объект немецкого глагола. Строго соблюдай структуру. examples приведи от одного до пяти примеров. notes - объяснение должно быть на русском. в ключ verb запиши слово на немецком, а в ключ translation его перевод на русский язык. ниже пример объекта


import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function aiHandlerVerb(req) {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const generationConfig = {
        temperature: 0.4,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        // responseMimeType: "text/plain",
        responseMimeType: "application/json",
    };

    const chatSession = await model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    // {
                    //     text: "Я даю тебе глагол. переведи его на немецкий язык. напиши json объект. Строго соблюдай структуру, ключи объекта должны быть в двойных ковычках \" . examples приведи от одного до пяти примеров. notes - объяснение должно быть на русском. в ключ verb запиши слово на немецком, а в ключ translation его перевод. ниже пример объекта {\"verb\": \"machen\",\"translation\": \"делать\",\"conjugation\": {\"present\": {\"ich\": \"mache\",\"du\": \"machst\",\"er_sie_es\": \"macht\",\"wir\": \"machen\",\"ihr\": \"macht\",\"sie_Sie\": \"machen\"},\"past\": {\"ich\": \"machte\",\"du\": \"machtest\",\"er_sie_es\": \"machte\",\"wir\": \"machten\",\"ihr\": \"machtet\",\"sie_Sie\": \"machten\"},\"future\": {\"ich\": \"werde machen\",\"du\": \"wirst machen\",\"er_sie_es\": \"wird machen\",\"wir\": \"werden machen\",\"ihr\": \"werdet machen\",\"sie_Sie\": \"werden machen\"},},\"examples\": [\"Ich mache meine Hausaufgaben.\",\"Er hat das Auto gemacht.\"],\"notes\": \"Глагол 'machen' используется в широком спектре значений, включая 'создавать', 'делать' и 'выполнять'.\"} "
                    // },
                    {
                        text: "Я даю тебе глагол. напиши json объект немецкого глагола. Строго соблюдай структуру. examples приведи от одного до пяти примеров. notes - объяснение должно быть на русском. в ключ verb запиши слово на немецком, а в ключ translation его перевод на русский язык. ниже пример объекта {\"verb\": \"machen\",\"translation\": \"делать\",\"conjugation\": {\"present\": {\"ich\": \"mache\",\"du\": \"machst\",\"er_sie_es\": \"macht\",\"wir\": \"machen\",\"ihr\": \"macht\",\"sie_Sie\": \"machen\"},\"past\": {\"ich\": \"machte\",\"du\": \"machtest\",\"er_sie_es\": \"machte\",\"wir\": \"machten\",\"ihr\": \"machtet\",\"sie_Sie\": \"machten\"},\"future\": {\"ich\": \"werde machen\",\"du\": \"wirst machen\",\"er_sie_es\": \"wird machen\",\"wir\": \"werden machen\",\"ihr\": \"werdet machen\",\"sie_Sie\": \"werden machen\"},},\"examples\": [\"Ich mache meine Hausaufgaben.\",\"Er hat das Auto gemacht.\"],\"notes\": \"Глагол 'machen' используется в широком спектре значений, включая 'создавать', 'делать' и 'выполнять'.\"} "
                    },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(req);

    // return JSON.parse(result.response.text());
    return result.response.text();
}
