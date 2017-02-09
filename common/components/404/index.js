import './style.scss';

import React, {
	Component
} from 'react';

import ReactDOM from 'react-dom';

class Error404 extends Component {
	render() {
		return (
			<div className="error">
        <h1>404</h1>
        <p>ERROR</p>
      </div>
		)
	}
}

export default Error404;
