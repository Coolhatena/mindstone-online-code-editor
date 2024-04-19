grammar CtoMS;
import CreservedWords;

file: init+;         

init: MAIN OPEN_CURL '\n'? logic '\n'? CLOSE_CURL;

logic:	expression*?;

expression: log SEMI?;

log: PRINT OPEN_PARENTH .+? CLOSE_PARENTH;