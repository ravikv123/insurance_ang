import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver:ComponentFactoryResolver) { }

  //where to Add
  setViewRef(viewRef)
  {
    this.viewRef=viewRef;
  }

  //what to add
addComponent(compToAdd:any): any{
  //entre comp will  have a factory created and register in resolver
  const factory = this.resolver.resolveComponentFactory(compToAdd);

  //access the viewref's injector to inject the comp
  const compRef = factory.create(this.viewRef.parentInjector);//parentInjector);

  //insert the hostview of the comp
  this.viewRef.insert(compRef.hostView);
  return compRef;
}
removeComponent(){
  this.viewRef.detach();
}

}
