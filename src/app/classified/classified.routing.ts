import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './components/post-add/post-add.component';
import { ViewBikesComponent } from './components/view-bikes/view-bikes.component';
import { AddDetailViewComponent } from './components/add-detail-view/add-detail-view.component';



const routes: Routes = [
    { path: '', redirectTo: '/post-add', pathMatch: 'full' },
    { path: 'post-add', component: PostAddComponent },
    { path: 'view-bikes', component: ViewBikesComponent },
    { path: 'bike-detai-view', component: AddDetailViewComponent }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClassifiedRoutingModule { }
