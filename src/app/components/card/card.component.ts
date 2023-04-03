import { Component, Input } from '@angular/core';
import { PhrasalVerb } from 'src/app/intefaces/phrasal-verb';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() phrasalVerb!: PhrasalVerb;
  image: String = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

}
