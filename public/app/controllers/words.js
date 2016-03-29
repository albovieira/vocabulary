app.controller('WordsController', function ($scope,$http,ngNotify,HttpService,API_URL) {

    $scope.data = {};

    var listWords = function(word){
        var callback = function(data){
            var knowledge = data['know'];
            $scope.knowWords = knowledge['K'];
            $scope.almostWords = knowledge['A'];
            $scope.dontWords = knowledge['N'];
        };

        if(word){
            HttpService.getAjax('http://localhost:8000/api/vocabulary/words/'+word,callback);
        }else{
            HttpService.getAjax('http://localhost:8000/api/vocabulary/words',callback);
        }
    };
    listWords();

    $scope.showModal = false;
    $scope.toggleModal = function(param){
        $scope.showModal = !$scope.showModal;
        if(param != undefined){
            $scope.data.id = param.id;
            $scope.data.word = param.word;
            $scope.data.status = param.status;
            $scope.data.meanning = param.meanning;
            $scope.data.id_tipo = param.typeId;
        }
    };

    $scope.submit = function(){
        var callback = function(json){
           if(json.success == true){
               listWords();
               ngNotify.set('Operacao realizada com sucesso.');
               $scope.showModal = false;
           }else{
               ngNotify.set('Erro ao realizar a operação.');
           }
        };

        var url = 'http://localhost:8000/api/vocabulary/words/';
        if($scope.data.id){
            HttpService.postAjax(url + $scope.data.id,$scope.data,callback);
         }else{
            HttpService.postAjax(url,$scope.data,callback);
        }

    };

    $scope.autocompleteWords = function(){
        console.log($scope.searchText);
        listWords($scope.searchText);
        //HttpService.getAjax('http://localhost:8000/api/vocabulary/words',callback);
    };

    /* $scope.getLocation = function(val) {
        return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: val,
                sensor: false
            }
        }).then(function(response){
            return response.data.results.map(function(item){
                return item.formatted_address;
            });
        });
    };*/

});