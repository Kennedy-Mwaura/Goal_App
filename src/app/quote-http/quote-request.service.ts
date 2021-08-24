import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Quote } from '../quote-class/quote';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quote: Quote;


  constructor(private http:HttpClient) { 
    this.quote = new Quote("", "");
  }
  quoteRequest(){
    interface ApiResponse {
      quote: string;
      author: string
    }
    let promise = new Promise<void>((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.quote = response.quote
        this.quote.author = response.author

        resolve()
      },
      error=>{
        this.quote.quote = "Never, never, never give up"
        this.quote.author = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }
}
