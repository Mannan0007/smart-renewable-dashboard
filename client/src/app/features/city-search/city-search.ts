import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../landing/components/navbar/navbar';

@Component({
  selector: 'app-city-search',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './city-search.html',
  styleUrl: './city-search.css'
})
export class CitySearchComponent implements OnDestroy {

  city = '';
  loading = false;
  error = '';
  searchResults: any = null;

  recentSearches = [
    'Delhi',
    'Mumbai',
    'New York',
    'Tokyo',
    'Berlin'
  ];

  // Real-time monitor state
  liveSolarOutput: string = '0.0';
  liveWindOutput: string = '0.0';
  monitorInterval: any;

  ngOnDestroy() {
    this.stopRealTimeMonitor();
  }

  startRealTimeMonitor(baseScore: number) {
    this.stopRealTimeMonitor();
    
    // Initial values based loosely on score
    let baseSolar = baseScore * 1.5;
    let baseWind = baseScore * 1.2;

    // Immediately set an initial value
    this.liveSolarOutput = baseSolar.toFixed(1);
    this.liveWindOutput = baseWind.toFixed(1);

    this.monitorInterval = setInterval(() => {
      // Fluctuate by +/- 5%
      const solarFluctuation = baseSolar * 0.05 * (Math.random() * 2 - 1);
      const windFluctuation = baseWind * 0.05 * (Math.random() * 2 - 1);

      this.liveSolarOutput = (baseSolar + solarFluctuation).toFixed(1);
      this.liveWindOutput = (baseWind + windFluctuation).toFixed(1);
    }, 2000);
  }

  stopRealTimeMonitor() {
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
  }

  async searchCity(cityName?: string) {
    if (cityName) {
      this.city = cityName;
    }

    if (!this.city) return;

    this.loading = true;
    this.error = '';
    this.searchResults = null;
    this.stopRealTimeMonitor();

    try {
      const response = await fetch(`http://localhost:5000/api/energy/renewable-score?city=${encodeURIComponent(this.city)}`);
      const result = await response.json();

      if (result.success) {
        const score = result.data.analytics.renewableScore;
        result.data.analytics.carbonReduction = (score * 2.5).toFixed(1);

        this.searchResults = result.data;
        
        // Start the simulated live data
        this.startRealTimeMonitor(score);
        
        if (!this.recentSearches.includes(this.city)) {
          this.recentSearches.unshift(this.city);
          if (this.recentSearches.length > 5) {
            this.recentSearches.pop();
          }
        }
      } else {
        this.error = result.message || 'Failed to fetch data';
      }
    } catch (err) {
      this.error = 'Network error occurred while fetching data';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

}