import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RegisterTaskComponent } from './pages/register-task/register-task.component';
import { FormTaskComponent } from './components/form-task/form-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterTaskComponent,
    FormTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
