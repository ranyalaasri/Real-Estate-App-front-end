import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MdFavoriteBorder, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const ReservationCard = ({ property }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="card max-w-md rounded overflow-hidden shadow-lg p-5 bg-white sticky top-20 ml-4">
            <div className="flex justify-between items-center">
                <h3 className="heading">{property.name}</h3>
                <MdFavoriteBorder className="text-2xl cursor-pointer icon-box" />
            </div>
            <p className="text-muted text-base mt-4">
                {property.address}
            </p>
            <div className="mt-5">
                <label htmlFor="startDate" className="block text-sm font-medium text-muted">Check-in</label>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="input mt-1 w-full" />

                <label htmlFor="endDate" className="block text-sm font-medium text-muted mt-4">Check-out</label>
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} className="input mt-1 w-full" />
            </div>
            <div className="mt-5">
                <span className="text-lg font-semibold">MAD {property.price}</span> per night
            </div>
            <button className="btn btn-primary mt-5 w-full">
                Reserve
                <MdOutlineKeyboardArrowRight className="inline ml-2" />
            </button>
        </div>
    );
};

export default ReservationCard;
