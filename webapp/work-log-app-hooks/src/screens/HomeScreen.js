import React,{useEffect, useState} from 'react';
import Table from '../components/Table';
import './HomeScreen.css';

import {parseDate, formatDate} from '../utils/utils'

function HomeScreen(props) {

    const [worklog, setWorkLog] = useState([]);

    useEffect(()=> {
      console.log('use effect');
      getWorkLog();
    }, []);

    const getWorkLog = () => {
        fetch('http://localhost:3001/worklog')
        .then(res => res.json())
        .then(data => {
          data.worklog.map(val => {
            val.date = formatDate(parseDate(val.date));
          });
          setWorkLog(data.worklog);
        }).catch(e => {
          console.log(e);
        });
    }

    const onAdd = (data) => {
      console.log(data);

      fetch('http://localhost:3001/worklog', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.log)
      })
        .then(res => {
            if(res.status === 200) {
                getWorkLog();
            }
        })
        .catch(e => {
          console.log(e);
        });

    }

    const onUpdate = (data) => {

        console.log(data);
  
        fetch('http://localhost:3001/worklog/update', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        })
          .then(res => {
              console.log('update');
              if(res.status === 200) {
                getWorkLog();
              }
           })
          .catch(e => {
            console.log(e);
          });
  
    }

    const onCancel = (data) => {
  
        fetch('http://localhost:3001/worklog/cancel', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        })
          .then(res => {
            console.log('cancel');
            if(res.status === 200) {
              getWorkLog();
            }
          })
          .catch(e => {
            console.log(e);
          });
  
    }

    return (
      <div className="home">
          <Table data={worklog}
                 onAdd={onAdd}
                 onCancel={onCancel}
                 onUpdate={onUpdate}
                 />          
      </div>
    );

}

export default HomeScreen;
