import moviesList from '../../data/movies'
import {Card, Button, Table, Modal, Dropdown} from 'react-bootstrap'
import './CardComponent.css'
import {useState} from 'react'

function CardComponent() {
  const [showDetails, setShowDetails] = useState(false);
  const handleCloseDetails = () => setShowDetails(false);
  const handleShowDetails = () => setShowDetails(true);
    return (
        <div className="row mt-5">
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
                                        {movie.type===1
                                            ? <Button variant="danger" >WATCH</Button>
                                            : <Button variant="danger" onClick={handleShowDetails}>SUBSCRIBE</Button>
                                        }
                                        
                                        </div>
                                        
                                    </Card.Body>
                                </Card> 
                                <Modal show={showDetails} onHide={handleCloseDetails}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Purchase</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Table striped bordered hover variant="dark">
                                        <tbody>
                                            <tr>
                                            <td>Title</td>
                                            <td>Price</td>
                                            <td>Payment Method</td>
                                            </tr>
                                            <tr>
                                           
                                            <td>{movie.title}</td>
                                            <td>IDR {movie.price}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        Choose
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Alfamart</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">BNI</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">GOPAY</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                    </Modal.Body>
                                    
                                </Modal>
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

