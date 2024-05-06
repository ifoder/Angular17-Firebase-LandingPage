import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedNgZorroAntdModule } from 'src/app/shared/ng-zorro.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Barber } from 'src/app/models/barbers.interface';
import { BarbersService } from 'src/app/services/barbers.service';

@Component({
  selector: 'app-barbers-admin',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule],
  templateUrl: './barbers.component.html',
  styleUrl: './barbers.component.css',
})
export class BarbersAdminComponent implements OnInit {
  _barbersService = inject(BarbersService);
  barbers$!: Observable<Barber[]>;

  barberss: Barber[];

  i = 0;
  editId: string | null = null;
  editService: Barber | null = null;
  listOfData: Barber[] = [];

  startEdit(service: Barber): void {
    this.editId = service.id;
    this.editService = service;
  }

  stopEdit(): void {
    this.editId = null;
    this._barbersService.updateBarbers(this.editService!);
  }

  getCategoryTitle(id: string) {
    let a = this.barberss.find((a) => a.id == id);
    return a;
  }

  addRow(): void {
    this._barbersService.addBarbers({
      id: new Date().getMilliseconds().toString(),
      name: `----`,
      avatar: '-----',
      description: '',
    }) as Barber;
    this.i++;
  }

  deleteRow(id: string): void {
    this._barbersService.deleteBarbers(id);
  }

  ngOnInit(): void {
    this.barbers$ = this._barbersService.getBarbers();

    this._barbersService.getBarbers().forEach((p) => (this.barberss = [...p]));
  }
}
