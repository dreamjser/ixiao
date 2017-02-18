import './style.scss';

import React, {
	Component
} from 'react';

import Loading from '../loading';

class Preloading extends Component {
	render() {
		return (
			<div className="preloading">
        <div className="preloading-box">
          <Loading circle="1.6rem" />
          <p>{this.props.desc || '数据加载中'}...</p>
        </div>
      </div>
		)
	}
}

export default Preloading;
