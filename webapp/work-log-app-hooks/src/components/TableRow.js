import React from 'react';


function TableRow(props) {

    const displayStatus = (status) => {
        let s = 'In Progress';
        if (status === 1) {
            s = 'Complete';
        }else if (status === 2) {
            s = 'Cancelled';
        }

        return s;
    }

    return (
        <tr>  
            <td>
                {props.date}
            </td>

            <td>
                {props.name}
            </td>

            <td>
                {
                    displayStatus(props.status)
                }
            </td>

            <td>
                <button onClick={()=> {
                    props.onToggle(props.id);
                }}>
                    Toggle
                </button>

                <button onClick={()=> {
                    props.onCancel(props.id)
                }}>
                    Cancel
                </button>
            </td>
        </tr>
    );

}

export default TableRow;