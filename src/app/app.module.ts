import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ContentComponent } from './shared/ui/patterns/content/content.component';
import { HeaderComponent } from './shared/ui/patterns/header/header.component';
import { MainLayoutComponent } from './shared/ui/patterns/main-layout/main-layout.component';
import { SidebarComponent } from './shared/ui/patterns/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {
  HttpClientJsonpModule,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TooltipComponent } from './shared/ui/elements/tooltip/tooltip.component';
import { TooltipDirective } from './shared/ui/elements/tooltip/tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinnerComponent } from './shared/ui/elements/spinner/spinner.component';
import { PostComponent } from './pages/posts/post/post.component';
import { PostsModule } from './pages/posts/posts.module';
import { CommentsModule } from './pages/comments/comments.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/posts/post/form/form.component';
import { ToastrModule } from 'ngx-toastr';
import { NetworkInterceptor } from './core/interceptors/network.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    ContentComponent,
    PostsComponent,
    SidebarComponent,
    CommentsComponent,
    TooltipComponent,
    FormComponent,
    TooltipDirective,
    SpinnerComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    OverlayModule,
    HttpClientJsonpModule,
    PostsModule,
    CommentsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
