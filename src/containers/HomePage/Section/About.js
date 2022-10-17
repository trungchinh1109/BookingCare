import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';



class About extends Component {
    render() {


        return (
            <div className=" section-share section-about">
                <div className="section-about-header">
                    Truyền Thông Nói Gì Về BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Công ty Cổ phần Công nghệ BookingCare
                            28 Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội

                            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                        </p>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
