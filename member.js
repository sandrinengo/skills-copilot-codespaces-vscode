function skillsMember(){
    return{
        retrict:"E",
        scope:{},
        controller:function($scope){
            $scope.skills = [
                {name:"C#",level:"Expert"},
                {name:"AngularJS",level:"Expert"},
                {name:"SQL",level:"Expert"},
                {name:"HTML",level:"Expert"},
                {name:"CSS",level:"Expert"},
                {name:"Javascript",level:"Expert"}
            ];
        },
        templateUrl:"views/skills.html"
    }
}