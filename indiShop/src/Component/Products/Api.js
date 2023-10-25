import { Card, CardContent, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";

import "./Product.css";

const Products =()=> {

    let [searched,setSearched] = useState("")

    const getProducts = async(searched)=> {
        try {
            let response = await axios.get(`https://dummyjson.com/products/search?q=${searched}`)
            // let response = await axios.get(`http://localhost:9000/products/search?q=${searched}`)
            return response.data;
        }
        catch(error) {
            console.log(error)
        }
    }

    let [products,setProducts] = useState([])

    const getSearchedResult = async()=> {
        let result = await getProducts(searched);
        if (result.products) {
            setProducts(result.products)
        }
    }

    let [value,setValue] = useState("")
    const handleSearchSubmit =()=> {
        setSearched(value)
    }

    useEffect (()=>{
        getSearchedResult()
    },[searched])

    return (
        <div className="product-main">

            <div className="searchBox">
                <input onChange={(e)=>setValue(e.target.value)}/>
                <IconButton onClick={handleSearchSubmit}><SearchIcon style={{verticalAlign:"mid",height:25,width:25}}/></IconButton>
            </div>

            <div className="ProductCard">
            { products.map (products=> (
                <Card className="ProductWrapper">
                    <CardContent>
                        <img src={[products.thumbnail]} alt="thumbnail"/>
                        <div className="ProductCardText">
                            <h2 style={{marginBottom:0}}>{products.title}</h2>
                            <h5 className="ProductWrapperH5">{products.category}</h5>
                            <h3 style={{marginBottom:0}}>₹ {products.price}/-</h3>
                        </div>
                    </CardContent>
                </Card>
            ))}
            </div>

        </div>
    )
}
export default Products;