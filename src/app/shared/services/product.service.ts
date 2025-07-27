import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { EndPoints } from '../../enums/endpoints';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _httpClient = inject(HttpClient);
  private readonly url: string = `${environment.baseUrl}${EndPoints.Products}`;

  getProduct(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.url);
  }
  getSpecificProduct(id: number): Observable<Product> {
    return this._httpClient.get<Product>(`${this.url}/${id}`);
  }
}
