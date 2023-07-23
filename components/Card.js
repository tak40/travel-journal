import React from "react"

export default function Card(props){
    return (
        <div className='card'>
            <img src={props.item.imageUrl} className='card--image' />
            <div className='card--text_container'>
                <div className='card--top_container'>
                    <div className='location-container'>
                        <img src='images/location-icon.svg' className='card--location_icon' />
                        <h3 className='card--location'>{props.item.location}</h3>
                        <a href={props.item.googleMapsUrl} className='card--map_url' target='_blank'>View on Google Maps</a>
                    </div>
                    <h2 className='card--title'>{props.item.title}</h2>
                </div>
                <div className='card--bottom_container'>
                    <div className='travel-date-container'>
                        <p className='card--travel_date card--start_date'>{props.item.startDate} - </p>
                        <p className='card--travel_date card--end_date'>{props.item.endDate}</p>
                    </div>
                    <p className='card--description'>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}