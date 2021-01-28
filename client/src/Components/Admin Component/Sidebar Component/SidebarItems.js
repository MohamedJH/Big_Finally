import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SidebarItems(props) {
    const {title:{icon,name}}= props.item
    return (
        <div className="accordion-item">
            <button className="btn btn-dark accordion-button collapsed w-100 d-flex justify-content-start align-items-center" type="button">
                <FontAwesomeIcon icon={icon}/>
                <span className="visually-hidden mx-1">{name}</span>
            </button>
        </div>
    )
}
