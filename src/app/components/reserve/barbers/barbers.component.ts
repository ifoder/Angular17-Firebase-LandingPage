import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { BARBERS, SERVICESCATEGORY } from '../../../shared/data';
import { Barber } from '../../../models/barbers.interface';
import { SharedNgZorroAntdModule } from '../../../shared/ng-zorro.module';
import { BarbersService } from 'src/app/services/barbers.service';
import { Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-barbers',
  standalone: true,
  imports: [CommonModule, SharedNgZorroAntdModule, SharedModule],
  templateUrl: './barbers.component.html',
  styleUrl: './barbers.component.css',
})
export class BarbersComponent implements OnInit {
  @Output() eventBarber = new EventEmitter<Barber>();
  _barbersService = inject(BarbersService);

  barbers$: Observable<Barber[]>;

  ngOnInit(): void {
    this.barbers$ = this._barbersService.getBarbers();
    //  this._servicesService
    //    .getServices()
    //    .forEach((p) => (this.servicess = [...p]));
  }
  // haircutters: Barber[] = BARBERS;

  submitBarber(barber: Barber) {
    this.eventBarber.emit(barber);
  }
}
