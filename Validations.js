function check()
{
    var hai=true;
    var rno=document.forms['create'].regno.value;
    var trav=document.forms['create'].travels.value;
    var con=document.forms['create'].contact.value;
    var mail=document.forms['create'].email.value;
    var start=document.forms['create'].origin.value;
    var end=document.forms['create'].stop.value;
    var am=document.forms['create'].am.value;
    var tp=document.forms['create'].type.value;
    var count=document.forms['create'].seats.value;
    var cost=document.forms['create'].price.value;
    var result=document.getElementById('info');

    let msg="";
    //form/ field validation
    if(rno==""||trav==""||con==""||mail==""||start==""||end==""||am==""||tp==""||count==""||cost=="")
    {
        hai=false;
        msg="None of the Fields shouldn't empty,";
    }

    if(!(/^[a-zA-Z0-9]/).test(rno))
    {
        hai=false;
        msg+="Regno is valid,";
    }
    if(!(/^[a-zA-Z]/).test(trav))
    {
        hai=false;
        msg+="Travels name only alphabets,";
        document.getElementById('travmsg').innerHTML="Travels name only alphabets,";
    }
    if(!(/^[0-9]{10}/).test(con))
    {
        hai=false;
        msg+="Invalid contact,";
    }
    if(!(/^[a-zA-Z]/).test(start))
    {
        hai=false;
        msg+="Origin only alphabets,";
    }
    if(!(/^[a-zA-Z]/).test(end))
    {
        hai=false;
        msg+="Destination only alphabets,";
    }
    

    result.innerHTML=msg;
    return hai;
}