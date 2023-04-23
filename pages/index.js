import {useState} from 'react';
import {FetchFilms} from '../components/FetchFilms'
import Head from 'next/Head'

export default function HomePage() {
    const [value, setValue] = useState('');
    const [filmList, setFilmList] = useState(FetchFilms());
    let films = FetchFilms(value);

    return <>
        <Head>
            <link rel='stylesheet' href='/global.css'></link>
        </Head>

        <div className='container'>
            <div className='searchBlock'>
                <input type='text' value={value} onInput={ (evt) => setValue(evt.target.value) } ></input>
                <button onClick={() => { setFilmList(films); setValue('') }}>Search</button>
            </div>

            <div className='outputBlock'>
                {filmList[0]?.map((film, index) => { return <>
                                                                <div key={index} className='card'>
                                                                    <div className='description'>
                                                                        <span key={'title ' + index}> { film.Title } </span>
                                                                        <span key={'year ' + index}> ({ film.Year }) </span>
                                                                    </div>
                                                                    <img key={'image ' + index} src={film.Poster}></img>
                                                                </div>
                                                            </>})}
            </div>
        </div>
    </>
}