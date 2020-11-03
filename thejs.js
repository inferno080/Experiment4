c = 0;
experimentdone = false;
//?v1=1&n1=1&n2=1&inc=1
function getQueryStringValue (key) 
{  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

increment_by_value =  getQueryStringValue("inc") ;
V1 =  getQueryStringValue("v1") ;
V2 =0;
N1 =  getQueryStringValue("n1") ;
N2 =  getQueryStringValue("n2") ;

function f1()
{
    c++;
    if(c==1)
    {   
        document.getElementById("knob_ON").style.display = "none";
        document.getElementById("fun1").style.display = "none";
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