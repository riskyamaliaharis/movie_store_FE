import moviesList from '../../data/movies'
import {Card, Button} from 'react-bootstrap'
import './CardComponent.css'

function CardComponent() {
    return (
        <div className="row ">
            {moviesList.map(movie=> {
                return (
                    <div className="col-lg-3 col-md-6 col-sm-8">                                                
                            
                                <Card className="card-movie mx-auto" >
                                    <Card.Img variant="top" style={{ height: '23rem'}} src={movie.image} className="card-img-top" />
                                    <Card.Body>
                                        <Card.Title className="text-center">{movie.title}</Card.Title>
                                        <div className="text-center mb-4">
                                        <h2>{movie.type===1? 'FREE' : 'PAID'}</h2>
                                        </div>
                                        <div className="text-center d-grid gap-2">
                                        <Button variant="danger">{movie.type===1? 'WATCH' : 'SUBSCRIBE'}</Button>
                                        </div>
                                        
                                    </Card.Body>
                                </Card> 
                                <br/>
                    </div>                    
                )
            })}

            <div class="container">
            
</div>
</div>
    )
}

export default CardComponent

