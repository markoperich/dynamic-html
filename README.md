Implementación de directiva de generación de HTML dinámico

    <div ng-repeat="item in items">
        <div dynamic="item"></div>
    </div>

Invoca $scope.html(item) y reemplaza el contenido del html.

El html generado es generado y compilado por angular, lo que permite usar bindings del tipo {{elemento}}.
