import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class BarChart extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            labels: [
                'option1',
                'option2',
                'option3',
                'option4',
                'option5',
                'option6'
              ],
            datasets: [
              {
                label: 'Dataset 1',
                data: [1,2,3,4,5,6,7],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: 'Dataset 2',
                data: [1,2,3,4,5,6,7],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
        }
    
    }

 options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
   
  componentDidMount() {
    let body = {
      gender: 'male',
      questionNum: this.props.questionNum
    }
    axios.post('/api/responseResult', body)
      .then(
        (res) => {
          this.setState(
            (prevStat) => {

              let responseResult = [];
              for (let key in res.data[0]) {
                if (key !== 'questionnum') {
                  responseResult.push(res.data[0][key]);
                }
              }

              return {
                datasets: prevStat.datasets.map(
                  eli => {
                    return {
                      ...eli,
                      data: responseResult
                    }
                  }
                )
              }
            }
          )
        }
      )
  }

   
    render(){
        return <Bar options={this.options} data={this.state} />;
    }
}

export default BarChart;