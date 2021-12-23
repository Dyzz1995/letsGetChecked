import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let titleService: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot({
          timeOut: 4000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        }),
      ],
      declarations: [FormComponent],
      providers: [{ provide: Title, useClass: Title }, ToastrService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it(`should have as title 'Add comment'`, async(() => {
    titleService = TestBed.get(Title);
    titleService.setTitle('Add comment');
    expect(titleService.getTitle()).toEqual('Add comment');
  }));

  it(`should have as title 'Edit comment'`, async(() => {
    titleService = TestBed.get(Title);
    component.comment = {
      id: 0,
      postId: 1,
      user: 'John',
      content: 'Test',
      date: '2021-12-20',
    };

    fixture.detectChanges();

    if (component.comment) {
      titleService.setTitle('Edit comment');
    }
    expect(titleService.getTitle()).toEqual('Edit comment');
  }));
});
