import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service';
import { MyLibModule } from '../../../my-lib.module';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';

@Component({
  selector: 'fa-footer',
  standalone: true,
  imports: [MyLibModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(public navigation: NavigationService) {}

  ngOnInit() {}
}
