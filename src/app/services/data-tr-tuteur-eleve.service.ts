import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ConstModule } from '../consts.module';

@Injectable({
  providedIn: 'root'
})
export class DataTrTuteurEleveService {
  // Instanciation de la classe ConstModule pour accéder à l'URL de base
  const = new ConstModule();
  
  // Nom de l'entité à contacter par l'API
  entity: string = "/trtuteureleves/";

  // Formation de l'URL finale en combinant l'URL de base et le nom de l'entité
  apiUrl: string = this.const.url + this.entity;

  // Configuration des en-têtes HTTP pour les requêtes
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpclient: HttpClient) { }

  // Méthode pour récupérer toutes les relations tuteur-élève
  getDataTrTuteurEleve() {
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

  // Méthode pour insérer une nouvelle relation tuteur-élève
  insertDataTrTuteurEleve(data: any) {
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

  // Méthode pour supprimer une relation tuteur-élève par ID
  deleteDataTrTuteurEleve(tuteurId: any, eleveId: any) {
    return this.httpclient.delete(`${this.apiUrl}?tuteurId=${tuteurId}&eleveId=${eleveId}`).pipe(
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

  // Méthode pour récupérer une relation tuteur-élève par ID tuteur et ID élève
  getTrTuteurEleveByID(tuteurId: any, eleveId: any) {
    return this.httpclient.get(`${this.apiUrl}?tuteurId=${tuteurId}&eleveId=${eleveId}`).pipe(
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

  // Méthode pour mettre à jour une relation tuteur-élève par ID tuteur et ID élève
  updateDataTrTuteurEleve(tuteurId: any, eleveId: any, data: any) {
    return this.httpclient.put(`${this.apiUrl}?tuteurId=${tuteurId}&eleveId=${eleveId}`, JSON.stringify(data), this.httpOptions).pipe(
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
