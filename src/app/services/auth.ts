


// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RegisterDto { email: string; password: string; }
interface LoginDto    { email: string; password: string; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://localhost:3000/auth'; 

  constructor(private http: HttpClient) {}

  register(dto: RegisterDto): Observable<any> {
    return this.http.post(`${this.base}/register`, dto);
  }

  login(dto: LoginDto): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(`${this.base}/login`, dto);
  }
}
