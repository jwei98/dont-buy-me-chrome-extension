
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import OpportunityCostChart from './Components/OpportunityCostChart';
import Graph from './Components/Graph'
import PaymentHistory from './Components/PurchaseHistory';
import SavingsGraph from './Components/SavingsGraph';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'flexboxgrid'
import './styles/bootstrap/css/bootstrap.min.css'

class App extends Component {
	constructor() {
  	  // set states here, pass from top down to other components
  	  super();
  	  this.state = {
  		  purchases: [],
		  breakdownData: [],
  		  monthlyData:[],
		  monthlySavings:[],
  		  options:[],
  	  }
    }

	getPurchases() {
  	  var xhr = new XMLHttpRequest();
  	  xhr.open(
		  "GET",
		  "https://nessie-credit.herokuapp.com/api?key=896c897b5f52485fd3e9b049b4af1cc5&account=5a5796596514d52c7774a389&value=purchaseHistory",
		  true
	  );
  	  xhr.onreadystatechange = () => {
  		if (xhr.readyState == 4) {
  		  // JSON.parse does not evaluate the attacker's scripts.
  		  var resp = JSON.parse(xhr.responseText);
  		  this.setState({purchases: resp});
  		}
  	  }
  	  xhr.send();
    }

	getOpportunityCostBreakdown() {

		  const data = {
	  			labels: [
	  				'Card Interest',
	  				'Investment Ops',
	  			],
	  			datasets: [{
	  				//data: [resp.interestCost, resp.investmentReturn],
					data: [23.11,17.12],
	  				backgroundColor: [
	  				'#FF6384',
	  				'#FFCE56'
	  				],
	  				hoverBackgroundColor: [
	  				'#FF6384',
	  				'#FFCE56'
	  				]
	  			}]
	  		};
	  		this.setState({breakdownData: data});
	}

	getMonthlySavings() {
		var xhr = new XMLHttpRequest();
    	  xhr.open(
  		  "GET",
  		  "https://nessie-credit.herokuapp.com/api?key=896c897b5f52485fd3e9b049b4af1cc5&account=5a5796596514d52c7774a389&value=realMonthlyCostGain",
  		  true
  	  	);
    	  xhr.onreadystatechange = () => {
    		if (xhr.readyState == 4) {
    		  // JSON.parse does not evaluate the attacker's scripts.
    		  var resp = JSON.parse(xhr.responseText);
			  var months = [];
			  var dollarCost = [];
			  var realCost = [];
			  for (let i = 0; i < resp.length; i++) {
				  months[i] = resp[i].date;
				  dollarCost[i] = resp[i].values.dollarCost;
				  realCost[i] = resp[i].values.realCost;
			  }
			  const data = {
				  labels: months,
				  datasets: [
				    {
				      label: 'Listed Savings',
				      fill: true,
				      lineTension: 0.1,
				      backgroundColor: 'rgba(75,192,192,0.4)',
				      borderColor: 'rgba(75,192,192,1)',
				      borderCapStyle: 'butt',
				      borderDash: [],
				      borderDashOffset: 0.0,
				      borderJoinStyle: 'miter',
				      pointBorderColor: 'rgba(75,192,192,1)',
				      pointBackgroundColor: '#fff',
				      pointBorderWidth: 1,
				      pointHoverRadius: 5,
				      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				      pointHoverBorderColor: 'rgba(220,220,220,1)',
				      pointHoverBorderWidth: 2,
				      pointRadius: 1,
				      pointHitRadius: 10,
				      data: dollarCost
				  },
				  {
					label: 'Real Savings',
					fill: true,
					lineTension: 0.1,
					backgroundColor: 'rgba(213, 85, 251, 0.4)',
					borderColor: 'rgba(173, 75, 193, 1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(173, 75, 193, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(173, 75, 193, 1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: realCost
				  }
				  ]
				};
    		  this.setState({monthlySavings: data});
    		}
    	  }
    	  xhr.send();
	}

	getMonthlyHistory() {
		var xhr = new XMLHttpRequest();
    	  xhr.open(
  		  "GET",
  		  "https://nessie-credit.herokuapp.com/api?key=896c897b5f52485fd3e9b049b4af1cc5&account=5a5796596514d52c7774a389&value=realMonthlyCostLoss",
  		  true
  	  	);
    	  xhr.onreadystatechange = () => {
    		if (xhr.readyState == 4) {
    		  // JSON.parse does not evaluate the attacker's scripts.
    		  var resp = JSON.parse(xhr.responseText);
			  var months = [];
			  var dollarCost = [];
			  var realCost = [];
			  for (let i = 0; i < resp.length; i++) {
				  months[i] = resp[i].date;
				  dollarCost[i] = resp[i].values.dollarCost;
				  realCost[i] = resp[i].values.realCost;
			  }
			  const data = {
				  labels: months,
				  datasets: [
				    {
				      label: 'Listed Spendings',
				      fill: true,
				      lineTension: 0.1,
				      backgroundColor: 'rgba(75,192,192,0.4)',
				      borderColor: 'rgba(75,192,192,1)',
				      borderCapStyle: 'butt',
				      borderDash: [],
				      borderDashOffset: 0.0,
				      borderJoinStyle: 'miter',
				      pointBorderColor: 'rgba(75,192,192,1)',
				      pointBackgroundColor: '#fff',
				      pointBorderWidth: 1,
				      pointHoverRadius: 5,
				      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				      pointHoverBorderColor: 'rgba(220,220,220,1)',
				      pointHoverBorderWidth: 2,
				      pointRadius: 1,
				      pointHitRadius: 10,
				      data: dollarCost
				  },
				  {
					label: 'Real Spendings',
					fill: true,
					lineTension: 0.1,
					backgroundColor: 'rgba(213, 85, 251, 0.4)',
					borderColor: 'rgba(173, 75, 193, 1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(173, 75, 193, 1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(173, 75, 193, 1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: realCost
				  }
				  ]
				};
    		  this.setState({monthlyData: data});
    		}
    	  }
    	  xhr.send();
      }

    componentWillMount() {
		this.getOpportunityCostBreakdown();
  	  	this.getPurchases();
	  	this.getMonthlyHistory();
		this.getMonthlySavings();
    }

    render() {

  	  return (
  		<div className="App">
		  <div id='app-container' className='row'>
		  	<script src="listener.js"></script>
			<Header />
			<div>
				<OpportunityCostChart data={this.state.breakdownData}/>
			</div>

			<div className="panel panel-default">
				<Tabs>


				    <TabPanel>
					  <Graph className="panel" data={this.state.monthlyData}/>
				    </TabPanel>
				    <TabPanel>
					  <SavingsGraph className="panel" data={this.state.monthlySavings} />;
				    </TabPanel>

					<TabList>
						<Tab className="tab"><div className="panel-heading"><h5>Recent Spendings</h5></div></Tab>
				      	<Tab className="tab"><div className="panel-heading"><h5>Recent Savings</h5></div></Tab>
				    </TabList>
					
			  	</Tabs>
			</div>


			<div>
	  		  <PaymentHistory purchases={this.state.purchases}/>
			</div>

		   </div>
  		</div>
  	  );
    }
}

export default App;
