import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

//////////////// Material ///////////////////
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';

//////////////// Component ///////////////////
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { ExpansionListComponent } from './components/expansion-list/expansion-list.component';
import { CardGameComponent } from './components/card-game/card-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionListComponent,
    ContainerComponent,
    CardComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    ScrollingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
