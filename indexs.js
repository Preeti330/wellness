
var NavLinkss=document.getElementById("NavLinkss");
/*display menu by using right 0 and hide after clicking on close icon using  right -200px */
function showmenu(){
    alert("yeah ....you are on path")
    NavLinkss.style.right="0";
}

function hidemenu(){
    NavLinkss.style.right="-200px";
}



var NavLinks2=document.getElementById("NavLinks2");

function ShowMenu(){
    alert("yess, u cliclked on menu ");
  //  NavLinks2.style.display=1
  NavLinks2.style.right="0";
}

function HideMenu(){
    NavLinks2.style.right="-200px";
}





function here(){
    var a = document.getElementsByTagName("h7");
    
   //   document.getElementById("tt").innerHTML = a[0].getAttribute("value");
    alert("can itry ");
     var aa = document.getElementsByTagName("p");
   // var v2=document.getElementsByTagName("p")[0].getAttribute("value");
      alert(aa.length);
    
    alert("getting:");
     // document.getElementById("ttt").innerHTML = aa[0].getAttribute("value");
    var v1=a[0].getAttribute("value");
  //  var v2=aa[0].getAttribute("value");
    alert(v1);
    alert(v2);
    
    
       var testArray=[];
       testArray.push(v1);
       testArray.push(v2);
        sessionStorage.setItem("items", JSON.stringify(testArray));
        alert("done");
    
   // window.location.href = "aa.html"; 
    }

    function winn(anchor) {
      var value1 = anchor.getAttribute('value');  // This give you '2'
      //alert("val:"+value1);
      var html = anchor.innerHTML;  // This give you 'Team 2'
      var html2 = value1.innerHTML;
    // document.getElementById("pick").innerHTML = value;
  
    /*get value using by name 
       alert(document.getElementsByName("pr"));
        var price=document.getElementsByName("pr").value;
  
       alert("price"+price);
  */
     // alert("using session ....");
    //  var testArray = [value1, price, "Shoe"];
  
  
    //get value using tagname 
   /* var a=document.getElementsByTagName(p);
    console("hello");
    alert("helooooooooo");
    console.log(a[0].getAttribute("value")); 
  */
  
  
 /*   var testArray=[];
     testArray.push(value1);
     testArray.push(price);
      sessionStorage.setItem("items", JSON.stringify(testArray));
  */
      //use this if u get any confusion on above 
    sessionStorage.setItem("try",value1);
   //sessionStorage.setItem("tryy",price);
  //   alert("value stored ........");
     
     window.location.href = "aa.html";
  
  }
function abo(){
  alert("Please,Click Above To Select Service");
}