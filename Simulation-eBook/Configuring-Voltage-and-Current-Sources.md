# Configuring Voltage and Current Sources

EasyEDA Libs provides a range of what are referred to in ngspice as **Dependent Sources**.

These are Voltage and Current Sources whose outputs are defined by a list of values or parameters. The outputs do not depend on anything else.

These sources have already been discussed in terms of their DC source resistances and DC paths.

In most of the examples so far, they have been used to provide DC supply voltages either as ideal voltage sources or as Thevenin or Norton Sources.

Their use to provide time domain (time varying) signals has been introduced in the examples about transformers but has not so far been explained.
Find them from below 
![](./images/Spice-AC-source.png)

This section describes in detail how any dependent source can be set up to provide the following types of signal sources:

*   SINE or SIN: a sinusoidal signal;
*   PULSE: a general pulse waveform;
*   EXP: a single pulse with exponential rising and falling edges;
*   SFFM: (Single Frequency Frequency Modulated) a single sinsusoidal carrier, frequency modulated by single sinusoidal frequency;
*   AM: (Amplitude Modulated) a single sinusoidal carrier, amplitude modulated by a single frequency;
*   PWL: (PieceWise Linear sources} an arbitrary waveform source with signals created as a list of times and levels with the signal linearly interpolated between each time point.

Although the examples in this section only illustrate how to configure Dependent Voltage Sources, Dependent Current Sources are configured in exactly the same way.

## Configuring the SIN or SINE option

Configuring the SINE option to create an unmodulated, single frequency sinusoidal signal source.

[Spice Sinusoidal Source example](https://easyeda.com/editor#id=cw641ZlxT)

![](./images/Spice-Sinusoidal-Source.png)
## More ways to use the SIN (or SINE) option

[Spice Sinusoidal Source: more examples](https://easyeda.com/editor#id=vLFyQ82kC)

## Configuring the PULSE option

Configuring the PULSE option to create a pulse signal source.

[Spice PULSE Source](https://easyeda.com/editor#id=XPJDUcuoG)
![](./images/Spice-PULSE-Source.png)
## More ways to use the PULSE option

[Spice PULSE Source: more examples](https://easyeda.com/editor#id=oOICUcun3)

## Configuring the EXP option

Configuring the EXP option to create a single pulse source with exponential rising and falling edges.

[Spice EXP Source](https://easyeda.com/editor#id=cewqI0hzR)

## Configuring the SFFM option

Configuring the SFFM option to create a simple, single frequency, frequency modulated sinusoidal signal source.

[Spice SFFM Source](https://easyeda.com/editor#id=SwqI0izRL)

## Configuring the AM option

Configuring the AM option to create a simple, single frequency, amplitude modulated sinusoidal signal source.

[Spice AM Source](https://easyeda.com/editor#id=KGZNnJtdX)

## Configuring the PWL option

Configuring the PWL option to create an arbitrary piecewise linear waveform signal source.

[Spice PWL Source](https://easyeda.com/editor#id=wxhbHBvN5)

## Configuring the AC source option

It can be quite hard to visualise what the Amplitude and the Phase settings in the AC Source options of the Independent Voltage and Current Sources really mean when the signals in an AC Analysis cannot be viewed in the time domain in a Transient Analysis. To try to help visualise these settings and what they represent, the following couple of examples demonstrate the settings in ways that can be related back to their equivalents in the time domain.

The first example shows how more than one AC Source can be configured in a circuit to represent different signal sources at the same frequency but with different phases. The example also shows how the phase settings relate to the same signals in the time domain.

In this example both AC Sources are set to the same amplitude of 1. They could be set to different amplitudes: try it and compare the results with the same amplitude changes in the time domain part of the signal sources.

[Configuring AC Sources 01](https://easyeda.com/editor#id=JPlfL2kew)

Note, however, that the AC Analysis assumes that the circuit is perfectly linear so even if an AC Source amplitude 100 were to be specified, the output would still look as if it came from a perfectly linear circuit. Compare that with what happens if the time domain parts of the sources are set to 100!

The DC offset of the inphase AC Source in this example is important because it biases Q1 into a range where both the emitter and collector swings are operating in the linear region.

This can clearly be seen by probing V(Q1E) and V(Q1C) in a Transient Analysis. If the DC Offset is increased, eventually the V(Q1C) as V(Q1E) rises will until they meet as Q1 saturates and V(Q1E) starts to pull V(Q1C) back up again. At the point where this happens the small signal gain of the collector output passes though zero and then becomes a noninverting gain of somewhat less than unity.

If the DC offset is reduced to near ground or even below it, Q1 is cut off so both the collector and the emitter output small signal gains fall effectively to zero. Again this can clearly be seen in a Transient Analysis.

What is not so obvious is that although these effects still occur in the AC Analysis, because they are represented in the frequency domain, they can sometimes be hard to interpret.

So, the information to take away from this is that if an AC Analysis seems to be showing a lower than expected gain then it is worth checking that the DC operating point of the circuit is not forcing some part of it into saturation or cutoff. One example of this is incorrectly biasing an opamp input so that the output has hit one or the other of the supply rails. Forgetting to connect up a power supply rail is another common mistake.

It must also be understood that although any number of AC Sources can be placed in a circuit, each with their own amplitude and phase, all the sources will operate at exactly the same frequency as this is determined by the AC Analysis settings and not by the sources themselves.

In a circuit with several Independent Sources in it, AC sources can simply be added to, removed from or moved around it simply by adding the AC amplitude and phase values to the required source. So in the example above, the response of the inphase and outofphase side of the all pass network can be observed simply by setting one AC Source or the other to have zero amplitude or just by deleting the AC parts of the Source configuration.

Another example of this might be that the frequency response of an amplifier from signal input to output can be plotted using an AC Source at the input source whilst the frequency response of the amplifer from power supply ripple to output can be plotted by swapping the AC Source settings to the voltage source being used for the power supply.

The second simulation also shows how more than one AC Source can be configured in a circuit to represent different signal sources at the same frequency but this time with different amplitudes and phases. This example also shows how the amplitude and phase settings relate to the same signals in the time domain.

[Configuring AC Sources 02](https://easyeda.com/editor#id=PDxrJDjAu)