import { Component } from '@angular/core';

@Component({
  selector: 'app-carbon-section',
  imports: [],
  templateUrl: './carbon-section.html',
  styleUrl: './carbon-section.css',
})
export class CarbonSection {
  carbonStats = [
    {
      value: '18.4K',
      label: 'Tons CO₂ Reduced',
      icon: '🌍'
    },
    {
      value: '12.7K',
      label: 'Trees Saved',
      icon: '🌱'
    },
    {
      value: '82%',
      label: 'Renewable Usage',
      icon: '⚡'
    }
  ];

}
