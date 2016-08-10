angular.module('ShowButon',[])
.service('ButtonService',function(){
   var service = this;
   
   var shouldShowButton=false;
   
   // var shouldShowBarButton=false;

   var shouldShowEditButton=false;
   
   var shouldShowLogInButton=true;

   
   service.setshouldShowMyButton=function(show){
       shouldShowButton=show;
   };
   service.getshouldShowMyButton=function(){
     return shouldShowButton;  
   };
   
   service.setshouldShowEditButton=function(show){
       shouldShowEditButton=show;
   };
   service.getshouldShowEditButton=function(){
     return shouldShowEditButton;  
   };
   
   service.setshouldShowLogInButton=function(mybutton){
      shouldShowLogInButton=mybutton;
      
   };
   service.getshouldShowLogInButton=function(){
    return shouldShowLogInButton; 
   };
   
    
});