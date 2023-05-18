import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeliculasActorComponent } from './tabla-peliculas-actor.component';

describe('TablaPeliculasActorComponent', () => {
  let component: TablaPeliculasActorComponent;
  let fixture: ComponentFixture<TablaPeliculasActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeliculasActorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPeliculasActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
