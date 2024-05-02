import { Component } from '@angular/core';
import { TariffNScheduleComponent } from '@/app/components/tariff-nschedule/tariff-nschedule.component'
import { InstructorsComponent } from '@/app/components/instructors/instructors.component'
import { SpecialServicesComponent } from '../special-services/special-services.component';
import { FooterComponent } from '../footer/footer.component';
import { PhotosGalleryComponent } from '../photos-gallery/photos-gallery.component';
import { PrincipalSectionComponent } from '../principal-section/principal-section.component';
import { ItsUsComponent } from '../its-us/its-us.component';

@Component({
  selector: 'sections',
  standalone: true,
  imports: [
    TariffNScheduleComponent,
    InstructorsComponent,
    SpecialServicesComponent,
    FooterComponent,
    PhotosGalleryComponent,
    PrincipalSectionComponent,
    ItsUsComponent
  ],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss'
})
export class SectionsComponent {

}
