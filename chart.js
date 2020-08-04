let nameInput = document.getElementById('nameInput');
let numberInput = document.getElementById('numberInput');
let submit = document.getElementById('inputButton');

const nameArray = [];
const numberArray = [];

submit.addEventListener('click', createChart);

function createChart(e) {
    e.preventDefault();
    nameArray.push(nameInput.value);
    numberArray.push(numberInput.value);

    if(nameArray.length >= 5 && numberArray.length >= 5) {
        document.getElementById('form').style.display = "none";
        document.getElementById('chart').style.display = "block";
    }

}

var ctx = document.getElementById('myChart');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: nameArray,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'red)',
            borderColor: 'red',
            data: numberArray
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