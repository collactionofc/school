import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // @Output() del = new EventEmitter();
  
  @Input() name;
  @Input() Secoundfield;
  @Input() image;
  @Input() delete;
  @Input() type;

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  del(){
    this.api.deletedata(this.type,this.delete)
  }


}
