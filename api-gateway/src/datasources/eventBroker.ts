import { RESTDataSource } from "@apollo/datasource-rest";

/**
 * La clase EventBrokerAPI extiende RESTDataSource para interactuar con el servicio de broker de eventos.
 * 
 * @remarks
 * Esta clase es responsable de emitir eventos al servicio de broker de eventos.
 * 
 * @example
 * ```typescript
 * const eventBroker = new EventBrokerAPI();
 * eventBroker.emitEvents(events, data);
 * ```
 */
export class EventBrokerAPI extends RESTDataSource{
   
       override baseURL?: string= "http://localhost:3001";
    
    async emitEvents(events: any ,data:any){
        return this.post(`/events`,{body:{events,data}});
    }
}