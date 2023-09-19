import { useCallback, useState, useRef } from 'react'
import { PokemonList, Memoize, Status } from '../../components';
import { useFetchList  } from '../../hooks';

// interface PokemonResponse {
//     count: number;
//     next: string;
//     previous?: string;
//     results: Pokemon[];
// }

interface Pokemon {
    name: string;
    url: string;
}


const Advanced = () => {

    // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState<number>(0);

    const handleClick = useCallback(() => {
        setPage((prevState) => prevState + 20)
    },[])

    const myRef = useRef<HTMLParagraphElement>(null);

    const { data } = useFetchList<Pokemon>({
        url: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`,
        method: 'GET'
    })
    
    // bad way
    // useEffect(() => {
    //     // setCount((prevState) => prevState + 1)
    //     const fetchPokemons = async () => {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20=&offset=0')
    //         const data: PokemonResponse = await response.json()
    //         setPokemons(data?.results)
            
    //         return
    //     }

    //     fetchPokemons()
    // }, [])

    // const fetchPokemons = useCallback( async () => {
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
    //     const data: PokemonResponse = await response.json()
    //     setPokemons((prevState) => [...prevState, ...data.results])
        
    //     return
    // },[page]);

    // useEffect(() => {
    //     fetchPokemons()
    // },[fetchPokemons])

    const handleChangeBackgroundColor = () => {
        if(myRef.current) {
            myRef.current.style.backgroundColor = 'red';
        }
    }

    return (
        <div>
            <PokemonList pokemons={data}/>
            <div>
                <p>Offset: {page}</p>
            </div>
            <button onClick={handleClick}>Halaman Berikutnya</button>
            <button onClick={handleChangeBackgroundColor}>Change Color</button>
            <p ref={myRef}>{'ini pake traditional dom'}</p>
            <Memoize numbers={
                [
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                    1,2,3,4,5,6,7,8,9,
                ]
            }/>
            <Status status={1}/>
        </div>
    )
}

export default Advanced