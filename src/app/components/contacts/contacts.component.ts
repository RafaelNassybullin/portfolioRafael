import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
    <div class="wrapper">
      <h1>Github</h1>
      <h1>Gmail</h1>
      <h1>Telegram</h1>
    </div>
  `,
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
