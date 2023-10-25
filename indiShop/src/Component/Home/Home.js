import "./Home.css";
import HomeBanner from "./HomeBanner";
import HomeNav from "./HomeNav";
import HomeGrid1 from "./HomeGrid1";
import HomeGrid2 from "./HomeGrid2";
import HomeGrid3 from "./HomeGrid3";

const Home =()=> {

    return (
        <div className="homeMain">
            <HomeNav/>
            <HomeBanner/>
            <div className="homeMainWrapper">
                <HomeGrid1/>
                <HomeGrid2/>
                <HomeGrid3/>
            </div>
        </div>
    )
}
export default Home;