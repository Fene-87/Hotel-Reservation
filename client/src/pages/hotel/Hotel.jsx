import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>3rd Avenue Parklands</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">Book a stay over ksh10,000 and get a free airport</span>
          <div className="hotelImages">

          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Nairobi</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quo quaerat rem
                repellat adipisci in iste totam nesciunt magni corrupti. Vero distinctio pariatur 
                doloribus illum dolor tempora quisquam nam eaque et iusto delectus voluptatem impedit, 
                consequuntur placeat earum laborum deleniti consequatur provident ex. Consequatur omnis, 
                hic nisi ullam provident assumenda!
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9 night stay</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores quisquam assumenda quas cum hic.</span>
              <h2><b>Ksh5000</b> (9 nights)</h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel