import { Component, inject } from '@angular/core';
import { ABOUT } from '../../shared/data';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { I18nService } from 'src/app/services/i18n.services';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SharedNgZorroAntdModule, LayoutComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  i18n = inject(I18nService);
  about = {
    image: '../../../assets/images/about.jpg',
    image2: '../../../assets/images/about2.jpg',
  };
}
