import React from 'react'
import { Line } from 'react-chartjs-2'

class Graph extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='graph-container'>
				<div className="panel panel-default">
					<Line data={this.props.data} width={500} height={300}/>
				</div>
			</div>
		)
	}
}

export default Graph
