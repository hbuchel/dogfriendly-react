import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import LocationList from './LocationList';

class LocationsPage extends React.Component {
    render() {
        return(
            <div className="">
                <h1>Locations</h1>
                <LocationList locations={this.props.locations} />
                {this.props.children}
            
            </div>
        )
    }
}

export default LocationsPage;