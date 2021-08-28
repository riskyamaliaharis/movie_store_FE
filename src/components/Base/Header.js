import {Navbar, Nav, Container} from 'react-bootstrap'
import './Header.css'
import {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

function Header() {
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar className="opacity2" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                <Navbar.Brand href="#home" className="nav-font-size">S movie store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="nav-font-size">Movies</Nav.Link>
                    <Nav.Link href="#features" className="nav-font-size">Membership</Nav.Link>
                    <Nav.Link href="#pricing" className="nav-font-size">Transaction</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets" className="nav-font-size">Register</Nav.Link>
                    <Nav.Link href="#deets" className="nav-font-size" onClick={handleShow}>Login</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default Header