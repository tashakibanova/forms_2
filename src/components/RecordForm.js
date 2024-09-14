import React, { useState } from 'react';
import './App.css'; 
const RecordForm = ({ onAddRecord }) => {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date && distance) {
            onAddRecord(date, parseFloat(distance));
            setDate('');
            setDistance('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Дата</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <label htmlFor="distance">Пройдено км</label>
            <input
                type="number"
                id="distance"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                step="0.1"
                min="0"
                required
            />
            <button type="submit">ОК</button>
        </form>
    );
};

export default RecordForm;
