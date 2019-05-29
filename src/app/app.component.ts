import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'My TodoList App';
  author:string='Varsha Varshney';
  todayDate:number;
  selectedPriority:string;
  taskList:Array<string>;

  constructor(){
    setInterval(()=>{
      this.todayDate=Date.now();
    },1);
   this.taskList=[];

    $(document).ready(function () {
      $('#scheduleTask').datepicker({
      dateFormat: 'dd/mm/yy',
      autoclose: true,
      todayBtn: true,
      minDate: 0,
      pickerPosition: "bottom-left"
      });
     });
     
  }
  priorityChangedHandler(event:any){
    this.selectedPriority=event.target.value;
    console.log(this.selectedPriority);

}
  addtask(name,time,selectedPriority){
    if(name=='' || time==''){
      alert('Values are required');
    }
   else{
      this.taskList.push(name + " - " +time + " - " +selectedPriority);
      console.log(name,time,selectedPriority);
      
    }
    
  }

  removeTask(val){
    var index = this.taskList.indexOf(val);
 
    if (index > -1) {
       this.taskList.splice(index, 1);
    }
    console.log(val);
  }

}
