import "./featuredProperties.css";
import EnglishPoint from "../../img/English-Point-Marina-room.jpg"
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels/countByType')
  
  return (
    <div className="fp">
        <div className="fpItem">
            <img src={EnglishPoint} alt="" className="fpImg" />
            <span className="fpName">English Point Marina</span>
            <span className="fpCity">Mombasa</span>
            <span className="fpPrice">Starting from Ksh12000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src={EnglishPoint} alt="" className="fpImg" />
            <span className="fpName">English Point Marina</span>
            <span className="fpCity">Mombasa</span>
            <span className="fpPrice">Starting from Ksh12000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src={EnglishPoint} alt="" className="fpImg" />
            <span className="fpName">English Point Marina</span>
            <span className="fpCity">Mombasa</span>
            <span className="fpPrice">Starting from Ksh12000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img src={EnglishPoint} alt="" className="fpImg" />
            <span className="fpName">English Point Marina</span>
            <span className="fpCity">Mombasa</span>
            <span className="fpPrice">Starting from Ksh12000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties