import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverCreated: boolean = false;
  serverName: string = '';
  userName: string = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log('allowNewServer');
    }, 2000);
  }

  ngOnInit() {
  }
  disableResetIfEmpty = (): boolean => {
    return this.userName === '';
  };
  onReset = (): void => {
    if (this.userName !== '') {
      this.userName = '';
    }
  };
  onCreateServer = (): void => {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! ${this.serverName}`;
  };

}
