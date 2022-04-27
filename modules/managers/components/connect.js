export class connect {
    constructor() {
        this.moduleName = 'connect'
    }
    preinit() { }
    init() { }
    connectToServer(nameTarget) {

    }
    serchPathToConnect(target) {
        let tree = this.upperModule.getServersTree()
        let path = []
        let deep = 0
        this.getSearchEndPoint(path, tree, target)
        //this.createPath(path,deep)
        return path
    }
    getSearchEndPoint(path, obj, target) {
        if (obj.hostname === target) {
            path.push(obj)
        } else {
            for (let key in obj.serverList) {
                this.getSearchEndPoint(path, obj.serverList[key], target)
            }
        }
    }
    // createPath(path,deep){
    //     if(path.hostname!==this.home){
    //     let host = this.ns.scan(path[deep].hostname)[0]
    //     this.ns.print(host)
    //     deep++
    //     path.push(host)
    //     this.createPath(path,deep)}
    // }
}