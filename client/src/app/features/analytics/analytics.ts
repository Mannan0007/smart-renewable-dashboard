import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../landing/components/navbar/navbar';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './analytics.html',
  styleUrl: './analytics.css'
})
export class AnalyticsComponent implements OnInit, OnDestroy {
  loading = false;
  error = '';
  analyticsData: any = null;
  selectedCity = 'San Francisco';

  // Real-time grid metrics
  liveSolarOutput: string = '0.0';
  liveWindOutput: string = '0.0';
  liveHydroOutput: string = '0.0';
  monitorInterval: any;

  ngOnInit() {
    this.fetchAnalytics();
  }

  ngOnDestroy() {
    this.stopRealTimeMonitor();
  }

  startRealTimeMonitor(baseScore: number) {
    this.stopRealTimeMonitor();
    
    let baseSolar = baseScore * 1.8;
    let baseWind = baseScore * 1.4;
    let baseHydro = baseScore * 0.9;

    this.liveSolarOutput = baseSolar.toFixed(1);
    this.liveWindOutput = baseWind.toFixed(1);
    this.liveHydroOutput = baseHydro.toFixed(1);

    this.monitorInterval = setInterval(() => {
      const solarFluctuation = baseSolar * 0.05 * (Math.random() * 2 - 1);
      const windFluctuation = baseWind * 0.05 * (Math.random() * 2 - 1);
      const hydroFluctuation = baseHydro * 0.02 * (Math.random() * 2 - 1);

      this.liveSolarOutput = (baseSolar + solarFluctuation).toFixed(1);
      this.liveWindOutput = (baseWind + windFluctuation).toFixed(1);
      this.liveHydroOutput = (baseHydro + hydroFluctuation).toFixed(1);
    }, 1500);
  }

  stopRealTimeMonitor() {
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
  }

  async fetchAnalytics() {
    this.loading = true;
    this.error = '';
    this.analyticsData = null;
    this.stopRealTimeMonitor();

    try {
      const response = await fetch(`http://localhost:5000/api/energy/renewable-score?city=${encodeURIComponent(this.selectedCity)}`);
      const result = await response.json();

      if (result.success) {
        const score = result.data.analytics.renewableScore;
        result.data.analytics.carbonReduction = (score * 3.2).toFixed(1);
        result.data.analytics.homesPowered = Math.floor(score * 150);

        this.analyticsData = result.data;
        this.startRealTimeMonitor(score);
      } else {
        this.error = result.message || 'Failed to fetch analytics data';
      }
    } catch (err) {
      this.error = 'Network error occurred while fetching data';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}
