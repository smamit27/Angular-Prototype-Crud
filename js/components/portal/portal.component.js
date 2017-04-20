angular.module("portalApp").component("portalAppComp",{
    
    templateUrl:"js/components/portal/portal.template.html",
    controller:
    
    function($http,$scope){
    var self = this;
    //Get Json From Json File//    
    $http.get("assets/cart.json").then((response) =>{
        self.getPortalData =  response.data.productsInCart;
    });
    this.addOpen = true; 
     //Add Functionality //
     this.addItem = (data) =>{
         this.getPortalData.push(data);
         $scope.current = {};
         this.zeroLength = false;

    }
    
    //Delete Functionality//
    this.remove = (data) => {
        let index = this.getPortalData.indexOf(data);
        this.getPortalData.splice(index,1);

        if( self.getPortalData.length == 0){
            this.zeroLength = true;
             $scope.current = {};
             this.editOpen = false;
            this.addOpen = true; 


        }       
    }
    
    //Edit Functionality// 
     this.edit = (data) =>{
        $scope.current = data;
        this.editOpen = true;
        this.addOpen = false; 

    }

    //Save Functionality// 
    this.save = ()=>{
       $scope.current = {};
       this.addOpen = true;
       this.editOpen = false;
    };
    

    }
     
    

});

