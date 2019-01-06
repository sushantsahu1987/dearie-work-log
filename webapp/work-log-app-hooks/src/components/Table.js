import React,{useState} from 'react';
import './Table.css';
import { Table as TableStrap, Button, 
        Form, FormGroup, Label,
        Input, Container, Row, Col,
        Alert } from 'reactstrap';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

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
            
            <Container>
                <Row>
                    <Col xs="3">
                        <h4>Add tasks</h4>
                    </Col>

                    <Col xs="9">
                        <h4>Tasks</h4>
                    </Col>
                </Row>

                <Row>
                    <br/>
                </Row>

                <Row>
                    <Col xs="3">
                        <Form onSubmit={onAdd}>
                            <FormGroup>
                                <Label>Date</Label>
                                <Input type="date" 
                                    value={newWorkDate}
                                    onChange={onDateChange}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label>Task</Label>
                                <Input type="textarea" 
                                    rows="6"
                                    value={newWorkName}
                                    onChange={onTextChange}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" style={
                                    {
                                        marginRight:"5px"
                                    }
                                }>
                                    Add
                                </Button>
                                <Button color="danger">
                                    Clear
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs="9">
                        <Alert color="primary">
                            Tasks
                        </Alert>
                        <TableStrap bordered hover striped>
                            <TableHeader/>
                            <tbody>
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
                        </TableStrap>
                    </Col>
                </Row>
                
            
            <br/>            

            </Container>
        </div>
    )

}

export default Table;