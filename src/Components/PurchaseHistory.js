import React, { Component } from 'react';
//import styles from './../styles/PurchaseHistory.css';
import Purchase from './Purchase.js';

class PurchaseHistory extends Component {
  render() {

	  let purchaseHistory = [];
	  if(this.props.purchases) {
	  	purchaseHistory = this.props.purchases.map(function(purchase) {
		  return(<Purchase key={purchase.title} purchase={purchase} />);
	  	});
	  }


    return (
		<div className="purchaseHistory-container">
			<div className="panel panel-default">
		      	<div className="panel-body hold-height">
					<div className="list-group">
					{purchaseHistory}
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default PurchaseHistory;
