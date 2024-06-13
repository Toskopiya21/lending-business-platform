window.addEventListener('resize', function () {
    var btnPrivacy = document.getElementById("footer-privacy-policy");
    var btnSel = document.getElementById("footer-tou-seller");
    var btnSelCust = document.getElementById("footer-tou-sellerCustomers");
    var groupBtns = document.getElementById("footer-group");

    var width = window.innerWidth;
    if (width <= 1200) {
        btnPrivacy.innerText = "Privacy Policy"
        btnSel.innerText = "Terms Of Use - Seller"
        btnSelCust.innerText = "Terms of Use - Sellers & Customers"
        groupBtns.style.display = "none"
    }
    else {
        btnPrivacy.innerText = ""
        btnSel.innerText = ""
        btnSelCust.innerText = ""
        groupBtns.style.display = "block"
    }
});