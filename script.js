//tooltip for card
$(document).ready(function(){
  $('#one').tooltip();
})
// end of tooltip for cards
// pie chart
var chart = AmCharts.makeChart("pieChart", {
    "type": "pie",
    "startDuration": 2,
    "theme": "light",
    "marginTop":0,
    "marginLeft": 0,
    "addClassNames": true,
    "responsive": {
        "enabled": true
      },
    // "legend":{
    //      "position":"right",
    //   "marginRight":100,
    //   "autoMargins":false
    // },
    "innerRadius": "0%",
    "defs": {
      "filter": [{
        "id": "shadow",
        "width": "200%",
        "height": "200%",
        "feOffset": {
          "result": "offOut",
          "in": "SourceAlpha",
          "dx": 0,
          "dy": 0
        },
        "feGaussianBlur": {
          "result": "blurOut",
          "in": "offOut",
          "stdDeviation": 5
        },
        "feBlend": {
          "in": "SourceGraphic",
          "in2": "blurOut",
          "mode": "normal"
        }
      }]
    },
    "dataProvider": [{
      "defect": "Category 1",
      "count": 501
    }, {
      "defect": "Category 2",
      "count": 301
    }, {
      "defect": "Category 3",
      "count": 201
    }, {
      "defect": "Category 4",
      "count": 165
    }, {
      "defect": "Category 5",
      "count": 139
    }, {
      "defect": "Category 6",
      "count": 128
    }],
    "valueField": "count",
    "titleField": "defect",
    "labelsEnabled": true,
    // "export": {
    //   "enabled": true
    // }
  });
  
  //chart.addListener("init", handleInit);
  
  chart.addListener("rollOverSlice", function(e) {
    handleRollOver(e);
  });
  
  function handleInit(){
    chart.legend.addListener("rollOverItem", handleRollOver);
  }
  
  function handleRollOver(e){
    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
  }
  //chart.logo.disabled = true;
  //chart.logo.height =-15;
// end of piechart
function remove(){
    $('.amcharts-chart-div a').empty();
}
// bar chart
/**
 * Plugin to sort columns based on value
 * Will need `sortColumns` set as true in chart config to work
 */
AmCharts.addInitHandler(function(charts) {

    if (charts.sortColumns !== true)
      return;
  
    /**
     * Iterate through data
     */
    for (var i = 0; i < charts.dataProvider.length; i++) {
  
      // Collect all values for all graphs in this data point
      var row = charts.dataProvider[i];
      var values = [];
      for (var g = 0; g < charts.graphs.length; g++) {
        var graph = charts.graphs[g];
        values.push({
          "value": row[graph.valueField],
          "graph": graph
        });
      }
  
      // Sort by value
      values.sort(function(a, b) {
        return a.value - b.value;
      });
      
      // Apply `columnIndexField`
      for(var x = 0; x < values.length; x++) {
        var graph = values[x].graph;
        graph.columnIndexField = graph.valueField + "_index";
        row[graph.columnIndexField] = x;
      }
    }
  
  }, ["serial"]);
  
  var charts = AmCharts.makeChart("barChart", {
    "type": "serial",
    "theme": "light",
    //"sortColumns": true,
    "startDuration": 2,
    "legend": {
      "horizontalGap": 10,
      "maxColumns": 1,
      "position": "right",
      "useGraphSettings": true,
      "markerSize": 10
    },
    "dataProvider": [{
      "defect": "Category 1",
      "europe": 15,
      "namerica": 25,
      "asia": 21,
      "lamerica": 03,
      "meast": 12,
      "africa": 0.8
    }, {
      "defect": "Category 2",
      "europe": 26,
      "namerica": 27,
      "asia": 21,
      "lamerica": 23,
      "meast": 33,
      "africa": 11
    }, {
        "defect": "Category 3",
        "europe": 26,
        "namerica": 27,
        "asia": 21,
        "lamerica": 23,
        "meast": 33,
        "africa": 11
      },{
        "defect": "Category 4",
        "europe": 26,
        "namerica": 27,
        "asia": 21,
        "lamerica": 23,
        "meast": 33,
        "africa": 11
      },{
        "defect": "Category 5",
        "europe": 26,
        "namerica": 27,
        "asia": 21,
        "lamerica": 23,
        "meast": 33,
        "africa": 11
      },{
      "defect": "Category 6",
      "europe": 2.8,
      "namerica": 11,
      "asia": 1.4,
      "lamerica": 13,
      "meast": 09,
      "africa": 21
    }],
    "valueAxes": [{
      "axisAlpha": 0.3,
      "gridAlpha": 0
    }],
    "graphs": [{
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Australia",
      "type": "column",
      "color": "#000000",
      "valueField": "europe"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Singapore",
      "type": "column",
      "color": "#000000",
      "valueField": "namerica"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Malaysia",
      "type": "column",
      "color": "#000000",
      "valueField": "asia"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "HongKong",
      "type": "column",
      "color": "#000000",
      "valueField": "lamerica"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "Japan",
      "type": "column",
      "color": "#000000",
      "valueField": "meast"
    }, {
      "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
      "fillAlphas": 0.8,
      "labelText": "[[value]]",
      "lineAlpha": 0.3,
      "title": "India",
      "type": "column",
      "color": "#000000",
      "valueField": "africa"
    }],
    "categoryField": "defect",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "position": "left"
    }
  
  });
// end of barchart
// line chart
var chartl = AmCharts.makeChart("lineChart", {
    "type": "serial",
    "startDuration": 2,
    "theme": "light",
    "marginTop":0,
    "marginRight": 40,
    "dataProvider": [{
        "week": "1",
        "value": 37,
        "value2": 5,
        "value3": 53,
        "value4": 56,
        "value5": 44,
        "value6": 29
    }, {
        "week": "2",
        "value": 88,
        "value2": 92,
        "value3": 85,
        "value4": 79,
        "value5": 95,
        "value6": 105
    },  {
        "week": "3",
        "value": 8,
        "value2": 42,
        "value3": 25,
        "value4": 35,
        "value5": 53,
        "value6": 57
    }, {
        "week": "4",
        "value": 28,
        "value2": 34,
        "value3": 30,
        "value4": 16,
        "value5": 20,
        "value6": 15
    }, {
        "week": "5",
        "value": 68,
        "value2": 20,
        "value3": 40,
        "value4": 13,
        "value5": 25,
        "value6": 35
    },{
        "week": "6",
        "value": 73,
        "value2": 32,
        "value3": 55,
        "value4": 56,
        "value5": 95,
        "value6": 65
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
    }],
    "graphs": [{
        "id":"g1",
        "balloonText": "Category 1<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,         
        "lineColor": "#ff0000",
        "lineThickness": 2,
        "negativeLineColor": "#ff0000",
        "type": "smoothedLine",
        "valueField": "value"
    },{
        "id":"g2",
        "balloonText": "Category 2<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,         
        "lineColor": "#6699ff",
        "lineThickness": 2,
        "negativeLineColor": "#6699ff",
        "type": "smoothedLine",
        "valueField": "value2"
    },{
        "id":"g3",
        "balloonText": "Category 3<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,         
        "lineColor": "#ffff00",
        "lineThickness": 2,
        "negativeLineColor": "#ffff00",
        "type": "smoothedLine",
        "valueField": "value3"
    },{
        "id":"g4",
        "balloonText": "Category 4<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,         
        "lineColor": "#00ff00",
        "lineThickness": 2,
        "negativeLineColor": "#00ff00",
        "type": "smoothedLine",
        "valueField": "value4"
    },{
        "id":"g5",
        "balloonText": "Category 5<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,         
        "lineColor": "#f633ff",
        "lineThickness": 2,
        "negativeLineColor": "#f633ff",
        "type": "smoothedLine",
        "valueField": "value5"
    },{
        "id":"g6",
        "balloonText": "Category 6<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,         
        "lineColor": "#041775",
        "lineThickness": 2,
        "negativeLineColor": "#041775",
        "type": "smoothedLine",
        "valueField": "value6"
    }],
    "chartScrollbar": {
        "graph":"g1",
        "gridAlpha":0,
        "color":"#888888",
        "scrollbarHeight":50,
        "backgroundAlpha":0,
        "selectedBackgroundAlpha":0.1,
        "selectedBackgroundColor":"#888888",
        "graphFillAlpha":0,
        "autoGridCount":true,
        "selectedGraphFillAlpha":0,
        "graphLineAlpha":0.2,
        "graphLineColor":"#c2c2c2",
        "selectedGraphLineColor":"#888888",
        "selectedGraphLineAlpha":1

    },
    "chartCursor": {
        //"categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "valueLineEnabled":true,
        "valueLineBalloonEnabled":true,
        "valueLineAlpha":0.5,
        "fullWidth":true
    },
    //"dataDateFormat": "YYYY",
    "categoryField": "week",
    "categoryAxis": {
        //"minPeriod": "YYYY",
        //"parseDates": true,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    // "export": {
    //     "enabled": true
    // }
});

chartl.addListener("rendered", zoomChart);
if(chartl.zoomChart){
	chartl.zoomChart();
}

function zoomChart(){
    chartl.zoomToIndexes(Math.round(chartl.dataProvider.length * 0.4), Math.round(chartl.dataProvider.length * 0.55));
}
// end of line chart