document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCart() {
        cartItemsContainer.innerHTML = "";
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>No items in cart.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("flex", "justify-between", "bg-gray-200", "p-4", "rounded", "mb-2");
            itemElement.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button class="remove-item bg-red-500 text-white px-2 py-1 rounded" data-index="${index}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            displayCart();
        }
    });

    displayCart();
});
