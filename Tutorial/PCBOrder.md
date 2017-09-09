
# PCB Order 
  After laying out your PCB, you probably want to order some **PCBs**. We have made it easy for you to save time and money by using our **awesome service** to order **low cost**, **high quality** PCBs *directly* from EasyEDA. More importantly, if you are not satisfied with the quality of our PCBs, EasyEDA will refund your money in full.

  Although EasyEDA makes it easy to order PCBs for your projects and offers an exceptionally low PCB Manufacturing fee, you are free to download the Gerber files and order your PCBs from any other vendor. However, if you like EasyEDA, please give us a chance to fab. the PCB for you. We think you won't be disappointed.



## PCB Quality
   As engineers, we have spent more than 6 years building EasyEDA. As artisans, we believe that if you like using our EDA tools, then you will like our PCBs. 

   EasyEDA's PCBs are in a group buy model and all PCBs are given 100% E-test. This allows us to provide you with good quality, tested PCBs at a great price. We have shipped thousands to our users, all of whom like our PCBs. 

 No matter how good we tell you our service is, maybe you still have doubts. The easy way to remove those doubts is to try it out because - as we have said above - if you are not satisfied with the quality of our PCBs, we will refund your money in full. For details of this offer, please check the [Warranty and Return](#WarrantyandReturn). 


## Order Button
To order PCBs from us, just click the **Fabrication Output...** button in the PCB Editor window, as shown in the image below, and you will be redirected to an order page. In that page you can place an order quickly and easily. At the same time, at the click of a button, you can check the Gerber and drill files in our Online Gerber Viewer and then download your files. Obviously, we hope that you will support EasyEDA by ordering your PCBs from us but you are welcome to download the Gerber and drill files and send them to your favorite PCB house.

![](images/142_PCB_FabricationOutput.png)


## Essential Check Before Placing a PCB Order


**A simple mistake can make a batch of PCBs useless so before submitting an order for PCBs, there are a lot of things to check.**

The list below is a good starting point for the essentials but it by no means exhaustive!

1) Check that all nets and netnames are as intended. For example nets can be accidentally connected together while drawing and editing a schematic and also by inadvertently assigning duplicated netlabels;

2) Check that the appropriate package has been assigned to each and every schematic symbol. Don't forget that different transistors, capacitors and even resistors may be in different packages in different locations in a schematic. Also check that components have been rated correctly as this may affect their package size (don't forget their height too!);

3) Check that the pin designations of the schematic symbol and the PCB package are the same. The pins on the schematic symbol for a bipolar transistor may be labelled B, C, and E but if the corresponding pins on the PCB footprint are labelled as 1, 2, and 3 then EasyEDA will flag this as an error when an attempt is made to convert the schematic into a PCB. It is simple to correct or - better - avoid this: change the labelling on the corresponding pins of the PCB footprint to B, C and E **or** change the labelling on the corresponding pins of the schematic symbol to 1, 2 and 3.

To change the pin labelling in the schematic to match the PCB footprint: select the part, press the `i` key then edit the **Names** in the **Edit Pin Map Information** section of the **Modify symbol information** dialogue that opens and click `OK` when finished.

To change the pin labelling in the PCB to match the schematic symbol: select each pin of the relevant part, then edit the pin **Names** in the right hand **Properties** panel.

Note: do not confuse the schematic symbol pin numbering with the spice pins numbering. For more about this see:

**Schematic symbols: prefixes and pin numbers** in:

[https://docs.google.com/document/u/1/d/1OWZVVFRAe\_2NW3WratpkA\_SGuHa5AcRow5ZRfvcoVTU/pub#h.pkwqa1](https://docs.google.com/document/u/1/d/1OWZVVFRAe_2NW3WratpkA_SGuHa5AcRow5ZRfvcoVTU/pub#h.pkwqa1)

4) Check that the pin designations of the PCB footprint chosen for each and every device actually matches the pinout of the device that will be soldered to it. It is very easy to assign a SOT23 package to a BC846 bipolar transistor where the pin order is:

Pin 1 = Base

Pin 2 = Emitter

Pin 3 = Collector

and then to forget that the pin order for a MMBF5485 junction FET going round the same SOT23 package in the same order is:

Pin 1 = Drain

Pin 2 = Source

Pin 3 = Gate

To change the pin labelling in the schematic to match the PCB footprint: select the part, press the `i` key then edit the order of the **PCB Pin** information in the **Edit Pin Map Information** section of the **Modify symbol information** dialogue that opens and click `OK` when finished.

To change the pin labelling in the PCB to match the schematic symbol: select each pin of the relevant part, then edit the pin **Numbers** in the right hand **Properties** panel.

5) Check that all necessary Bill of Materials (BoM) information is present and correct. Correct it and add more if required, making sure that fields such as `Description` are consistently labelled so that they form a coherent column structure in the BoM;

6) Check that all PCB footprints are correct for the intended devices (yes: whether they have come from the library or you have created them yourself: check them thoroughly);

7) Check that silkscreen markings such as the polarity markings for electrolytic capacitors and diodes are the right way round. Even if the pin names, numbering and sequence around tha package are correct, it can all go wrong if the footprint markings show the device in the wrong orientation.

9) Check that devices have been placed on the correct side of the board;

10) Refresh and check all the Components and Nets in the schematic Design Manager tab in the right hand panel;

11) Refresh and check all the Components, Nets and DRC Errors in the PCB Design Manager tab in the right hand panel;

12) Check connector and on-board pot and switch orientations;

13) Check the dimensions and locations of mounting holes and any components that have to line up with respect to these mounting holes or to apertures in an enclosure;

14) Check that the order of the top and bottom (and any inner layers) is correct;

15) Check that a Board Outline exists, is closed and that it is shaped and dimensioned correctly and is on the correct (Board Outline) layer;

16) Check that silkscreen markings do not overlap pads;

17) Check that all required silkscreen markings are present, in the correct locations on the correct layers, are within the recommended dimensions, are legible and and spelled correctly;

18) Check that any additional information such as notes about the PCB stackup etc., are present and on the correct (Documentation) layer;

19) Check that no board outline, silkscreen or documentation layer information has accidentally been placed on any copper layers;

20) Having completed the layout, check that the assembled component heights do not foul any enclosure (At the time of writing (160922) this is not something that can be acheived directly in EasyEDA as there is no 3D viewer yet available so this must be checked by other means);

21) If copper areas are used with heat shunt spokes enabled, check that any tracks that join pins that are also joined by copper areas run within the area of a spoke. If they do not - for example a 45 degree diagonal track coming out of a pad with 90 degree heat shunt spokes - the track forms an extra spoke which increases the heat shunting to a pad and so may make soldering more difficult;

22) Check that all copper areas assigned to a net are joined by reasonable widths of copper, i.e. they are not just joined by thin slivers of copper;

23) Check that any tracks that require special routing considerations such as Kelvin connections to low value current sense resistors or increased clearances for high voltage traces have been correctly implemented;

24) Check clearances of copper on all layers and components on both sides to the edges of the board;

25) Check that no traces have been set to hidden in the Design Manager Nets list;

26) Use the Design Manager (the **Design** button in the left hand panel) to check that all components are present in both the schematic and the PCB and that all nets have at least two connection;

27) Use the Design Manager (the **Design** button in the left hand panel) to check, investigate and correct all DRC errors.
A completed PCB design should have no DRC errors;

28) Check that the Gerbers to be generated are from the correct version of the PCB layout. It may have changed as a result of the above checks so always regenerate the Gerbers from the latest version unless there is a specific reason to use them from an earlier version. Putting a version number on the PCB helps but is not perfect as this has to be updated manually anyway;

29) Download and check items (6) to (24) in the Gerbers in either the EasyEDA Gerber Viewer:

[https://gerber-viewer.easyeda.com/](https://gerber-viewer.easyeda.com/)

or using a 3rd party Gerber viewer such as the free and open source gerbv:

[http://gerbv.sf.net/](http://gerbv.sf.net/)  
[http://flatcam.org/](http://flatcam.org/)  
[http://kicad-pcb.org/](http://kicad-pcb.org/)  
[http://www.gerber-viewer.com/](http://www.gerber-viewer.com/)

30) Check the order options such as number of boards, copper finish, silkscreen colour, solder mask colour, panellisation, any solder paste mask requirement and so on;

31) Lastly, check that the order is being placed with the correct delivery option. The default delivery method is by express courier. This is the most expensive option but avoids the mistake of ordering boards that are needed urgently with a slow delivery method.



## PCB Order from EasyEDA Editor
   When you click the `Fabrication Output...` button your order is coming from within the EasyEDA editor environment so you don't need to input information about **Layers**, **Width** and **Height**; EasyEDA fills this information in for you. 

   On the order form page you will find a real time price. Most of the time this price is the final cost however if, for example, you change the Layers to 4 or 6, you will find the price field changes to **Quote**. If that happens, don't worry: just click the `Save to Cart` button and we will email a quote for the final price to you ASAP. 

 **Note:**   

- *When you add your PCB to the cart, EasyEDA saves a copy of Gerber files at that time.*   

- *If you then change your PCB back in the PCB editor, **EasyEDA does not synchronize your Gerber files to the updated PCB design**.*  

- *The only way is to delete the earlier version of the PCB from your Cart and then add the updated design as a new item.*

![](images/PCBOrderPage1.png) 


## PCB Order from Order Link
  If you would like to upload your own Gerber files from a third party PCB tool such as Eagle, Pads, or Altium Design, just click on this link [https://easyeda.com/order](https://easyeda.com/order) to order. This page will let you upload your own Gerber Files.

![](images/PCBOrderPage2.png) 


## PCB Capabilities 

<table>
<tbody>
<tr>
<td width="200">Number of Copper Layers*</td>
<td width="400">1-16</td>
</tr>
<tr>
<td>PCB Material</td>
<td>FR-4, FR4-Tg, FR4-High Tg</td>
</tr>
<tr>
<td>Available Solder Mask Colors</td>
<td>Green, Red, Yellow, Blue, White, Black</td>
</tr>
<tr>
<td>Silk Screen Colors</td>
<td>White, Black (For White Solder Mask only)</td>
</tr>
<tr>
<td>Minimum Quantity</td>
<td>5</td>
</tr>
<tr>
<td>Minimum dimensions*</td>
<td>0.4cm x 0.4cm</td>
</tr>
<tr>
<td>Maximum dimensions*</td>
<td>100cm x 100cm</td>
</tr>
</tbody>
</table>

* If your PCB requires more than the default maximum of 6 layers (up to a maximum of 16) or larger dimensions, then please contact us before placing your order

* If your PCB dimensions are bigger than 45cm * 45cm, it may add some additional cost  


## Manufacturing Specifications:
<table border="1" cellpadding="2" cellspacing="2">
<tbody>
<tr bgcolor="#ccc">
<td rowspan="2">Item</td>
<td colspan="3">Specs</td>
</tr>
<tr bgcolor="#ccc">
<td>Unit: mm</td>
<td>Unit: mil</td>
</tr>
<tr>
<td>Available Board Thickness</td>
<td>0.4, 0.6 (except 4 layer), 0.8, 1.0, 1.2, 1.6, 2.0</td>
<td>15.7, 23.6 (except 4 layer), 31.5, 39.4, 47.2, 63.0, 78.7</td>
</tr>
<tr>
<td>Thickness Tolerance</td>
<td>(t &gt;= 1.0) ± 10%</td>
<td>(t &gt;= 39.4) ± 10%</td>
</tr>
<tr>
<td>Thickness Tolerance</td>
<td>(t &lt; 1.0) ± 0.1%</td>
<td>(t &lt; 39.4) ± 0.1%</td>
</tr>
<tr>
<td>Insulation Layer Thickness</td>
<td>0.075 - 5.0</td>
<td>2.95 - 196.85</td>
</tr>
<tr>
<td>Minimum trace width</td>
<td>0.089</td>
<td>3.5</td>
</tr>
<tr>
<td>Minimum inner trace width </td>
<td>0.127</td>
<td>5</td>
</tr>
<tr>
<td>Minimum trace/vias/pads space</td>
<td>0.102</td>
<td>4</td>
</tr>
<tr>
<td>Minimum inner trace/vias/pads space </td>
<td>0.102</td>
<td>4</td>
</tr>
<tr>
<td>Minimum silkscreen width</td>
<td>0.1524</td>
<td>6</td>
</tr>
<tr>
<td>Minimum silkscreen text size</td>
<td>0.8128</td>
<td>32</td>
</tr>
<tr>
<td>Outer Layer Copper Thickness</td>
<td>&gt; 0.03</td>
<td>&gt; 1.18</td>
</tr>

<tr>
<td>Drilled Hole Diameter (Mechanical)</td>
<td>0.3 - 6.35</td>
<td>11.81 - 250.00</td>
<tr>
<td>Drilled Hole Diameter (Laser)</td>
<td>0.2 - 0.3</td>
<td>7.87 - 11.81</td>
</tr>

<tr>
<td>Diameter Tolerance (Mechanical)</td>
<td>	±0.08 </td>
<td>	± 3.148</td>

<tr>
<td>Solder Mask Bridges</td>
<td>0.1</td>
<td>3.94</td>
</tr>

<tr>
<td>Circuit to edge</td>
<td>≥0.3</td>
<td>≥11.8</td>
</tr>
<tr>
<td>Slot</td>
<td>≥0.6</td>
<td>≥23.6</td>
</tr>
<tr>
<td>Slot Tolerance(Mechanical)</td>
<td>±0.15</td>
<td>±6</td>
</tr>

<tr>
<td>Aspect Ratio</td>
<td colspan="2">8:1</td>
</tr>
<tr>
<td>Solder Mask Type</td>
<td colspan="2">Photosensitive ink</td>
</tr>
</tbody>
</table>

If you have any special PCB requirements, please contact us before placing your order. 


## Price

All Prices stated are FOB Shenzhen. This does not include transportation costs which shall be borne by the customer. 


### Manufacturing Price

Price is dependent on many factors, such as the quantity of PCBs you order, PCB Color, Surface Finish, PCB Thickness, PCB Dimensions, Hole size etc. 

EasyEDA uses a group buy business model and we are sure it will be hard to find a better PCB supplier than EasyEDA offering the same price and quality.

EasyEDA needs 2~4 days to manufacture the PCBs after you submit payment.


### Shipping Costs
<table>
<tbody>
<tr bgcolor="#ccc">
<td width="50">Method</td>
<td width="300">note</td>
<td width="50">Price</td>
<td  >Service</td>
</tr>
<tr>
<td><strong>&nbsp;Air Mail</strong></td>
<td>&nbsp;Delivery Time: 8-35 days. Most of our users receive their PCBs in two weeks.</td>
<td>From $6</td>
<td >Usually  http://www.singpost.com/ </td>
</tr>
<tr>
<td>&nbsp;<strong>Express</strong></td>
<td>&nbsp;Delivery Time: 3-7 days</td>
<td>From $24</td>
<td >Usually delivered by http://www.DHL.com/ </td>
</tr>
<tr>
</tbody>
</table>

Note: The shipping cost is estimated. EasyEDA will always try to find the best shipping option.  If you are in some [Remote Areas](http://raslist.dhl.com/jsp/first.jsp), we will ask you to pay for more or change to some other express service such as Fedex, UPS. Sometimes, we will use [Hongkongpost](http://www.hongkongpost.hk/eng/index.htm) for delivery by Airmail.

## File Name
If your Gerber file names are good, this will save us a lot of time in checking your design. 
There are many different PCB design software packages so there are many variations of Gerber file names and filename extensions. 

Gerber Type

![](images/Gerber_File_name.png) 

If you don't know how to map your files, don't worry about changing the file names and please contact support for help.

**We encourage you to use our free online [gerber viewer](https://gerber-viewer.easyeda.com/) to check your gerber files before placing an order.**

## E-Test
All PCBs undergo a 100% AOI (Automated Optical Inspection) to make sure that all tracks and pads are connected.
In addition to this the PCBs can be tested by a flying probe to make sure that all vias are connected, because this is not visible by the AOI. Single layer PCBs do not require this test because there are no vias but boards with 2 layers and above will always be 100% tested with a flying probe.

## Payment
We accept the PayPal, Credit Card and Wire Transfers. 

### PayPal and Credit Card
We use Paypal as our payment; it is safe and easy. If you don't have a Paypal account, you can still use Paypal to pay with a debit or credit card.

![](images/paycard.png) 

### Wire Transfers
Wire Transfers can only be used on orders with a grand total (subtotal plus all additions and deductions but excluding shipping fees) of at least $600. For orders > $2000, payment by Wire Transfer is preferred. In this circumstance, 3.5% extra discount will be applied for the grand total (subtotal plus all additions and deductions but excluding shipping fees). Wire Transfer payments usually take 3-5 business days to clear. We will not ship your order until your payment is verified by our bank. Please send a copy of the Wire Transfer receipt to our customer service because although it is not sufficient to release an order, it will help us to push the delivery date. 

## Customs, Duties and Taxes
You should expect to pay any amount charged by the government in your respective country. This includes but is not limited to: duties, taxes and any extra fees charged by the courier company. We will not be held responsible for any extra charges once the original package has been shipped. If the customer refuses to pay these extra charges, the return shipping and any additional fees will be taken out of the cost of the order, with any remaining funds being refunded to the customer.
Customs are quite different in each country. Please include information about particular Customs requirements as necessary, while you are placing your order: we will support you as much as possible. 

## Warranty and Return
For your first order for a PCB laid out in **EasyEDA**, we have the top return policy on the planet! If you don't like them, just send an email to 

![](images/support_email.png), no reason needed. We will provide your full money back - including product + shipping costs - in one working day. 

For subsequent orders, because you now know the quality level of our PCBs, if you are not satisfied with a product you bought from us for whatever reason, you just need to email us some pictures of the product and explain why you are not happy with it. We will then refund the full money of the product. Shipping fees will only be refunded if the return is a result of a shipping error on our part. 

