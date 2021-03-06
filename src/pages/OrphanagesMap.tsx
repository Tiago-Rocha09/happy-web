import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import MapMarkImg from '../images/map-marker.svg';
import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarkImg} alt=""/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Marabá</strong>
                    <span>Pará</span>
                </footer>
            </aside>

            <Map
                center={[-5.3641216,-49.1126784]}
                zoom={13}
                style={{width:"100%", height:'100%'}}>
                    <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;