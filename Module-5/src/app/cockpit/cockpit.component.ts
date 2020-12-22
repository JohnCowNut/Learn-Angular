import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('bpCreated') bluePrintAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('sCreated') serverAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(newServerName: HTMLInputElement) {

    this.serverAdded.emit({ serverName: newServerName.value, serverContent: this.serverContent.nativeElement.value })
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.bluePrintAdded.emit({ serverName: newServerName.value, serverContent: this.serverContent.nativeElement.value })
  }

}
