# Advanced probing and simulation control

So far, the examples have used three different ways of running the simulations:

1.  The basic way of setting up and running a simulation using the green running man 'Simulate...' icon (the Green Man) via the 'Run the Document...' option to open the 'Run your simulation' dialogue and then select the type of analysis to run.

2.  Using the `CTRL+R` Hotkey as a shortcut to the 'Run your simulation' dialogue.

3.  Using 'spice directives' to run simulations straight from the `CTRL+R` Hotkey so that, with a few simple key strokes, it is easy to switch between several different simulations from a single simulation schematic.

The following sections will show how to do more advanced signal probing which, when combined with the use of spice directives to control simulations and the flexibility of the

**Properties &gt; Text type &gt; spice/comment**

text attribute to switch between sets of probing and simulation commands, takes simulation to the next level.

## The 'probe' command

The section on probing signals showed how to probe voltages and currents in a schematic by adding symbols to the schematic in much the same way real pieces of test equipment such as DVMs and scopes and ammeters can be used to measure voltages and currents in a real circuit.

This section and the associated examples will introduce the 'probe' spice directive to measure voltages, currents, powers and more in a circuit.

This section reinforces the importance of naming all nets as discussed earlier.

###What the 'probe' spice directive does

The 'probe' spice directive:

*   Replaces voltage probes;* Provides an alternative way to probe currents simply by placing a 0V Voltage source anywhere a current is desired to be measured;* Allows arbitrary functions of any combination of voltages and/or currents to be carried out such as addition, subtraction, scaling, division, raising to powers and multiplying voltages and currents to calculate power dissipation.* Allows several 'probe' statements to be put into a single schematic and using:

**Properties &gt; Text Attributes &gt; Text type &gt; comment/spice**

provides an easy way to select between probing different sets of measurements by switching the state of probe statements between 'comment' (text: ignored by the simulator as simple inactive text) and 'spice' (interpreted by the simulator as active spice directives).

### The syntax of a 'probe' directive

*   The 'probe' directive comprises the keyword 'probe' followed by a space separated list of voltages, currents and expressions;
*   All probed signals must be in a single line following the keyword 'probe', with no line breaks;
*   Voltages are expressed in the form: V(netname), where 'netname' is the name of the net on which the voltage is to be probed;
*   Currents are expressed in the form: I(V_source_name); where 'V_source_name' is the name of the voltage source through which the current to be probed is flowing;
*   Any combination of voltages and currents can combined together in an expression;
*   Any voltage and current can be negated by multiplying it by -1 but the negated value must be enclosed in brackets to avoid confusion with an arithmetic subtraction from a preceding value in the list of values in the probe directive. For example to probe a voltage and a polarity reversed current as two separate values, the porbe directive must be written as:

	probe V(netname) (-I(V_source_name))

and not:

	probe V(netname) -I(V_source_name)

because the latter form will actually probe the voltage V(netname) minus the current I(V_source_name), i.e. {V(netname)-I(V_source_name)} and not the two individual values of V(netname) and -I(V_source_name).

*   Inline expressions can be written with or without enclosing brackets, however, for clarity and the avoidance of misinterpretation as described in the preceding paragraphs, it is good practice to use enclosing brackets.

For example to probe the power in a grounded resistor due to the voltage across it and the negated current through it is clearest to write the expression as:

	(V(netname)*-I(V_source_name))

or:

	(-V(netname)*I(V_source_name))

rather than:

	-V(netname)*I(V_source_name)

*   The difference between two voltages:

	V(A)-V(B)

can be expressed as:

	V(A,B)

Therefore, to probe the difference between two voltages, V(a) and V(b), a probe directive can be added to the schematic to do the subtraction. Like this:

	probe (V(A)-V(B))

or

	probe V(A,B)

The same is true for current differencing:

	I(VIMON1)-I(VIMON2)

can be expressed as:

	I(VIMON1,VIMON2)

Therefore, to probe the difference between two currents, V(a) and V(b), a probe directive can be added to the schematic to do the subtraction. Like this:

	probe I(VIMON1)-I(VIMON2)

or

	probe I(VIMON1,VIMON2)

These points are illustrated in the following sections.

### Using the 'probe' command to make measurements

The examples, 'Probing voltages 01', 'Probing voltages 02' and 'Probing currents 01' have shown how to probe voltages and currents in a schematic by adding symbols to the schematic in much the same way real pieces of test equipment such as DVMs and scopes and ammeters can be used to measure voltages and currents in a real circuit.

This next example introduces the 'probe' spice directive which can be used to measure voltages, currents, powers and more in a circuit.

[Using the probe command](http://easyeda.com/editor#id=db5mgyQ8q)

### Probing instantaneous power

The 'probe' directive can be used to measure power by probing the voltage difference across a device and the current through it and then simply multiplying the two signals together using an expression.

So, for example, the total power in a device such as a bipolar transistor, is given by the sum of the collector-emitter voltage times the collector current plus the base-emitter voltage times the base current.

The expressions in the example below probe the power dissipation in R1, total power drain from V1 and the sum of the powers in R1, R2 and R3.

[Probing instantaneous power](http://easyeda.com/editor#id=pLFyQ8qkC)

### Probing resistances and conductances

Resistance is measured by probing the voltage difference across a device and the current through it and then simply dividing the voltage by the current using an expression.

Conductance is measured by probing the the voltage difference across a device and the current through it and then simply dividing the current by the voltage using an expression.

The expressions in the example below probe the resistance and the conductance of R1.

[Probing resistance and conductance](http://easyeda.com/editor#id=9oiASM4mE)

## Using CTRL+R to run a simulation directly

This section introduces the idea of placing the simulation directive directly into the schematic.

This makes running a simulation even easier because instead of using the:

**CTRL+R &gt; Select simulation type &gt; Run**

type of key sequence to run a simulation, the key sequence simplifies to just:

**CTRL+R**

Not only does this make running a simulation easier but it also extends the idea - introduced in 'The 'probe' command' - of being able to quickly and easily change the selection of traces to be displayed in WaveForm, to being able to change the actual simulation to be run as well.

(Typing the simulation directive directly into the schematic is also a necessary step to allow the 'let' and 'print' commands to work but this will be described in 'Using the 'let' command'.)

Adding the simulation directive directly into the schematic is easy.

All that has to be done is to type the directive as a line of text in the schematic and then do:

**Properties &gt; Text type &gt; spice**

to turn the passive text (blue font) into an active spice directive (black italic font).

Note that one and only one simulation directive can be active for any one simulation run.

The example below illustrates how to do this:

[Using CTRL+R to run a simulation directly](http://easyeda.com/editor#id=wuohbtLFX)

## The 'let' command

In 'The 'probe' command' it was shown how voltage, current, power, resistances and more can be probed using V(netname), I(Vsource) and expressions made up from these terms in a probe command.

This section introduces the 'let' spice directive to do the same job but at the same time, make the display of the results clearer.

Note that the 'let' command will not work with simulations started using:

Green man &gt; Run the Document &gt; Select simulation analysis &gt; Run

or:

**CTRL+R &gt; Select simulation analysis &gt; Run**

Instead, the simulation directive must first be placed directly into the schematic, as described in 'Using CTRL+R to run a simulation directly'.

Then the 'let' command must be typed into the schematic in a text box which is then made active to turn it into a spice directive:

**Properties &gt; Text Attributes &gt; Text type &gt; spice**

as illustrated below:

[Using the let command](http://easyeda.com/editor#id=HTNHZhWQ8)