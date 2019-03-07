import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { EntriesRoutingModule } from './entries-routing.module';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntryFormComponent } from './entries-form/entry-form.component';

import {CalendarModule} from 'primeng/calendar';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [EntriesListComponent, EntryFormComponent],
  imports: [
    SharedModule,
    EntriesRoutingModule,
    CalendarModule,
    IMaskModule
  ]
})
export class EntriesModule { }
