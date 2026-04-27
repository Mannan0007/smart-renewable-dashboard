import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { EnergySources } from './components/energy-sources/energy-sources';
import { FeaturesSection } from './components/features-section/features-section';
import { SmartGrid } from './components/smart-grid/smart-grid';
import { AiPrediction } from './components/ai-prediction/ai-prediction';
import { CarbonSection } from "./components/carbon-section/carbon-section";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-landing',
  imports: [Navbar,  EnergySources, FeaturesSection, SmartGrid, AiPrediction, CarbonSection, Cta, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
