import React, { useEffect, useState } from 'react'


const Products = ({title}) => {

    const [items, setItems]=useState([]);
    useEffect(() => {
        fetch("http://localhost:4001/api/category")
        .then((res) => res.json() )
        .then((data) => setItems(data) ) 
        .catch((error) => console.log(error) );
    },
    []
); 
return(
    <table>
        <tr>
            <th>Title</th>
            <th>Description</th>
        </tr>
        <tbody>
        {items.map((item) => (
            <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td> <img alt= "err" src={`${item.thumbnail}`} height="100"/></td>
                </tr>
        )
         )}
         </tbody>
    </table>

  );
};

export default Products;