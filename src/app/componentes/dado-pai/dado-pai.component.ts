import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado-pai',
  templateUrl: './dado-pai.component.html',
  styleUrls: ['./dado-pai.component.css']
})
export class DadoPaiComponent implements OnInit {
  @Input() name: string =' ';
  @Input() userData!: {email: string; role: string}


  constructor() { }

  ngOnInit(): void {
  }

}
