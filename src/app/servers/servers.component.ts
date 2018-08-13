import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log('allowNewServer');
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer = (): void => {
    this.serverCreationStatus = 'Server was created!';
  };

}
