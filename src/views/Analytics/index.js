import React, { Component } from 'react'
import { connect } from 'react-redux'

import getAnalytics from '../../store/getAnalytics'

import { Container } from './style'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';

class Analytics extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.dispatch( getAnalytics.getAnalytics() )
  }

  render(){
    return (
      <Container>
        <h2 className="title"> Estatísticas </h2>
        <p className="description"> Estatística de busca por específicações de notebook </p>
        <div className="chart-box"> 
          <BarChart
            width={400}
            height={300}
            data={this.props.data}
            margin={{ top: 5, right: 30, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="length" fill="#8884d8"> 
              {
                this.props.data && this.props.data.map( (item, index) => <Cell key={index} fill={item.color}  /> )
              }
            </Bar>
          </BarChart>
    
          <PieChart width={400} height={300}>
            <Pie data={this.props.data} dataKey="length" nameKey="name" outerRadius={100} label startAngle={90} endAngle={-360} > 
              {
                this.props.data && this.props.data.map( (item, index) => <Cell key={index} fill={item.color}  /> )
              }
            </Pie>
            <Legend />
          </PieChart>
        </div>
  
      </Container>
    )
  }
}

export default connect(store => ({ data: store.analytics }))(Analytics)