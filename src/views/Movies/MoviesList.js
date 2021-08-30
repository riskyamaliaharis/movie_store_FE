import CardComponent from '../../components/MoviesComponents/CardComponent'
import Header from '../../components/Base/Header'

function MoviesList() {

    return (
        <>
        <Header />
        <div className="container-fluid d-flex justify-content-around px-5">
            
            
            <CardComponent />           
           
        </div>
        </>
    )
}

export default MoviesList;