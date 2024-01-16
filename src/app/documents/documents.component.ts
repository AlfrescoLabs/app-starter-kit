/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, ViewChild, Input, ViewEncapsulation, inject } from '@angular/core';
import { NotificationService } from '@alfresco/adf-core';
import { DocumentListComponent } from '@alfresco/adf-content-services';
import { PreviewService } from '../services/preview.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-documents' }
})
export class DocumentsComponent {

  private notificationService = inject(NotificationService);
  private preview = inject(PreviewService);

  @Input()
  showViewer = false;
  nodeId: string = null;

  @ViewChild('documentList')
  documentList: DocumentListComponent;

  uploadSuccess() {
    this.notificationService.openSnackMessage('File uploaded');
    this.documentList.reload();
  }

  showPreview(event: any) {
    const entry = event.value.entry;

    if (entry && entry.isFile) {
      this.preview.showResource(entry.id);
    }
  }
}
