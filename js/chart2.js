
const ctx = document.getElementById('myChartT').getContext('2d');
const myChartT = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['', ''],
        datasets: [{
          enabled: 'none',
            label: 'none',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },

});
