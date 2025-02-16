/*
Whenever we execute a JS code,

    1. A global execution context is created and is assigned to `this`. In browser, this is the whole window object while for the node env, its {} empty object.

    2. Then, the code goes from first phase that is the MEMORY CREATION PHASE where all the variables and the functions are alloted memory and the second phase is the EXECUTION PHASE.

    3. Firstly, the global execution context is stacked on the top of call stack and then followed by different fucntions.

*/