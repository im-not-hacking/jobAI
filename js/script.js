function addMargins(){
    var mainDivs = document.getElementById('rightSide');
    var divsChildren = mainDivs.children;
    for(var i=0; i<divsChildren.length; i++){
        var divChild = divsChildren[i];
        let baseMargin = 20 - (i*6.5);
        divChild.style.marginLeft = baseMargin.toString()+"%";
    }
}
