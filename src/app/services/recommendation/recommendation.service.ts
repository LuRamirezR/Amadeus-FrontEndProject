import { Injectable } from '@angular/core';

// una interface define la estructura de un objeto, es decir, las propiedades que debe tener
export interface Recommendation {
  america: {
    city: string;
    image: string; // Ruta a la imagen de América
  };
  europe: {
    city: string;
    image: string; // Ruta a la imagen de Europa
  };
  exclusive?: string;
}

const recommendations: { [key: string]: Recommendation } = {
  'playa-caluroso-relax-hotellujo-unadossemanas-menos30anos': {
    america: {
      city: 'Playa del Carmen, México',
      image: 'assets/img/cards/1-question.svg'
    },
    europe: {
      city: 'Santorini, Grecia',
      image: 'assets/img/cards/2-question.svg'
    }
  },
  'playa-caluroso-cultura-airbnb-menosunasemana-menos30anos': {
    america: {
      city: 'Cartagena, Colombia',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Barcelona, España',
      image: 'assets/img/cards/4-question.svg'
    }
  }
};

// @Injectable: Marca el servicio como inyectable, lo que significa que puede ser usado en otros componentes.
// providedIn: 'root' indica que se crea una sola instancia del servicio para toda la aplicación.
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  generateRecommendation(selectedOptions: { [key: string]: string }): Recommendation {
    const orderedKeys = ['entorno', 'clima', 'actividades', 'alojamiento', 'duracion', 'edad'];
    const key = orderedKeys.map(k => selectedOptions[k]).join('-'); //organiza los valores de selectedOptions y separa por -
    console.log('Clave generada:', key); // imprimir la clave
    
    // Buscamos la recomendación en el objeto
    const recommendation = recommendations[key];

    // Si no encontramos la recomendación, retorna un valor por defecto
    return recommendation || {
      exclusive: 'Tus gustos son bastante exóticos, así que te sugerimos los siguientes destinos:',
      america: {
        city: 'Bora Bora, Polinesia Francesa',
        image: 'assets/img/cards/5-question.svg'
      },
      europe: {
        city: 'Dubái, Emiratos Árabes',
        image: 'assets/img/cards/6-question.svg'
      }
    };
  }

  constructor() { }
}
