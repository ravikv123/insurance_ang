export function myLogger() {
    return function(constructor:any){
        const comp = constructor.name;
        console.log(`%c ${comp} initilized`,'color:blue;font-weight:bold');
    }
}
