import { TestBed } from '@angular/core/testing';
import { RecipeDashboardComponent } from './recipe-dashboard.component';
describe('RecipeDashboardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecipeDashboardComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=recipe-dashboard.component.spec.js.map