import "./featured.css";
import kisumu from "../../img/Kisumu.jpg";
import mombasa from "../../img/kenya-mombasa-top-attractions-day-trips-intro-paragraph-camels-beach.jpg";
import nairobi from "../../img/Nairobi-National-Park-6-800x534.jpg";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={nairobi} alt="Nairobi" className="featuredImage"/>
            <div className="featuredTitles">
                <h1>Nairobi</h1>
                <h2>100 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={mombasa} alt="Mombasa" className="featuredImage"/>
            <div className="featuredTitles">
                <h1>Mombasa</h1>
                <h2>150 properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={kisumu} alt="Kisumu" className="featuredImage"/>
            <div className="featuredTitles">
                <h1>Kisumu</h1>
                <h2>80 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured