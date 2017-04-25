import { Injectable } from '@angular/core';

let instanceCounter = 0;

@Injectable()
export class LoggerService {

  private instanceId: number;

  constructor() {
    this.instanceId = ++instanceCounter;
    // console.log(`creating logger instance: ${this.instanceId}`);
  }

  public log(msg: string) {
    // console.log(`logger id: ${this.instanceId}, ${msg}`);
  }

}
