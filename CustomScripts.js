var totalLossesInJourney = 0;
var stepNumber = 1;
var baseDealAmount = $("#baseDealAmount").val();
var profitPercent = $("#profitPercent").val();
var nextDealAmount = parseFloat(baseDealAmount);
var profitPercentInt = parseFloat(profitPercent);
var previousDealResult = "W";
var WC = 0;
var LC = 0;
var totalProfit = 0;
$(".nextDealAmount").html(nextDealAmount);
function nextStep(id){
    var WL = id;
    if (WL=="W") {
        WC++;
        totalProfit = totalProfit + nextDealAmount * profitPercentInt / 100;
        if(stepNumber < 3){
            previousDealResult = "W";
            stepNumber = 1;
            totalLossesInJourney = 0;
            nextDealAmount = parseFloat(baseDealAmount);
        }
        else if(previousDealResult == "W"){
            stepNumber = 1;
            totalLossesInJourney = 0;
            nextDealAmount = parseFloat(baseDealAmount);
        }
        else{
            previousDealResult = "W";
            stepNumber++;
            totalLossesInJourney = totalLossesInJourney - parseFloat(baseDealAmount);
            nextDealAmount = (totalLossesInJourney + parseFloat(baseDealAmount))*100/profitPercentInt;
        }
    }
    else{
        LC++;
        totalProfit = totalProfit - nextDealAmount;
        previousDealResult = "L";
        stepNumber++;
        totalLossesInJourney = totalLossesInJourney + nextDealAmount;
        nextDealAmount = parseFloat(baseDealAmount);
    }
    $(".stepNumber").html(stepNumber);
    $(".nextDealAmount").html(nextDealAmount.toFixed(2));
    $(".totalProfit").html(totalProfit.toFixed(2));
    $(".WC").html(WC);
    $(".LC").html(LC);
    return true;
};
function Clear(){
    
    totalLossesInJourney = 0;
    stepNumber = 1;
    nextDealAmount = parseFloat(baseDealAmount);
    profitPercentInt = parseFloat(profitPercent);
    previousDealResult = "W";
    WC = 0;
    LC = 0;
    totalProfit = 0;
    $(".stepNumber").html(stepNumber);
    $(".nextDealAmount").html(nextDealAmount);
    $(".totalProfit").html(totalProfit);
    $(".WC").html(WC);
    $(".LC").html(LC);
    return true;
};
$("#baseDealAmount").on("change",function(){
    baseDealAmount = $("#baseDealAmount").val();
    nextDealAmount = parseFloat(baseDealAmount);
    $(".nextDealAmount").html(nextDealAmount);
});
$("#profitPercent").on("change",function(){
    profitPercent = $("#profitPercent").val();
    profitPercentInt = parseFloat(profitPercent);
});