import React from 'react'
import db from '../../db.json'
const Pizza = () => {
    const PizzaRender = () => {
        return db.pizza.map(pizza=>(
            <div className="card" key={pizza.id}>
                <img className="card-img-top" src={pizza.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{pizza.title}</h5>
                    <p className="card-text">some description.</p>
                    <p className="card-text"><small className="text-muted">{pizza.coast}</small></p>
                </div>
            </div>
        )) 
            
        
    }
    return(
        <div className="container">
            <div className="card-groups">
                {PizzaRender()}
            </div>
        </div>
    )
}

export default Pizza;