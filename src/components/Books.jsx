
import {useEffect, useState } from "react"

export default function Books() {
    let [data, setData] = useState([])

    const endpoint =  'https://the-one-api.dev/v2'

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`${endpoint}/movie`, {
                headers: {
                    Authorization: `Bearer QG6hwAvDDV3WtknfWiAL`
                }
            })
            let rData = await response.json()
            console.log(rData)
        }
        fetchData()
    })

    return(
        <>
        
        Hi

        </>
    )
}