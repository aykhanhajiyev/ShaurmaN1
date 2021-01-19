function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function setUpCartBtn() {
    var id = 0;
    var goToCartIcon = function ($addTocartBtn) {
        var $cartIcon = $(".my-cart-icon");
        var $image = $('<img width="70px" height="70px" src="' + $addTocartBtn.data("image") + '"/>').css({ "position": "fixed", "z-index": "999" });
        $addTocartBtn.prepend($image);
        var position = $cartIcon.position();
        $image.animate({
            top: position.top,
            left: position.left
        }, {
            duration: 600,
            specialEasing: {
                width: "linear",
                height: "easeOutBounce",
            },
            complete: function () {
                $image.remove();
            }
        });
    }
    $('.my-cart-btn').myCart({
        currencySymbol: '$',
        classCartIcon: 'my-cart-icon',
        classCartBadge: 'my-cart-badge',
        classProductQuantity: 'my-product-quantity',
        classProductRemove: 'my-product-remove',
        classCheckoutCart: 'my-cart-checkout',
        affixCartIcon: true,
        showCheckoutModal: true,
        numberOfDecimals: 2,

        clickOnAddToCart: function ($addTocart) {
            goToCartIcon($addTocart);
            id++;
            if (id % 3 === 0) {
                Swal.fire({
                    title: 'Səbətinizə uyğun digər yeməklərə baxmaq istəyirsiniz?',
                    text: "Pizzalar, Şaurmalar, Menyular və İçkilərimizə baxa bilərsiniz",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Bəli, göstərin!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // we will check basket here
                        let tabs = document.getElementById('tabs');
                        let links = tabs.querySelectorAll('a')
                        let activeLink = tabs.querySelector('.active')
                        activeLink.classList.remove('active')
                        let randomNumber = getRandomInt(links.length)
                        links[randomNumber].click()
                    }
                })
            }

        },
        afterAddOnCart: function (products, totalPrice, totalQuantity) {
            console.log("afterAddOnCart", products, totalPrice, totalQuantity);
        },
        clickOnCartIcon: function ($cartIcon, products, totalPrice, totalQuantity) {
            console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
        },
        checkoutCart: function (products, totalPrice, totalQuantity) {
            var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
            checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
            $.each(products, function () {
                checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
            });
            alert(checkoutString)
            console.log("checking out", products, totalPrice, totalQuantity);
        }
    });
}
$(function () {
    setUpCartBtn()
});