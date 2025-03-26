document.addEventListener("DOMContentLoaded", function () {
    // Select the "Order Now" button
    const orderButton = document.querySelector(".btn");
    
    // Add click event listener to the button
    orderButton.addEventListener("click", function () {
        // Show a confirmation message
        alert("Order Placed Successfully! Thank you for ordering from MyOnlineMeal.");
    });
});
