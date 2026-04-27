import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  quickLinks = [
    'Dashboard',
    'Analytics',
    'Smart Grid',
    'AI Predictions',
    'Sustainability'
  ];

  resources = [
    'Documentation',
    'API Access',
    'Research',
    'Support',
    'Privacy Policy'
  ];
}
