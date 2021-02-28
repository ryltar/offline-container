import axios from "axios";

export class Interceptor {
    private static instance: Interceptor;

    private constructor() {}

    public static getInstance(): Interceptor {
        if(!Interceptor.instance) {
            Interceptor.instance = new Interceptor();
        }
        return Interceptor.instance;
    }

    public intercept() {
        axios.interceptors.request.use(function (config) {
            
            return config;
          }, function (error) {
            return Promise.reject(error);
          });

    }

}