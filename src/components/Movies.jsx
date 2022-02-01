export default function Movies(props) {

    let movies = []

    if (props.data.docs) {
        movies = props.data.docs.map((movie, index) => {
            return (
               <p key={index}>{movie.name}</p>
            )
        })
    }

    return (
        <div>
            <button onClick={(e) => props.handleFetch(e, 'movie')}>Movies</button>
            {movies}
        </div>
    )
}