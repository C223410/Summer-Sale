let f = false;
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".card");
    const productList = document.getElementById("p-list");
    const tPrice = document.getElementById("t-price");
    const dPrice = document.getElementById("d-price");
    const fPrice = document.getElementById("f-price");


    const couponInput = document.querySelector("#SELL200");
    const applyButton = document.querySelector("#Apply");
    applyButton.addEventListener("click", function () {
        const couponCode = couponInput.value.trim();
        if (couponCode === "SELL200")
            f = true,
                alert("Coupon applied successfully!");
        else
            f = false,
                alert("Invalid coupon code!");

        updatePrices();
    });



    productCards.forEach((card) => {
        card.addEventListener("click", function () {
            const productName = card.querySelector(".card-title").textContent;
            const productPrice = parseFloat(card.querySelector("span").textContent);

            const productItem = document.createElement("div");
            productItem.classList.add("flex", "justify-between", "py-2");
            productItem.innerHTML = `
                <span>${productName}</span>
                <span>${productPrice.toFixed(2)} TK</span>
            `;

            productList.appendChild(productItem);
            totalPrice += productPrice;
            updatePrices();
        });
    });


    function updatePrices() {
        tPrice.textContent = totalPrice.toFixed(2);
        if (f) {
            const discount = totalPrice * 0.20;
            const finalPrice = totalPrice - discount;

            dPrice.textContent = discount.toFixed(2);
            fPrice.textContent = finalPrice.toFixed(2);
        } else {
            dPrice.textContent = "0.00";
            fPrice.textContent = totalPrice.toFixed(2);
        }
    }

    const makePurchaseButton = document.getElementById("makePurchase");
    const successAlert = document.getElementById("successAlert");
    const goHomeButton = document.getElementById("goHomeButton");

    makePurchaseButton.addEventListener("click", () => {
        successAlert.classList.remove("hidden");
    });

    goHomeButton.addEventListener("click", () => {
        location.reload();
    });
});
