document.addEventListener("DOMContentLoaded", function() {
    let cart = [];

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.qty += 1;
            existingItem.total = existingItem.price * existingItem.qty;
        } else {
            cart.push({
                name: name,
                price: price,
                qty: 1,
                total: price
            });
        }
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        cart.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td>${item.total}</td>
                <td><button data-name="${item.name}" class="remove-btn">Remove</button></td>
            `;
            tbody.appendChild(row);
        });

        const totalDiv = document.querySelector(".Total");
        const totalAmount = cart.reduce((total, item) => total + item.total, 0);
        totalDiv.textContent = `Total: ${totalAmount}`;

        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener('click', function() {
                const name = this.getAttribute('data-name');
                removeFromCart(name);
            });
        });
    }

    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCartDisplay();
    }

    const buttons = this.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            addToCart(name, price);
        });
    }
});