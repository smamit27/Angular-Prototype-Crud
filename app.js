function myController($http) {
        var self = this;
        myController.prototype.self = self;
     //Get Json From Json File//    
    $http.get("assets/cart.json").then((response) =>{
        self.getPortalData =  response.data.productsInCart;
    });
    self.addOpen = true; 

   };
   //Add Functionality //
   
     myController.prototype.addItem = (data) =>{  
         var self = myController.prototype.self;         
         self.getPortalData.push(data);
         self.current = '';
         self.zeroLength = false;

    }
   //Delete Functionality//
   myController.prototype.remove = (data) => {
       var self = myController.prototype.self;
       var index = self.getPortalData.indexOf(data);
       self.getPortalData.splice(index,1);

        if( self.getPortalData.length == 0){
            self.zeroLength = true;
             self.current = {};
             self.editOpen = false;
             self.addOpen = true; 


        }       
    }
    
    //Edit Functionality// 
     myController.prototype.edit = (data) =>{
        var self = myController.prototype.self;
        self.current = data;
        self.editOpen = true;
        self.addOpen = false; 

    }
     //Save Functionality// 
     myController.prototype.save = ()=>{
      var self = myController.prototype.self;
       self.current = {};
       self.addOpen = true;
       self.editOpen = false;
    }
    


angular.module('Example', []).controller('MyController', myController);




// function myController($http) {
//    var self = this;
//     //myController.prototype.self = self;
//      //Get Json From Json File//    
//     $http.get("assets/cart.json").then(function(response){
//         self.getPortalData =  response.data.productsInCart;
//     });
//     this.addOpen = true;

//    };
//    //Add Functionality //
   
//      myController.prototype.addItem = function(data){  
//          //var self = myController.prototype.self;         
//          this.getPortalData.push(data);
//          this.current = {};
//          this.zeroLength = false;

//     }
//    //Delete Functionality//
//    myController.prototype.remove = function (data){
//        //var self = myController.prototype.self;
//        var index = this.getPortalData.indexOf(data);
//        this.getPortalData.splice(index,1);
//         if( this.getPortalData.length == 0){
//             this.zeroLength = true;
//              this.current = {};
//              this.editOpen = false;
//              this.addOpen = true; 


//         }       
//     }
    
//     //Edit Functionality// 
//      myController.prototype.edit = function(data) {
//         //var self = myController.prototype.self;
//         this.current = data;
//         this.editOpen = true;
//         this.addOpen = false; 

//     }
//      //Save Functionality// 
//      myController.prototype.save = function(){
//       //var self = myController.prototype.self;
//        this.current = {};
//        this.addOpen = true;
//        this.editOpen = false;
//     }
    


// angular.module('Example', []).controller('MyController', myController);