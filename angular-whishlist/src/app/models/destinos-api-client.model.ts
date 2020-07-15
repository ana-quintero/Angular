import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject, from } from 'rxjs';
import { Injectable, Inject, forwardRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from './destinos-viajes-state.model';

@Injectable()
export class DestinosApiClient {
    destinos: DestinoViaje[] = [];
    
    constructor(private store: Store<AppState>){
    }
    add(d: DestinoViaje){
        this.store.dispatch(new NuevoDestinoAction(d));
    }
    elegir(d: DestinoViaje){
        this.store.dispatch(new ElegidoFavoritoAction(d));
    }
}
