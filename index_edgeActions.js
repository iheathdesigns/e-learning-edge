/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
// insert code here

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2005, function(sym, e) {
// insert code here

});
//Edge binding end



Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
sym.play();
// insert code for compositionReady event here

});
//Edge binding end


})("stage");
//Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-41610965");