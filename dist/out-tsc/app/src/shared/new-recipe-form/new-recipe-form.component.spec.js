import { TestBed } from '@angular/core/testing';
import { NewRecipeFormComponent } from './new-recipe-form.component';
describe('NewRecipeFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NewRecipeFormComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(NewRecipeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-recipe-form.component.spec.js.map