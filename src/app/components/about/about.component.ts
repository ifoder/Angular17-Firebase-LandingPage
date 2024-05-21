import { Component } from '@angular/core';
import { ABOUT } from '../../shared/data';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedNgZorroAntdModule, LayoutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  about = ABOUT;
}
