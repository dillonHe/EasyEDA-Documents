# Parameters

Usually, the values of components are specified directly in the component's value field. There are, however, occasions where it is desirable to be able to set or change the value of several components at once without having to edit each individual component value.

The simple resistor attenuator circuit used to illustrate several of the early examples has one resistor of 1k and two of 2k. Instead of entering the value 1k into one resistor resistor 2k into each of the others, it is possible to set up two variables to represent these values.

To create two variables, R1val=1k and R2val=2k, a  `.param`  statement is placed into the schematic and turned into a spice directive (by doing: <span style="font-weight:bold">Properties &gt; Text type = spice)</span>:

<span style="font-weight:bold">.param R1val=1k R2val=2k</span>

The parameters are then used to define the values of the components in their value fields.

By placing more than one .param statement in a schematic and doing:

**Properties &gt; Text type = comment**

and

**Properties &gt; Text type = spice**

It is possible to switch sets of values without having to edit individual components evey time.

Using .param statements therefore makes it possible to:

*   change the value of several components a single edit;
*   define parameters in terms of other parameters;
*   define parameters in terms of functions of other parameters.

Note that it is also possible to have several .param statements active in a simulation at the same time but to avoid the conflict caused by duplicate definitions, the parameter identifier names in each set must be unique.

The syntax of .param statements is:

	.param
	 <param_name1>=<value1> <param_name2>=<value2> ... <param_nameN>=<valueN>

'.param' statements can wrap over more than one line by using the '+' continuation character:
	.param 
	+ <param_name>=<value1> 
	+ <param_name2>=<value2> 
	+ ... + 
	+ ... +
	+  ... 
	+ <param_nameN>=<valueN>
 
Parameters can be numbers, other defined parameters or expressions made up from any combination of numbers and defined parameters.

Parameter identifier names must begin with an alphabetic character. The other characters must be either alphabetic, a number, or ! # $ % [ ] _ as special characters.

**Note that when used in .param statements, expressions can wrap over more than one line by using the '+' continuation character:**

	.param 
	+ <param_name>=<value1> 
	+ <param_name2>=<value2>
	+ <param_name3>=<{expression1}>
	+ <param_name4>=<{part of expression2 
	+ continuation of expression2}> 
	+ ... 
	+ <param_nameN>=<valueN>

Care must be taken in choosing the line break points to clearly distinguish the use of the '+' character as a continuation character from any mathematical use of the '+' character as an addition operator in an expression.

For example:

	.param x=3 y=4 
	+ hypotenuse={sqrt(x^2+ 
	+ y^2)}</xmp>

and:

	.param x=3 y=4 
	+ hypotenuse={sqrt(x^2 + 
	+y^2)}

are valid wrappings of expression in a .param statement which will give the expected results, whereas:

	.param x=3 y=4 
	+ hypotenuse={sqrt(x^2 
	+ y^2)}

or:

	.param x=3 y=4 
	+ hypotenuse={sqrt(x^2+ 
	y^2)}

or:

	.param x=3 y=4 
	+ hypotenuse={sqrt(x^2 
	+y^2)}

may give unexpected results or may fail with errors.

*   **Note that the variables TIME, TEMPER or TEMP and HERTZ are NOT valid identifier names.**

Note that to use a parameter in a component value field, it must be enclosed in curly brackets:

**{...}**

A parameter should also be enclosed in curly brackets if it is being used to define the value of another parameter, as in the example here of:

	R3val={R2val}

Although not shown here, the use of curly brackets to enclose expressions containing parameters which are then used to define other parameters is mandatory so, even though the use of curly brackets in the example shown above is not mandatory, it is good practice to always enclose in curly brackets any parameter or expression used in a parameter definition.

Note, however, that parameters in expressions used in B Sources must should not be enclosed in curly brackets.

The basic use of parameters is illustrated below:

[Using parameters 01](http://easyeda.com/editor#id=OKVvtr1Ay)

## Using parameters in expressions

Expressions and parameters can be combined to simplify and automate the calculation of component and source configuration values, as illustrated in the following example:

[Using parameters in expressions 01](http://easyeda.com/editor#id=GQ5F1BzVu)