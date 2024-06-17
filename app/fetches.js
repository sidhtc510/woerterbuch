// words
export const loadWords = async () => {
    // console.log('djkcjdcjfei fjcfr nfjcnmrn mjrmce', process.env.NEXT_PUBLIC_BASE_URL);
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