import { MenuItem } from '../interfaces/appInterfaces';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 0,
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    id: 1,
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
  {
    id: 3,
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'Switch',
  },
  {
    id: 4,
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'Alert',
  },
  {
    id: 5,
    name: 'TextInput',
    icon: 'document-text-outline',
    component: 'TextInput',
  },
  {
    id: 6,
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefresh',
  },
  {
    id: 7,
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionList',
  },
  {
    id: 8,
    name: 'Modals',
    icon: 'copy-outline',
    component: 'Modals',
  },
  {
    id: 9,
    name: 'Infinite Scroll',
    icon: 'download-outline',
    component: 'InfiniteScroll',
  },
  {
    id: 10,
    name: 'Slides',
    icon: 'flower-outline',
    component: 'Slides',
  },
  {
    id: 11,
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeTheme',
  },
];
