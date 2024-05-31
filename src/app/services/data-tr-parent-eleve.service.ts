import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { ConstModule } from '../consts.module';
@Injectable({
  providedIn: 'root'
})
export class DataTrParentEleveService {
  const = new ConstModule();
  //Entity est la variable qui va contenir le nom de l'entite a contacter par api
  entity: string = "/trparenteleves/";
  //apiUrl represente la varibale qui va contenir l'url du serveur et le nom de l'entite
  //elle forme l'url finale
  apiUrl: string = this.const.url + this.entity;
  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getDataTrParentEleve() {
    return this.httpclient.get(this.apiUrl).pipe(
      catchError(error => {
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );;
  }

  insertDataTrParentEleve(data: any) {
    return this.httpclient.post(this.apiUrl, data).pipe(
      catchError(error => {
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );;
  }

  deleteDataTrParentEleve(id: any) {
    return this.httpclient.delete(this.apiUrl + id).pipe(
      catchError(error => {
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );;
  }

  getTrParentEleveByID(id: any) {
    return this.httpclient.get(this.apiUrl + id).pipe(
      catchError(error => {
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );
  }

  updateDataTrParentEleve(id: any, data: any) {
    return this.httpclient.put(this.apiUrl + id, JSON.stringify(data), this.httpOptions).pipe(
      catchError(error => {
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );;
  }
}