import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServers =  false;
  serverCreationStatus = 'No server was created'
  serverName='Test server'
  createdServer = false;
  servers = ['Test Server 1','Test Server 2','Test Server 3']
  constructor() {
    setTimeout(() => {
      this.allowServers = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.createdServer = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created !! This name is ' + this.serverName
  }
  onUpdateServerName(event: {target: HTMLInputElement}) {
    this.serverName = event.target.value
  }

}
