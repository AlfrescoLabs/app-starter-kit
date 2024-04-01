import { AppSidebarEntry } from '@app/sdk';

/** Default global application sidebar entries */
export const appSidebarEntries: Array<AppSidebarEntry> = [
  // Documents Plugin
  {
    text: 'APP.NAV.DOCUMENTS',
    icon: 'text_snippet',
    action: ['router.navigate', ['/documents']]
  },
  // Custom application Page 1
  {
    text: 'Page 1',
    icon: 'task',
    action: ['router.navigate', ['/page1']]
  },
  // Custom application Page 2
  {
    text: 'Page 2',
    icon: 'assignment',
    action: ['router.navigate', ['/page2']]
  },
  // Trashcan Plugin
  {
    text: 'Trashcan',
    icon: 'delete',
    action: ['router.navigate', ['/trashcan']]
  }
];
