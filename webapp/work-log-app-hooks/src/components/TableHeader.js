import React from 'react';

function TableHeader(props) {

    return (
        <thead>
            <tr>
                <th>
                    Date
                </th>
                <th>
                    Name
                </th>
                <th>
                    Status
                </th> 
                <th>
                    Actions
                </th>                                       
            </tr>
        </thead>
    )

}

export default TableHeader;