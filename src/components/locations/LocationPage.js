import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as locationActions from '../../actions/locationActions';

class LocationPage extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.location.name}</h1>
                <p>Address: {this.props.location.address}</p>
                
            </div>
        );
    }
}

function collectLocationTags(tags, location) {
    let selected = tags.map(tag => {
        if(location.tag_ids.filter(tagId => tagId == tag.id).length > 0 ){
            return tag;
        }
    });
    return selected.filter(el => el != undefined);
}


LocationPage.propTypes = {
    locations: PropTypes.array.isRequired,
    locationTags: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let location = {
        name: '',
        address: '',
        tag_ids: []
    };
    let Locationtags = [];
    const locationId = ownProps.params.id;
    if (state.locations.length > 0 && state.tags > 0) {
        location = Object.assign({}, state.locations.find(location => location.id == id ));
        if (location.tag_ids.length > 0) {
            tags = collectLocationTags(state.tags, cat);
        }
    }
    return {
        locations: state.locations
    };
}

export default connect(mapStateToProps)(LocationPage);