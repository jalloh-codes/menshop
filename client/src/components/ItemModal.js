import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component{
    state ={
        modal: false,
        name: ''
    }
    toggle = () =>{
        this.setState({
            modal: !this.state.modal
        });
    }
    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e)=>{
        e.preventDefault();
        const newItem = {
            name: this.state.name
        }
        this.props.addItem(newItem);
        //close modal 
        this.toggle();
    }
    render(){
        return(
            <div>
                <Button
                color="dark"
                stye={{marginTop: '2rem'}}
                onClick={this.toggle}
                >Add Item</Button>
                <Modal
                isOpen ={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to shopping list </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item"></Label>
                                <Input type="text"
                                name="name"
                                id="item"
                                palceholder="add Item"
                                onChange={this.onChange} />

                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal)