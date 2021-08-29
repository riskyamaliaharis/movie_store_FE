import {Table, Button} from 'react-bootstrap'
import './SubscribeList.css'
function SubscribeList(){
    const subMonth = 30000
    const subYear = 350000
    return (
        <>
            <Table striped bordered hover variant="danger">
                <thead>
                    <tr className="text-center">

                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                        <th scope="col">Subscribe</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr className="text-center">
                        <td>per movie</td>
                        <td><Button variant="success">Check It</Button></td>
                        <td><Button variant="danger">SUBSCRIBE</Button></td>
                    </tr>
                    <tr className="text-center">
                        <td>per month</td>
                        <td>IDR {subMonth}</td>
                        <td><Button variant="danger">SUBSCRIBE</Button></td>
                    </tr> 
                    <tr className="text-center">
                        <td>per year</td>
                        <td>IDR {subYear}</td>
                        <td><Button variant="danger">SUBSCRIBE</Button></td>
                    </tr>                                           
                </tbody>
            </Table>
        </>
    )
}

export default SubscribeList