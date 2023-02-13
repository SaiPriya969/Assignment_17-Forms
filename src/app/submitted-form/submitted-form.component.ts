import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent {
  Arr:Array<string>=[];
  additionalDetails:Array<string>=[];
  lastId=1;
  selectedUser:any;
  data:any;
  
// constructor(private ser:ServiceService){
//   // console.log(this.arr);
//   this.ser.service.subscribe( (res: any) =>{
//     console.log("res", res);
    
//     this.arr=res;
//   });
//   console.log(this.arr)
// }
constructor(private router:Router,private route:ActivatedRoute,private ser:ServiceService){
  // data from form is collected here
  this.Arr = this.router.getCurrentNavigation()?.extras.state?.['arr'];
  this.additionalDetails=this.router.getCurrentNavigation()?.extras.state?.['additionalInfo']
  console.log(this.additionalDetails)
}
ngOnInit()
{
  this.ser.getUserDetails().subscribe((data)=>{
    // console.warn(data);
   

  })
}
}
