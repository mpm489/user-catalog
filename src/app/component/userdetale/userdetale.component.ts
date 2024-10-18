import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import * as Leaflet from 'leaflet'
import { User } from '../../interface/user.interface';
import { Coordinate } from '../../interface/coordinate.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userdetale',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './userdetale.component.html',
  styleUrl: './userdetale.component.scss'
})
export class UserdetaleComponent implements AfterViewInit {
  user: User;
  marker = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });


  constructor(private activatedRout: ActivatedRoute) {
    this.loadUser();
  }

  loadUser() {
    this.user = (<User>(this.activatedRout.snapshot.data['resolvedResponse'].results[0]));
  }

  ngAfterViewInit(): void {
    this.loadMap(this.user.coordinate);
  }


  loadMap(coordinate: Coordinate) {
    const map = Leaflet.map('map', {
      center: [coordinate.latitude, coordinate.longitude],
      zoom: 8
    });
    const mainLayer = Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      maxZoom: 30,
      crossOrigin: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(map);
    const marker = Leaflet.marker([coordinate.latitude, coordinate.longitude], {icon: this.marker});
    marker.addTo(map).bindPopup(`${this.user.firstName}'s Location`).openPopup();
  }


}
