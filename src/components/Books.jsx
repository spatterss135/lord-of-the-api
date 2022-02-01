
import {useEffect, useState } from "react"

export default function Books({handleFetch}) {

    

 



    return(
        <button onClick={(e) => handleFetch(e, 'book')}>Books</button>
    )
}