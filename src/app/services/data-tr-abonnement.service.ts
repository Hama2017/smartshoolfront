import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConstModule } from '../consts.module';

@Injectable({
  providedIn: 'root'
})
export class DataTrAbonnementService {
  // Instanciation de la classe ConstModule pour accéder à l'URL de base
  const = new ConstModule();
  
  // Nom de l'entité à contacter par l'API
  entity: string = "/trabonnements/";

  // Formation de l'URL finale en combinant l'URL de base et le nom de l'entité
  apiUrl: string = this.const.url + this.entity;

  // Configuration des en-têtes HTTP pour les requêtes
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpclient: HttpClient) { }

  // Méthode pour récupérer tous les abonnements
  getDataTrAbonnement() {
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

  // Méthode pour insérer un nouvel abonnement
  insertDataTrAbonnement(data: any) {
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

  // Méthode pour supprimer un abonnement par ID
  deleteDataTrAbonnement(id: any) {
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

  // Méthode pour récupérer un abonnement par ID
  getTrAbonnementByID(id: any) {
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

  // Méthode pour mettre à jour un abonnement par ID
  updateDataTrAbonnement(id: any, data: any) {
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
