import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-prediction',
  imports: [],
  templateUrl: './ai-prediction.html',
  styleUrl: './ai-prediction.css',
})
export class AiPrediction {
  predictions = [
    {
      title: 'Solar Output',
      value: '+18%',
      description: 'Expected increase in solar generation tomorrow.',
      icon: '☀️'
    },
    {
      title: 'Wind Efficiency',
      value: '+12%',
      description: 'Predicted wind turbine performance improvement.',
      icon: '🌬️'
    },
    {
      title: 'Energy Demand',
      value: '-6%',
      description: 'Forecasted reduction in grid demand during peak hours.',
      icon: '⚡'
    }
  ];

}
