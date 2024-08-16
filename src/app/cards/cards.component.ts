import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';

type RequiredOptions = {
  [key: number]: string;
};

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RecommendationComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  currentCard = 1;
  selectedOptions: { [key: string]: string } = {};
  vacationExclusiveRecommendation: string = '';
  vacationAmericaRecommendation: string = '';
  vacationEuropaRecommendation: string = '';

  // método getter
  get progress(): number {
    return (this.currentCard / 11) * 100;
  }

  requiredOptions: RequiredOptions = {
    1: 'entorno',
    2: 'destino',
    3: 'clima',
    4: 'molesta-lluvia',
    5: 'actividades',
    6: 'gastronomia',
    7: 'alojamiento',
    8: 'aloja-ciudad-afuera',
    9: 'duracion',
    10: 'descanso',
    11: 'edad'
  };

  onSelect(card: string, option: string) {
    this.selectedOptions[card] = option;
    console.log(this.selectedOptions);
  }

  // Método del boton Next
  onNext() {
    // verifica que sí ha seleccionado una opcion de las respuestas
    const requiredOption = this.requiredOptions[this.currentCard];
    if (requiredOption && !this.selectedOptions[requiredOption]) {
      alert('Debe seleccionar una opción para continuar');
      return;
    }
    if (this.currentCard < 11) {
      this.currentCard++;
    } else if (this.currentCard === 11) {
      this.generateRecommendation();
      this.currentCard++;
    }
  }

  // Método del boton Previous
  onPrevious() {
    if (this.currentCard > 1) {
      this.currentCard--;
    }
  }

  generateRecommendation() {
    
  }
}
