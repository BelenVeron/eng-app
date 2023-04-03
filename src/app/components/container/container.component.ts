import { Component } from '@angular/core';
import { FIRST_PHRASAL_VERBS } from 'src/app/helpers/phrasal-verb';
import { PhrasalVerb } from 'src/app/intefaces/phrasal-verb';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  phrasalVerb: PhrasalVerb;
  phrasalVerbDefault: PhrasalVerb = FIRST_PHRASAL_VERBS;

  constructor(){
    this.phrasalVerb = this.phrasalVerbDefault;
  }

  setPhrasalVerb(event: PhrasalVerb) {
    this.phrasalVerb = event
  }

}
