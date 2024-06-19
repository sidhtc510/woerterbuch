'use client'
import Link from 'next/link'
import React from 'react'

export default function AddWord() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const word = e.target.word.value.trim(); // режем пробелы
        const correctWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); //делаем первую букву большой остальные мал  
        const firstLetter = word[0]; // определяем первую букву слова после трима

        let data = new FormData(e.target)
        let obj = Object.fromEntries(data)

        console.log(obj);
    }

    return (
        <div>
            <Link href='/' className="w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block">Main page</Link>

            <div className='m-3'>
                <form class="w-full max-w-lg" onSubmit={(e) => handleSubmit(e)}>
                    <div class="flex flex-wrap -mx-4 mb-8">
                        <div class=" w-1/2 px-3 mb-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="word">
                                Word (without artikle!)
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="word" type="text" placeholder="Word " name="word" />
                            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div class=" w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="ruword">
                                Ru Word translation
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="ruword" type="text" placeholder="Translation" name="ruword" />
                        </div>
                    </div>


                    <div class="flex flex-wrap -mx-3 mb-8">
                        <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs" for="grid-state">
                                Nominativ
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="nominative_artikle">
                                    <option selected disabled>Artikel</option>
                                    <option value="der">der</option>
                                    <option value="das">das</option>
                                    <option value="die">die</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="nom_sing">
                                Singular
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="nom_sing" type="text" placeholder="Singular" />
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="nom_plur">
                                Plural
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="nom_plur" name="nom_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>



                    <div class="flex flex-wrap -mx-3 mb-8">
                        <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs" for="grid-state">
                                Genitiv
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="genetiv_artikle">
                                    <option selected disabled>Artikel</option>
                                    <option value="der">der</option>
                                    <option value="des">des</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="gen_sing">
                                Singular
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="gen_sing" name="gen_sing" type="text" placeholder="Singular" />
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="gen_plur">
                                Plural
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="gen_plur" name="gen_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>




                    <div class="flex flex-wrap -mx-3 mb-8">
                        <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs" for="grid-state">
                                Dativ
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="dativ_artikle">
                                    <option selected disabled>Artikel</option>
                                    <option value="dem">dem</option>
                                    <option value="der">der</option>
                                    <option value="den">den</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="dativ_sing">
                                Singular
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="dativ_sing" name="dativ_sing" type="text" placeholder="Singular" />
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="dativ_plur">
                                Plural
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="dativ_plur" name="dativ_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>




                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs" for="grid-state">
                                Akkusativ
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="akkusativ_artikle">
                                    <option selected disabled>Artikel</option>
                                    <option value="den">den</option>
                                    <option value="das">das</option>
                                    <option value="die">die</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="akkusativ_sing">
                                Singular
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="akkusativ_sing" name="akkusativ_sing" type="text" placeholder="Singular" />
                        </div>
                        <div class="ms:w-1/2 md:w-1/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="akkusativ_plur">
                                Plural
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="akkusativ_plur" name="akkusativ_plur" type="text" placeholder="Plural" />
                        </div>
                    </div>
                    <input type="submit" value="Save" className='w-fit pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 cursor-pointer select-none m-3 block' />
                </form>
            </div>
        </div>
    )
}
