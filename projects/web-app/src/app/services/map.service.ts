import { Injectable } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor() {}

  initMap() {
    // Координати центру карти
    var center = { lat: 40.7128, lng: -74.006 }; // Координати для Нью-Йорка

    // Створення карти і відображення її на веб-сторінці
    var map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 12, // Збільшення карти
        center: center, // Центр карти
      }
    );

    // Створення маркера на карті
    var marker = new google.maps.marker.AdvancedMarkerElement({
      position: center, // Позиція маркера
      map: map, // Карта, на якій відображається маркер
      title: 'New York City', // Текст, що відображається при наведенні на маркер
    });
  }
}
