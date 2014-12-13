
# Making measurements of simulation results

In the same way that digital storage oscilloscopes (DSO) allow measurements to be made of signals displayed on the screen using cursors and directly reading values from their positions and from mathematical analysis of the waveform data stored in the DSO memory, EasyEDA allows measurements to be made of simulation results directly using cursors and by analysis of the data used to create the WaveForm trace display using the <span style="font-weight:bold">meas</span> command.

### Using the WaveForm display cursors

The WaveForm X and Y cursor functions are a simple and quick way to make measurements of points in waveforms and to make measurements of differences between points.

WaveForm allows the display of traces in any selection of up to three vertically stacked plot panes. The Y axes automatically scale to fit the units and the range of the traces being displayed. Traces can be hidden but at least one trace must be visible. X and Y trace data can be seen on-screen just by moving the mouse cursor around the plot area of a pane with the readout adapting to the Y axes in each pane.

Delta X and delta Y trace data can be seen on-screen using a Left-Click and Drag select box, with the readout adapting to the Y axes in each pane. Returning the cursor to within a small radius of the starting point of the select box - without releasing the Left-Click - returns the readout to X and Y trace data.

The cursor placement and results produced are volatile, meaning that they cannot be copied and pasted. They are not saved as part of a saved WaveForm file. However, using a screenshot utility, it is possible to save an image of the WaveForm display showing the cursor positions and their associated readout.

Note that the screenshot utility must have a user definable time delay to allow cursor placement to be carried out between initiating the screenshot and the screenshot actually being taken.

For more information on displaying simulation results in Waveform, please refer to [WaveForm](http://easyeda.com/Doc/Tutorial/spiceSimulation.htm#WaveForm) in the EasyEDA Tutorial.

### Using the meas command

The meas command is used to analyse the output data of a dc, ac, tran or fft (or spec) simulation. The command is executed immediately after the simulation has finished.

## The meaning of terms in MEAS commands

The meas type <span style="font-weight:bold">{DC|AC|TRAN|SP}</span> depends on the data which are to be evaluated, either originating from a DC, AC analysis, TRANsient or SPectrum analysis (using the fft (or spec) analysis) simulation.

<span style="font-weight:bold">result</span> will be a vector containing the result of the measurement.

<span style="font-weight:bold">trig_variable_</span>, <span style="font-weight:bold">targvariable</span>, and <span style="font-weight:bold">out_variable</span> are vectors stemming from the simulation, e.g. a voltage vector v(out).

<span style="font-weight:bold">VAL=val</span> expects a real number val. val may also be a real parameter or an expression enclosed by in â&#8364;&#157; or {} that expands to a real number.

<span style="font-weight:bold">TD=td</span> and <span style="font-weight:bold">AT=time</span> expect a time value if the meas type is <span style="font-weight:bold">tran</span>. For <span style="font-weight:bold">ac</span> and <span style="font-weight:bold">sp</span>, <span style="font-weight:bold">AT</span> will be a frequency value and <span style="font-weight:bold">TD</span> is ignored.

For <span style="font-weight:bold">dc</span> analysis <span style="font-weight:bold">AT</span> is a voltage (or current), and <span style="font-weight:bold">TD</span> is ignored.

<span style="font-weight:bold">CROSS=#</span> requires an integer number #. <span style="font-weight:bold">CROSS=LAST</span> is possible as well. The same is expected by <span style="font-weight:bold">RISE</span> and <span style="font-weight:bold">FALL</span>.

Frequency and time values may start at 0 and extend to positive real numbers. Voltage (or current) inputs for the independent (scale) axis in a dc analysis may start or end at arbitrary real valued numbers.

## Examples of the forms and syntaxes of MEAS commands

### Trig Targ

A meas command using the Trig Targ syntax of <span style="font-weight:bold">General Form 1</span> measures the difference in dc voltage, frequency or time between two points selected from one or two output vectors. The following examples all are using transient simulation. Measurements for tran analysis start after a delay time td. If other examples are run with ac simulation or spectrum analysis, time may be replaced by frequency whilst after a dc simulation, the independent variable may become a voltage or current.

<span style="font-weight:bold">General Form 1</span>:

MEAS {DC | AC | TRAN | SP} result TRIG trig_variable VAL=val

&lt;TD=td&gt; &lt;CROSS=# | cross="LAST"&gt;

&lt;RISE=# | rise="LAST"&gt; &lt;FALL=# | fall="LAST"&gt;

&lt;TRIG at="time"&gt; TARG targ_variable VAL=val &lt;TD=td&gt;

&lt;CROSS=# | cross="LAST"&gt;

&lt;RISE=# | rise="LAST"&gt; &lt;FALL=# | fall="LAST"&gt;

&lt;TARG at="time"&gt;

Measure statement example:

	meas tran tdiff TRIG v(1) VAL=0.5 RISE=1 TARG v(1) VAL=0.5 RISE=2

measures the time difference between v(1) reaching 0.5 V for the first time on its first rising slope (TRIG) versus reaching 0.5 V again on its second rising slope (TARG); i.e. it measures the signal period.

Output:

	tdiff = 1.000000e-003 targ= 1.083343e-003 trig= 8.334295e-005

Measure statement example:

	meas tran tdiff TRIG v(1) VAL=0.5 RISE=1 TARG v(1) VAL=0.5 RISE=3

measures the time difference between v(1) reaching 0.5 V for the first time on its rising slope versus reaching 0.5 V on its rising slope for the third time (i.e. two periods).

Measure statement example:

	meas tran tdiff TRIG v(1) VAL=0.5 RISE=1 TARG v(1) VAL=0.5 FALL=1

measures the time difference between v(1) reaching 0.5V for the first time on its rising slope versus reaching 0.5 V on its first falling slope.

Measure statement example:

	meas tran tdiff TRIG v(1) VAL=0 FALL=3 TARG v(2) VAL=0 FALL=3

measures the time difference between v(1) reaching 0V its third falling slope versus v(2) reach- ing 0 V on its third falling slope.

Measure statement example:

	meas tran tdiff TRIG v(1) VAL=-0.6 CROSS=1 TARG v(2) VAL=-0.8 CROSS=1

measures the time difference between v(1) crossing -0.6 V for the first time (any slope) versus v(2) crossing -0.8 V for the first time (any slope).

	Measure statement example:

meas tran tdiff TRIG AT=1m TARG v(2) VAL=-0.8 CROSS=3

measures the time difference between the time point 1ms versus the time when v(2) crosses -0.8 V for the third time (any slope).

### Find ... When

The FIND and WHEN functions allow to measure any dependent or independent time, frequency, or dc parameter, when two signals cross each other or a signal crosses a given value.

Measurements start after a delay TD and may be restricted to a range between FROM and TO.

<span style="font-weight:bold">General Form 2</span>:

MEAS {DC | AC | TRAN | SP } result WHEN out_variable=val

&lt;TD= td&gt; &lt;FROM=val&gt; &lt;TO= val&gt;

&lt;CROSS=# | cross="LAST"&gt;

&lt;RISE| rise="LAST"&gt; &lt;FALL=# | fall="LAST"&gt;

Measure statement example:

	meas tran teval WHEN v(2)=0.7 CROSS=LAST

	measures the time point when v(2) crosses 0.7 V for the last time (any slope).

<span style="font-weight:bold">General Form 3</span>:

MEAS {DC | AC | TRAN | SP } result WHEN out_variable=out_variable2

&lt;TD= td&gt; &lt;FROM= val&gt; &lt;TO= val&gt;

&lt;CROSS=# cross="LAST"&gt;

&lt;RISE | rise="LAST"&gt; &lt;FALL=# | fall="LAST"&gt;

Measure statement example:

	meas tran teval WHEN v(2)=v(1) RISE=LAST

measures the time point when v(2) and v(1) are equal, v(2) rising for the last time.

<span style="font-weight:bold">General Form 4</span>:

MEAS {DC | AC | TRAN | SP } result FIND out_variable WHEN out_variable2=val

&lt;TD= td&gt; &lt;FROM= val&gt; &lt;TO= val&gt;

&lt;CROSS=# | cross="LAST"&gt; &lt;RISE | rise="LAST"&gt;

&lt;FALL=# | fall="LAST"&gt;

Measure statement example:

	meas tran yeval FIND v(2) WHEN v(1)=-0.4 FALL=LAST

returns the dependent (y) variable drawn from v(2) at the time point when v(1) equals a value of -0.4, v(1) falling for the last time.

<span style="font-weight:bold">General Form 5</span>:

MEAS {DC | AC | TRAN | SP } result FIND out_variable WHEN out_variable2=val=out_variable3

&lt;TD= td&gt; &lt;CROSS=# | cross="LAST"&gt; &lt;RISE | rise="LAST"&gt; &lt;FALL | fall="LAST"&gt;

Measure statement example:

	meas tran yeval FIND v(2) WHEN v(1)=v(3) FALL=2

returns the dependent (y) variable drawn from v(2) at the time point when v(1) crosses v(3), v(1) falling for the second time.

<span style="font-weight:bold">General Form 6</span>:

MEAS {DC | AC | TRAN | SP } result FIND out_variable AT=val

Measure statement example:

	meas tran yeval FIND v(2) AT=2m

returns the dependent (y) variable drawn from v(2) at the time point 2 ms (given by AT=time).

### AVG | MIN | MAX | PP | RMS | MIN_AT | MAX_AT

<span style="font-weight:bold">General Form 7</span>:

MEAS {DC | AC | TRAN | SP } result {AVG | MIN |MAX| PP | RMS | MIN_AT | MAX_AT} out_variable

&lt;TD= td&gt; &lt;FROM=val&gt; &lt;TO=val&gt;

Measure statement example:

	meas tran ymax MAX v(2) from=2m to=3m

returns the maximum value of v(2) inside the time interval between 2 ms and 3 ms.

Measure statement example:

	meas tran tymax MAX_AT v(2) from=2m to=3m

returns the time point of the maximum value of v(2) inside the time interval between 2 ms and 3 ms.

Measure statement example:

	meas tran ypp PP v(1) from=2m to=4m

returns the peak to peak value of v(1) inside the time interval between 2 ms and 4 ms.

Measure statement example:

	meas tran yrms RMS v(1) from=2m to=4m

returns the root mean square value of v(1) inside the time interval between 2 ms and 4 ms.

Measure statement example:

	meas tran yavg AVG v(1) from=2m to=4m

returns the average value of v(1) inside the time interval between 2 ms and 4 ms.

### INTEG

A meas statement with the INTEG form returns the area under out_variable inside the time interval between FROM val and TO val.

<span style="font-weight:bold">General Form 8</span>:

MEAS {DC | AC | TRAN | SP} result INTEG&lt;RAL&gt; out_variable

&lt;TD=td&gt; &lt;FROM=val&gt; &lt;TO=val&gt;

Measure statement example:

	meas tran yint INTEG v(2) from=2m to=3m

returns the area under v(2) inside the time interval between 2 ms and 3 ms.

### DERIV

Please note that meas {DC|AC|TRAN|SP} result DERIV&lt;ATIVE&gt; ... is not yet available in ngspice

### More measure statements

	meas tran inv_delay 2 trig v(in) val='vp/2' td=1n fall=1 targ v(out) val='vp/2' rise=1
	
	meas tran test_data1 trig AT=1n targ v(out) val='vp/2' rise=3
	
	meas tran out_slew trig v(out) val=' 0.2_vp' rise=2 targ v(out) val=' 0.8_vp' rise=2
	
	meas tran skew when v(out)=0.6
	
	meas tran skew2 when v(out)=skew_meas
	
	meas tran skew3 when v(out)=skew_meas fall=2
	
	meas tran skew4 when v(out)=skew_meas fall=LAST
	
	meas tran skew5 FIND v(out) AT=2n
	
	meas tran v0_min min i(v0) from='dfall' to='dfall+period'
	
	meas tran v0_avg avg i(v0) from='dfall' to='dfall+period'
	
	meas tran v0_integ integ i(v0) from='dfall' to='dfall+period'
	
	meas tran v0_rms rms i(v0) from='dfall' to='dfall+period'
	
	meas dc is_at FIND i(vs) AT=1
	
	meas dc is_max max i(vs) from=0 to=3.5
	
	meas dc vds_at when i(vs)=0.01
	
	meas ac vout_at FIND v(out) AT=1MEG
	
	meas ac vout_atd FIND vdb (out) AT=1MEG
	
	meas ac vout_max max v(out) from=1 k to=10MEG
	
	meas ac freq_at when v(out)=0.1
	
	meas ac vout_diff trig v(out) val=01 rise=1 targ v(out) val=01 fall=1
	
	meas ac fixed_diff trig AT=10k targ v(out) val=0.1 rise=1
	
	meas ac vout_avg avg v(out) from=10k to=1MEG
	
	meas ac vout_integ integ v(out) from=20k to=500k
	
	meas ac freq_at2 when v(out)=01 fall=LAST
	
	meas ac vout_rms rms v(out) from=10 to=1G

The following examples illustrate some of the measurements that can be made this way.

[Measuring WaveForm parameters 01](http://easyeda.com/editor#id=CAuM4XfxP)

[Measuring WaveForm parameters 02](http://easyeda.com/editor#id=USM4YgyQK)

[Measuring settling time](http://easyeda.com/editor#id=qoiAt9rlD)

[Find gain and bandwidth](http://easyeda.com/editor#id=8GE0KRFDn)