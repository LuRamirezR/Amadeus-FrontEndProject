import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

type RequiredOptions = {
  [key: number]: string;
};

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
  vacationExclusiveRecommendation: string = '';
  vacationAmericaRecommendation: string = '';
  vacationEuropaRecommendation: string = '';

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
    const { entorno, clima, actividades, alojamiento, duracion, edad } = this.selectedOptions;
    switch (`${entorno}-${clima}-${actividades}-${alojamiento}-${duracion}-${edad}`) {
      case 'playa-caluroso-relax-hotellujo-unadossemanas-menos30anos':
        this.vacationAmericaRecommendation = 'Playa del Carmen, México';
        this.vacationEuropaRecommendation = 'Santorini, Grecia';
        break;
      case 'playa-caluroso-cultura-airbnb-menosunasemana-menos30anos':
        this.vacationAmericaRecommendation = 'Cartagena, Colombia';
        this.vacationEuropaRecommendation = 'Barcelona, España';
        break;
      case 'playa-templado-cultura-hotellujo-unadossemanas-3050anos':
        this.vacationAmericaRecommendation = 'Rio de Janeiro, Brasil';
        this.vacationEuropaRecommendation = 'Lisboa, Portugal';
        break;
      case 'montana-frio-deportes-hostal-unadossemanas-menos30anos':
        this.vacationAmericaRecommendation = 'Bariloche, Argentina';
        this.vacationEuropaRecommendation = 'Interlaken, Suiza';
        break;
      case 'montana-templado-cultura-airbnb-unadossemanas-mas50anos':
        this.vacationAmericaRecommendation = 'Cusco, Perú';
        this.vacationEuropaRecommendation = 'Granada, España';
        break;
      case 'montana-frio-deportes-hotellujo-unadossemanas-3050anos':
        this.vacationAmericaRecommendation = 'Banff, Canadá';
        this.vacationEuropaRecommendation = 'Zermatt, Suiza';
        break;
      case 'ciudad-templado-cultura-hotellujo-unadossemanas-mas50anos':
        this.vacationAmericaRecommendation = 'Nueva York, EE.UU.';
        this.vacationEuropaRecommendation = 'París, Francia';
        break;
      case 'ciudad-templado-relax-airbnb-menosunasemana-menos30anos':
        this.vacationAmericaRecommendation = 'Miami, EE.UU.';
        this.vacationEuropaRecommendation = 'Viena, Austria';
        break;
      case 'ciudad-frio-cultura-hotellujo-unadossemanas-3050anos':
        this.vacationAmericaRecommendation = 'Toronto, Canadá';
        this.vacationEuropaRecommendation = 'Berlín, Alemania';
        break;
      case 'playa-caluroso-deportes-hostal-unadossemanas-menos30anos':
        this.vacationAmericaRecommendation = 'Tulum, México';
        this.vacationEuropaRecommendation = 'Ibiza, España';
        break;
      case 'montana-frio-cultura-airbnb-unadossemanas-mas50anos':
        this.vacationAmericaRecommendation = 'Ushuaia, Argentina';
        this.vacationEuropaRecommendation = 'Reykjavik, Islandia';
        break;
      case 'playa-templado-relax-airbnb-masdossemanas-mas50anos':
        this.vacationAmericaRecommendation = 'Punta Cana, República Dominicana';
        this.vacationEuropaRecommendation = 'Algarve, Portugal';
        break;
      case 'ciudad-templado-deportes-hotellujo-menosunasemana-3050anos':
        this.vacationAmericaRecommendation = 'Chicago, EE.UU.';
        this.vacationEuropaRecommendation = 'Londres, Reino Unido';
        break;
      case 'playa-templado-cultura-hostal-unadossemanas-menos30anos':
        this.vacationAmericaRecommendation = 'San Juan, Puerto Rico';
        this.vacationEuropaRecommendation = 'Niza, Francia';
        break;
      case 'montana-templado-deportes-airbnb-masdossemanas-menos30anos':
        this.vacationAmericaRecommendation = 'Machu Picchu, Perú';
        this.vacationEuropaRecommendation = 'Chamonix, Francia';
        break;
      case 'ciudad-caluroso-cultura-hotellujo-unadossemanas-mas50anos':
        this.vacationAmericaRecommendation = 'Los Ángeles, EE.UU.';
        this.vacationEuropaRecommendation = 'Roma, Italia';
        break;
      case 'playa-caluroso-cultura-hotellujo-unadossemanas-3050anos':
        this.vacationAmericaRecommendation = 'Honolulu, Hawái';
        this.vacationEuropaRecommendation = 'Malta';
        break;
      case 'montana-frio-relax-airbnb-unadossemanas-mas50anos':
        this.vacationAmericaRecommendation = 'Aspen, EE.UU.';
        this.vacationEuropaRecommendation = 'Innsbruck, Austria';
        break;
      case 'ciudad-templado-cultura-hostal-unadossemanas-3050anos':
        this.vacationAmericaRecommendation = 'Ciudad de México, México';
        this.vacationEuropaRecommendation = 'Madrid, España';
        break;
      default:
        this.vacationExclusiveRecommendation = 'Tus gustos son bastante exóticos, así que te sugerimos los siguientes destinos:';
        this.vacationAmericaRecommendation = 'Bora Bora, Polinesia Francesa';
        this.vacationEuropaRecommendation = 'Dubái, Emiratos Árabes';
        break;
    }
  }
}
