import {Navbar, Nav, Container} from 'react-bootstrap'
import './Header.css'
import {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

function Header() {
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRegist, setShowRegist] = useState(false);
  const handleCloseRegist = () => setShowRegist(false);
  const handleShowRegist = () => setShowRegist(true);
    return (
        <div>
            <Navbar className="opacity2" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                <Navbar.Brand href="#home" className="nav-font-size">S movie store</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-font-size">Movies</Nav.Link>
                        <Nav.Link href="#features" className="nav-font-size">Membership</Nav.Link>
                        <Nav.Link href="#pricing" className="nav-font-size">Transaction</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="nav-font-size" onClick={handleShowRegist}>Register</Nav.Link>
                        <Nav.Link href="#deets" className="nav-font-size" onClick={handleShow}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
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
                    
                    <div className="justify-content-end">
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                    </div>
                    
                </Form>
                </Modal.Body>                
            </Modal>

            <Modal show={showRegist} onHide={handleCloseRegist}>
                <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="example@example.com" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="dark" type="submit" >
                        Submit
                    </Button>
                </Form>
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default Header