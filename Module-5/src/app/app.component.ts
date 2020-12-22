import { Component } from '@angular/core';
interface server {
  type: string,
  content: string,
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: server[] = [{ type: 'server', content: 'Server Is Awesome', name: 'Sambi' }];


  onServerAdded(dataServer: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: dataServer.serverName,
      content: dataServer.serverContent,
    });
  }

  onBlueprintAdded(dataServer: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: dataServer.serverName,
      content: dataServer.serverContent,
    });
  }
}
