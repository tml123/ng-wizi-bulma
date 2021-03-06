import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OVERLAY_CONTAINER_PROVIDER } from './overlay/overlay-container';
import { DOM_SERVICE_PROVIDER } from './dom/dom.service';
import { NwbDebounceDirective } from './directives/debounce/debounce.directive';
import { NwbToolTipDirective } from './directives/tooltip/tooltip.directive';
import { NwbSpinnerComponent } from './components/spinner/spinner.component';
import { NwbFilterRoutingBuilder } from './services/filter-routing/filter-routing-group.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [OVERLAY_CONTAINER_PROVIDER, DOM_SERVICE_PROVIDER, NwbFilterRoutingBuilder],
  entryComponents: [],
  declarations: [NwbSpinnerComponent, NwbDebounceDirective, NwbToolTipDirective],
  exports: [NwbSpinnerComponent, NwbDebounceDirective, NwbToolTipDirective]
})
export class NwbCommonModule {}
