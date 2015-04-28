angular.module( 'dynamic', [])

.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(pregunta) {
        var html = scope.html(pregunta);
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});
