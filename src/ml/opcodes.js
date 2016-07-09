class OpCodes {

}

/**
 * value1 is pushed onto the stack
 * value2 is pushed onto the stack
 * value1 and value2 are popped from the stack; value1 is added to value2
 * the result is pushed onto the stack
 */
OpCodes.ADD = new OpCodes();


/**
 * value1 is pushed onto the stack
 * value2 is pushed onto the stack
 * value1 and value2 are popped from the stack; value1 and value2 are compared
 * the branch is values are equal.
 */
OpCodes.BEQ = new OpCodes();

/**
 * Method arguments arg1 through argN are pushed onto the stack
 * Method arguments arg1 through argN are popped from the stack; the method call is performed
 * The return value is pushed onto the stack
 */
OpCodes.CALL = new OpCodes();