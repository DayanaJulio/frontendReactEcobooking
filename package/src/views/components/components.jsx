import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page


import Conocenos from "../../components/call-to-action/conocenos.jsx";
import PageForm from "./sections/form.jsx";
import CallToAction from "../../components/call-to-action/CallToAction";
import AlojamientosApp from "../../components/call-to-action/alojamientosapp.jsx";
import Busqueda from "../../components/call-to-action/busqueda.jsx";




const Components = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <Conocenos/>
                    <AlojamientosApp />
                    <Busqueda/>
                    <PageForm />
                    <CallToAction />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
