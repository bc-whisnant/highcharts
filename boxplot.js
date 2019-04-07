

// https://api.jsonbin.io/b/5ca784bba40eb3474aed0f09

document.addEventListener('DOMContentLoaded', function () {

  let options = {
    chart: {
        renderTo: 'container',
        type: 'boxplot'
    },
  
    title: {
        text: 'Highcharts Box Plot Example'
    },
  
    legend: {
        enabled: false
    },
  
    xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
            text: 'Experiment No.'
        }
    },
  
    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
                text: 'Theoretical mean: 932',
                align: 'center',
                style: {
                    color: 'gray'
                }
            }
        }]
    },
  
    series: [{
        name: 'Observations',
        data: [{}]
    }, {
        name: 'Outlier',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [{}]
    }]
  }

let url =  "https://api.jsonbin.io/b/5ca784bba40eb3474aed0f09";

axios.get(url)
  .then (response => {
    options.series[0].data = response.data[0];
    options.series[1].data = response.data[1]
    let chart = new Highcharts.Chart(options);
  })
  
})


