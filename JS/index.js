function menu(){
    var menu = document.getElementsByClassName("nnw-navigation")[0];
    if (menu.style.display == "none"){
        menu.style.display = "grid";
        let nav = document.getElementsByClassName("nnw-nav")[0];
        nav.style.grid = "'. logo logo ham''links links links links'";
    }else{
        menu.style.display = "none";
    }
}