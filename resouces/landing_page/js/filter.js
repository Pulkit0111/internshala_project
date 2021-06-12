
    function openNav() {
      document.getElementById("mySidenav").style.width = "80%";

      document.querySelector(".cont").setAttribute('class',"cont Disble");
      document.querySelector(".overlay").setAttribute('class',"overlay vis");
      
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.querySelector(".cont").setAttribute('class',"cont");
      document.querySelector(".overlay").setAttribute('class',"overlay");
    }


    
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
  document.querySelector('.cont').setAttribute('class','cont Disble');
}

span.onclick = function() {
  modal.style.display = "none";
  document.querySelector('.cont').setAttribute('class','cont');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}