"use strict";var __decorate=this&&this.__decorate||function(t,e,o,i){var s,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,o,n):s(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),ChampionsComponent=function(){function t(t){this.service=t,this.list=[],this.arr={name:"",title:"",description:""},this.arr2={name:"",title:"",description:""},this.id2=null,this.show=!1,this.show2=!1,this.show3=!1}return t.prototype.ngOnInit=function(){var t=this;this.service.geturl().subscribe(function(e){t.list=e,t.data=JSON.stringify(t.list),t.data2=localStorage.setItem("champions",t.data)})},t.prototype.onAdd2=function(){this.arr2.name=this.arr.name,this.arr2.title=this.arr.title,this.arr2.description=this.arr.description;var t=localStorage.getItem("champions");t.push(this.arr2),console.log(t)},t.prototype.onUpdate=function(t){this.show=!this.show,this.show2=!0,this.show3=!1,this.arr.name=t.name,this.arr.title=t.title,this.arr.description=t.description},t.prototype.showButton=function(){this.show=!this.show,this.show2=!1,this.show3=!0},t=__decorate([core_1.Component({selector:"app-champions",templateUrl:"./champions.component.html",styleUrls:["./champions.component.sass"]})],t)}();exports.ChampionsComponent=ChampionsComponent;