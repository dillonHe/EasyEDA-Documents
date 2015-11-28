
# Device models

In order to simulate the behaviour of the individual components, they have to be described mathematically. The underlying equations that describe the behaviour of a component are written into the simulator program (sometimes they can be added by the user).

The equations that describe basic components such as resistors (I = V/R), capacitors (I = C_dV/dt) and inductors (V = L_di/dt) may be reasonably straightforward. The equations that describe diodes, bipolar (bjt) and a variety of field effect (jfet) and MOS transistors become increasingly complex, sometimes with several equations describing the behaviour of different aspects of device performance in different regions of operation.

Because these sets of equations are very much based on the semiconductor physics of devices and the manufacturing processes used to fabricate them, for some families of devices, such as MOSFETs, different sets of equations may be used to describe devices in the same family. The different sets of equations may be used because the manufacturer wishes to describe the operation of their devices to a greater or lesser degree of accuracy.

Although the equations themselves are hidden deep in the source code for a simulator, in general the coefficients of the sets of equations are collected together in the form of a list. Individual devices of any particular device family can then be described by a list of coefficients.

This list of coefficients is called a  **model** .

The individual coefficients in a model are called the **model parameters**.

A device model written in this way is called a **.model** statement.

Some devices such as Thyristors, opamps, linear regulators and switch mode supply chips are made up from a number of other devices connected together to form subcircuits.

A spice netlist of a device defined by a subcircuit is also referred to as a **model**.

A device model written in this way is called a **.subckt**.

Subcircuit models may themselves contain .model statements.

Subcircuits can also contain parameters and can also have parameters passed to them to change their characteristics for example to tailor them to a particular device variant.

## Why are there different models for the same device?

Because each family of devices (resistors, diodes, bjts, jfets, MOSFETs etc.) is described by one or more sets of equations, each family has one or more models available for it.

One reason there are different models available for devices in the same family is because manufacturers give device models away for free. Therefore they do not want to spend any more time on developing device models than they need to. Basically, the more complex a model is, the more time the manufacturer has to spend on making measurements in order to derive the model parameters. Therefore if they feel that a device can be adequately described by a simple model then they will use that rather than a more accurate but more complex and so more expensive one.

Another reason there may be differences between models of the same device is that there may be slight differences in the semiconductor fabrication processes of different manufacturers.

In the same way that there may be more than one .model available for a device. there may be different .subckt defined models available.

There may be differences between .subckt models because there are implementation differences in the device models and/or the physical devices from different manufacturers. For example there are slight differences in internal timings and even a subtle difference in the internal circuitry of the oscillator section of the UC384x family of SMPS controllers between the various different manufacturers.

Sometimes, there are differences in the models just to get around the copyright protection. Some differences are to optimise the model for a particular simulator and some differences are simply down to the preferences of the model writer.

## .model statements

In the spice netlist of a circuit, the user can see the models listed in .model statements. When a schematic is saved, these .model statements are pulled in to the netlist by EasyEDA recognising the symbols and their associated device names given in the schematic. Each model may either be pulled in from a library or - for devices that are not in the EasyEDA libraries - by downloading a model from a manufacturer's website and then manually pasting it directly into the schematic (the process of doing this will be described later).

### Ngspice model types

To help identify model types and in particular if they are for N or P type devices, the following table of model types may be helpful.
<table border="1" cellspacing="0"><colgroup span="2" width="50%"></colgroup><tbody><tr><td align="left">Code</td><td align="left">Model Type</td></tr><tr><td align="left">R</td><td align="left">Semiconductor resistor model</td></tr><tr><td align="left">C</td><td align="left">Semiconductor capacitor model</td></tr><tr><td align="left">L</td><td align="left">Inductor model</td></tr><tr><td align="left">SW</td><td align="left">Voltage controlled switch</td></tr><tr><td align="left">CSW</td><td align="left">Current controlled switch</td></tr><tr><td align="left">URC</td><td align="left">Uniform distributed RC model</td></tr><tr><td align="left">LTRA</td><td align="left">Lossy transmission line model</td></tr><tr><td align="left">D</td><td align="left">Diode model</td></tr><tr><td align="left">NPN</td><td align="left">NPN BJT model</td></tr><tr><td align="left">PNP</td><td align="left">PNP BJT model</td></tr><tr><td align="left">NJF</td><td align="left">N-channel JFET model</td></tr><tr><td align="left">PJF</td><td align="left">P-channel JFET model</td></tr><tr><td align="left">NMOS</td><td align="left">N-channel MOSFET model</td></tr><tr><td align="left">PMOS</td><td align="left">P-channel MOSFET model</td></tr><tr><td align="left">NMF</td><td align="left">N-channel MESFET model</td></tr><tr><td align="left">PMF</td><td align="left">P-channel MESFET model</td></tr></tbody></table>

Although it is beyond the scope of this document to go into detail there are some other points about models that are worth mentioning.

*   Models for the basic resistors, capacitors and inductors used in a schematic are usually not shown in the netlist;
*   Some device models have a full list of parameters, some may only have a partially completed list. Missing parameters in models are simply replaced by default values.

*   Different simulators support different sets of models so in some cases the simulator may warn the user that some parameters are unrecognised and so are ignored. This generally has little effect on the simulation results but if the user is particularly concerned about their effects than the only option is to change to using a simulator that supports all the relevant parameters.

## .subckt definitions

Not all devices are described by .model statements.

Models of more complex devices such as Thyristors (SCRs, Triacs and also Diacs), Insulated Gate Bipolar Transistors (IGBTs), operational amplifiers (opamps) and even many MOSFETs are often made up by connecting lower level devices to make a circuit that behaves like the desired device. This is called a **subcircuit**. The spice netlist of this subcircuit is then used to create a type of device model defined by what is called a **.subckt**. The low level components in subcircuits are described by the same sort of models (those lists of parameters or coefficients) as for the basic diodes etc., already referred to so a .subckt will often contain a list of .model statements describing the devices that are used to build the .subckt itself. Complex .subckts may even call other .subckts.

## Behavioural models

Using Behavioural Voltage and Current Sources and expressions it is possible to create what are called **behavioural models** of components. These are models that behave like a device but which have little of the actual underlying realistic circuit defined and are mostly - or perhaps completely - described by explicitly defined expressions (equations). The models for most devices internally comprising more than one active component, i.e. ICs, are largely behavioural. This is a way of hiding the detailed information about the manufacturer's process technology that low level spice modelling reveals.

The use of expressions and behavioural sources in EasyEDA is explained later in the book.

## What if there is no model available for a device?

Not all devices have spice models that can be run in ngspice. There are a number of possible reasons for this.

1.  Some models are encrypted and can only be run in certain proprietary simulation tools;

2.  Some proprietary simulators support models that are not available in ngspice;

3.  Some devices have models that only run in specific non-spice based simulation tools and which, for whatever reason, cannot be translated into spice models;

4.  Some devices do not have publically available models;

5.  Many devices predating the creation of the original spice program do not have models;

6.  Models for some devices simply do not exist because the manufacturers have never created them;

7.  Some models may be unavailable in EasyEDA because they are restricted by copyright or end user licenses so they can only be run in certain proprietary simulation tools or cannot be shared publically.

In cases (1) to (3), there is no way they can be run in ngspice. They must be run in the simulation tools for which they were written.

In cases (4) to (7), it is sometimes possible to find an equivalent, alternative or similar device for which a spice model is available. The user must exercise caution and use their judgement in deciding if such an approach offers satisfactory simulation results.

It must be noted that spice was not originally written with support for thermionic devices (valves or tubes) so models for such devices exist only in .subckt form. They are usually created by enthusiasts rather than manufacturers and so they (a) can be hard to find and (b) should be used with caution. EasyEDA does have a library of valve models gathered from sources that we believe have written reasonably accurate models.

Note that models obtained from manufacturers are often subject to copyright restrictions. Please respect any copyright notices contained either in end user license agreements that may have to be accepted prior to the granting of access to a downloadable copy of a model or in the models themselves.

Similarly, models contained in the libraries of commercial simulation tools are subject to copyright restrictions.

It is often possible to find device models offered in forums, discussion groups and various online collections of models. Again, the user must exercise caution and use their judgement in deciding if such models really are suitable. Often it is not possible to establish where they originate from so their validity is very hard to verify.It is also possible that such models have been copied in breach of the originators copyright.

## The relationship between spice models and device datasheets

Although some of the device models in EasyEDA have been specially written so that the user can easily tailor them to simulate a range of devices by editing parameters that can be found directly in - or inferred from - device datasheets (see: About the relationship between spice models and real world behaviour below), most of them are off-the-shelf models from the device manufacturers.

It is important to understand that, for many of these off-the-shelf models, the underlying equations and therefore the .model parameters and .subckt definitions bear little relationship to the sort of information that is given in typical component datasheets. Therefore it is usually not possible to take a device datasheet and simply write down a device models from the information given in it.

Whilst it is possible to extract spice parameters for a variety of devices from device datasheets and from actual device measurements, it is beyond the scope of this document to describe how this can be done.

More information about what the model parameters mean in diodes, bipolar transistors and MOSFETs, is available from:

[http://www3.imperial.ac.uk/pls/portallive/docs/1/56133736.PDF](http://www3.imperial.ac.uk/pls/portallive/docs/1/56133736.PDF)

with individual slide sets:

[http://www3.imperial.ac.uk/pls/portallive/docs/1/7292571.PDF](http://www3.imperial.ac.uk/pls/portallive/docs/1/7292571.PDF)

[http://www3.imperial.ac.uk/pls/portallive/docs/1/7292572.PDF](http://www3.imperial.ac.uk/pls/portallive/docs/1/7292572.PDF)

[http://www3.imperial.ac.uk/pls/portallive/docs/1/7292573.PDF](http://www3.imperial.ac.uk/pls/portallive/docs/1/7292573.PDF)

For more detailed information about bjt's in particular, this book:

[Modelling the Bipolar Transistor by Ian Getreu](http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=01480193)

is available from:

[http://www.lulu.com/spotlight/iangetreu](http://www.lulu.com/spotlight/iangetreu)

and

[http://www.amazon.com/Modeling-Bipolar-Transistor-Ian-Getreu/dp/B000EYPQLU](http://www.amazon.com/Modeling-Bipolar-Transistor-Ian-Getreu/dp/B000EYPQLU)

Another excellent (and free) book about transistor modelling, is available by going to:

[http://www.aeng.com/spice_modeling.htm](http://www.aeng.com/spice_modeling.htm)

and registering to get a copy of:

[*Definitive Handbook of Transistor Modeling*](http://www.aeng.com/pdf/RGVmaW5pdGl2ZSBIYW5kYm9vayBvZiBUcmFuc2lzdG9yIE1vZGVsaW5n.pdf)

*More information about ngpsice is available from here:*

[*http://ngspice.sourceforge.net/presentation.html*](http://ngspice.sourceforge.net/presentation.html)

*More information about Larry Nagel and SPICE is available from here:*

[*http://www.omega-enterprises.net/The%20Origins%20of%20SPICE.html*](http://www.omega-enterprises.net/The%20Origins%20of%20SPICE.html)

*Larry&#8217;s PhD dissertation Dissertation:*

*Laurence W. Nagel., &#8220;SPICE2: A Computer Program to Simulate Semiconductor Circuits,&#8221;*

*Memorandum No. ERL-M520, University of California, Berkeley, May 1975.

[*http://www.eecs.berkeley.edu/Pubs/TechRpts/1975/ERL-520.pdf*](http://www.eecs.berkeley.edu/Pubs/TechRpts/1975/ERL-520.pdf)

*is actually very readable and instructive.*

*For more information about electronic circuit simulation and spice in particular, see:*

[*http://en.wikipedia.org/wiki/Electronic_circuit_simulation*](http://en.wikipedia.org/wiki/Electronic_circuit_simulation)

*and:*

[*http://en.wikipedia.org/wiki/SPICE*](http://en.wikipedia.org/wiki/SPICE)

## The relationship between spice models and real world behaviour

Not all spice models are created equal. Here are just some of the things to be aware of.

Models of the same device from different manufacturers may offer differing degrees of accuracy. Sometimes models are kept simple in the interests of speeding up the simulations at the expense of accuracy. Sometimes they are complex because accuracy is considered to be more important than simulation speed. Models may contain some text at the beginnings of them to describe some of their limitations or their special features. It is often useful to read this information as it can help improve the convergence of simulations using them.

Not all diode models simulate reverse breakdown voltage.

Zener diode models can be of varying accuracy and are best put into test jigs to run a curve trace on them to compare them with the datasheet. Zener diodes are sometimes used as white noise sources. Zener models do not accurately generate the levels and spectrum of noise seen in real devices.

None of the bjt models simulate the reverse bias base-emitter breakdown voltage. Very few model collector-emitter or collector-base junction breakdown voltages.

Some models, particularly of high speed and high frequency devices may include package parasitics such as lead inductances and pin capacitances. Such models are almost always .subckt definitions of devices defined by .model statements but which have the parasitics connected to form a subckt. If the high frequency behaviour is not important, simulation speed can be improved by using only the .model statement without the parasitics. This .model can be cut and pasted out of the .subckt definition but often the .model statement will be for a transistor that is defined as a .model in it's own right somewhere else on the manufacturers site or as an equivalent from another vendor.

Thyristor and Triac models can be of varying accuracy or simulate only a limited selection of all the device parameters.

EasyEDA has an in-house behavioural Thyristor macromodel and a behavioural Triac macromodel.

As far as possible, the EasyEDA in-house Thyristor and Triac models model almost all the datasheet parameters of the target device with the exception of di/dt behaviour with inductive loads. These devices can be tailored to model almost any device simply using the values taken from the datasheet for the target device.

Metal Oxide Varistors (MOVs) are a nightmare to model and are best avoided! Even the commercially available models sometimes do not run reliably in all conditions.

Some opamp models are hugely detailed and can be very accurate but care must be taken to check that they are written using a syntax that is compatible with ngspice. Devices tailored for some of the commercial simulators will not run in ngspice without some syntax changes. Some may require special **.option**s to be invoked for the simulator.

Beware that even some quite complex opamp models do not simulate supply current drains even as simple DC quiescent currents let alone the dynamic behaviour with load currents added in. This can be an advantage since it reduces the signal currents that have to be simulated. It also means that there is absolutely no point in including any supply rail decoupling for those device that are known to not model supply current drains since they do not draw any current: they only use the supply voltage to define things like common mode range or output swing.

Here is an example of a third party opamp model that does not model supply or output currents:

[LM108 test jig](https://easyeda.com/editor#id=htnFzR9OI)

Some opamp models may make no attempt to accurately simulate the output stage behaviour versus load current. Similarly, many device models do not simulate the behaviour of inputs and outputs when they are taken above or below the supply rails.

Few device models simulate the excessive supply current drain of a supply reversed misconnection or a correctly connected device that is subject to a supply voltage above the stated absolute maximum supply differential.

There are a several device models in EasyEDA that have been specially written to reproduce the real world behaviour of the devices that they model.

For example, the EasyEDA in-house opamp behavioural macromodel can be set up to give an output voltage swing anywhere from a rail-to-rail to the more restricted swings of non-rail-to-rail output opamps. The output swing can be asymmetric.

Input resistance, bias and offset current and input offset voltage are modelled.

The input differential and common mode voltage ranges are modelled.

The current drain behaviour of the device if input or output pins are taken above or below the supply rails or if the supply polarities are reversed are modelled. Output polarity reversal due to inputs exceeding the common mode range is modelled for devices that exhibit such behaviour.

Frequency dependent common mode and power supply rejection are modelled.

Noise and temperature dependent effects are not modelled at present.

EasyEDA has an in-house behavioural macromodel which can be tailored to model a wide range of 3 terminal fixed and adjustable positive and negative linear voltage regulators which feature similar real-world behaviour to the opamp models.

For all of the in-house EasyEDA models, more information about them can be found in the .subckt definition itself simply by viewing the spice netlist of any saved circuit thay have been put into.

## How to change the model attached to a symbol

**Please note that before attempting to edit device models, it is *essential* that the user is familiar with and understands the relationship between spice pin names and numbering, described in the section on 'Schematic symbols: prefixes and pin numbers'.**

**We are working to provide a search function for the device simulation models available in EasyEDA.**

Right now there are a couple of ways to change the model for a device.

1) Place a device from the EasyEDA Libs and then edit the device model name either in place in the schematic or in the right hand properties panel.

For instance, when an NPN bjt is placed in a schematic, it comes in with a default name of editing the model name of 2DC2412R. This name pulls the associated default 2DC2412R model into the spice netlist. Editing the device name from 2DC2412R to 2N2222 will pull the 2N2222 model from EasyEDA's spice model library into the netlist.

The problem here is that until a model search function is up and running this approach is obviously too hit and miss for an arbitrary choice because there no way to see which models are available to choose from.

2) The second option is a bit more fiddly but it allows almost any unencrypted device model to be run in a simulation. The process is similar for both .model and .subckt defined models.

**These processes are described in detail after the following section on 'Schematic symbols: prefixes and pin numbers'.**
