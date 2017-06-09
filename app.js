Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'P2P financing'
    },
    subtitle: {
        text: 'balance of account'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'RMB (yuan)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} yuan'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    series: [{
        name: 'return 2017',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [Date.UTC(2017, 6, 22), 25319.76],
            [Date.UTC(2017, 6, 23), 0],
            [Date.UTC(2017, 6, 24), 0],
            [Date.UTC(2017, 6, 25), 0],
            [Date.UTC(2017, 6, 26), 0],
            [Date.UTC(2017, 6, 27), 0],
            [Date.UTC(2017, 6, 28), 0],
            [Date.UTC(2017, 6, 29), 0],
            [Date.UTC(2017, 6, 30), 0],

            [Date.UTC(2017, 7, 1), 0],
            [Date.UTC(2017, 7, 2), 0],
            [Date.UTC(2017, 7, 3), 0],
            [Date.UTC(2017, 7, 4), 0],
            [Date.UTC(2017, 7, 5), 0],
            [Date.UTC(2017, 7, 6), 0],
            [Date.UTC(2017, 7, 7), 0],
            [Date.UTC(2017, 7, 8), 0],
            [Date.UTC(2017, 7, 9), 0],
            [Date.UTC(2017, 7, 10), 0]
        ]
    }]
});
