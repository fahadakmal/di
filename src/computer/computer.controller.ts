import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}
  @Get()
  run() {
    console.log('i am ok');
    return [this.cpuService.compute(10, 20), this.diskService.getData(10, 20)];
  }
}
