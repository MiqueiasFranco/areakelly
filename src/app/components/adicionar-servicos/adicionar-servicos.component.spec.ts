import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarServicosComponent } from './adicionar-servicos.component';

describe('AdicionarServicosComponent', () => {
  let component: AdicionarServicosComponent;
  let fixture: ComponentFixture<AdicionarServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarServicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
