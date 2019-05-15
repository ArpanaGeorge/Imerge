import React from "react";
import { useTranslation } from 'react-i18next';
import "./style.css";


const Cards = props => ( 
  
    <div class="card agencySubCards">
    <div class="card-body">
    <div className=" row one_card">
        <div className=" col col-sm-3 image_box">
            <img className="card-img-top img-responsive" alt={props.name} src={props.image} />
            <h5>{props.name}</h5>
        </div>
        <div className="col col-sm-9 agencyDetails">
        
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p><a href={props.url} target="_blank" class="btn agenciesButton rubberBand">Website</a></p>
            </div>  
        </div>
        </div>
        </div>
)

export default Cards;