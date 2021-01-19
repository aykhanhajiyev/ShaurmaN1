
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("header");
var logo = $(".navbar-brand img");
var sticky = navbar.offsetTop;
function myFunction() {

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky-header")
        logo.addClass('sticky-logo')
    } else {
        navbar.classList.remove("sticky-header");
        logo.removeClass('sticky-logo')
    }
}


function loadMoreAPI() {
    let singleItem = "<div class='col-xl-3 mt-3 col-lg-3 col-md-4 text-center pt-20'><div class='menu-img'><a href='http://themes.templatescoder.com/pizzon/html/demo/1-0/shop-detail.html'><img src='http://themes.templatescoder.com/pizzon/html/demo/1-0/images/menu-1.png' alt='menu' class='menu-image'><\/a><\/div><a href='http://themes.templatescoder.com/pizzon/html/demo/1-0/shop-detail.html' class='menu-title text-uppercase'>margherita pizza</a><p class='menu-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<\/p><span class='menu-price'>20.50 AZN<\/span><button class='btn btn-green btn-xs my-cart-btn' data-id='2' data-name='Fungi Pizza' data-summary='Fungi Pizza' data-price='8.70' data-quantity='1' data-image='images/p-4.png'>Səbətə at<\/button><\/div>";
    var multipleItems = "<div class='row'>"
    for (let i = 0; i < 4; i++) {
        multipleItems += singleItem
    }
    multipleItems += "</div>";
    var content = document.getElementById("load-more-content").innerHTML;
    content += multipleItems
    console.log(multipleItems)
    document.getElementById("load-more-content").innerHTML = content
}