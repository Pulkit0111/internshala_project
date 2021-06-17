var btn = document.getElementById("registerbtn");
btn.addEventListener('mouseover', changeIcon);
btn.addEventListener('mouseout', DownIcon)
function changeIcon() {
    btn.innerHTML = `Login/Register  <i class="is_icon_header ic-24-filled-up-arrow"></i>`
}
function DownIcon() {
    btn.innerHTML = `Login/Register  <i class="is_icon_header ic-24-filled-down-arrow"></i>`
}