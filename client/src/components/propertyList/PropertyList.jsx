import "./propertyList.css"
import HotelImage from "../../img/english-point.jpg";
import AppartmentImage from "../../img/thon-hotel-appartments.jpg";
import ResortImage from "../../img/Catalonia-Bavaro-Resort.jpg";
import VillaImage from "../../img/villas.jpg";
import CabinImage from "../../img/handcrafted-log-home.jpg";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countByType');
  const images = [
    HotelImage,
    AppartmentImage,
    ResortImage,
    VillaImage,
    CabinImage
  ]

  return (
    <div className='pList'>
        { loading ? (
          "Loading Please Wait"
          ) : (
          <>
          {data && images.map((img, i) => (
            <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
            </div>
        ))}
        </>
        )}
    </div>
  )
}

export default PropertyList