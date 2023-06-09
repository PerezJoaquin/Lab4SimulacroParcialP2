import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarioActivo="";
  
  constructor( private auth:Auth) { }

  async loginService(email:string, pass:string){
    try {
			const user = await signInWithEmailAndPassword(this.auth, email, pass);
      console.log("yay");
      this.usuarioActivo = email;
			return user;
		} catch (e) {
      console.log("nay");
			return null;
		}
  }

  logout() {
		return signOut(this.auth);
	}
}
