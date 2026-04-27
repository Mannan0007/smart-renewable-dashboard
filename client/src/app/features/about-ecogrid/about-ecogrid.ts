import { Component } from '@angular/core';

@Component({
  selector: 'app-about-ecogrid',
  templateUrl: './about-ecogrid.html',
  styleUrls: ['./about-ecogrid.css']
})
export class AboutEcogridComponent {

  features = [

    {
      title: 'Renewable Intelligence',
      description:
        'Advanced analytics engine that interprets environmental data into meaningful renewable energy insights.',
      icon: '⚡'
    },

    {
      title: 'Climate Analytics',
      description:
        'Track weather patterns, renewable efficiency, and sustainability metrics for cities worldwide.',
      icon: '🌍'
    },

    {
      title: 'Smart Grid Vision',
      description:
        'EcoGrid aims to empower future smart-grid systems with intelligent renewable optimization.',
      icon: '🔋'
    },

    {
      title: 'AI Forecasting',
      description:
        'Future-ready architecture designed for AI-powered renewable energy prediction systems.',
      icon: '🤖'
    }

  ];

}