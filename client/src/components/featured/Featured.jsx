import "./featured.css";
import kisumu from "../../img/Kisumu.jpg";
import mombasa from "../../img/kenya-mombasa-top-attractions-day-trips-intro-paragraph-camels-beach.jpg";
import nairobi from "../../img/Nairobi-National-Park-6-800x534.jpg";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const { data, loading, error } = useFetch('/hotels/countByCity?cities=Nairobi')

  console.log(data);
  return (
    <div className="featured">
        {loading ? (
          "Loading Please Wait"
          ) : (
          <><div className="featuredItem">
            <img src={nairobi} alt="Nairobi" className="featuredImage"/>
            <div className="featuredTitles">
                <h1>Nairobi</h1>
                <h2>{data[0]} properties</h2>
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
        </div></>
        )}
    </div>
  )
}

export default Featured