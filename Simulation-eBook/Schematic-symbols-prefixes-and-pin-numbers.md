# Schematic symbols: prefixes and pin numbers 

**Please note that before attempting to edit device models, it is *essential* that the user is familiar with and understands the relationship between spice pin names and numbering, described in this section.**

Device and subcircuit (or hierarchical block) symbols created for use in schematics that are intended to be run as spice simulations, in addition to having a PCB Prefix that is used for the reference designator in the schematic, also have a Spice Prefix. They also have two sets of pin numbers: PCB pins and Spice pins.

## PCB and Spice Prefix

The rules on the assignment of the PCB Prefix or reference designator of a schematic symbol are somewhat dependent on the EDA tool and on the user's preferences. Depending on how a device is graphically represented by it's schematic symbol it may have a different PCB Prefix or reference designator. For example, a single discrete MOSFET device may have a PCB Prefix of Q, M or perhaps TR, whereas if it is part of a monolithic multiple transistor array it may have a PCB Prefix of U or IC.

The rules on the assignment of the Spice Prefix of a schematic symbol are strict. This is because the Spice Prefix is used to tell the simulator which circuit element the symbol represents and therefore which simulation model it is to use.

Simulation models for most of the spice circuit elements are in the form of a single-line .model statement however some of them may be in the form of a multi-line .subckt subcircuit definition. For example, some MOSFETs may be described by a .model statement in which case their Spice Prefix is M but many MOSFETs are described by a .subckt and so their Spice Prefix is X.

Therefore, irrespective of the PCB Prefix chosen for a schematic symbol, the Spice Prefix for a schematic symbol representing a given circuit element must match the type of model required to simulate that instance of that circuit element in your schematic.

For example, if there are two different n-channel MOSFETs in a schematic; Q1, a BSS123 which is modelled by a .model statement:
~~~~
*SRC=BSS123;DI_BSS123;MOSFETs N;Enh;100V 0.170A 1.00ohms Diodes Inc. MOSFET 
.MODEL DI_BSS123 NMOS( LEVEL=1 VTO=1.00 KP=6.37m GAMMA=1.24 
+ PHI=.75 LAMBDA=625u RD=0.140 RS=0.140 
+ IS=85.0f PB=0.800 MJ=0.460 CBD=19.8p 
+ CBS=23.7p CGSO=36.0n CGDO=30.0n CGBO=124n 
* -- Assumes default L=100U W=100U --
~~~~
and Q2, a BSS127S which is modelled by a .subckt:
~~~~
*---------- BSS127S Spice Model ---------- 
.SUBCKT BSS127S 10 20 30 
* TERMINALS: D G S M1 1 2 3 3 NMOS L = 1E-006 W = 1E-006 
RD 10 1 84.22 
RS 30 3 0.001 
RG 20 2 29 
CGS 2 3 1.958E-011 
EGD 12 0 2 1 1 
VFB 14 0 0 
FFB 2 1 VFB 1 
CGD 13 14 2E-011 
R1 13 0 1 
D1 12 13 
DLIM DDG 15 14 
DCGD R2 12 15 1 
D2 15 0 DLIM 
DSD 3 10 DSUB 
.MODEL NMOS NMOS LEVEL = 3 VMAX = 8E+005 ETA = 1E-012 VTO = 3.419 
+ TOX = 6E-008 NSUB = 1E+016 KP = 0.127 U0 = 400 KAPPA = 1.044E-015 
.MODEL DCGD D CJO = 1.135E-011 VJ = 0.9232 M = 0.9816 
.MODEL DSUB D IS = 2.294E-010 N = 1.601 RS = 0.1079 BV = 65 
+ CJO = 1.956E-011 VJ = 1.514 M = 0.8171 
.MODEL DLIM D IS = 0.0001 
.ENDS 
*Diodes BSS127S Spice Model v1.0 Last Revised 2012/6/6
~~~~
then even though both have the same PCB Prefix of Q: Q1 must have a Spice Prefix of M and Q2 must have a Spice Prefix of X.

A list of Spice Prefixes and their associated circuit elements is given in the table below.

<table style="text-align: left; width: 600px;" cellpadding="2" cellspacing="2" border="1">

<tbody>

<tr>

<td style="vertical-align: top;font-weight: bold;">Element description</td>

<td style="vertical-align: top;font-weight: bold;">Spice Prefix</td>

<td style="vertical-align: top;font-weight: bold;">Comment</td>

</tr>

<tr>

<td style="vertical-align: top;">A</td>

<td style="vertical-align: top;">XSPICE code model</td>

<td style="vertical-align: top;">analogue, digital, mixed signal</td>

</tr>

<tr>

<td style="vertical-align: top;">B</td>

<td style="vertical-align: top;">Behavioural (arbitrary) source</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">C</td>

<td style="vertical-align: top;">Capacitor</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">D</td>

<td style="vertical-align: top;">Diode</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">E</td>

<td style="vertical-align: top;">Voltage-controlled voltage source (VCVS)</td>

<td style="vertical-align: top;">linear, non-linear</td>

</tr>

<tr>

<td style="vertical-align: top;">F</td>

<td style="vertical-align: top;">Current-controlled current source (CCCS)</td>

<td style="vertical-align: top;">linear</td>

</tr>

<tr>

<td style="vertical-align: top;">G</td>

<td style="vertical-align: top;">Voltage-controlled current source (VCCS)</td>

<td style="vertical-align: top;">linear, non-linear</td>

</tr>

<tr>

<td style="vertical-align: top;">H</td>

<td style="vertical-align: top;">Current-controlled voltage source (CCVS)</td>

<td style="vertical-align: top;">linear</td>

</tr>

<tr>

<td style="vertical-align: top;">I</td>

<td style="vertical-align: top;">Current source</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">J</td>

<td style="vertical-align: top;">Junction field effect transistor (JFET)</td>

<td style="vertical-align: top;">spice pin order: D G S</td>

</tr>

<tr>

<td style="vertical-align: top;">K</td>

<td style="vertical-align: top;">Coupled (Mutual) Inductors</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">L</td>

<td style="vertical-align: top;">Inductor</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">M</td>

<td style="vertical-align: top;">Metal oxide field effect transistor (MOSFET)</td>

<td style="vertical-align: top;">spice pin order: D G S</td>

</tr>

<tr>

<td style="vertical-align: top;">N</td>

<td style="vertical-align: top;">Numerical device for GSS</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">O</td>

<td style="vertical-align: top;">Lossy transmission line</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">P</td>

<td style="vertical-align: top;">Coupled multiconductor line (CPL)</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">Q</td>

<td style="vertical-align: top;">Bipolar junction transistor (BJT)</td>

<td style="vertical-align: top;">spice pin order: C B E</td>

</tr>

<tr>

<td style="vertical-align: top;">R</td>

<td style="vertical-align: top;">Resistor</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">S</td>

<td style="vertical-align: top;">Switch (voltage-controlled)</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">T</td>

<td style="vertical-align: top;">Lossless transmission line</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">U</td>

<td style="vertical-align: top;">Uniformly distributed RC line</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">V</td>

<td style="vertical-align: top;">Voltage source</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">W</td>

<td style="vertical-align: top;">Switch (current-controlled)</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">X</td>

<td style="vertical-align: top;">Subcircuit</td>

<td style="vertical-align: top;">spice pin order: depends on subckt</td>

</tr>

<tr>

<td style="vertical-align: top;">Y</td>

<td style="vertical-align: top;">Single lossy transmission line (TXL)</td>

<td style="vertical-align: top;"></td>

</tr>

<tr>

<td style="vertical-align: top;">Z</td>

<td style="vertical-align: top;">Metal semiconductor field effect transistor (MESFET)</td>

<td style="vertical-align: top;">spice pin order: D G S</td>

</tr>

</tbody>

</table>

For more information on circuit elements in Ngspice, please refer to:

[http://ngspice.sourceforge.net/docs/ngspice-manual.pdf#subsection.2.1.2](http://ngspice.sourceforge.net/docs/ngspice-manual.pdf#subsection.2.1.2)  

## PCB and Spice pin numbers

The two sets of pin numbers are:

1. PCB pin number: these are the numbers for the real, physical device pins in its package. They are required so that the pins of a device symbol in a schematic can be mapped onto the physical pins of a PCB footprint. In other words, so that the connections shown in the schematic, end up connected properly by copper on the PCB.

2. Spice pin number or pin order: these are the numbers that map the pins on the symbol to their respective functions in the spice model or subcircuit.

Actually the spice pin ordering has a slightly deeper meaning.

Spice has no concept of component symbols: they are a construct of the schematic editor.

When a spice netlist is generated, the symbol in the schematic editor is either - in the case of model defined devices such as resistors, capacitors, inductors, diodes, transistors and sources - mapped directly to the relevant models (defined by the device prefix such as R, C, L, D, Q and so on), or in the case of a subcircuit, converted into a subcircuit call statement.

The spice pin ordering for the majority of built-in models such as resistors, capacitors, inductors, diodes, transistors and sources are defined and generally taken care of by the schematic editor, more care has to be taken with the spice pin ordering of subcircuits.

This can be illustrated by a simple opamp with 5 pins: inverting and non-inverting inputs; output and positive and negative supply pins but the principle applies to all spice subcircuits.

The subcircuit call for this opamp might look like this in the spice netlist:

~~~~
X1 input feedback vpos vneg output opamp_ANF01
~~~~

where:

`X1` is the name of the subcircuit in the top level (i.e. the calling) circuit;

`input feedback vpos vneg output` are the netnames in the circuit calling (i.e. containing) the subcircuit and

`opamp_ANF01` is the name of the subcircuit being called.

* Pay special attention to the order of the netnames in the subcircuit call.

The spice pin ordering for the majority of opamp subcircuits is like that shown in the example below:
~~~~
*******************************
* opamp_ANF01 * 
* Simplified behavioural opamp
* Node assignments 
*                    noninverting input 
*                    | inverting input 
*                    | | positive supply 
*                    | | | negative supply 
*                    | | | | output 
*                    | | | | | 
* spice pin order:   1   2   3   4   5 
*                    |   |   |   |   | 
.subckt opamp_ANF01 inp inn vcc vee out ; these are the netnames 
* used internally to the subcircuit. 
*
B1 out 0 + V=(TANH((V(inp)-V(inn))*{Avol}*2/(V(vcc)-V(vee)))*(V(vcc)-V(vee)) + +(V(vcc)+V(vee)))/2 
.ends opamp_ANF01
*******************************
~~~~

Note that the spice pin order of the subcircuit call is in exactly the same order as that of the subcircuit.

Although the physical pin numbering of any device is critical for successfully mapping the pins of a schematic symbol onto a physical package footprint when laying out the PCB, because spice only knows about single devices and does not care about how they are physically packaged, each instance of any device in a spice schematic has to be mapped onto the same pins of the spice model or subcircuit, irrespective of where it is in any physical package.

Therefore, for the physical, package pin numbering of the four opamps in a quad opamp in say, a SOIC14 or a DIP14 package as shown below, to work with the example subcircuit above, the spice pin ordering would be:

<table style="text-align: left; width: 600px;" cellpadding="2" cellspacing="2" border="1">

<tbody>

<tr>

<td style="vertical-align: top; font-weight: bold;">Opamp A</td>

<td style="vertical-align: top; font-weight: bold;">PCB Pin Number</td>

<td style="vertical-align: top; font-weight: bold;">Spice Pin Order</td>

</tr>

<tr>

<td style="vertical-align: top;">OUT</td>

<td style="vertical-align: top;">1</td>

<td style="vertical-align: top;">5</td>

</tr>

<tr>

<td style="vertical-align: top;">IN-</td>

<td style="vertical-align: top;">2</td>

<td style="vertical-align: top;">2</td>

</tr>

<tr>

<td style="vertical-align: top;">IN+</td>

<td style="vertical-align: top;">3</td>

<td style="vertical-align: top;">1</td>

</tr>

<tr>

<td style="vertical-align: top;">V+</td>

<td style="vertical-align: top;">4</td>

<td style="vertical-align: top;">3</td>

</tr>

<tr>

<td style="vertical-align: top;">V-</td>

<td style="vertical-align: top;">11</td>

<td style="vertical-align: top;">4</td>

</tr>

<tr>

<td style="vertical-align: top; font-weight: bold;">Opamp B</td>

<td style="vertical-align: top; font-weight: bold;">PCB Pin Number</td>

<td style="vertical-align: top; font-weight: bold;">Spice Pin Order</td>

</tr>

<tr>

<td style="vertical-align: top;">OUT</td>

<td style="vertical-align: top;">7</td>

<td style="vertical-align: top;">5</td>

</tr>

<tr>

<td style="vertical-align: top;">IN-</td>

<td style="vertical-align: top;">6</td>

<td style="vertical-align: top;">2</td>

</tr>

<tr>

<td style="vertical-align: top;">IN+</td>

<td style="vertical-align: top;">5</td>

<td style="vertical-align: top;">1</td>

</tr>

<tr>

<td style="vertical-align: top;">V+</td>

<td style="vertical-align: top;">4</td>

<td style="vertical-align: top;">3</td>

</tr>

<tr>

<td style="vertical-align: top;">V-</td>

<td style="vertical-align: top;">11</td>

<td style="vertical-align: top;">4</td>

</tr>

<tr>

<td style="vertical-align: top; font-weight: bold;">Opamp C</td>

<td style="vertical-align: top; font-weight: bold;">PCB Pin Number</td>

<td style="vertical-align: top; font-weight: bold;">Spice Pin Order</td>

</tr>

<tr>

<td style="vertical-align: top;">OUT</td>

<td style="vertical-align: top;">8</td>

<td style="vertical-align: top;">5</td>

</tr>

<tr>

<td style="vertical-align: top;">IN-</td>

<td style="vertical-align: top;">9</td>

<td style="vertical-align: top;">2</td>

</tr>

<tr>

<td style="vertical-align: top;">IN+</td>

<td style="vertical-align: top;">10</td>

<td style="vertical-align: top;">1</td>

</tr>

<tr>

<td style="vertical-align: top;">V+</td>

<td style="vertical-align: top;">4</td>

<td style="vertical-align: top;">3</td>

</tr>

<tr>

<td style="vertical-align: top;">V-</td>

<td style="vertical-align: top;">11</td>

<td style="vertical-align: top;">4</td>

</tr>

<tr>

<td style="vertical-align: top; font-weight: bold;">Opamp D</td>

<td style="vertical-align: top; font-weight: bold;">PCB Pin Number</td>

<td style="vertical-align: top; font-weight: bold;">Spice Pin Order</td>

</tr>

<tr>

<td style="vertical-align: top;">OUT</td>

<td style="vertical-align: top;">14</td>

<td style="vertical-align: top;">5</td>

</tr>

<tr>

<td style="vertical-align: top;">IN-</td>

<td style="vertical-align: top;">13</td>

<td style="vertical-align: top;">2</td>

</tr>

<tr>

<td style="vertical-align: top;">IN+</td>

<td style="vertical-align: top;">12</td>

<td style="vertical-align: top;">1</td>

</tr>

<tr>

<td style="vertical-align: top;">V+</td>

<td style="vertical-align: top;">4</td>

<td style="vertical-align: top;">3</td>

</tr>

<tr>

<td style="vertical-align: top;">V-</td>

<td style="vertical-align: top;">11</td>

<td style="vertical-align: top;">4</td>

</tr>

</tbody>

</table>

The physical package pin numbering reflects that of each opamp in the package.

The spice pin ordering is the same for each instance of the individual opamps.

Of course there is only one physical instance of each supply pin on the schematic symbol for the quad opamp in this example but each spice subcircuit must have the supply pins explicitly defined.

Exactly how this is handled at the schematic symbol level depends on how the schematic capture package deals with symbols for multiple devices with shared supply pins but the generation of a spice netlist from the schematic will always generate the complete set of pins required in the subcircuit calls.

In cases where the subcircuit is built by the user as opposed to where it is supplied by a vendor for a particular device, exactly the same rules apply except that it is up to the user to specify the subcircuit pin order and to construct the symbol appropriately.

Although as described earlier, built-in spice models usually have defined spice pin orders, not all subcircuits have the same spice pin numbering. Therefore if your spice circuit throws errors - especially if there are warnings about pin numbers or pin names - it is worth remembering to check that the pin order of the symbol that is netlisted to form the calling statement matches that of the subcircuit that is being called!

### For .MODEL defined models

1.  Find a spice .model for your target device;
2.  Copy and paste it into a text placeholder (the `T` hotkey) in your schematic (but please respect the EULA and copyright of commercial files);
3.  In the right hand properties panel, change the text type from comment to spice;

    **Properties > Text type > spice**

4.  Place a symbol for the device from the EasyEDA Libs palette onto the schematic;
5.  Edit the model name to the exact name of the model in the pasted file;
6.  Done!

There's an example of this here:

[Playing with model parameters](https://easyeda.com/editor#id=Ev5rpnJG2)

This is another example showing using a generic depletion mode MOSFET.

It also shows a way to hack a MOSFET defined by a LEVEL 3 .model statement but which has a problem with some of the parameters not being recognised as being part of the model by ngspice, so that it can still be used directly with the MOSFET symbol.

In this example the L and W parameters of the original model are recognised as part of the .model statement. Note also that some of the other parameters are also simply not recognised by ngspice.

Here's how:

1.  Find a spice .model for your target device;
2.  Copy and paste the .model statement into the schematic canvas;
3.  Turn it into a spice directive:

    **Properties > Text Attributes > Text type > spice**

4.  Place an N channel depletion mode MOSFET symbol onto the schematic;
5.  Edit the 'model' attribute for M1 to include the unrecognised or modified L and W parameters so they look like this:

    `IXTT20N50D L=2E-6 W=5.5`

    This can be done either in place or via:

    **Part Attributes > Model >** `IXTT20N50D L=2E-6 W=5.5`

Note that adding an asterisk at the start of the two lines in the .model statement that define the L and W parameters (and any other unrecognised parameters as deemed necessary) will comment them out. This stops these parameters being reported as model issues in the simulation report but it is not required to do so.

This process is illustrated in the following example:

[N channel depletion mode MOSFET using a .model statement](https://easyeda.com/editor#id=NnhztL2kC)

### For .SUBCKT defined models

The process described above works fine for simple .model defined models but for .subckt defined models it is a little more complicated because you need to tell EasyEDA that the model is a .subckt and not a simple .model.

Note that even some humble diode models are in fact .subckt defined to include things like package parasitics. For example, compare the 1N4148 and the 1N4148W-V models in the netlist.

There are three stages in attaching a .subckt to a symbol that already has a spice prefix of 'X' and so is expecting to call a .subckt statement.

*   Place the .subckt text into the schematic and activate it;
*   Place the symbol in the schematic;
*   Change the name of the symbol to exactly the same as the name of the .subckt;

The detailed steps to associate a new .subckt model to the symbol are:

1.  Find a spice .SUBCKT for your target device;
2.  Copy and paste it into a text box (the `T` hotkey) in your schematic (but please respect the EULA and copyright of commercial files);
3.  In the right hand properties panel, change the text type from comment to spice;

    **Properties > Text type > spice**

4.  Place a symbol for the device from the EasyEDA Libs palette onto the schematic;
5.  Edit the model name to the exact name of the model in the pasted file;
6.  Press the `I` Hotkey or:

    Click the blue **Edit Symbol...** button in the Properties panel:

    **Properties > Edit Symbol...**

    or do:

    **Super Menu > Miscellaneous > Edit Symbol**

7.  In the **Modify your symbol information** dialogue box, check that the **Spice Prefix** is `X`;
8.  Check that the NUMBER of pins in 'Edit Pin Map information' is exactly the same as in the .SUBCKT pasted into the schematic: if it is not then the wrong symbol has been placed for the chosen .SUBCKT (or vice versa) so a different symbol (or .SUBCKT) must be chosen.

    Note that 'number of pins' here means how many pins, not the pin numbers or names used to describe the nets they connect to in the .subckt netlist;
9.  Check that the ORDER of the pins in **Edit Pin Map information** is exactly the same as in the .SUBCKT pasted into the schematic. This can be very confusing because the pin NAMES may be different between the symbol and the .SUBCKT so it is first necessary to reconcile the two sets of names before attempting to confirm their order.
10.  Click **OK** in the **Modify your symbol information** dialogue box;
11.  Done!

    This process is illustrated in the following example:

    [Attaching a .subckt to a symbol 01](https://easyeda.com/editor#id=808qkCTN5)

Some of the EasyEDA symbols such as bjts and all the MOSFETs have a Spice Prefix of 'M' and so are expecting to call a .model statement. To associate a .subckt to a symbol with a Spice Prefix of 'M' there are four stages.

So, in the following example, the NMOS_E symbol placed into the schematic from the EasyEDA Libs palette must be edited to change the 'Spice Prefix' of the symbol from 'M' (for a .model defined part) to 'X' (for a .subckt defined part).

*   Place the .subckt text into the schematic and activate it;
*   Place the symbol in the schematic;
*   Change the name of the symbol to exactly the same as the name of the .subckt;
*   Change the 'Spice Prefix' of the symbol from 'M' (for a .model defined part) to 'X' (for a .subckt defined part).

The detailed steps to associate a new model to a symbol and to tell EasyEDA that a device model is a .subckt and not a simple .model are:

1.  Find a spice .SUBCKT for your target device;
2.  Copy and paste it into a text box (the `T` hotkey) in your schematic (but please respect the EULA and copyright of commercial files);
3.  In the right hand properties panel, change the text type from comment to spice;

    **Properties > Text type > spice**

4.  Place a symbol for the device from the EasyEDA Libs palette onto the schematic;
5.  Edit the model name to the exact name of the model in the pasted file;
6.  Press the `I` Hotkey or:

    Click the blue **Edit Symbol...** button in the Properties panel:

    **Properties > Edit Symbol...**

    or do:

    **Super Menu > Miscellaneous > Edit Symbol**

7.  In the 'Modify your symbol information' dialogue box, change the **Spice Prefix** from `M` (for a .model defined part) to `X` (for a .subckt defined part);

8.  Check that the NUMBER of pins in **Edit Pin Map information** is exactly the same as in the .SUBCKT pasted into the schematic: if it is not then the wrong symbol has been placed for the chosen .SUBCKT (or vice versa) so a different symbol (or .SUBCKT) must be chosen.

    Note that 'number of pins' here means how many pins, not the pin numbers or names used to describe the nets they connect to in the .subckt netlist;

9.  Check that the ORDER of the pins in **Edit Pin Map information** is exactly the same as in the .SUBCKT pasted into the schematic. This can be very confusing because the pin NAMES may be different between the symbol and the .SUBCKT so it is first necessary to reconcile the two sets of names before attempting to confirm their order.
10.  Click OK in the **Modify your symbol information** dialogue box;
11.  Done!

    This process is illustrated in the following example:

    [Attaching a .subckt to a symbol 02](https://easyeda.com/editor#id=6OkCwO5nF)

Another example of the process described above to change the Spice Prefix of a symbol is illustrated with the same EasyEDA N channel depletion mode MOSFET symbol from the EasyEDA Libs that was used earlier with the IXTT20N50D .model statement. In this example the MOSFET symbol is attached to a .subckt that has been created from the orignal IXTT20N50D .model statement in order to wrap up the L=2E-6 W=5.5 parameters and so make using the original model easier.

[An N-channel depletion mode MOSFET using an EasyEDA .subckt](https://easyeda.com/editor#id=sHBTNtZhz)

### Attaching models to custom symbols

This is basically the same as attaching a model to any of the predefined symbols from the EasyEDA Libs except that the symbol is one that has been created from scratch or by editing an existing symbol. The rules for assigning and checking that the spice prefix matches the type of model to be attached ('M' for .model or 'X' for .subckt) and checking that the spice pin numbering matches that of the type of device defined by the .model statement or by the pin sequence of a .subckt defined model.
  
