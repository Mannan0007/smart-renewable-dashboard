import { Component } from '@angular/core';

@Component({
  selector: 'app-energy-sources',
  imports: [],
  templateUrl: './energy-sources.html',
  styleUrl: './energy-sources.css',
})
export class EnergySources {

  selectedSource: any = null;

  energySources = [

    {
      name: "Solar Energy",

      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200",

      GlobalContribution: "~5–6%",

      shortDescription:
        "Clean and abundant energy powered by sunlight.",

      fullDescription:
        "Solar energy captures sunlight using photovoltaic panels to generate electricity. It is one of the fastest-growing renewable energy sources globally and plays a major role in reducing carbon emissions.",

      benefits: [
        "Low carbon emissions",
        "Abundant energy source",
        "Low maintenance costs",
        "Scalable installations"
      ]
    },

    {
      name: "Wind Energy",

      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200",

      GlobalContribution: "~7–8%",

      shortDescription:
        "Harnessing wind power for sustainable electricity.",

      fullDescription:
        "Wind turbines convert kinetic wind energy into electricity. Wind farms can supply clean power to thousands of homes and are highly effective in coastal and open-land regions.",

      benefits: [
        "Sustainable electricity generation",
        "Minimal environmental impact",
        "Cost-effective long-term",
        "Supports smart-grid systems"
      ]
    },

    {
      name: "Hydropower",

      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",

      GlobalContribution: "15%",

      shortDescription:
        "Reliable renewable energy from flowing water.",

      fullDescription:
        "Hydropower generates electricity using flowing or falling water. It is one of the oldest and most reliable renewable energy technologies.",

      benefits: [
        "Very high efficiency",
        "Stable energy generation",
        "Supports large-scale grids",
        "Low operational costs"
      ]
    },

    {
      name: "Biomass",

      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200",

      GlobalContribution: "~2–3%",

      shortDescription:
        "Energy generated using biological materials.",

      fullDescription:
        "Biomass energy uses organic materials such as agricultural waste, wood, and biofuels to generate electricity and heat.",

      benefits: [
        "Reduces waste",
        "Renewable fuel source",
        "Supports circular economy",
        "Versatile applications"
      ]
    },

    {
      name: "Geothermal",

      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",

      GlobalContribution: "<1%",

      shortDescription:
        "Stable energy derived from Earth’s internal heat.",

      fullDescription:
        "Geothermal systems utilize underground heat reservoirs to generate continuous renewable energy with minimal emissions.",

      benefits: [
        "Reliable baseload power",
        "Low emissions",
        "Long-term sustainability",
        "Weather-independent generation"
      ]
    }

  ];

  openDetails(source: any) {

    this.selectedSource = source;
  }

  closePopup() {

    this.selectedSource = null;
  }

}