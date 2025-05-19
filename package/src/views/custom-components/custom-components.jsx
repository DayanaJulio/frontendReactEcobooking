import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page

import CallToAction from "../../components/call-to-action/CallToAction"

const CustomComponents = () => {
    return (
        <div className="static-slider-head banner2" style={{ width: '100%', height: '100vh' }}>
             <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner2 />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
        </div>
    );
}

CustomComponents.propTypes = {
    classes: PropTypes.object
};

export default CustomComponents;
