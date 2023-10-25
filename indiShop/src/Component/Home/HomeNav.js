import { Button } from "@mui/material";
import "./Home.css";
const HomeNav =()=> {

    const navData = [
        { text: 'Top Offers' },
        { text: 'Appliances' },
        { text: 'Electronics' },
        { text: 'Fashion' },
        { text: 'Grocery' },
        { text: 'Home' },
        { text: 'Mobile' },
        { text: 'More' },
        { text: 'Travel' }
    ];

    return (
        <div className="navMain">
            {
                navData.map(data => (
                    <Button style={{color:"#fff"}}>{data.text}</Button>
                ))
            }
        </div>
    )
}
export default HomeNav;