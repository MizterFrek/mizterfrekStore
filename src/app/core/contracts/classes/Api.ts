import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "../../../../environments/environment.development";

export abstract class Api {
    
    /** 
     * @url https://fakestoreapi.com/docs
     **/ 
    private fakeStoreApi = environment.api.FAKE_STORE_API;

    protected http = inject(HttpClient);

    public url(uri: string = '/'): string {
        return `${this.fakeStoreApi}/${uri}`;
    }
}