//verbs



export const loadVerbs = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/verbs', {
            cache: 'default'
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