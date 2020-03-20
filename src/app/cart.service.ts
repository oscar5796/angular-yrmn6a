import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  cityId = '5095808';
  appid = '37c971c396aadc3f6086ccd3f4d5c50a';

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items; 
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('assets/shipping.json');
  }  

  getCurrentWeather() {
    console.warn('This function is excecuted');
    //return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appid=${this.appid}`)
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {params: {id: this.cityId, appid: this.appid}});
  }
}