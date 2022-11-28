import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
 name=""
 rno=""
 adno=""
 mno=""
 cname=""
 pname=""
 pmno=""
 uname=""
 psw=""


 readValues=()=>
 {
  let data:any={"name":this.name,
                "rno":this.rno,
                "adno":this.adno,
                "mno":this.mno,
                "cname":this.cname,
                "pname":this.pname,
                "pmno":this.pmno,
                "uname":this.uname,
                "psw":this.psw}


 console.log(data)                
                
 }

}
