// old:  https://api.jsonbin.io/b/5ca7729a0f4c9334823b0459
// new: https://api.jsonbin.io/b/5ca77460a40eb3474aed01ee


 

document.addEventListener('DOMContentLoaded', function () {

  let options = {
    chart: {
        renderTo: 'container',
        type: 'bar'
    },
    series: [{}]
};

let url =  "https://api.jsonbin.io/b/5ca77460a40eb3474aed01ee";

axios.get(url)
  .then (response => {
    options.series[0].data = response.data;
    let chart = new Highcharts.Chart(options);
  })
  
})
