const sidebar = document.getElementById("sidebar");
const sidebarBtn = document.getElementById("button");

sidebar.addEventListener("click", (e)=> {
    if(e.target.id ==="sidebar"){
        toggle()
    }
});
function toggle(){
    if(sidebar.className == "sidebar")
    {
        sidebar.style.display = "flex"
        sidebar.classList.add("active")
    } else {
        sidebar.style.display = "none"
        sidebar.classList.remove("active")
    }
}