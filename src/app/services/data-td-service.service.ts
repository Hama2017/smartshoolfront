import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConstModule } from '../consts.module';

@Injectable({
  providedIn: 'root'
})
export class DataTdServiceService {
  // Instanciation de la classe ConstModule pour accéder à l'URL de base
  const = new ConstModule();
  
  // Nom de l'entité à contacter par l'API
  entity: string = "/tdservices/";

  // Formation de l'URL finale en combinant l'URL de base et le nom de l'entité
  apiUrl: string = this.const.url + this.entity;

  // Configuration des en-têtes HTTP pour les requêtes
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpclient: HttpClient) { }

  // Méthode pour récupérer tous les services
  getDataTdService() {
    return this.httpclient.get(this.apiUrl).pipe(
      catchError(error => {
        // Gestion des erreurs en formatant la réponse
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );
  }

  // Méthode pour insérer un nouveau service
  insertDataTdService(data: any) {
    return this.httpclient.post(this.apiUrl, data).pipe(
      catchError(error => {
        // Gestion des erreurs en formatant la réponse
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );
  }

  // Méthode pour supprimer un service par ID
  deleteDataTdService(id: any) {
    return this.httpclient.delete(this.apiUrl + id).pipe(
      catchError(error => {
        // Gestion des erreurs en formatant la réponse
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );
  }

  // Méthode pour récupérer un service par ID
  getTdServiceByID(id: any) {
    return this.httpclient.get(this.apiUrl + id).pipe(
      catchError(error => {
        // Gestion des erreurs en formatant la réponse
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );
  }

  // Méthode pour mettre à jour un service par ID
  updateDataTdService(id: any, data: any) {
    return this.httpclient.put(this.apiUrl + id, JSON.stringify(data), this.httpOptions).pipe(
      catchError(error => {
        // Gestion des erreurs en formatant la réponse
        const formattedError = {
          success: false,
          message: error.message,
          error: error.statusText || 'Erreur Inconnue'
        };
        return of(formattedError);
      })
    );
  }
}
