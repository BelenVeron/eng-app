import { Component } from '@angular/core';
import { ABC } from 'src/app/helpers/abc';
import { PHRASAL_VERBS } from 'src/app/helpers/phrasal-verb';
import { PhrasalVerb } from 'src/app/intefaces/phrasal-verb';
@Component({
  selector: 'app-expansion-list',
  templateUrl: './expansion-list.component.html',
  styleUrls: ['./expansion-list.component.css']
})
export class ExpansionListComponent {
  panelOpenState = false;
  abc = ABC;
  phrasalVerbs = PHRASAL_VERBS;

  /* 
    Get an array of phrasal verbs begin in
    the letter (param letter)
  */
  getVerbs(letter: string) {
    let verbs: PhrasalVerb[] = [];
    this.phrasalVerbs.forEach(item => {
      // every verb begin in lower case
      if (item.verb.charAt(0) === letter.toLowerCase()) {
        verbs.push(item)
      }
    })
    return verbs;
  }

}
