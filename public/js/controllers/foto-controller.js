angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroFotos, $routeParams){
    
    $scope.foto = {}
    $scope.mensagem = ''

    console.log($routeParams.fotoId)

    if($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro)
            $scope.mensagem = "Não foi possivel obter a foto."
        })
    }

    $scope.submeter = function() {
        console.log($scope.foto)
        if ($scope.formulario.$valid) {
            cadastroFotos.cadastrar($scope.foto)
            .then(function(dados){
                $scope.mensagem = dados.mensagem;
                if(dados.inclusao) $scope.foto = {};
            })
            .catch(function(dados){
                $scope.mensagem = dados.mensagem
            })
        }
    }
})
