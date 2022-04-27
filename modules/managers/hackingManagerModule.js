/** @param {NS} ns */
export class hackingManagerModule {
    constructor(ns) {
        this.moduleName = 'hackingManagerModule'
        this.target = 'n00dles'
    }
    preinit(ns) { }
    init(ns) { }
    runScriptOnServer(script, host, thirds, server) {
        this.ns.exec(script, host, thirds, server)
    }
    test() {
        let treeServers = this.upperModule.scanManagerModule.getServersTree()
        this.runScriptOnServer('hack.js', this.home, 1, 'n00dles')
    }
    screen(serv) {

        this.ns.print()
    }
    renderServer() {
        let server = this.ns.getServer(this.target)
        // this.ns.print()
        this.ns.print('name' + ' : ' + server.hostname)
        this.ns.print('moneyMax' + ' : ' + server.moneyMax)
        this.ns.print('moneyAvailable' + ' : ' + server.moneyAvailable)
        // this.ns.print(''+' : '+)
        // this.ns.print()
    }
}