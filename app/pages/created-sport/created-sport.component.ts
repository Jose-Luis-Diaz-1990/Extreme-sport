import { SportTransform } from './../../core/services/sports/sport.models';
import { SportsService } from './../../core/services/sports/sports.service';
import { switchMap, map, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-created-sport',
  templateUrl: './created-sport.component.html',
  styleUrls: ['./created-sport.component.scss']
})
export class CreatedSportComponent implements OnInit{

  public sportForm?: FormGroup;
  public titleBi: string = '';
  public imageBi: string = '';
  public descriptionBi: string = '';
  public equipmentBi: string = '';
  public authorBi: string = '';
  public canEdit: boolean = false;
  public sportId?: string;
  

  //Aquí convino dos peticones por un lado el id de los query params y cuando me llega recupero los datos de la vista detalle para ese id.
  //Compruebo si el producto existe y en función del resultado voy a editar o a crear.
  constructor(
    private formbuilder: FormBuilder, 
    private router: Router, 
    private activateRoute: ActivatedRoute, 
    private sportService: SportsService 
    ){
    this.activateRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if(!id) {
          return of(undefined);
        } else{
          this.sportId = id;
          return this.sportService.getSportDetail(id);
        }
      })
    ).subscribe((sport?: SportTransform) => {
      this.canEdit = !!sport;
      this.createNewForm(sport);
    })
  }

  //Hago la lógica para el doble data binding, permite mostrar el valor de los campos del formulario cuando hago algún cambio.
  public ngOnInit() {
    this.sportForm?.get('title')?.valueChanges.subscribe((value) =>{
      if (!value) { return; }
      this.titleBi = value;
    });
    this.sportForm?.get('image')?.valueChanges.subscribe((value) => {
      if (!value) { return; }
      this.imageBi = value;
    });
     this.sportForm?.get('description')?.valueChanges.subscribe((value) =>{
      if (!value) { return; }
      this.descriptionBi = value;
    });
     this.sportForm?.get('equipment')?.valueChanges.subscribe((value) =>{
      if (!value) { return; }
      this.equipmentBi = value;
    });
     this.sportForm?.get('author')?.valueChanges.subscribe((value) =>{
      if (!value) { return; }
      this.authorBi = value;
    });
  }

  public createdNewSport(){
    if (!this.sportForm?.valid) { return; }
    const sportRequest = this.canEdit && this.sportId ? this.sportService.editSport(this.sportId, this.sportForm?.value)
    : this.sportService.createSport(this.sportForm?.value);
    sportRequest.subscribe((sport) => {
      this.sportForm?.reset();
    });
  }

  public createNewForm(sport?: SportTransform){
    this.sportForm = this.formbuilder.group({
      title: new FormControl(sport?.title || '', [Validators.required]),
      description: new FormControl(sport?.description || '', [Validators.required]),
      equipment: new FormControl(sport?.equipment || '', [Validators.required]),
      author: new FormControl(sport?.authors || '', [Validators.required]),
      image: new FormControl(sport?.image || '', [Validators.required]),
    });
  }


  public navigateToMyCreation() {
      this.router.navigate(['/created-sport/my-created-sport']);
  }

}
