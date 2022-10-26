import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { WeatherIconData } from 'src/app/interfaces/weather-icon-data.interface';

// Weather conditions
import { CloudsConditions } from 'src/app/enums/weather-conditions.enum';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
})
export class WeatherIconComponent implements OnInit {
  @Input() weatherIconData!: WeatherIconData;

  svgFileUrl!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.weatherIconData);

    const { id, main } = this.weatherIconData;


  }
}
