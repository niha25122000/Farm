import React from 'react';
import { Card, Button, ButtonToolbar } from 'react-bootstrap';
import { Component } from 'react';
import './ViewAdvertisement.css';

export class FarmingTips extends Component {
  constructor(props){
    super(props);
    this.state = { tips: [] };
  }
  
  componentDidMount() {
    this.refreshList();
  }
  
  refreshList() {
    fetch('http://localhost:55976/api/FarminTips')
      .then(response => response.json())
      .then(data => {
        this.setState({ tips: data });
      });
  }
  
  componentDidUpdate() {
    this.refreshList();
  }
  
  render() {
    const { tips, tipid, farmingtip } = this.state;

    return (
      <div>
        {tips.map(tip => (
          <Card key={tip.TipID} className="Tips">
            <Card.Body>
           
              <Card.Title>{tip.FarmingTip}</Card.Title>
             
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
export default FarmingTips;