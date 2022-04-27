export class scanManagerModule {
    constructor(ns) {
        this.moduleName = 'scanManagerModule'
        this.serversPool = new Set()
    }
    preinit() { }
    init() { }

    getServersPool() {
        this.serversPool = new Set()
        this.scan(this.home)
        return [...this.serversPool]

    }
    scan(node) {
        this.serversPool.add(node)
        this.ns.scan(node).forEach(v => {
            if (!this.serversPool.has(v)) { this.scan(v) }
        })
    }
    getPurchesServers() {
        let arr = []
        this.getServersPool().forEach(v => {
            let s = this.ns.getServer(v)
            if (s.purchasedByPlayer) {
                arr.push(v)
            }
        })
        arr.shift()
        this.ns.print([...arr])
        return arr
    }
    getServersTree() {
        let rootServer = this.getHomeServer()
        this.scanServers(rootServer)
        return rootServer
    }
    scanServers(object) {
        let scan = this.ns.scan(object.hostname)
        if (object.hostname !== 'home') { scan.shift() }
        object.serverList = {}
        scan.forEach(v => {
            object.serverList[v] = this.ns.getServer(v)
            this.scanServers(object.serverList[v])
        }, this)
    }
    getHomeServer() {
        return this.ns.getServer(this.home)
    }
}

