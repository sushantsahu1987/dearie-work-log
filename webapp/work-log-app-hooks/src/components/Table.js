import React,{useState} from 'react';
import './Table.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import uuidv1 from 'uuid/v1';

import {parseDate, formatDate} from '../utils/utils'

function Table(props) {

    const [newWorkName, updateWorkName] = useState('');
    const [newWorkDate, updateWorkDate] = useState('2018-01-08');

    const [work, updatework] = useState(()=>{
        return [
            {   
                id: uuidv1(),
                date:formatDate(parseDate('11/07/2018')),
                name:"Take dog out for walk",
                status:0
            },
            {
                id: uuidv1(),
                date:formatDate(parseDate('12/07/2018')),
                name:"Take dog out for walk",
                status:1
            },
            {
                id: uuidv1(),
                date:formatDate(parseDate('13/07/2018')),
                name:"Take dog out for walk",
                status:2
            }
        ]
    })

    const onToggle = (id) => {
        const log = work.find(val => id === val.id);
        (log.status === 0)?log.status = 1: log.status = 0;
        updatework([...work])
    }

    const onCancel = (id) => {
        console.log(`cancel id ${id}`);
        const log = work.find(val => id === val.id);
        log.status = 2;
        updatework([...work])
    }

    const onAdd = (e) => {
        e.preventDefault();

        const log = {
            id: uuidv1(),
            date: formatDate(parseDate(newWorkDate)),
            name: newWorkName,
            status:0,
        }

        work.push(log);
        updatework([...work]);
    }

    const onDateChange = (e) => {
        updateWorkDate(e.target.value);
    }

    const onTextChange = (e) => {
        updateWorkName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onAdd}>
                <input type="date" 
                    value={newWorkDate}
                    onChange={onDateChange}
                    />
                <input type="text" 
                    value={newWorkName}
                    onChange={onTextChange}
                    />
                <input type="submit" value="Add"/>
            </form>
            <br/>
            <table>
                <tbody>
                <TableHeader/>
                {
                    work.map(val => {
                        return (
                            <TableRow
                                onCancel={onCancel}
                                onToggle={onToggle}
                                key={val.id}
                                id={val.id}
                                date={val.date}
                                name={val.name}
                                status={val.status} />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )

}


export default Table;