
var nu = 0;

function U() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Continue_Watching').style.marginLeft = nu;
   
}


function l() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Continue_Watching').style.marginLeft = nu;
}



function Up() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Trending_now').style.marginLeft = nu;
}


function lo() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Trending_now').style.marginLeft = nu;
}


function UP() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Sci-Fi').style.marginLeft = nu;
}


function lO() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Sci-Fi').style.marginLeft = nu;
}


function Upp() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Animation').style.marginLeft = nu;
}


function low() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Animation').style.marginLeft = nu;
}

function UpP() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Kids').style.marginLeft = nu;
}


function loW() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Kids').style.marginLeft = nu;
}



function Uu() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Continue').style.marginLeft = nu;
}


function lOw() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Continue').style.marginLeft = nu;
}


function UU() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Cont').style.marginLeft = nu;
}


function lOW() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Cont').style.marginLeft = nu;
}

function UUu() {
    nu=nu-300;
    if(nu<-1500)
    nu=0;
    document.getElementById('Co').style.marginLeft = nu;
}


function LOw() {
    nu=nu+300;
    if(nu>0)
    nu=0;
    document.getElementById('Co').style.marginLeft = nu;
}


function search(){

    document.getElementById('Lupa').style.left = '1.5%';

    document.getElementById('search').style.display = 'block';
    document.getElementById('search').style.height = '100%';
    document.getElementById('search').style.width = '86.5%';
    document.getElementById('search').style.position = 'absolute';
    document.getElementById('search').style.right = '0';

    document.getElementById('div-search').style.border = 'solid';
    document.getElementById('div-search').style.borderLeftWidth = '1';
    document.getElementById('div-search').style.borderTopWidth = '1';
    document.getElementById('div-search').style.borderBottomWidth = '1';
    document.getElementById('div-search').style.borderRightWidth = '1';
    document.getElementById('div-search').style.borderColor = 'White';
}
