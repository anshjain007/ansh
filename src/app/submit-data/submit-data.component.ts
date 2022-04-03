import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-submit-data',
  templateUrl: './submit-data.component.html',
  styleUrls: ['./submit-data.component.css']
})
export class SubmitDataComponent implements OnInit {
  
 
  @Input() contactform: any;
  constructor() { }

  ngOnInit(): void {
   
  }

}
