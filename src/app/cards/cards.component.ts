import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  currentCard = 1;
  selectedOptions: { [key: string]: string } = {};
  vacationAmericaRecommendation: string = '';
  vacationEuropaRecommendation: string = '';

  onSelect(card: string, option: string) {
    this.selectedOptions[card] = option;
    console.log(this.selectedOptions);
  }

  onNext() {
    if (this.currentCard < 11) {
      this.currentCard++;
    } else if (this.currentCard === 11) {
      this.generateRecommendation();
      this.currentCard++;
    }
  }

  onPrevious() {
    if (this.currentCard > 1) {
      this.currentCard--;
    }
  }

  generateRecommendation() {
    const { entorno, clima, actividades, alojamiento, duracion, edad } = this.selectedOptions;
    switch (`${entorno}-${clima}-${actividades}-${alojamiento}-${duracion}-${edad}`) {
      case 'playa-caluroso-relax-hotellujo-unadossemanas-menos30anos':
        this.vacationAmericaRecommendation = 'Playa del Carmen, México';
        this.vacationEuropaRecommendation = 'Santorini, Grecia';
        break;
      case 'playa-nacional-caluroso':
        this.vacationAmericaRecommendation = 'Te recomendamos visitar las playas de Cancún en México.';
        this.vacationEuropaRecommendation = '';
        break;
      case 'montana-internacional-frio':
        this.vacationAmericaRecommendation = 'Te recomendamos visitar los Alpes Suizos.';
        this.vacationEuropaRecommendation = '';
        break;
      case 'ciudad-internacional-templado':
        this.vacationAmericaRecommendation = 'Te recomendamos visitar París, Francia.';
        this.vacationEuropaRecommendation = '';
        break;
      // Puedes agregar más casos aquí para otras combinaciones.
      default:
        this.vacationAmericaRecommendation = 'Te recomendamos explorar destinos variados según tus preferencias.';
        this.vacationEuropaRecommendation = '';
        break;
    }
  }
}
