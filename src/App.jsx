
import './App.css'

function App() {

  return (
    <>
      <div className='head'>
        <div className="container">
          <nav>
            <div className="nav_left">
              <ul className='links'>
                <li className='link'><a href="#"><img src="../public/logo.png" alt="Logo" /></a></li>
                <li className="link"><a href="#">Home</a></li>
                <li className="link"><a href="#">About us</a></li>
                <li className="link"><a href="#">Menu</a></li>
                <li className="link"><a href="#">Features</a></li>
                <li className="link"><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="nav_right">
              <button className='button booking_btn'>Booking Now</button>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="header">
            <div className="header_left">
              <h1>Making time a good time by making food the good food.</h1>
              <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
              <div className="buttons">
                <div className="button order_btn">Order Now</div>
                <div className="button detail_btn">Food Details</div>
              </div>
            </div>
            <div className="header_right">
            </div>
          </div>
        </div>
        <section className='features'>
          <div className="container">
            <div className="section_head">
              <h3>FEATURES</h3>
              <h2>Food with a New Passion</h2>
            </div>
            <div className="passions">
              <div className="passion">
                <img src="../public/passion-quality.png" alt="" />
                <h3>Quality Food</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
              </div>
              <div className="passion">
                <img src="../public/passion-delivery.png" alt="" />
                <h3>Quality Food</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
              </div>
              <div className="passion">
                <img src="../public/passion-taste.png" alt="" />
                <h3>Quality Food</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
