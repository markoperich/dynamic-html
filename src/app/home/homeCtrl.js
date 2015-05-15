
angular.module( 'ngBoilerplate.home')

.config(config)
.controller( 'HomeCtrl', HomeController)
.factory('generaHtmlFactory', generaHtmlFactory);

function config( $stateProvider ) {
    $stateProvider.state( 'home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data:{ pageTitle: 'Home' },
        cache: false
    });
}

function HomeController( $scope, generaHtmlFactory ) {

    $scope.preguntas = [
        {
            "numero" : "1",
            "pregunta" : "eres hombre?",
            "tipo" : "boolean",
            "respuestas" : {
                "resp_true" : {
                    "observacion_requerida" : "Si",
                    "siguiente" : "2"
                },
                "resp_no" : {
                    "observacion_requerida" : "No",
                    "siguiente" : undefined
                }
            },
            "requerido" : "true"
        },
        {
            "numero" : "2",
            "pregunta" : "te gusta el futbol?",
            "tipo" : "boolean",
            "resp_true" : "Yep",
            "resp_no" : "Nop",
            "requerido" : "false",
            "siguiente" : 3
        },
        {
            "numero" : "3",
            "pregunta" : "Cuantas películas viste esta semana en el cine?",
            "placeholder" : "ingrese la cantidad",
            "tipo" : "integer",
            "requerido" : "true",
            "min" : "0",
            "siguiente" : undefined
        }
    ];


    $scope.click = function(arg) {
        alert('Clicked ' + arg);
    };

    $scope.html = function(pregunta){
        return generaHtmlFactory.generaHtml(pregunta);
    };

}

function generaHtmlFactory() {
    var service = {
        generaHtml: generaHtml
    };
    return service;

    function generaHtml (pregunta){
        var html = "";
        switch (pregunta.tipo) {
            case "boolean" :
                html = generaHtmlBoolean(pregunta);
                break;
                case "integer" :
                    html = generaHtmlInteger(pregunta);
                    break;
                }
                return  html;
            }

            function generaHtmlBoolean(pregunta){
                return '<a ng-click="click(' + pregunta.numero + ')" href="#">Click me</a>';
            }

            function generaHtmlInteger(pregunta){
                var inicio = '<div><input type="number"';
                var fin = '></div>';

                 //name="montoSolicitado" placeholder="Ingrese Monto..." min="10000" max="5000000" class="ui-input-text" ng-model="formData.montoSolicitado" required>
                result = inicio + getHtmlPlaceholder(pregunta) + getHtmlMin(pregunta) + getHtmlMax(pregunta) + fin;

                return result;
            }

            function getHtmlMin(pregunta){
                result = "";
                if (pregunta.min){
                    result = ' min="' + pregunta.min+ '" ';
                }
                return result;
            }

            function getHtmlMax(pregunta){
                result = "";
                if (pregunta.max){
                    result = ' max="' + pregunta.max+ '" ';
                }else {
                    result = " max=''";
                }
                return result;
            }

            function getHtmlPlaceholder(pregunta){
                result = "";
                if (pregunta.placeholder){
                    result = ' placeholder="' + pregunta.placeholder+ '" ';
                }
                return result;
            }
        }
