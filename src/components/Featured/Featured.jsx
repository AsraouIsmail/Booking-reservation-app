import "./Featured.css"

const Featured = () => {
  return (
    
      <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/4502960/pexels-photo-4502960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Marrakech</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>CASABLANCA</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/5472511/pexels-photo-5472511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Fez</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured