import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let titleService: Title;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [PostComponent],
      providers: [{ provide: Title, useClass: Title }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.post = {
      title: 'test',
      id: 1,
      author: 'user',
      description: 'TEST  TESTE',
      content: '<p>coisas</p>',
      publish_date: '2021-12-20',
      slug: 'blog-test',
    };
    fixture.detectChanges();
  });

  it(`should have as title 'test'`, async(() => {
    titleService = TestBed.get(Title);
    titleService.setTitle(component.post.title);
    expect(titleService.getTitle()).toEqual('test');
  }));
});
