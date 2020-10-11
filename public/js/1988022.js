/*jshint esversion: 6*/

$(document).ready(() => {
    $(".add-to-cart").on("click", addToCart);
});

function addToCart() {
    const id = $(this).data("id");
    const quantity = $("#sst") ? $("#sst").val() : 1;
    $.ajax({
        url: "/cart",
        type: "POST",
        data: {
            id,
            quantity
        },
        success: (result) => $("#cart-badge").html(result.totalQuantity)
    });
}

function updateCart(id, quantity) {
    if (quantity == 0) {
        removeCartItem(id);
    } else {
        updateCartItem(id, quantity);
    }
}

function removeCartItem(id) {
    $.ajax({
        url: "/cart",
        type: "DELETE",
        data: {
            id
        },
        success: (result) => {
            $("#cart-badge").html(result.totalQuantity);
            $("#totalPrice").html("$" + result.totalPrice);
            if (result.totalQuantity > 0) {
                $(`#item${id}`).remove();
            } else {
                $("#cart-body").html("<div class='alert alert-info text-center'>Your cart is empty.</div>");
            }
        }
    });
}

function updateCartItem(id, quantity) {
    $.ajax({
        url: "/cart",
        type: "PUT",
        data: {
            id,
            quantity
        },
        success: (result) => {
            $("#cart-badge").html(result.totalQuantity);
            $("#totalPrice").html("$" + result.totalPrice);
            $(`#price${id}`).html("$" + result.item.price);
        }
    });
}

function clearCart() {
    if (confirm("Do you really want to delete all items in your card?")) {
        $.ajax({
            url: "/cart/all",
            type: "DELETE",
            success: (result) => {
                $("#cart-badge").html("0");
                $("#cart-body").html("<div class='alert alert-info text-center'>Your cart is empty.</div>");
            }
        });
    }
}