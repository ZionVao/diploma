import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  algoliaApiKey: '6d1869890dab96592b191e63a8deb5b5',
  apiUrl: 'http://localhost:4000',
};

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
