import React, { Component } from 'react'

class MealMenu extends Component {
    render(){
        return(
            <div className="redLine">
                <div className="container" >
                    <ul>
                        <li>
                            <a href="">
                            <img src="img/pizza-slice.svg" alt=""/>
                            Пицца</a>
                        </li>
                        <li>
                            <a href="">
                            <img src="img/pizza-slice.svg" alt=""/>
                            Суши</a>
                        </li>
                        <li>
                            <a href="">
                            <img src="img/pizza-slice.svg" alt=""/>
                            Сеты</a>
                        </li>
                        <li>
                            <a href="">
                            <img src="img/pizza-slice.svg" alt=""/>
                            Шашлык</a>
                        </li>
                        <li>
                            <a href="">
                            <img src="img/pizza-slice.svg" alt=""/>
                            Кухня</a>
                        </li>
                        <li>
                            <a href="">
                            <img src="img/pizza-slice.svg" alt=""/>
                            Пицца</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MealMenu;

