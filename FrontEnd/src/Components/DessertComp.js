import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from '../shared/constant/constantData';
import { Height } from '@mui/icons-material';
// import './Main.css'

function DessertComp() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    }
    return (
        <div className="container">
            <Card style={{ width: '18rem' }} className="d-inline-block mr-2 mb-2">
                <Card.Img style={{ height: '200px' }} variant="top" src={Data.icrm} />
                <Card.Body>
                    <Card.Title>Ice Cream</Card.Title>
                    <Card.Text>
                        Where every bite is a flavor-packed journey!
                    </Card.Text>
                    <Button variant="danger" onClick={() => addToCart({name: "Burger", price: 10})}>Add to cart</Button>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }} className="d-inline-block mr-2 mb-2">
                <Card.Img style={{ height: '200px' }} variant="top" src={Data.pudding} />
                <Card.Body>
                    <Card.Title>Pudding</Card.Title>
                    <Card.Text>
                        Where every bite is a flavor-packed journey!
                    </Card.Text>
                    <Button variant="danger">Add to cart</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="d-inline-block mr-2 mb-2">
                <Card.Img style={{ height: '200px' }} variant="top" src={Data.pudding2} />
                <Card.Body>
                    <Card.Title>Lemon Tart</Card.Title>
                    <Card.Text>
                        Where every bite is a flavor-packed journey!
                    </Card.Text>
                    <Button variant="danger">Add to cart</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="d-inline-block mr-2 mb-2">
                <Card.Img style={{ height: '200px' }} variant="top" src={Data.cheesecake} />
                <Card.Body>
                    <Card.Title>Cheesecake</Card.Title>
                    <Card.Text>
                        Where every bite is a flavor-packed journey!
                    </Card.Text>
                    <Button variant="danger">Add to cart</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="d-inline-block mr-2 mb-2">
                <Card.Img style={{ height: '200px' }} variant="top" src={Data.ccupcake} />
                <Card.Body>
                    <Card.Title>Cup Cake</Card.Title>
                    <Card.Text>
                        Where every bite is a flavor-packed journey!
                    </Card.Text>
                    <Button variant="danger">Add to cart</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="d-inline-block mr-2 mb-2">
                <Card.Img style={{ height: '200px' }} variant="top" src={Data.creamroll} />
                <Card.Body>
                    <Card.Title>Crepe</Card.Title>
                    <Card.Text>
                        Where every bite is a flavor-packed journey!
                    </Card.Text>
                    <Button variant="danger">Add to cart</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default DessertComp;