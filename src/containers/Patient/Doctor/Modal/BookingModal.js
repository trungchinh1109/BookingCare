import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './BookingModal.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from '../ProfileDoctor';
import _ from 'lodash';

class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }


    render() {
        let { isOpenModal, closeBookingModal, dataTime } = this.props;
        let doctorId = '';
        if(dataTime && !_.isEmpty(dataTime)){
            doctorId = dataTime.doctorId
        }
        console.log('trungchinh datatime: ', dataTime)
        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="lg"
                centered
            >
                <div className="booking-modal-content">
                    <div className="booking-modal-header">
                        <span className="left">Thông Tin Đặt Lịch Khám Bệnh</span>
                        <span className="right" onClick={closeBookingModal}><i className="fas fa-times"></i></span>
                    </div>
                    <div className="booking-modal-body">
                        <div className="doctor-infor">
                            <ProfileDoctor doctorId={doctorId} isShowDescriptionDoctor={false} dataTime={dataTime} />
                        </div>
                        
                        <div className="row">
                            <div className="col-6 form-group">
                                <label> Họ Tên:</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label> Số Điện Thoại</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label> Địa Chỉ Email</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label> Địa Chỉ Liên Hệ</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-12 form-group">
                                <label> Lý Do Khám</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label> Đặt Cho Ai</label>
                                <input className="form-control" />
                            </div>
                            <div className="col-6 form-group">
                                <label> Giới Tính</label>
                                <input className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="booking-modal-footer">
                        <button className="btn-booking-confirm"onClick={closeBookingModal}>Xác Nhận</button>
                        <button className="btn-booking-cancel"onClick={closeBookingModal}>Hủy</button>
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
