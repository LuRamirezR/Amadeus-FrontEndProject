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
      city: 'México',
      image: 'assets/img/recomendations/playa-del-carmen.png'
    },
    europe: {
      city: 'Grecia',
      image: 'assets/img/recomendations/santorini.png'
    }
  },
  'playa-caluroso-cultura-airbnb-menosunasemana-menos30anos': {
    america: {
      city: 'Colombia',
      image: 'assets/img/recomendations/cartagena.png'
    },
    europe: {
      city: 'España',
      image: 'assets/img/recomendations/barcelona.png'
    }
  },
  'playa-templado-cultura-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Brasil',
      image: 'assets/img/recomendations/rio-de-janeiro.png'
    },
    europe: {
      city: 'Portugal',
      image: 'assets/img/recomendations/lisboa.png'
    }
  },
  'montana-frio-deportes-hostal-unadossemanas-menos30anos': {
    america: {
      city: 'Argentina',
      image: 'assets/img/recomendations/bariloche.png'
    },
    europe: {
      city: 'Suiza',
      image: 'assets/img/recomendations/interlaken.png'
    }
  },
  'montana-templado-cultura-airbnb-unadossemanas-mas50anos': {
    america: {
      city: 'Perú',
      image: 'assets/img/recomendations/cusco.png'
    },
    europe: {
      city: 'España',
      image: 'assets/img/recomendations/granada.png'
    }
  },
  'montana-frio-deportes-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Canadá',
      image: 'assets/img/recomendations/banff.png'
    },
    europe: {
      city: 'Suiza',
      image: 'assets/img/recomendations/zermatt.png'
    }
  },
  'ciudad-templado-cultura-hotellujo-unadossemanas-mas50anos': {
    america: {
      city: 'EE.UU.',
      image: 'assets/img/recomendations/nueva-york.png'
    },
    europe: {
      city: 'Francia',
      image: 'assets/img/recomendations/paris.png'
    }
  },
  'ciudad-templado-relax-airbnb-menosunasemana-menos30anos': {
    america: {
      city: 'EE.UU.',
      image: 'assets/img/recomendations/miami.png'
    },
    europe: {
      city: 'Austria',
      image: 'assets/img/recomendations/viena.png'
    }
  },
  'ciudad-frio-cultura-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Canadá',
      image: 'assets/img/recomendations/toronto.png'
    },
    europe: {
      city: 'Alemania',
      image: 'assets/img/recomendations/berlin.png'
    }
  },
  'playa-caluroso-deportes-hostal-unadossemanas-menos30anos': {
    america: {
      city: 'México',
      image: 'assets/img/recomendations/tulum.png'
    },
    europe: {
      city: 'España',
      image: 'assets/img/recomendations/ibiza.png'
    }
  },
  'montana-frio-cultura-airbnb-unadossemanas-mas50anos': {
    america: {
      city: 'Argentina',
      image: 'assets/img/recomendations/ushuaia.png'
    },
    europe: {
      city: 'Islandia',
      image: 'assets/img/recomendations/reykjavik.png'
    }
  },
  'playa-templado-relax-airbnb-masdossemanas-mas50anos': {
    america: {
      city: 'República Dominicana',
      image: 'assets/img/recomendations/punta-cana.png'
    },
    europe: {
      city: 'Portugal',
      image: 'assets/img/recomendations/algarve.png'
    }
  },
  'ciudad-templado-deportes-hotellujo-menosunasemana-3050anos': {
    america: {
      city: 'EE.UU.',
      image: 'assets/img/recomendations/chicago.png'
    },
    europe: {
      city: 'Reino Unido',
      image: 'assets/img/recomendations/londres.png'
    }
  },
  'playa-templado-cultura-hostal-unadossemanas-menos30anos': {
    america: {
      city: 'Puerto Rico',
      image: 'assets/img/recomendations/san-juan.png'
    },
    europe: {
      city: 'Francia',
      image: 'assets/img/recomendations/niza.png'
    }
  },
  'montana-templado-deportes-airbnb-masdossemanas-menos30anos': {
    america: {
      city: 'Perú',
      image: 'assets/img/recomendations/machu-picchu.png'
    },
    europe: {
      city: 'Francia',
      image: 'assets/img/recomendations/chamonix.png'
    }
  },
  'ciudad-caluroso-cultura-hotellujo-unadossemanas-mas50anos': {
    america: {
      city: 'EE.UU.',
      image: 'assets/img/recomendations/los-angeles.png'
    },
    europe: {
      city: 'Italia',
      image: 'assets/img/recomendations/roma.png'
    }
  },
  'playa-caluroso-cultura-hotellujo-unadossemanas-3050anos': {
    america: {
      city: 'Hawái',
      image: 'assets/img/recomendations/honolulu.png'
    },
    europe: {
      city: 'Malta',
      image: 'assets/img/recomendations/malta.png'
    }
  },
  'montana-frio-relax-airbnb-unadossemanas-mas50anos': {
    america: {
      city: 'EE.UU.',
      image: 'assets/img/recomendations/aspen.png'
    },
    europe: {
      city: 'Austria',
      image: 'assets/img/recomendations/innsbruck.png'
    }
  },
  'ciudad-templado-cultura-hostal-unadossemanas-3050anos': {
    america: {
      city: 'México',
      image: 'assets/img/recomendations/ciudad-de-mexico.png'
    },
    europe: {
      city: 'España',
      image: 'assets/img/recomendations/madrid.png'
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
        image: 'assets/img/recomendations/bora-bora.png'
      },
      europe: {
        city: 'Dubái, Emiratos Árabes',
        image: 'assets/img/recomendations/dubai.png'
      }
    };
  }

  constructor() { }
}
