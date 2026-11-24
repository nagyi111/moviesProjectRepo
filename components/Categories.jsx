import React from 'react'
import { useEffect } from 'react'
import { getCategories } from '../src/utils'
import { useState } from 'react'

export const Categories = ({ type, selectedCategories, setSelectedCategories }) => {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getCategories(type).then(setCategories)
    }, [type])

    categories && console.log('kategóriák: ', categories)
    const handleChange=(id)=>{
        setSelectedCategories(prev => prev.includes(id) ? prev.filter(item => item!=id) : [...prev, id])

        console.log(selectedCategories)
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {categories && categories.map(obj =>
                <fieldset key={obj.id} className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                    <label className="label">
                        <input type="checkbox" className="checkbox"
                        onChange={()=>handleChange(obj.id)} />
                        {obj.name}
                    </label>
                </fieldset>
            )}
        </div>
    )
}
