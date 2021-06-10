var btn = document.getElementById("registerbtn");
btn.addEventListener('mouseover',changeIcon);
btn.addEventListener('mouseout',DownIcon)
function changeIcon()
{
    btn.innerHTML=`Register  <i class="is_icon_header ic-24-filled-up-arrow"></i>`
}
function DownIcon()
{
    btn.innerHTML=`Register  <i class="is_icon_header ic-24-filled-down-arrow"></i>`
}

/* intrenshala page slide down*/
var elem = document.getElementById("toggle");
var elem2 = document.getElementById("content_open_button");
elem2.addEventListener('click', slide);
function slide()
{
    if (elem.style.display === "none") {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
}