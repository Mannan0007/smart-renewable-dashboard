import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  imports: [],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class FeaturesSection {
 features = [
    {
      icon: '⚡',
      title: 'Real-Time Monitoring',
      description: 'Track renewable energy production and grid performance instantly.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Analyze energy trends using interactive charts and smart insights.'
    },
    {
      icon: '🤖',
      title: 'AI Predictions',
      description: 'Forecast energy demand and renewable output with AI models.'
    },
    {
      icon: '🌍',
      title: 'Carbon Tracking',
      description: 'Measure carbon emission reduction and sustainability impact.'
    },
    {
      icon: '🔋',
      title: 'Energy Storage',
      description: 'Monitor battery levels and optimize renewable energy storage.'
    },
    {
      icon: '🌐',
      title: 'Smart Grid',
      description: 'Visualize smart-grid stability and energy distribution systems.'
    }
  ];
}
