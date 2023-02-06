import React, {Component} from "react";
export default class MainContent extends Component {
    state = { pageTitle: "Customers",customersCount:
    5};

    render(){
        return <div>
            <h2 className="border-bottom m-1 p-1">{this.state.pageTitle}            
            <span className="badge bg-secondary m-2">
                {this.state.customersCount}
            </span>
            <button className= "btn btn-dark" onClick={this.onRefreshClick}>Refresh</button>

            <div className="cart-container">
              <a href="cart.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> <span className="carty">CART
        <span className="badge bg-secondary m-1">0</span>
        </span></a>
        </div>
            
            
              <div className="col-sm-3 search ">
                <form action="#" className="search-wrap">
                  <div className="input-group">
              <input type="search" className="form-control search" placeholder="search.."/>
               <button className="btn btn-dark" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
        </div>
        </form>
        </div>
<br/>        
<br/> 
    <div className="fade-in-text">
        <h3 className="h4">OUR BIGGEST SALE YET 50% OFF ALL OUR SUMMER PRODUCTS</h3>
    </div>

    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="bag3.jpg" class="d-block w-100" alt="bag3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>What Kind of Bags do you fancy?</h5>
        <p className="p1">Please don't hesistate to check our Collection.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="bag.jpg" class="d-block w-100" alt="bag"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>From Designers to Summer Bags</h5>
        <p className="p2">We have exactly what your'e looking for.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="bag2.jpg" class="d-block w-100" alt="bag2"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>We are your go to for luxury Bags</h5>
        <p>what are you waiting for?.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <div className="text-block">NEW ARRIVAL</div>
        <div className="btn-container">
          <br/>
    <button className="btns" type="submit">SHOP COLLECTION</button>
    </div>
  </h2>
  <br/>
  <br/>
  <div className="corel-intro">
    <div className="row">
      <div className="col-sm-12 text-center">
        <h4 className="intro">
          "It started with a simple idea:<p><br/> Create quality, well designed products that I wanted myself."</p>
        </h4>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <div className="row">
    <div className="col-sm-8 offset-sm-2 text-center">
      <h2><b>BEST SELLERS</b></h2>
    </div>

  </div>

  <div className="row row-pb-md">
    <div className="col-lg-3 mb-4 text-center">
      <div className="product-entry border">
        <a href="#" className="prod-img">
          <img src="bag4.jpg" className="img-fluid" alt="bag4"/>
        </a>
        <div className="desc">
          <h4>
            <a href="#">Louis Vuitton</a>
          </h4>
          <span className="price">
            $639.00
          </span>
        </div>
      </div>
    </div>

    <div className="col-lg-3 mb-4 text-center">
      <div className="product-entry border">
        <a href="#" className="prod-img">
          <img src="bag5.jpg" className="img-fluid" alt="bag5"/>
        </a>
        <div className="desc">
          <h4>
            <a href="#">DOLCE</a>
          </h4>
          <span className="price">
            $760.00
          </span>
        </div>
      </div>
    </div>
  
    <div className="col-lg-3 mb-4 text-center">
      <div className="product-entry border">
        <a href="#" className="prod-img">
          <img src="bag6.jpg" className="img-fluid" alt="bag6"/>
        </a>
        <div className="desc">
          <h4>
            <a href="#">LV</a>
          </h4>
          <span className="price">
            $505.00
          </span>
        </div>
      </div>
    </div>
     
    <div className="col-lg-3 mb-4 text-center">
      <div className="product-entry border">
        <a href="#" className="prod-img">
          <img src="bag7.jpg" className="img-fluid" alt="bag7"/>
        </a>
        <div className="desc">
          <h4>
            <a href="#">FENDI</a>
          </h4>
          <span className="price">
            $245.00
          </span>
        </div>
      </div>
    </div>
    </div>
    <br/>
    <br/>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 text-center">
          <h2>TRUSTED PARTNERS</h2>
        </div>
      </div>
  <br/>
  <br/>

      <div className="row">
        <div className="col partner-col text-center">
          <img src="brand-3.jpg" className="img-fluid1" alt="brand3"/>
        </div>

         <div className="col partner-col text-center">
          <img src="brand-1.jpg" className="img-fluid1" alt="brand-4"/> 
          </div>

          <div className="col partner-col text-center">
          <img src="brand-2.jpg" className="img-fluid1" alt="brand-4"/> 
          </div>

          <div className="col partner-col text-center">
          <img src="dior.png" className="img-fluid1" alt="brand-4"/> 
          </div>

    </div>
  </div>
</div>
};


//when the user clicks refresh button
    onRefreshClick = () => {
      this.setState({
      customersCount: 7,
      });
    };
}