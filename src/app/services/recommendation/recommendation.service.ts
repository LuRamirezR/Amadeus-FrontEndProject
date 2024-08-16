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
  },
  'playa-templado-cultura-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Rio de Janeiro, Brasil',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Lisboa, Portugal',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'montana-frio-deportes-hostal-unadossemanas-menos30anos': {
    america: {
      city: 'Bariloche, Argentina',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Interlaken, Suiza',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'montana-templado-cultura-airbnb-unadossemanas-mas50anos': {
    america: {
      city: 'Cusco, Perú',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Granada, España',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'montana-frio-deportes-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Banff, Canadá',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Zermatt, Suiza',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'ciudad-templado-cultura-hotellujo-unadossemanas-mas50anos': {
    america: {
      city: 'Nueva York, EE.UU.',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'París, Francia',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'ciudad-templado-relax-airbnb-menosunasemana-menos30anos': {
    america: {
      city: 'Miami, EE.UU.',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Viena, Austria',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'ciudad-frio-cultura-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Toronto, Canadá',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Berlín, Alemania',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'playa-caluroso-deportes-hostal-unadossemanas-menos30anos': {
    america: {
      city: 'Tulum, México',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Ibiza, España',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'montana-frio-cultura-airbnb-unadossemanas-mas50anos': {
    america: {
      city: 'Ushuaia, Argentina',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Reykjavik, Islandia',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'playa-templado-relax-airbnb-masdossemanas-mas50anos': {
    america: {
      city: 'Punta Cana, República Dominicana',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Algarve, Portugal',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'ciudad-templado-deportes-hotellujo-menosunasemana-3050anos': {
    america: {
      city: 'Chicago, EE.UU.',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Londres, Reino Unido',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'playa-templado-cultura-hostal-unadossemanas-menos30anos': {
    america: {
      city: 'San Juan, Puerto Rico',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Niza, Francia',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'montana-templado-deportes-airbnb-masdossemanas-menos30anos': {
    america: {
      city: 'Machu Picchu, Perú',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Chamonix, Francia',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'ciudad-caluroso-cultura-hotellujo-unadossemanas-mas50anos': {
    america: {
      city: 'Los Ángeles, EE.UU.',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Roma, Italia',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'playa-caluroso-cultura-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Honolulu, Hawái',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Malta',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'montana-frio-relax-airbnb-unadossemanas-mas50anos': {
    america: {
      city: 'Aspen, EE.UU.',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Innsbruck, Austria',
      image: 'assets/img/cards/4-question.svg'
    }
  },
  'ciudad-templado-cultura-hostal-unadossemanas-3050anos': {
    america: {
      city: 'Ciudad de México, México',
      image: 'assets/img/cards/3-question.svg'
    },
    europe: {
      city: 'Madrid, España',
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
