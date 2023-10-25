import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

const CartItem =()=> {
    
    return (
        <div className="p-5 bg-white shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img 
                        className="h-full w-full object-cover object-top"
                        src="https://i.dummyjson.com/data/products/5/thumbnail.jpg"
                        alt="cartitemsimg"
                    />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Huawei P30</p>
                    <p className="opacity-70">Huawei</p>
                    <p className="opacity-70 mt-2">smartphones</p>
                    <div className='flex space-x-2 text-center'>
                        <p className='font-semibold'>₹ 700</p>
                        <p className='opacity-50 line-through'>₹ 500</p>
                        <p className='text-green-600 font-semibold'>20%</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton><RemoveCircle/></IconButton>
                    <span className="py-1 px-7 border rounded-sm">4</span>
                    <IconButton><AddCircle/></IconButton>
                </div>
                <div>
                    <Button>Remove</Button>
                </div>
            </div>
        </div>
    )
}
export default CartItem;