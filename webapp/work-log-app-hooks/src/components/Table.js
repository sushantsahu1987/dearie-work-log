import React,{useState} from 'react';
import './Table.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import uuidv1 from 'uuid/v1';

import {parseDate, formatDate} from '../utils/utils'

function Table(props) {

    const [newWorkName, updateWorkName] = useState('');
    const [newWorkDate, updateWorkDate] = useState('2018-01-08');

    const onToggle = (id) => {
        const log = props.data.find(val => id === val.id);
        const status = (log.status === 0)? 1: 0;
        props.onUpdate({id, status});
        
    }

    const onCancel = (id) => {
        console.log(`cancel id ${id}`);
        props.onCancel({id});
    }

    const onAdd = (e) => {
        e.preventDefault();
        const log = {
            date: newWorkDate,
            name: newWorkName,
            status:0,
        }

        // work.push(log);
        props.onAdd({
            log
        })
        updateWorkDate('2018-01-08');
        updateWorkName('');
    }

    const onDateChange = (e) => {
        updateWorkDate(e.target.value);
    }

    const onTextChange = (e) => {
        updateWorkName(e.target.value);
    }

    return (
        <div>
            <h3>Daily tasks</h3>
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
                    props.data.map(val => {
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