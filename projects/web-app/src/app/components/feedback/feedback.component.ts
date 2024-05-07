import { Component } from '@angular/core';
import { SharedNgZorroAntdModule } from '../../shared/ng-zorro.module';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [SharedNgZorroAntdModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  testimonials = {
    title: 'Відгуки',
    description: 'Що про нас кажуть',
    detail: '',
    feedbacks: [
      {
        name: 'John Doe',
        userimage: '../assets/images/user-images/user-1.jpg',
        comments:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        company: 'ABC',
      },
      {
        name: 'Roslyn Doe',
        userimage: '../assets/images/user-images/user-2.jpg',
        comments:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        company: 'XYZ',
      },
      {
        name: 'Thomas Doe',
        userimage: '../assets/images/user-images/user-3.jpg',
        comments:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        company: 'PQR',
      },
    ],
  };
}
