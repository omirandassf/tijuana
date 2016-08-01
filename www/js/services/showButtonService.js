angular.module('ShowButon',[])
.service('ButtonService',function(){
   var service = this;
   var shouldShowButton=false;
   var shouldShowBarButton=false;
   
   service.setshouldShowMyButton=function(show){
       shouldShowButton=show;
   };
   service.getshouldShowMyButton=function(){
     return shouldShowButton;  
   };
   
   service.setshouldShowMyBar=function(show){
      shouldShowBar=show
      
   };
   service.getshouldShowMyBar=function(show){
     return shouldShowBar; 
   };
   
    
});