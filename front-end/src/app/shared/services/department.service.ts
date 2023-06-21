import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environment/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private router: Router, private http: HttpClient) {}

  createDepartment(title: string) {
    return this.http.post<{ title: string; id: string }>(
      `${environment.apiUrl}/department`,
      {
        title,
      }
    );
  }
}
