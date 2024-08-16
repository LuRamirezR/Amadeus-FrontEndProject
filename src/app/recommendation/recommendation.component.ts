import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recommendation, RecommendationService } from '../services/recommendation/recommendation.service';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.scss'
})
export class RecommendationComponent {

  //Recibe las opciones seleccionadas del componente padre (CardsComponent)
  @Input() selectedOptions: { [key: string]: string } = {};
  recommendation: Recommendation | undefined; //Almacena la recomendación generada por el servicio

  // Inyecta el servicio RecommendationService
  constructor(private recommendationService: RecommendationService) {}

  ngOnInit() {
    //Llama al método generateRecommendation del servicio para obtener la recomendación
    this.recommendation = this.recommendationService.generateRecommendation(this.selectedOptions); 
    if (this.recommendation) {
      console.log(this.recommendation.america);
      console.log(this.recommendation.europe);
    } else {
      console.log('No hay recomendación disponible');
    }
  }
}
