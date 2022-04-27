export class systemManagerModule {
    constructor(ns) {
        this.moduleLevel = 0;
        this.moduleName = 'systemManagerModule';

        this.ns = ns
        this.home = 'home'
        this.modules = []
    }
    registerModule(module) {
        let mod = new module(this.ns)

        this[mod.moduleName] = mod;
        this[mod.moduleName].ns = this.ns
        this[mod.moduleName].home = this.home
        this[mod.moduleName].moduleLevel = this.moduleLevel + 1;
        this[mod.moduleName].upperModule = this;
        this[mod.moduleName].modules = []
        this[mod.moduleName].registerModule = this.registerModule;

        this.modules.push(mod.moduleName)

        if (mod.preinit) { mod.preinit(this) };
        if (mod.init) { mod.init(this) };
    }
    getModulesList() {
        return this.modules
    }
    printModulesList() {
        this.ns.print(this.getModulesList())
    }
}

//{
//     preScan(node){
//         if(node.purchasedByPlayer){
//             this.hostingPool.add(node);
//         }else{
//             this.scanPool.add(node);
//         }
//         for(let link of this.ns.scan(node)){
//             if(!this.scanPool.has(link)){
//                 this.preScan(link);
//             }
//         }
//     }
//     getArrServersList(){
//         this.scanPool= new Set();
//         let tmp =[]
//         this.preScan(this.home)
//         for(let serv of this.scanPool){
//             tmp.push(this.ns.getServer(serv))
//         }
//         return tmp
//     }
//     getArrTargetsList(){
//         let serversList = this.getArrServersList();
//         let targetsList =[];
//         serversList.forEach((v)=>{
//             if(v.requiredHackingSkill<=this.ns.getHackingLevel()){
//                 targetsList.push(v)
//             }
//         })
//         targetsList.sort(compare).reverse()
//         return targetsList
//     }





//     buyAllprogram(){
//         this.getBuyProgramsList(this.getArrTargetsList())
//     }
//     getBuyProgramsList(arr){
//         let startIndex=Number.POSITIVE_INFINITY
//         let count=0
//         for(let i =0;i<arr.length-1;i++){
//             if(arr[i].numOpenPortsRequired>arr[i].openPortCount){
//                 if(startIndex>arr[i].openPortCount){startIndex=arr[i].openPortCount}
//                 if(count<(arr[i].numOpenPortsRequired-arr[i].openPortCount)){count=arr[i].numOpenPortsRequired-arr[i].openPortCount}
//             }
//         }
//         this.buyProgramsPrograms(startIndex,count)
//     }
//     buyProgramsPrograms(startIndex,count){
//         for(let i=startIndex;i<=count;i++){
//             this.buyProgram(this.programs[i])
//         }
//     }
//     buyProgram(name){
//         this.ns.enableLog('ALL')
//         if(this.ns.getPlayer().tor){
//             try{this.ns.purchaseProgram(name)}catch(e){}
//         }else{
//             try{this.ns.purchaseTor()}catch(e){}
//         }
//         this.ns.disableLog('ALL')
//     }
// };
// function compare(_a, _b) {
//     let a = _a.requiredHackingSkill
//     let b = _b.requiredHackingSkill
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     return 0;
// };