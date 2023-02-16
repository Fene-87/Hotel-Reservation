import "./searchItem.css"
import studioApartment from "../../img/studio-apartment-scaled.jpg"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src={studioApartment} alt="" className="siImg" />

        <div className="siDesc">
            <h1 className="siTitle">Tower Street Appartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio appartment with air conditioning</span>
            <span className="siFeatures">Entire studio . 1 bath . 1 bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today</span>
        </div>

        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">Ksh5000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem