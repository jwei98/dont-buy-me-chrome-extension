import React from 'react'
import { Line } from 'react-chartjs-2'

class SavingsGraph extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='graph-container'>
				<div className="panel panel-default">
					<div className="panel-heading"><h5>Monthly Savings</h5></div>
					<Line data={this.props.data} width={500} height={300}/>
				</div>
			</div>
		)
	}
}

export default SavingsGraph
