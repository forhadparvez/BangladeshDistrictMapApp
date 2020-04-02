$(document).ready(function () {
    $("#dhaka").css({ fill: "red" });
});

$(document.body).on("click",
    "#dhaka",
    function () {
        alert("hi");
    });
