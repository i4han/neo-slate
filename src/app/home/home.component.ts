import { Component, OnInit, Input, Output } from '@angular/core';
import { Apollo } from 'apollo-angular'
import {
    SayQuery,   SayInterface, 
    VoterQuery, VotersInterface } from '../data'

@Component({
  selector: 'app-home',
  template: `
      home Works!
      <b>{{string}}</b>
      <button md-mini-fab>Flat</button>
      <br>
      <ul>
        <li *ngFor="let voter of voters">{{voter.LNAME}} {{voter.FNAME}}</li>
      </ul>
  `,
})
export class HomeComponent implements OnInit {
  @Output() string
  @Output() voters
  constructor(private apollo: Apollo) {}
  
  ngOnInit() {
    this.apollo.watchQuery<SayInterface>({ query: SayQuery })
      .subscribe(({data}) => { 
        this.string = data.say 
      })
    this.apollo.watchQuery<VotersInterface>({ 
        query: VoterQuery,
        variables: { mailseqn: '010000001' } 
      })
      .subscribe(({data}) => {
        this.voters = data.voters
      })
  }

}
