import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminGuard } from 'src/app/core/guards/admin.guard';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
  providers: [AdminGuard],
})
export class AdminModule {}
