var c = 0;
var experimentstarted = false;
//?v1=1&n1=1&n2=1&inc=1

function getQueryStringValue (key) 
{  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  
var V1 =  parseInt(getQueryStringValue("v1")) ;
var V2 =0;
var N1 =  parseInt(getQueryStringValue("n1")) ;
var N2 = parseInt(getQueryStringValue("n2"));
var pH = 0;

//hardcoded a value here. It can be changed
var max_base = 120;

function f1()
{
    c++;
    if(c==1)
    {   
        document.getElementById("fun1").style.display = "none";
        document.getElementById("knob_ON").style.display = "none";
        document.getElementById("drop").style.display = "block";
        experimentstarted = true;
            setInterval((function ()
            {
                document.getElementById("ripple_o").style.display = "block";
                document.getElementById("ripple_m").style.display = "block";
                document.getElementById("ripple_i").style.display = "block"; 
                setTimeout((function (){
                    document.getElementById("ripple_o").style.display = "none";
                    document.getElementById("ripple_m").style.display = "none";
                    document.getElementById("ripple_i").style.display = "none";
                }), (500))
                updatevalueondisplay();
            }), (700))


    }
    else if (c==2)
    {
        document.getElementById("knob_ON").style.display = "block";
        document.getElementById("fun3").style.display = "none";
        document.getElementById("drop").style.display = "none";
        var insid = document.getElementById("ripple_i");
        var mid = document.getElementById("ripple_m");
        var out = document.getElementById("ripple_o");
        insid.remove();
        mid.remove();
        out.remove();
    }
    else
    {
        c--;
        alert("You clicked on the Wrong Apparatus, Refresh to avoid Glithes")
    }
}

function f2()
{   
        document.getElementById("fun2").style.display = "none";
}

function updatevalueondisplay()
{
   V2+= parseInt(getQueryStringValue("inc"));

    //calculate pH here; I have termporarily simply incremented
    pH = pH +1;

    //the changed pH is displayed
    if(V2>((1*max_base)/6))
    {
        document.getElementById("water0").style.display = "none";
    }
    if((V2>((2*max_base)/6)))
    {
        document.getElementById("water1").style.display = "none";
    }
    if(V2>((3*max_base)/6))
    {
        document.getElementById("water2").style.display = "none";
    }
    if(V2>((4*max_base)/6))
    {
        document.getElementById("water3").style.display = "none";
    }
    if(V2>((5*max_base)/6))
    {
        document.getElementById("water4").style.display = "none";
    }
    if(V2<=max_base)
    {   
        document.getElementById("Pisplay1").innerHTML = pH ;
        final = pH;    
    }
    else
    {   
        experimentstarted = false;
        pH = final;
        f2();
    } 
}

//code for chart

window.onload = function () {

    var dps = []; // dataPoints
    var chart = new CanvasJS.Chart("chartContainer", {
        title :{
            text: "Dynamic Data"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
    
    var xVal = 0;
    var yVal = 100; 
    var updateInterval = 1000;
    var dataLength = 20; // number of dataPoints visible at any point
    
    var updateChart = function (count) {
    
        count = count || 1;
    
        for (var j = 0; j < count; j++) {
            yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
            dps.push({
                x: xVal,
                y: yVal
            });
            xVal++;
        }
    
        if (dps.length > dataLength) {
            dps.shift();
        }
    
        chart.render();
    };
    if(experimentstarted)
    {
        updateChart(dataLength);
        setInterval(function(){updateChart()}, updateInterval);
    }
    
    }