Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'RestHub trend'
    },
    subtitle: {
        text: 'api call'
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
            text: 'Api Call (times)'
        },
        max:15, // 定义Y轴 最大值  
        min:3, // 定义最小值  
        minPadding: 0.1,   
        maxPadding: 0.1,  
        tickInterval: 0.1, // 刻度值  
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.3f} Mil'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    series: [{
        name: '2017',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: data
    }]
});
