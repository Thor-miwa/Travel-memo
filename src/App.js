import Navbar from "./component/Navbar"
import Lekki from "./assets/Lekki.png"
import Gerri from "./assets/Geirangerfjord.png"
import Mount from "./assets/Mount.png"
import Sydney from "./assets/Sydney.png"
import locationIcon from "./assets/location-icon.png"
function App() {
  return (
    <section className="container">
     
      <Navbar />
      <div className="card-list">
        <article className="card">
          <div className="card-item">
            <a href="https://www.viator.com/tours/Lagos/Lekki-Conservation-Centre-Private-Tour-from-Lagos/d24049-44143P1" target="_blank" rel="noreferrer">
              <img src={Lekki} alt="Location" className="card-photo" />
            </a>
            <div className="card-body">
              <p className="card-location"><img src={locationIcon} alt="" className="location-icon" /><span className="location">Nigeria</span><span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" rel="noreferrer" className="location-link">View on Google Maps</a></span></p>
              <h1 className="card-title">Lekki Consevertion Centre"</h1>
              <p className="card-date"><span className="start-date">19 Feb, 2022</span>-<span className="end-date">19 Feb, 2022</span></p>
              <p className="card-description">Nigerian nature reserve with the longest suspended canopy walkway in Africa & vast wildlife.</p>
            </div>
          </div>
          <hr className="divider" />
        </article>

        <article className="card">
          <div className="card-item">
            <a href="https://source.unsplash.com/WLxQvbMyfas" target="_blank" rel="noreferrer">
              <img src={Mount} alt="Location" className="card-photo" />
            </a>
            <div className="card-body">
              <p className="card-location"><img src={locationIcon} alt="" className="location-icon" /><span className="location">Japan</span><span><a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank" rel="noreferrer" className="location-link">View on Google Maps</a></span></p>
              <h1 className="card-title">Mount Fiji</h1>
              <p className="card-date"><span className="start-date">12 Jan, 2021</span>-<span className="end-date">24 Jan, 2021</span></p>
              <p className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
          </div>
          <hr className="divider" />
        </article>
        <article className="card">
          <div className="card-item">
            <a href="https://source.unsplash.com/JmuyB_LibRo" target="_blank" rel="noreferrer">
              <img src={Sydney} alt="Location" className="card-photo" />
            </a>
            <div className="card-body">
              <p className="card-location"><img src={locationIcon} alt="" className="location-icon" /><span className="location">Australia</span><span><a href="https://goo.gl/maps/ZVxUuwk29NRsEq6WA" target="_blank" rel="noreferrer" className="location-link">View on Google Maps</a></span></p>
              <h1 className="card-title">Sydney Opera House</h1>
              <p className="card-date"><span className="start-date">27 May, 2021</span>-<span className="end-date">8 Jun, 2021</span></p>
              <p className="card-description">The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings</p>
            </div>
          </div>
          <hr className="divider" />
        </article>
        <article className="card">
          <div className="card-item">
            <a href="https://source.unsplash.com/3PeSjpLVtLg" target="_blank" rel="noreferrer">
              <img src={Gerri} alt="Location" className="card-photo" />
            </a>
            <div className="card-body">
              <p className="card-location"><img src={locationIcon} alt="" className="location-icon" /><span className="location">Norway</span><span><a href="https://goo.gl/maps/byfFZAKCaXSVcCmg7" target="_blank" rel="noreferrer" className="location-link">View on Google Maps</a></span></p>
              <h1 className="card-title">Geirangerfjord</h1>
              <p className="card-date"><span className="start-date">01 Oct, 2021</span>-<span className="end-date">)18 Nov, 2021</span></p>
              <p className="card-description">The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
            </div>
          </div>
          <hr className="divider" />
        </article>
      </div>
    </section>
  )
}

export default App