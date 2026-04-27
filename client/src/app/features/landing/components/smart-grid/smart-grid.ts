import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-grid',
  imports: [],
  templateUrl: './smart-grid.html',
  styleUrl: './smart-grid.css',
})
export class SmartGrid {
  gridStats = [
    {
      title: 'Grid Stability',
      value: '98%',
      icon: '⚡'
    },
    {
      title: 'Power Distribution',
      value: '24 GW',
      icon: '🌐'
    },
    {
      title: 'Active Nodes',
      value: '1,248',
      icon: '🔗'
    },
    {
      title: 'Energy Efficiency',
      value: '91%',
      icon: '📈'
    }
  ];
}
