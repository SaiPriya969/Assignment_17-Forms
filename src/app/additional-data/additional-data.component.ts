// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {ServiceService} from 'src/app/service.service'

// @Component({
//   selector: 'app-additional-data2',
//   templateUrl: './additional-data.component.html',
//   styleUrls: ['./additional-data.component.css']
// })
// export class AdditionalDataComponent {
// // innerForm:any;
//   types=["Number","String","Boolean","Hexa","Binary"]
//   numberPattern=/[0-9]/;
//   stringPattern=/[a-zA-Z]/;
//   booleanPattern = /[0-1]{1}/;
//   hexaPattern=/^[#]+[0-9a-f]{6,6}/;
//   binaryPattern=/[0-1]/;
//   pattern:any;
//   error:any;
//   enableAdditionalInput=false;
//   // Types={
//   //   Number:/[0-9]/,
//   //   String:/[a-zA-Z]/,
//   //   Hexa:/[0-9a-f]/,
//   //   Binary:/[0-1]/
//   // };
//   @Output() labelValue= new EventEmitter<any>();
//   constructor(private ser:ServiceService){}
//   innerForm=new FormGroup({
//     name:new FormControl(""),
//     typeName:new FormControl("number")
//     });
//     // innerForm.name?.disable();
// // onInit()
// // {
// //   this.innerForm=new FormGroup({
// //   name:new FormControl(""),
// //   typeName:new FormControl("number")
// //   });
// // }
// // Objectkeys(obj:any)
// // {
// //   return Object.keys(obj);
// // }
// ngOnInit(){

//   this.ser.service.subscribe(enable=>{  this.enableAdditionalInput=enable})
//   // this.innerForm.get('name')?.disable();
// }
// selectedType(val:string){
//   // console.log(this.Types[val])
//   // this.innerForm.get('name').value==Validators.pattern(this.Types.Num)
// // console.log(this.innerForm.value.name)
// // console.log("dbdbbd")
//   if(val=="Number")
//   {
//     this.pattern=this.numberPattern;
//   }
//   else if(val=="String")
//   {
//     this.pattern=this.stringPattern;
//   }
//   else if(val=="Boolean")
//   {
//     this.pattern=this.booleanPattern;
//   }
//   else if(val=="Binary")
//   {
//     this.pattern=this.binaryPattern;
//   }
//   else
//   {
//     this.pattern=this.hexaPattern;
//   }
//   // this.innerForm.name.Validators.compose([Validators.required,Validators.pattern(this.pattern)]);
//   // console.log(val);
//   // console.log(this.innerForm.get('name').status);
  
//   this.ser.service.subscribe(enable=>{  this.enableAdditionalInput=enable})
//   console.log(this.enableAdditionalInput);
//   if(this.enableAdditionalInput){
//     this.innerForm.get('name')?.enable;
//     // console.log(this.enableAdditionalInput);
//   }

// }
// keyEnterFun()
// {
//   // console.log(this.pattern)
//   // console.log(this.innerForm.value.name)
//   // this.labelValue.emit(this.innerForm.value.name);
//   if(this.pattern.test(this.innerForm.value.name))
//   {
//     // console.log("val");
//    this.labelValue.emit(this.innerForm.value.name);
//    this.error="";
//   }
//   else{
//      this.error="enter valid input"
//   }
// }
// }
