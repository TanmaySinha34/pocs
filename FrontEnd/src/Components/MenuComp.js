import React from 'react'
import { Table } from 'react-bootstrap';

const MenuComp = () => {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Menu</h2>
            <Table responsive="sm" className='outline-primary'>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Dish</th>
            <th>Price</th>
            <th>Type</th>
            <th>Veg/Non-Veg</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Paneer Butter Masala</td>
            <td>449</td>
            <td>Indian</td>
            <td>Veg</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Noodles</td>
            <td>249</td>
            <td>Chinese</td>
            <td>Veg</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pasta</td>
            <td>349</td>
            <td>Italian</td>
            <td>Veg</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Chicken Butter Masala</td>
            <td>549</td>
            <td>Indian</td>
            <td>Non-Veg</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Fried Rice</td>
            <td>149</td>
            <td>-</td>
            <td>Veg</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Butter Nan</td>
            <td>80</td>
            <td>Indian</td>
            <td>Veg</td>
          </tr>
        </tbody>
      </Table>
        </div>
    )
}

export default MenuComp
