let nameInput = document.getElementById('nameInput');
let numberInput = document.getElementById('numberInput');
let submit = document.getElementById('inputButton');
let flowButton = document.getElementById('flowButton');

const nameArray = [];
const numberArray = [];

submit.addEventListener('click', createChart);
flowButton.addEventListener('click', nextPage);

function createChart(e) {
    e.preventDefault();
    nameArray.push(nameInput.value);
    numberArray.push(numberInput.value);

    if(nameArray.length >= 5 && numberArray.length >= 5) {
        document.getElementById('form').style.display = "none";
        document.getElementById('chart').style.display = "block";
        document.getElementById('flowButton').style.display = "block";
        localStorage.setItem('names', JSON.stringify(nameArray));
        localStorage.setItem('numbers', JSON.stringify(numberArray));
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

function nextPage() {
    window.location.href = "chartLocalStorage.html";
}