import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromParent();
    }

    render() {
        console.log('chec child props', this.props);
        console.log('check child open modal ', this.props.isOpen)
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"

            >
                <ModalHeader toggle={() => { this.toggle() }}>Create A New User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" />
                        </div>  
                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="password" />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => { this.toggle() }}>Save Changes</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Close</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);




