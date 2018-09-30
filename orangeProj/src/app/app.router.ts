import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotesComponent } from './notes/notes.component';
import { TasksComponent } from './tasks/tasks.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: NotesComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRouterModule {

}