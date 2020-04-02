$(document).ready(function () {
var value=500;
var a=getMapColor(value);
    $("#Dhaka").css({ fill: a });

    $("#DinajpurLabel").text("Dinajpur");
    $("#DinajpurValue").text("500");
   
    $("#Narayanganj").css({ fill: "red" });
    $("#Narsingdi").css({ fill: "red" });
    $("#Gazipur").css({ fill: "red" });
    $("#Feni").css({ fill: "red" });
    $("#Comilla").css({ fill: "red" });
    $("#Brahmanbaria").css({ fill: "red" });
    $("#Chittagong").css({ fill: "red" });
    $("#Chandpur").css({ fill: "red" });
    $("#Munshiganj").css({ fill: "red" });
    $("#Lalmonirhat").css({ fill: "red" });
    $("#Gaibandha").css({ fill: "red" });
    $("#Jamalpur").css({ fill: "red" });
    $("#Bogra").css({ fill: "red" });
    $("#Nilphamari").css({ fill: "red" });
    $("#Rangpur").css({ fill: "red" });
    $("#Mymensingh").css({ fill: "red" });
    $("#Kishoreganj").css({ fill: "red" });
    $("#Tangail").css({ fill: "red" });
    $("#Sirajganj").css({ fill: "red" });
    $("#Pabna").css({ fill: "red" });
    $("#Kushtia").css({ fill: "red" });
    $("#Rajshahi").css({ fill: "red" });
    $("#Jessore").css({ fill: "red" });
    $("#Manikganj").css({ fill: "red" });
    $("#Lakshmipur").css({ fill: "red" });
    $("#Madaripur").css({ fill: "red" });
    $("#Kurigram").css({ fill: "red" });
    $("#Sylhet").css({ fill: "red" });
    $("#Chapainawabganj").css({ fill: "red" });
    $("#Chuadanga").css({ fill: "red" });
    $("#Naogaon").css({ fill: "red" });
    $("#Natore").css({ fill: "red" });
    $("#Thakurgaon").css({ fill: "red" });
    $("#Dinajpur").css({ fill: "red" });
    $("#Joypurhat").css({ fill: "red" });
    $("#Sherpur").css({ fill: "red" });
    $("#Netrokona").css({ fill: "red" });
    $("#Habiganj").css({ fill: "red" });
    $("#Meherpur").css({ fill: "red" });
    $("#Jhenaidah").css({ fill: "red" });
    $("#Magura").css({ fill: "red" });
    $("#Faridpur").css({ fill: "red" });
    $("#Rajbari").css({ fill: "red" });

    //---------------
    $("#CoxsBazar").css({ fill: "red" });

    $("#Noakhali").css({ fill: "red" });    
    $("#Shariatpur").css({ fill: "red" });    
    $("#Narail").css({ fill: "red" });    
    $("#Gopalganj").css({ fill: "red" });    
    $("#Barisal").css({ fill: "red" });    
    $("#Jhalokati").css({ fill: "red" });    
    $("#Pirojpur").css({ fill: "red" });    
    $("#Satkhira").css({ fill: "red" });    
    $("#Moulvibazar").css({ fill: "red" });    
    $("#Sunamganj").css({ fill: "red" });    
    $("#Panchagarh").css({ fill: "red" });    
    $("#Khulna").css({ fill: "red" });    
    $("#Bhola").css({ fill: "red" });    
    $("#Patuakhali").css({ fill: "red" });    
    $("#Bagerhat").css({ fill: "red" });    
    $("#Barguna").css({ fill: "red" });    
    $("#Bandarban").css({ fill: "red" });    
    $("#Rangamati").css({ fill: "red" });    
    $("#Khagrachhari").css({ fill: "red" });    
});

$(document.body).on("click",
    ".selectSvg",
    function () {
        var button = $(this);
        var id = button.attr("data-id");
        alert(id);
    });


    function getMapColor(value){
        var colorCode="#";
        if(value<100){
            colorCode+="5DB200";
        }else if(value>=100 && value<500){
            colorCode+="65D555";
        }
        else if(value>=500 && value<1000){
            colorCode+="92E991";
        }
        else if(value>=1000 && value<1500){
            colorCode+="D9E991";
        }
        else if(value>=1500 && value<2000){
            colorCode+="CBD555";
        }
        else if(value>=2000 && value<2500){
            colorCode+="AAB200";
        }
        else if(value>=2500 && value<3500){
            colorCode+="E99891";
        }
        else if(value>=3500 && value<5500){
            colorCode+="D55B55";
        }
        else if(value>=5500){
            colorCode+="B20800";
        }
        return colorCode;
    }