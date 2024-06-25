'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AddWord() {
    const router = useRouter();
    const [mainWord, setMainWord] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        let data = new FormData(e.target)
        let formData = Object.fromEntries(data)

        const word = formData.word.trim(); // режем пробелы
        const correctWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); //делаем первую букву большой остальные мал  
        // const firstLetter = word[0]; // определяем первую букву слова после трима

        let genitiv_artikle = '-';
        let dativ_artikle = '-';
        let akkusativ_artikle = '-';

        switch (formData.nominative_artikle) {
            case 'der':
                genitiv_artikle = 'des';
                dativ_artikle = 'dem';
                akkusativ_artikle = 'den';
                break;
            case 'die':
                genitiv_artikle = 'der';
                dativ_artikle = 'der';
                akkusativ_artikle = 'die';
                break;
            case 'das':
                genitiv_artikle = 'des';
                dativ_artikle = 'dem';
                akkusativ_artikle = 'das';
                break;
            default:
                genitiv_artikle = '-';
                dativ_artikle = '-';
                akkusativ_artikle = '-';
        }


        const formedObj = {
            word: correctWord,
            wordRu: formData.ruword,
            singular: {
                nominativ: `${formData.nominative_artikle ?? '-'} ${formData.nominativ_sing}`,
                genitiv: `${genitiv_artikle} ${formData.genitiv_sing}`,
                dativ: `${dativ_artikle} ${formData.dativ_sing}`,
                akkusativ: `${akkusativ_artikle} ${formData.akkusativ_sing}`
            },
            plural: {
                nominativ: `${formData.nominativ_plur.length === 0 ? '-' : 'die'} ${formData.nominativ_plur}`,
                genitiv: `${formData.genitiv_plur.length === 0 ? '-' : 'der'} ${formData.genitiv_plur}`,
                dativ: `${formData.dativ_plur.length === 0 ? '-' : 'den'} ${formData.dativ_plur}`,
                akkusativ: `${formData.akkusativ_plur.length === 0 ? '-' : 'die'} ${formData.akkusativ_plur}`
            }
        }

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/words', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formedObj)
            })

            if (!res.ok) {
                throw new Error('no res ok')
            }
            e.target.reset();
            router.refresh();
            router.push("/");
            return res.json()

        } catch (error) {
            console.log('error AddWord in page', error);
        }
    }



    return (
        <div>
            {/* <Link href='/' className="w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">Main page</Link> */}
            <div className='m-3'>
                <form className="w-full max-w-lg" onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex flex-wrap -mx-4 mb-8">
                        <div className=" w-full px-3 mb-3">
                            <div className="relative w-1/3 mx-3">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="nominative_artikle">
                                    <option selected disabled>Artikel</option>
                                    <option defaultValue="der">der</option>
                                    <option defaultValue="das">das</option>
                                    <option defaultValue="die">die</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                            <div className='w-full px-3'>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="word" >
                                    Word
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="word" type="text" placeholder="Word " name="word" onChange={(e) => setMainWord(e.target.value)} />
                            </div>
                            <div className=" w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="ruword">
                                    Ru Word translation
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="ruword" type="text" placeholder="Translation" name="ruword" />
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-wrap -mx-3 mb-8">
                        <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-m mb-2" htmlFor="grid-state">
                                Nominativ
                            </label>
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="nom_sing">
                                Singular
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="nominativ_sing" name="nominativ_sing" type="text" placeholder="Singular" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="nom_plur">
                                Plural
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="nominativ_plur" name="nominativ_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>



                    <div className="flex flex-wrap -mx-3 mb-8">
                        <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-m mb-2" htmlFor="grid-state">
                                Genitiv
                            </label>
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="gen_sing">
                                Singular
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="gen_sing" name="genitiv_sing" type="text" placeholder="Singular" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="gen_plur">
                                Plural
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="gen_plur" name="genitiv_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>




                    <div className="flex flex-wrap -mx-3 mb-8">
                        <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-m mb-2" htmlFor="grid-state">
                                Dativ
                            </label>
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="dativ_sing">
                                Singular
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="dativ_sing" name="dativ_sing" type="text" placeholder="Singular" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="dativ_plur">
                                Plural
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="dativ_plur" name="dativ_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>




                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-m mb-2" htmlFor="grid-state">
                                Akkusativ
                            </label>
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="akkusativ_sing">
                                Singular
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="akkusativ_sing" name="akkusativ_sing" type="text" placeholder="Singular" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="akkusativ_plur">
                                Plural
                            </label>
                            <input defaultValue={mainWord} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="akkusativ_plur" name="akkusativ_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>
                    <input type="submit" defaultValue="Save" className='w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block' />
                </form>
            </div>
        </div>
    )
}
