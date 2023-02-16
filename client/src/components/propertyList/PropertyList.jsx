import "./propertyList.css"
import HotelImage from "../../img/english-point.jpg";
import AppartmentImage from "../../img/thon-hotel-appartments.jpg";
import ResortImage from "../../img/Catalonia-Bavaro-Resort.jpg";
import VillaImage from "../../img/villas.jpg";
import CabinImage from "../../img/handcrafted-log-home.jpg";

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={HotelImage} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>25 hotels</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={AppartmentImage} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Appartments</h1>
                <h2>40 Appartments</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={ResortImage} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>15 Resorts</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={VillaImage} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>70 Villas</h2>
            </div>
        </div>

        <div className="pListItem">
            <img src={CabinImage} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>19 Cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList