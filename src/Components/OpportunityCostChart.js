import React from 'react'
import {Doughnut} from 'react-chartjs-2';

class OpportunityCostChart extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
	    return (
			<div className='graph-container'>

					<Doughnut data={this.props.data} height={125} />
					<h2>$40.23</h2>
			</div>

	    );
  }
}

export default OpportunityCostChart
