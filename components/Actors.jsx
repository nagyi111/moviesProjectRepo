import React from 'react'
import { getPopularActors, SearchActors, img_300 } from '../src/utils'
import { useEffect, useState } from 'react'
import { ActorsList } from './ActorsList'
import { Pagination } from './Pagination'
import { SearchBar } from './SearchBar'

export const Actors = () => {

    const [actors, setActors] = useState([])
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText.trim().length === 0){
            getPopularActors(page).then(setActors)
        }
        else{
            SearchActors(searchText, page).then(setActors)
        }
        
    }, [page, searchText])

    const handleSearchText = (text) => {
        setSearchText(text)
        setPage(1)
    }
   
    console.log(actors)

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Népszerű színészek
            </h1>
            <SearchBar searchText={searchText} setSearchText={handleSearchText}/>
            <ActorsList actors={actors} />
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}