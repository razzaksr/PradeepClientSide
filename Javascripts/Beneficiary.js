            function Beneficiary(name,acc,ifs,up)
            {
                this.name=name;//=document.getElementById('name').value;
                this.accno=acc;//=document.getElementById('accno').value;
                this.ifsc=ifs;//=document.getElementById('ifsc').value;
                this.upi=up;//=document.getElementById('upi').value;
                this.setdata=setdata;
                this.listout=listout;
            }
            function setdata()
            {
                this.name=document.getElementById('name').value;
                this.accno=document.getElementById('accno').value;
                this.ifsc=document.getElementById('ifsc').value;
                this.upi=document.getElementById('upi').value;
            }
            function listout()
            {
                alert("list called");
                //alert(this.name+" "+this.accno+" "+this.ifsc+" "+this.upi);
                //let hai=document.getElementById('show');
                //hai.innerHTML="<div class='card text-primary rounded border shadow p-5'><h1 class='display-4'>"+ this.name +"</h1><div class='card-body'><p class='lead float-left'>"+ this.accno +"</p><p class='lead float-right'>"+ this.ifsc +"</p><p class='lead text-center'>"+ this.upi +"</p></div></div>";
                let hai=document.createElement('div');
                hai.innerHTML="<div class='card text-primary rounded border shadow p-5'><h1 class='display-4'>"+ this.name +"</h1><div class='card-body'><p class='lead float-left'>"+ this.accno +"</p><p class='lead float-right'>"+ this.ifsc +"</p><p class='lead text-center'>"+ this.upi +"</p></div></div>";
                document.getElementById('show').appendChild(hai);
            }