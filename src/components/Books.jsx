
import {useEffect, useState } from "react"

export default function Books({handleFetch, data}) {
    console.log(data)
    
    let names;
    if (data.docs){
        names = data.docs.map(book => {
            return(
                <div>
                    <button onClick={(e) => handleFetch(e, `book/${book._id}/chapter`)}>{book.name?book.name:book.chapterName}</button>  
                </div> )})
    }


    return(
        <div>
<button onClick={(e) => handleFetch(e, 'book')}>Books</button>
        <div>{names}</div>
        </div>
        


    )
}