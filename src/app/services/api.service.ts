import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) { }

  getdata(name:string){
    return this.firestore.collection<any>(name).snapshotChanges()
}

  postdata(name:string,data){
    return this.firestore.collection(name).add(data)
  }

  putdata(name:string,data){
    delete data.id;
    this.firestore.doc(`${name}/` + data.id).update(data);
  }

  deletedata(name:string,id){
    this.firestore.doc(`${name}/` + id).delete();
  }
}
