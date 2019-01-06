import React from 'react';
import {Button} from 'reactstrap';


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
                <Button 
                    color="link"
                    onClick={()=> {
                    props.onToggle(props.id);
                }}>
                    Toggle
                </Button>

                <Button 
                    color="link"
                    onClick={()=> {
                    props.onCancel(props.id)
                }}>
                    Cancel
                </Button>
            </td>
        </tr>
    );

}

export default TableRow;