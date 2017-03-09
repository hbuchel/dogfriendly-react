import React, {PropTypes} from 'react';

const LocationList = ({locations}) => {
    return (
        <ul>
            {locations.map(location =>
                <li key={location.id}>
                    {location.name}
                </li>
            )}

        </ul>
    );
};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired
};

export default LocationList;