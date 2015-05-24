directive.directive('chart', function(){
    return{
        restrict: 'E',
        link: function(scope, elem, attrs){
            
            var chart = null,
                options = {
                xaxis: {
                    ticks:[[0,'Daft'],[1,'Punk']]
                },
                grid: {
                  labelMargin: 10,
                  backgroundColor: '#e2e6e9',
                  color: '#ffffff',
                  borderColor: null
                }
              };
                    
            var data = scope[attrs.ngModel];            
            
            // If the data changes somehow, update it in the chart
            scope.$watch('data', function(v){
                 if(!chart){
                    chart = $.plot(elem, v , options);
                    elem.show();
                }else{
                    chart.setData(v);
                    chart.setupGrid();
                    chart.draw();
                }
            });
        }
    };
});