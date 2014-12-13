# Expressions

Expressions can be used to define component values and to help configure Voltage and Current Sources.

## Operators

In expressions, parentheses are evaluated before the other operators. The operators are evaluated following a list of precedence as shwn in the table below. For equal precedence binary ops, evaluation goes left to right. Functions operate on real values only!
<table border="1" cellspacing="0"><colgroup span="4" width="85"></colgroup><tbody><tr><td align="left">Operator</td><td align="left">Alias</td><td align="left">Precedence</td><td align="left">Description</td></tr><tr><td align="left">-</td><td align="left"></td><td align="left">1</td><td align="left">unary negate (see Note 1 below)</td></tr><tr><td align="left">!</td><td align="left"></td><td align="left">1</td><td align="left">unary not</td></tr><tr><td align="left">**</td><td align="left">^</td><td align="left">2</td><td align="left">power (but see also the pow(x,a), pwr(x,a) and pwrs(x,a) functions)</td></tr><tr><td align="left">*</td><td align="left"></td><td align="left">3</td><td align="left">multiply</td></tr><tr><td align="left">/</td><td align="left"></td><td align="left">3</td><td align="left">divide</td></tr><tr><td align="left">%</td><td align="left"></td><td align="left">3</td><td align="left">modulo (does not work in B Source expressions)</td></tr><tr><td align="left">\</td><td align="left"></td><td align="left">3</td><td align="left">integer divide (does not work in B Source expressions)</td></tr><tr><td align="left">+</td><td align="left"></td><td align="left">4</td><td align="left">add</td></tr><tr><td align="left">-</td><td align="left"></td><td align="left">4</td><td align="left">subtract</td></tr><tr><td align="left">==</td><td align="left"></td><td align="left">5</td><td align="left">equality</td></tr><tr><td align="left">!=</td><td align="left">&lt;&gt;</td><td align="left">5</td><td align="left">non-equal</td></tr><tr><td align="left">&lt;=</td><td align="left"></td><td align="left">5</td><td align="left">less or equal</td></tr><tr><td align="left">&gt;=</td><td align="left"></td><td align="left">5</td><td align="left">greater or equal</td></tr><tr><td align="left">&lt;</td><td align="left"></td><td align="left">5</td><td align="left">less than</td></tr><tr><td align="left">&gt;</td><td align="left"></td><td align="left">5</td><td align="left">greater than</td></tr><tr><td align="left">&amp;&amp;</td><td align="left"></td><td align="left">6</td><td align="left">boolean and</td></tr><tr><td align="left">||</td><td align="left"></td><td align="left">7</td><td align="left">boolean or</td></tr><tr><td align="left">c?x:y</td><td align="left"></td><td align="left">8</td><td align="left">ternary operator (See also the if(x,y,z) and ifx(x,y,z) functions)</td></tr></tbody></table>

**Note 1**

At the time of writing (141021), the ngspice implementation of the unary negate or subtract symbol works as expected when used in this type of expression:

	.param myparameter={A-B}

but may produce unexpected results when used in an expression for a B Source (or in a .func statement) like this:

	V=5*(1-exp(-time/1m))

This expression must be written instead as:

	V=5_(1-exp(-1_time/1m))

This is a feature of ngspice. It is hoped that this anomaly will be corrected at some point in the future and that this will feed into later revisions of EasyEDA.

The number zero is used to represent boolean False. Any other number represents boolean True. The result of logical operators is 1 or 0.

Some examples of logical operators used to defined value of voltage sources:

	V1or 1 0 {1 | | 0}
	
	V2and 2 0 {1 &amp;&amp; 0}
	
	V3not 3 0 { ! 1}
	
	V4mod 4 0 {5 % 3}
	
	V5div 5 0 {5 \ 3}
	
	V6not 6 0 { ! 0}

Note that when used directly in component and source value fields, expressions MUST be on a single line. When used like this, expressions cannot be wrapped over more than one line.

## Using Expressions to define component values

The -3dB frequency, fc, of a first order RC lowpass filter is given by:

	fc = 1/(2_pi_R*C)

Exactly the same expression applies to a first order RC highpass filter.

If fc is specified as 10kHz and R is chosen as 1k then:

	C = 1/(2_pi_1k*10k)

Suppose the high pass filter output is required to be attenuated by a factor, A.

The total value of R for the highpass filter is still 1k but it must be split into a lower resistor with a value given by:

	Rlower = (Rupper+Rlower)*1/A

whilst the upper value is given by:

	Rupper = (Rupper+Rlower)*(1-1/A)

If we choose A=3 then for the chosen value of R=1k

	Rlower = 1k*1/3

and:

	Rupper = 1k*2/3

Simply by entering the right hand side of these expressions into the component values fields, enclosed in curly brackets like this:

	{expression}

the value of those components will be defined directly by those expressions, as illustrated in Rupper and Rlower in this example.

## Using Expressions to configure voltage and current sources

In this example, PULSE source V1 is configured to generate a signal with a 20us rise and fall time, a frequency of 5kHz and exactly equal high and low times: in other words, a slow edged squarewave of 200us period and a 50% duty cycle.

Because a PULSE source is defined in terms of Trise and Ton, it can be helpful to think of the time interval from the start of the rising (leading) edge to the start of the falling (trailing) edge as the 'pulse width', Twidth:

	Twidth = Trise+Ton

It is then a simple matter to define the PULSE source in terms of Trise and Twidth without having to manually calculate a value for Ton because:

	Ton = Twidth-Trise

From this we can also see that if the 'duty cycle' is defined as:

	D = Twidth/Tperiod

then for a given D:

	Ton = D*Tperiod - Trise

Lastly, it is sometimes convenient to define the period of a PULSE source in terms of a frequency:

	Frequency = 1/Tperiod

To use an expression in a source, simply enter it in place of the value you wish to calculate and enclose it in curly brackets like this:

	{expression}

The use of expressions is illustrated in the following example:

[Using expressions 01](http://easyeda.com/editor#id=MAIB71VP7)