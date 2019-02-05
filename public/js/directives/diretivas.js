angular.module('diretivas',[])
.directive('meuPainel', function() {
    var ddo = {}

    ddo.restric = "AE"
    ddo.scope = {
        titulo: '@'
    }
    
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html' 
        
    return ddo
})
.directive('minhaFoto', function(){
    var ddo = {}

    ddo.restric = "AE"
    ddo.scope = {
        url: '@',
        titulo: '@'
    }

    ddo.templateUrl = 'js/directives/minha-foto.html'

    return ddo

})
.directive('botaoDanger', function(){

    var ddo= {}
    ddo.restric = "E"

    ddo.scope ={
        nome: '@',
        acao: '&'
    }

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{ nome }}</button>'
    return ddo
})
.directive('sysFocus', function(){
    var ddo = {}
    ddo.restric = 'A'

    ddo.link = function(scope, element){
        
        scope.$on('fotoCadastrada', function(){
            element[0].focus()
        })
    }

    return ddo
})
.directive('meusTitulos',function(){
    var ddo = {}
    ddo.restric = 'E'
    ddo.template = '<ul><li ng-repeat="titulo in titulos">{{ titulo }}</li></ul>'

    ddo.controller = function($scope, recursoFoto){
        recursoFoto.query(function(fotos){
            $scope.titulos = fotos.map(function(fotos){
                return fotos.titulo
            })
        })
    }

    return ddo
})