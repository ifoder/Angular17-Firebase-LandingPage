import { Component } from '@angular/core';
import { ABOUT } from '../../shared/data';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedNgZorroAntdModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about = ABOUT;
}
