import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from './layouts/layouts.module';
import { routes } from './routes';

@NgModule({
    declarations:[
        
    ],
    imports: [RouterModule.forRoot(routes),
        FormsModule,
        BrowserModule,
        LayoutsModule,
        AppComponent

    ],
    providers :[],
    bootstrap:[]
})
export class AppModule { }

