# About naming conventions

Before going any further it is important to understand the naming conventions used throughout this book and throughout all the simulations

Fields on a line are separated by one or more blanks, a comma, an equal (=) sign, or a left or right parenthesis; extra spaces are ignored. A line may be continued by entering a "+" (plus) in column 1 of the following line; ngspice continues reading beginning with column 2. A name field must begin with a letter (A through Z) and cannot contain any delimiters. A number field may be an integer field (12, -44), a floating point field (3.14159), either an integer or floating point number followed by an integer exponent (1e-14, 2.65e3), or either an integer or a floating point number followed by one of the following scale factors:
<table border="1" cellspacing="0"><colgroup span="3" width="85"></colgroup><tbody><tr><td align="left">Suffix</td><td align="left">Name</td><td align="left">Factor</td></tr><tr><td align="left">T</td><td align="left">Tera</td><td align="left">1e12</td></tr><tr><td align="left">G</td><td align="left">Giga</td><td align="left">1e9</td></tr><tr><td align="left">Meg</td><td align="left">Mega</td><td align="left">1e6</td></tr><tr><td align="left">K</td><td align="left">Kilo</td><td align="left">1e3</td></tr><tr><td align="left">mil</td><td align="left">Mil</td><td align="left">25.4×1e-6</td></tr><tr><td align="left">m</td><td align="left">milli</td><td align="left">1e-3</td></tr><tr><td align="left">u</td><td align="left">micro</td><td align="left">1e-6</td></tr><tr><td align="left">n</td><td align="left">nano</td><td align="left">1e-9</td></tr><tr><td align="left">p</td><td align="left">pico</td><td align="left">1e-12</td></tr><tr><td align="left">f</td><td align="left">femto</td><td align="left">1e-15</td></tr></tbody></table>

Letters immediately following a number that are not scale factors are ignored, and letters immediately following a scale factor are ignored. Hence, 10, 10V, 10Volts, and 10Hz all represent the same number, and M, MA, MSec, and MMhos all represent the same scale factor. Note that 1000, 1000.0, 1000Hz, 1e3, 1.0e3, 1kHz, and 1k all represent the same number. Note that M or m denote 'milli', i.e. 1e?3

*   The suffix <span style="">Meg</span> MUST to be used for 1e6

Node names are case insensitive.

Node names may either be plain numbers or arbitrary character strings, not starting with a number.

The ground node must be named "0" (zero). For compatibility reasons "gnd" is accepted as the ground node and will internally be treated as a global node and be converted to "0".

Note the difference in ngspice where the nodes are treated as character strings and not evaluated as numbers, thus "0" and "00" are distinct nodes in ngspice (whereas they are not in SPICE2).

Ngspice and therefore, EasyEDA, requires that the following topological constraints are satisfied:

*   Each circuit has to have a ground node (gnd or 0)!
*   The circuit cannot contain a loop of voltage sources and/or inductors and cannot contain a cut-set (series connected set) of current sources and/or capacitors.
*   Each node in the circuit must have a dc path to ground.
*   Every node must have at least two connections except for transmission line nodes (to permit unterminated transmission lines) and MOSFET substrate nodes (which have two internal connections anyway).

These constraints will be covered in more detail later,