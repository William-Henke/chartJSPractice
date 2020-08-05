let names = localStorage.getItem('names');
let numbers = localStorage.getItem('numbers');

var ctx = document.getElementById('canvas2');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: names,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'red)',
            borderColor: 'red',
            data: numbers
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
            }],
        },
    },
});