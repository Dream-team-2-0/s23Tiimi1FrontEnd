import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => getProducts(), [])

    const getProducts = () => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(responseData => {
                setProducts(responseData);
                console.log(responseData)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const columns = [
        { field: 'type' },
        { field: 'name' },
        { field: 'colour' },
        { field: 'price' },
        { field: 'manufacturer' }
    ];

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '95%', margin: 'auto' }}>
            <AgGridReact
                rowData={products}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}>
            </AgGridReact>
        </div>
    )
}