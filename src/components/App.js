import React, { useState } from 'react';
import RecordForm from './RecordForm';
import RecordTable from './RecordTable';

const App = () => {
    const [records, setRecords] = useState({});

    const addRecord = (date, distance) => {
        setRecords(prevRecords => {
            const newRecords = { ...prevRecords };
            if (!newRecords[date]) {
                newRecords[date] = 0;
            }
            newRecords[date] += distance;
            return newRecords;
        });
    };

    const deleteRecord = (date) => {
        setRecords(prevRecords => {
            const newRecords = { ...prevRecords };
            delete newRecords[date];
            return newRecords;
        });
    };

    return (
        <div>
            <h1>Учет тренировок</h1>
            <RecordForm onAddRecord={addRecord} />
            <RecordTable records={records} onDeleteRecord={deleteRecord} />
        </div>
    );
};

export default App;
