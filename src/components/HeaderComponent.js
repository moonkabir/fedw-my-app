import React, { Component } from 'react';
import {Navbar, NavbarBrand, jumbotron} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            // <React.Fragment> <> aita error dile full dorm ta likha lagbe
            <> 
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Moon Kabir's Kitchen</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses! </p>
                            </div>
                        </div>
                    </div>
                </jumbotron>
            </>
        );
    }
}

export default Header;