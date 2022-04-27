// THIS IS TEMPLATE

export class nameManagerModule {
    constructor(ns) {
        this.moduleName = 'nameManagerModule'

    }
    preinit(ns) { }
    init(ns) { }
}

/*
==================================================================================================================================
FILE AND LOCATION MANAGER :

The manager file is always on the path : modules/managers/ like 'modules/managers/nameManagerModule.js'
----------------------------------------------------------------------------------------------------------------------------------
The manager file is always based on the principle : name + 'ManagerModule.js' like 'nameManagerModule.js'
==================================================================================================================================
MANAGER CLASS NAME :

The manager class name is always based on the principle : name + 'ManagerModule' like 'nameManagerModule'
==================================================================================================================================
RULES FOR WRITING CLASS :

This class always has a 'constructor' with an 'ns' argument to register 'NS' functions in itself.
----------------------------------------------------------------------------------------------------------------------------------
This class alweys has a property 'moduleName' with value self class name like :
class nameManagerModule{
    constructor(ns){
        this.moduleName = 'nameManagerModule'
    }
}
----------------------------------------------------------------------------------------------------------------------------------
Also the class always has 2 functions :
    1) preinit(ns){} :
This function is called with argument "ns" when registering the manager in the system manager if it exists
    2) init(ns){} :
This function is called after "preinit(ns)" with argument "ns" when registering the manager in the system manager if it exists
==================================================================================================================================
AFTER REGISTERING:

After registration, this class becomes an object with the following properties that the registrar adds:
    1) moduleLevel :
This property indicates the depth level of the registered module relative to the one in which it is registered,
root module has depth level 0
    2) upperModule :
This property is a ref to the module in which this module is registered
    3) registerModule
This property is a function that can register other modules within itself, it was this function that registered this module
==================================================================================================================================
*/