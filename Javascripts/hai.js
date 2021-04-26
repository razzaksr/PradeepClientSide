function hello()
{
    alert("Normal function called");
}

const hey=()=>{
    alert('fat arrow called');
};

const wet=()=>
{
    const check=document.getElementById('data').value;
    (check%2000==0)?alert('can be dispensed'):alert('cannot be dispensed')
}

