$(document).ready(function () {
    let rateNumber;
    for (let i = 0; i < 5; i++){
        $($(".rate")[i]).click(function () {
            rateNumber = $($(".rate")[i]).text();
            $($(".rate")[i]).css({ "color": "white", "background-color": "hsl(25, 97%, 53%)" });
        });
    }
    $("#submit").click(function () {
        $(".rateSection").addClass("hidden");
        $(".thanks").removeClass("hidden");
        $("#result").text(`You selected ${rateNumber} out of 5`);
    });
});