import CartItem from "./CartItem";

const Cart =()=> {
    
    return (
        <div style={{ paddingTop:100, background:'#D3D3D3' }}>

            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    <CartItem/>
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 bg-white">
                    <div className="border">
                        <p className="uppercase font-bold opacity-60 pb-4">Right SIde</p><hr/>

                        <div className="space-y-3 font-semibold">
                            <div className="felx justify-between pt-3 text-black gap-10">
                                <span>Price</span>
                                <span className="text-left">₹4500</span>
                            </div>
                            <div className="felx justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span>₹1500</span>
                            </div>
                            <div className="felx justify-between pt-3 text-black">
                                <span>Delivery Charge</span>
                                <span>Free</span>
                            </div>
                            <div className="felx justify-between pt-3 text-black">
                                <span>Total Amount</span>
                                <span>₹3000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cart;