#B sources spice simulation
B sources are one of the most powerful components in EasyEDA. They are available as a BV voltage 
source and as BI current source (although in fact at the spice netlist level they are the same device 
just defined to have a voltage or a current output). 

The function of every B source is defined by an equation. 

The left hand side of the equation defines whether the output of the source is a voltage or a current. 

The right hand side is an expression made up from numbers, the basic arithmetic operators and functions 
not only of parameters but, crucially, of dynamic voltages and currents from within the circuit being simulated. 
In other words, B sources can perform a range of functions in simulations that is limited only by the imagination 
of the simulation designer.

**How to add BV source in EasyEDA **

![](./images/Spice-B-source-voltage.png)

The syntax of the equations to define a BV source in EasyEDA is very simple:

V=expression

For example:

	V=3*V(a,b)

defines a BV source that generates an output voltage equal to 3 times the difference between the voltage on the 
'a' net (V(a)) and the voltage on the 'b' net (V(b)).

	V=scale*uramp(V(a,b))/ABS(I(Vimon))

defines a BV source that generates an output voltage equal to the parameter, scale, multiplied by the positive 
difference between the voltage on the 'a' net (V(a)) and the voltage on the 'b' net (V(b)), divided by the absolute 
value of the current through the 0V source Vimon (I(Vimon)).

	V=Vswing_tanh(V(a,b)_Avol)

defines a differential gain block with an small signal gain of Avol and an output voltage swing 
which is limited with a tanh function to +/-Vswing.

The syntax of the equations to define a BI source in EasyEDA is equally simple:
**How to add BV source in EasyEDA **

![](./images/Spice-B-current-source.png)
I=expression

	I=V(a)*I(Vimon)

defines a BI source that generates an output current equal to the voltage on the 
'a' net (V(a)) multiplied by the current through the 0V source Vimon (I(Vimon)).

	I=LIMIT(V(a), 3, minval^2)

defines a BI source that generates an output current equal to the voltage on the 'a' net (V(a)) but clamped to 
the value of 3 and the square of the value of the minval parameter for all values of V(a) outside the range defined by 
3 and minval^2.

	I=V(a,b)/Rval

when the  '-' and '+' terminals of the B source are named 'a' and 'b' respectively then this expression defines a resistor of value Rval.

Note that curly brackets are not used in expressions for B Sources.

There are several examples of the uses of B Sources in the following simulations.

1. [B Sources 01 example->](https://easyeda.com/editor#id=gQKEWevpH)

 ![](./images/Spice-simulation-B-source-example.png)

2. [limit-x-L-U](https://easyeda.com/editor#id=tX9JjgeOC)

3. [Parameters, expressions, functions and B Sources](https://easyeda.com/editor#id=8MhztnFXf)

Note that when entered directly in a B Source value 
field in a schematic, expressions MUST be on a single line. When used like this, 
they cannot be wrapped over more than one line.

Expressions entered into a netlist, however, such as inside a 
.subckt model definition, can wrap over more than one line by using the '+' continuation 
character. Several examples of this can be found by inspecting the netlists of circuits 
using some of the EasyEDA .subckt models. For example in the netlist of the opamp5pEE 
Parameterised 5 pin opamp model there are these B sources:

	Bipbias1 inp isum I=(ibias+ios)*V(supply_ok)
	+ ( uramp(V(inn)-(V(vp)+inmax)) - uramp(-V(inn)+(V(vn)-inmin)) )/Rser

and

	Bstg1 0 stage1 I=Islew_tanh(V(indiff)_Kg)
	+ - ( uramp(V(stage1)-(V(vp)-outhi)) - uramp(-V(stage1)+(V(vn)+outlo)) )/Rser
	+ - sel*( uramp(V(stage1)-(V(out)+oooclmphi)) - uramp(-V(stage1)+(V(out)-oooclmplo)) )/Rser

and in the opamp_ANF01 .subckt example found elsewhere in this document, there is another example:

	B1 out 0
	+ V=(TANH((V(inp)-V(inn))_{Avol}_2/(V(vcc)-V(vee)))*(V(vcc)-V(vee))
	+ +(V(vcc)+V(vee)))/2