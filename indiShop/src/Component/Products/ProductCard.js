import { Card, CardContent } from "@mui/material";

import "./Product.css";

const ProdcutCard =({products})=> {

    return (
        <Card className="CardWrapper">
            <CardContent>
                <img src={products.thumbnail} alt="thumbnail"/>
                <div>
                    <p className="font-bold text-xl">{products.title}</p>
                    <p className="font-semibold opacity-70">{products.brand}</p>
                    <div className='flex ml-10 space-x-2 text-center'>
                        <p className='font-semibold'>₹ {products.discountedPrice}</p>
                        <p className='opacity-50 line-through'>₹ {products.price}</p>
                        <p className='text-green-600 font-semibold'>{products.discountPercentage}%</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProdcutCard;