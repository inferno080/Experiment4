var c = 0;
experimentdone = false;
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

function f1()
{
    c++;
    if(c==1)
    {   
        document.getElementById("knob_ON").style.display = "none";
        document.getElementById("fun1").style.display = "none";
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
        document.getElementById("fun2").style.display = "none";
        document.getElementById("drop").style.display = "none";
    
}

function updatevalueondisplay()
{
   V2+= parseInt(getQueryStringValue("inc"));

    //calculate pH here; I have termporarily simply incremented
    pH = pH +1;

    //the changed pH is displayed
    if(V2<120)
    {
            document.getElementById("Pisplay1").innerHTML = pH ;
            final = pH
    }
    else
    {   
        
        f2();
        V2--;
        pH = final;
    } 
}