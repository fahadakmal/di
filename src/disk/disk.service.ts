import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(a: number, b: number) {
    console.log('drawing power service 20');
    this.powerService.supplyPower(20);
    return a + b;
  }
}
