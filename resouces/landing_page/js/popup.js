
    /*Title: Cool Modal Popup Sign In/Out Form*/

$(function() {
  //defining all needed variables
  var $overlay = $('.overlay');
  var $mainPopUp = $('.main-popup')
  var $signIn = $('#sign-in');
  var $register = $('#register');
  var $formSignIn = $('form.sign-in');
  var $formRegister = $('form.register');
  var $cont = $('.cont');

  $('#loginBtn').on('click', function(){
    $overlay.addClass('visible');
    $mainPopUp.addClass('visible');
    $cont.addClass('Disble');
    $signIn.addClass('active');
    $register.removeClass('active');
    $formRegister.removeClass('move-left');
    $formSignIn.removeClass('move-left');
  });
  $overlay.on('click', function(){
    $(this).removeClass('visible');
    $mainPopUp.removeClass('visible');
    $cont.removeClass('Disble');
  });
  $('#popup-close-button a').on('click', function(e){
    e.preventDefault();
    $cont.removeClass('Disble');
    $overlay.removeClass('visible');
    $mainPopUp.removeClass('visible');
  });
  
  $signIn.on('click', function(){
    $signIn.addClass('active');
    $register.removeClass('active');
    $formSignIn.removeClass('move-left');
    $formRegister.removeClass('move-left');
  });
  
  $register.on('click', function(){
    $signIn.removeClass('active');
    $register.addClass('active');
    $formSignIn.addClass('move-left');
    $formRegister.addClass('move-left');
  });
  
  $('input').on('submit', function(e){
    e.preventDefault(); //used to prevent submission of form...remove for real use
  });
});





var arr1 = JSON.parse(localStorage.getItem('emplogin'));
    var empButton = document.getElementById("submit2");
    empButton.addEventListener('click',addFunction2);
  
    function addFunction2()
    {
      
      var empForm2 = document.getElementById("emplogin");
      var email = empForm2.querySelector('input[id="log_email"]');
      var password = empForm2.querySelector('input[id="log_password"]');
      
      
      
      var sm = empForm2.querySelectorAll('input');
      var value = true;
      sm.forEach(function(el)
      {
        var nu = el;
  
        ssp = document.getElementById(nu.id);
        var parent =ssp.parentElement;
        var p = document.createElement('p');
        if(ssp.value == "")
          {
            ssp.style.border="1px solid red";
            p.setAttribute('class','help-block');
            var sn = parent.querySelector('p');
            if(sn == null)
            {
              
              p.innerText="This fiels is requirded";
              p.style.color="red";
              p.style.marginLeft="13px";
              p.style.fontSize="12px";
              parent.append(p);
              
              
            }
            value = false;
            
          }
          else
          {
                  var emp = ssp.parentElement.querySelector('p');
                  if(emp)
                  {
                    emp.remove();
                  }
                  ssp.style.border="1px solid green";   
                  
          }
  
  
      });
  
      if(value)
      {
         var isValidate = false;
          var num = arr1.forEach(function(va)
          {
               if(va.email == email.value && va.Password == password.value)
               {
                  isValidate = true;
                  localStorage.setItem('login', JSON.stringify({ email: email.value, name: va.name })); 
                  setTimeout(function () {
                    window.location.href="./newpost.html";
                  }, 2000);
                  
                }
                
          });
          var main = document.getElementById("main");
          let p = document.createElement('p');
          if(isValidate)
          {
            p.style.textAlign="center";
            p.style.paddingTop="20px";
            p.style.color="green";
            p.innerHTML="<b>You have successfully Login :)</b>";
          }
          else
          {
            p.style.textAlign="center";
            p.style.paddingTop="20px";
            p.style.color="red";
            p.innerHTML="<b>Invalid Credentials (:</b>"; 
          }
         main.insertBefore(p,main.childNodes[0]);
        
         setTimeout(function() {
          main.querySelector('p').remove();
         }, 5000);
        
      }
    }










//student login






    


var arr2 = JSON.parse(localStorage.getItem('students'));
var empButton = document.getElementById("submit3");
empButton.addEventListener('click',addFunction3);

function addFunction3()
{
  
  var empForm2 = document.getElementById("stuId");
  var email = empForm2.querySelector('input[id="email"]');
  var password = empForm2.querySelector('input[id="password"]');
  
  
  
  var sm = empForm2.querySelectorAll('input');
  var value = true;
  sm.forEach(function(el)
  {
    var nu = el;

    ssp = document.getElementById(nu.id);
    var parent =ssp.parentElement;
    var p = document.createElement('span');
    if(ssp.value == "")
      {
        ssp.style.border="1px solid red";
        p.setAttribute('class','help-block');
        var sn = parent.querySelector('span');
        if(sn == null)
        {
          
          p.innerText="This fiels is requirded";
          p.style.color="red";
          p.style.marginLeft="13px";
          p.style.fontSize="12px";
          parent.append(p);
          
          
        }
        value = false;
        
      }
      else
      {
              var emp = ssp.parentElement.querySelector('span');
              if(emp)
              {
                emp.remove();
              }
              ssp.style.border="1px solid green";   
              
      }


  });

  if(value)
  {
     var isValidate = false;
      var num = arr2.forEach(function(va)
      {
        console.log();
           if(va.email == email.value && va.password == password.value)
           {
              isValidate = true;
              localStorage.setItem('stu_login',JSON.stringify({email:email.value,name:va.firstName+" "+va.lastName}))
             
              
            }
            
      });
      var main = document.getElementById("main2");
      let p = document.createElement('p');
      if(isValidate)
      {
        p.style.textAlign="center";
        p.style.paddingTop="20px";
        p.style.color="green";
        p.innerHTML = "<b>You have successfully Login :)</b>";   
      }
      else
      {
        p.style.textAlign="center";
        p.style.paddingTop="20px";
        p.style.color="red";
        p.innerHTML="<b>Invalid Credentials (:</b>"; 
      }
     main.insertBefore(p,main.childNodes[0]);
    
     setTimeout(function() {
       main.querySelector('p').remove();
       location.reload();
     }, 5000);
    
  }
}


function removeNode()
{
  
  var data = localStorage.getItem('stu_login');
  var sts = "";
  if (localStorage.getItem('stu_login') != null)
  {
    data = localStorage.getItem('stu_login');
    sts="Student"
  }
  else if (localStorage.getItem('login')!=null)
  {
    data = localStorage.getItem('login');
    sts="Employer"
  }
  else
  {
    data = null;
  }
  if (data != null)
  {
      var list = document.querySelector(".btn");
      if (list.hasChildNodes())
      {
        list.removeChild(list.childNodes[7]);
        list.removeChild(list.childNodes[8]);
      }
    
    data = JSON.parse(data);

    var div = document.createElement('div');
    div.setAttribute('class', 'dropdown');
    var divs = document.createElement('div');
    var div2 = document.createElement('button');
    div2.setAttribute('class', 'btnRegister');
    div2.setAttribute('id','registerbtn');
    div2.innerText = `${data.name}`;
    var div3 = document.createElement('div');
    div3.setAttribute('class', 'dropdown-content');
    div3.style.minWidth = "200px";
    var nav = document.createElement('nav');
    nav.innerHTML = `<div><a href="#"> Name : ${data.name}</a></div>
    <div><a href="#">email : ${data.email}</a></div>
    <div><a href="#">Type : ${sts} (online)</a></div>
    <div><a href="javascript:void(0)" onclick=logout()>Logout</a></div>`;

    div3.append(nav);
    divs.append(div2, div3);
    div.append(divs);
    list.append(div);
  }
}

function logout()
{
  
  localStorage.removeItem("stu_login");
  localStorage.removeItem("login");
  location.reload();
  
}

removeNode();