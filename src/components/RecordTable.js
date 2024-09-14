import React from 'react';

const RecordTable = ({ records, onDeleteRecord }) => {
    const sortedDates = Object.keys(records).sort((a, b) => new Date(b) - new Date(a));

    return (
        <table>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Пройдено км</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {sortedDates.map(date => (
                    <tr key={date}>
                        <td>{date}</td>
                        <td>{records[date].toFixed(1)}</td>
                        <td>
                            <button
                                className="delete-btn"
                                onClick={() => onDeleteRecord(date)}
                            >
                                ✘
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RecordTable;
