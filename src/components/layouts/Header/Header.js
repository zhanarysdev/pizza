import React from 'react'
import Slick from 'react-slick'


const Header = () => {
    return (
        <div>
        <div className="container">
           <div className="row">
           <div className="col-md-4">
                <a href="+7(747)2433331" className="tel">
                    <img src="img/phone-receiver.svg" alt=""/>
                    +7(747)2433331
                </a>
                <a href="+7(701)9958444" className="tel">
                    <img src="img/phone-receiver.svg" alt=""/>
                    +7(701)9958444
                </a>
            </div>
            <div className="col-md-4">
                <a href="" className="logo"><img src="img/Bezymyanny-1.png" alt=""/></a>
            </div>
            <div className="col-md-4">
                <a href="" className="soc">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="soc">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="" className="soc">
                    <i className="fab fa-vk"></i>
                </a>
                <a href="">
                    <img  className="cart" src="img/shopping-cart.svg" alt=""/>
                </a>
            </div>
            </div>
        </div>
        <Slick>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
          </div>
        </Slick>
        </div>
    )
}

export default Header;