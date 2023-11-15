import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

export default function Products() {

    const [products, setProducts] = useState([]);

    const columns = [
        { field: 'type', headerName: 'Type', sortable: true, filter: true },
        { field: 'name', headerName: 'Name', sortable: true, filter: true },
        { field: 'colour', headerName: 'Colour', sortable: true, filter: true },
        { field: 'price', headerName: 'Price', sortable: true, filter: true },
        { field: 'manufacturer.manufacturerName', headerName: 'Manufacturer', sortable: true, filter: true }
    ];

    const REST_URL = 'http://localhost:8080/rest/products';

    useEffect(() => getProducts(), []);

    const getProducts = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                console.log("responseData" + responseData)
                setProducts(responseData)
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '70%', margin: 'auto' }}>
            <AgGridReact
                rowData={products}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}>
            </AgGridReact>
        </div>
    )
}