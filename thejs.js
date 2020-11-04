var c = 0;
experimentdone = false;
//?v1=1&n1=1&n2=1&inc=1
function getQueryStringValue (key) 
{  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

increment_by_value =  getQueryStringValue("inc") ;
var V1 =  getQueryStringValue("v1") ;
var V2 =0;
var N1 =  getQueryStringValue("n1") ;
var N2 =  getQueryStringValue("n2") ;
var pH = 0;

function f1()
{
    c++;
    if(c==1)
    {   
        document.getElementById("knob_ON").style.display = "none";
        document.getElementById("fun1").style.display = "none";
            setInterval((function (){
                document.getElementById("ripple_o").style.display = "block";
                document.getElementById("ripple_m").style.display = "block";
                document.getElementById("ripple_i").style.display = "block"; 
                setTimeout((function (){
                    document.getElementById("ripple_o").style.display = "none";
                    document.getElementById("ripple_m").style.display = "none";
                    document.getElementById("ripple_i").style.display = "none";
                }), (500))
            }), (700))
            while(V2<120)
            {
                V2+= parseInt(getQueryStringValue("inc"));
                //calculate pH here; I have termporarily simply incremented
                 pH = pH +1;

                 //the changed pH is displayed
                setTimeout((function (){
                    document.getElementById("Pisplay1").innerHTML = pH ; 
                }), (700))
            }

    }
    else if (c==3)
    {
        document.getElementById("knob_ON").style.display = "block";
        document.getElementById("fun3").style.display = "none";
        document.getElementById("drop").style.display = "block";
    }
    else
    {
        c--;
        alert("You clicked on the Wrong Apparatus, Refresh to avoid Glithes")
    }
}

function f2()
{   
    if(experimentdone)
    {
        document.getElementById("fun2").style.display = "none";
    }
}