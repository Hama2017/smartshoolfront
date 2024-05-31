import {Component, AfterViewInit, OnInit} from '@angular/core';
import {DataelevesService} from "../../services/data-eleve.service";
import {Eleve} from "../../models/eleve";
import {window} from "rxjs";
import Swal from 'sweetalert2';

//import * as console from "node:console";

@Component({
  selector: 'app-ajout-eleve',
  templateUrl: './ajout-eleve.component.html',
})
export class AjoutEleveComponent implements AfterViewInit,OnInit {


  constructor(private dataServiceEleve:DataelevesService) { }

  ngAfterViewInit(): void {
    this.initializeWizard();
  }


  private initializeWizard(): void {
    if ((window as any).$) {
      (window as any).$('#wizard1').steps({
        headerTag: 'h3',
        bodyTag: 'section',
        transitionEffect: 'slideLeft',
        autoFocus: true,
        onStepChanging: (event: any, currentIndex: any, newIndex: any) => {
          return true;
        },
        onFinishing: (event: any, currentIndex: any) => {
          return true;
        },
        onFinished: (event: any, currentIndex: any) => {
          alert('Wizard Completed');
        }
      });
    }
  }

  eleve = new Eleve();


  validateForm(): boolean {
    const { Prenom, Nom, DateNaiss, LieuNaiss, Adresse, Sexe, NumeroTelephone } = this.eleve;

    const messages = [];

    if (!Prenom) messages.push('Le champ "Prénom" est obligatoire.');
    if (!Nom) messages.push('Le champ "Nom" est obligatoire.');
    if (!DateNaiss) messages.push('Le champ "Date de naissance" est obligatoire.');
    if (!LieuNaiss) messages.push('Le champ "Lieu de naissance" est obligatoire.');
    if (!Adresse) messages.push('Le champ "Adresse" est obligatoire.');
    if (!Sexe) messages.push('Le champ "Sexe" est obligatoire.');
    if (!NumeroTelephone) messages.push('Le champ "Téléphone" est obligatoire.');

    if (messages.length > 0) {
      Swal.fire({
        title: 'Erreur',
        html: messages.join('<br>'),
        icon: 'error',
        confirmButtonColor: '#2f1514',
      });
      return false;
    }

    return true;
  }

  inserDataEleve() {
    if (this.validateForm()) {
      this.dataServiceEleve.insertDataEleve(this.eleve).subscribe(res => {

        Swal.fire({
          title: 'Succès',
          html: 'L\'élève a été ajouté avec succès',
          icon: 'success',
          confirmButtonColor: '#2f1514',
        });
        return res;
      }, error => {
        Swal.fire({
          title: 'Erreur',
          html:'Une erreur s\'est produite lors de l\'ajout de l\'élève',
          icon: 'error',
          confirmButtonColor: '#2f1514',
        });
      });
    }
  }



  ngOnInit(): void {
  }




}
