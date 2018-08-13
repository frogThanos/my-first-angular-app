import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})

export class ServerComponent {
  serverId: number = Math.random();
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  renderServerStatus = (): string => (this.serverStatus);

  getColor = (): string => {
    return this.serverStatus === 'online' ? 'white' : 'white';
  }
}
