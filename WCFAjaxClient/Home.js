/// <reference path="E:\Edward\WCF\WCFCORS\WCFAjaxClient\jquery-3.1.1.min.js" />
 
$(document).ready(function () {
    $("#WCFGetData").click(WCFGetData);
    $("#WCFGetJsonData").click(WCFGetJsonData);
    $("#WEBAPIGetJsonData").click(WEBAPIGetJsonData);
    $("#WCFGetJsonDataWithoutpreflight").click(WCFGetJsonDataWithoutpreflight); 
    $("#WCFPostSaveData").click(WCFPostSaveData); 
    $("#WCFPostSaveDataWithOutpreflight").click(WCFPostSaveDataWithOutpreflight);
    $("#SetResult").click(SetResult);  
});  


function WCFGetData() {
    $.ajax({
        type: "GET",
        url: "http://localhost/WCFCORS/Service1.svc/rest/GetData?value=123",
        //accepts: {
        //    "Access-Control-Request-Headers": 'Content-Type, Accept'
        //},
        contentType: "application/xml; charset=utf-8",
        dataType :"html",
        success: OnSuccess,
        error: Onfail
    });
}
function WCFGetJsonData() {
    $.ajax({
        type: "GET",
        url: "http://localhost/WCFCORS/Service1.svc/rest/GetJsonData?value=123",
        //crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: OnSuccess,
        error: Onfail
    });
}
function WCFGetJsonDataWithoutpreflight() {
    $.ajax({
        type: "GET",
        url: "http://localhost:443/WCFCORS/Service1.svc/rest/GetJsonData?value=123",
        contentType: "application/x-www-form-urlencoded",
        success: OnSuccess,
        error: Onfail
    });
}
function WEBAPIGetJsonData() {
    $.ajax({
        type: "GET",
        url: "http://localhost:28901/api/values/5",
        //crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: OnSuccess,
        error: Onfail
    });
}
function WCFPostSaveData() {
    $.ajax({
        type: "POST",
        url: "http://localhost/WCFCORS/Service1.svc/rest/PostSaveData",
        contentType: "application/json; charset=utf-8",
        data:{"name":"postData"},
        dataType: "html",
        success: OnSuccess,
        error: Onfail
    });
}
function WCFPostSaveDataWithOutpreflight() {
    $.ajax({
        type: "POST",
        url: "http://localhost/WCFCORS/Service1.svc/rest/PostSaveData",
        contentType: "application/x-www-form-urlencoded",
        data: { "name": "postData" },
        dataType: "html",
        success: OnSuccess,
        error: Onfail
    });
}
function SetResult() {
    $("#result").html("Hello World");
}
function OnSuccess(response) {
    console.log(response);
    $("#result").html(response);
}
function Onfail(response) {
    $("#result").html(response);
}