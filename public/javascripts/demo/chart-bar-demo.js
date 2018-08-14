// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// var steps = 10;
var labels = [];
var values = [];
var max = 0;

function respondCanvas() {
    var c = $('#myBarChart');
    var ctx = c.get(0).getContext("2d");

    var myLineChart = new Chart(ctx, {
                          type: 'horizontalBar',
                          data: {
                            labels: labels,
                            datasets: [{
                              label: "Words Answered",
                              backgroundColor: "rgba(244, 241, 101, 1)",
                              borderColor: "rgba(244, 241, 101, 1)",
                              fontColor: '#fff',
                              data: values,
                            }],
                          },
                          options: {
                            scales: {
                              xAxes: [{
                                gridLines: {
                                  display: false
                                },
                                ticks: {
                                  min: 0,
                                  max: max,
                                  maxTicksLimit: 6,
                                  fontColor: '#fff'
                                }
                              }],
                              yAxes: [{
                                type: 'category',
                                ticks: {
                                  // min: 0,
                                  // max: 10,
                                  // maxTicksLimit: 5,
                                  fontColor: '#fff'
                                },
                                gridLines: {
                                  display: true,
                                  color: 'rgba(255, 255, 255, 0.5)'
                                }
                              }],
                            },
                            legend: {
                              display: false
                            }, 
                            scaleLabel : {
                              lineHeight: 1.2,
                              fontColor: '#fff'
                            }
                          }
                        });
}

var GetChartData = function () {
  var arr = window.location.pathname.split("/");
  $.ajax({
      url: '/api/' + arr[arr.indexOf("users") + 1] + '/chart',
      method: 'GET',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      success: function (d) {
        Object.values(d).forEach(function(obj) {
          values.push(obj.counter);
          labels.push(obj.name);
        });
        console.log("Success!: " + JSON.stringify(d));
        
        max = Math.max.apply(null, values);  
        max = (max > 10) ? (max*2 - (max*2)%10) : max*2;
        
        respondCanvas();
      }
  });
};

$(document).ready(function() {
    // $(window).resize(respondCanvas);
    GetChartData();
});