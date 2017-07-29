import React, {Component} from 'react';
import InstituteHeader from './header';
import InstituteSupport from './support';

class InstituteIndex extends Component {
    render() {
        return (
            <div>
                <InstituteHeader />
                <InstituteSupport />
            </div>
        );
    }
}

InstituteIndex.propTypes = {};
InstituteIndex.defaultProps = {};

export default InstituteIndex;