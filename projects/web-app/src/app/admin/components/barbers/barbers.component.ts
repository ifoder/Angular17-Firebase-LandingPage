import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { BarbersService } from '../../../services/barbers.service';
import { Barber } from '../../../models/barbers.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-barbers-admin',
  standalone: true,
  imports: [SharedModule, CommonModule],
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
