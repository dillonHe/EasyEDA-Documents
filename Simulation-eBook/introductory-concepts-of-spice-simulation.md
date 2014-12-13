# Introductory concepts of Spice simulation

For every circuit being simulated, EasyEDA converts the schematic into a textual description of the circuit that is then passed to the simulator.

This textual description of the circuit is called a **spice netlist.**

*   Note that the spice netlist is not the same as the netlist that is generated from a schematic and which is then passed though to PCB layout.

The netlist is a list of all the components used, how they are connected together and descriptions of them, called **models**, so that the simulator knows the behaviour of each component is to be simulated. The netlist also includes instructions to the simulator, called **spice directives**, to tell it what type of **analysis** is to be run. It may also include lists of values, called **parameters**, that are to be used to directly define component values or as part of more extensive calculations, called **expressions**.

Just like real ones, circuits to simulated require power sources and often signal sources. Therefore the netlist will include any **voltage sources** and **current sources**. These can be **Independent Sources** or **Dependent Sources**. Independent Sources just generate DC voltages or currents or can generate time domain signals such as sinusoids and pulses or they can generate a signal of a given amplitude and phase for frequency domain simulations (in fact they can be configured to generate all three but that will be covered later). Dependent Sources can also be used to generate DC voltages or currents but their main use is to generate outputs that are **functions** of that other signals in the circuit, for example by using an expression to describe the output of a source as a current that is equal to the sum of the squares of two input voltages.

The netlists of more advanced simulations can include instructions, called **measure statements**, to the simulator to perform calculations on the results of the simulation itself, for example to measure the rise time of a pulse, the RMS value of a signal or the 3dB bandwidth of a filter circuit.