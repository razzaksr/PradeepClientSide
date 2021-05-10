//import Beneficiary from 'Beneficiary'
function MyAccount()
{
    this.list=new Array();
    this.insert=insert;
    this.traverse=traverse;
}
function insert(obj)
{
    alert(obj.name+" "+obj.upi+" before push into array");
    this.list.push(obj);
}
function traverse()
{
    for(index=0;index<this.list.length;index++)
    {
        alert(this.list[index].name+" "+this.list[index].upi);
    }
    /* this.list.map((elem)=>{
        alert(elem.name+" "+elem.upi);
        elem.listout();
    }); */
}