
# PCB Design Editor 

After the initial conversion of a schematic to PCB, it is time to learn how to manage EasyEDA’s PCB Design Editor.


## Canvas 

Lots of PCB canvas attributes are the same as Schematic canvas attributes. The key is that you can set **units** in PCB canvas attributes.

![](images/108_PCB_CanvasAttributes.gif)


## PCB Tools 
PCB tools provide many function to fullfill your PCB desgin requirement.
Such as: Track, Pad, Via, Text, Arc, Circle, Move, Hole, Image, Canvas Origin, Connect Pad to Pad, Copper Area, Solid Region, Measure/Dimension, Rect, Group/Ungroup. etc.

![](images/109_PCB_PCBTools.gif)


### Track 

In the schematic editor, we use Wire or the `W` Hotkey to connect Pins, in a similar way in the PCB editor, we use Track to connect Pads. Track allows you to draw PCB tracks and can be found on the PCB Tools palette or using the `W` Hotkey (not T: see above!).

**Some Tips about Track.**

1.  Single click to start drawing a track. Single click again to pin the track to the canvas and continue on from that point. Right click to end a track. Double right-click to exit track mode.

2.   Drawing a track at the same time to use hotkey(for example hotkey `B`) to changing the active layer, will automatically insert a Via:

	![](images/113_PCB_TrackInsertVia.gif) 
	
	If you start drawing a track on the top layer - you will see it drawn in red - then press the B key to change to bottom layer and you will see EasyEDA insert a grey via and then the track will continue being drawn but now on the bottom layer in blue.

3.  Pressing the `+` or `-` Hotkeys when drawing the track will change the width of the track on the fly.

4.  Double clicking the on a drawn section of track will add a new vertex at that point. You can drag the vertex to form a new corner.
	
	![](images/114_PCB_TrackVertex.gif)

5.  Click to select the track and then Click and Drag on a segment of track adjusts the segment between vertices.
	
	![](images/115_PCB_TrackSegmentAdjust.gif)

6.  Pressing the `L` Hotkey when drawing the track will change the track’s Route Angle on the fly. And you can change Route Angle on the Canvas Attributes of the right panel before next drawing.
	
	![](images/112_PCB_RouteAngle.png)


7.  You can change inflection direction when routing, just press `Space` key.

	![](./images/224_PCB_TrackChangeDirection.gif)
 

**Track Length**

when select a track, you can find it's Length attribute in the right panel.
![](./images/137_PCB_TrackLength.png)  


**Delete a Segment from a Track**

In lots of other EDA tools, the track is segment line, but in EasyEDA, the track is polyline. some time, if we want to delete a segment, we must delete the whole track and router again. Now we provide a not bad way to do this. Moving your mouse to the segment which you want to delete, click it, then hold the `SHIFT` and **double click it**. the segment will be removed.

![](./images/225_PCB_DeleteSegmentTrack.gif)


### Pad 

You can add pads using the Pads button from the PCBLib Tools palette or using the `P` hotkey.

Selecting one of the pads, you can view and adjust it’s attributes in the right hand Properties panel.

![](images/144_PCBLibs_NewPad.gif)

**Number:** Remembering the pin numbers you set in the schematic symbol in your Schematic Lib: to connect those schematic symbol pins to the pads in your PCB footprint, the pad numbers you set here in the PCB Lib footprint must be the same.

**Shape:** Round , Rectangular ,  Oval and Polygon.

EasyEDA supports four shapes: `Round` , `Rectangular` , `OVAL` and `POLYGON`.  

-	`OVAL` PAD will give your more space.   
-	`POLYGON` PAD will let you to create some strange pad.  

like bellow image, you can edit the PAD'S points when you select a `POLYGON` PAD
![](./images/145_PCBLibs_NewPadShape.png) 

**Layer:** If the pads are part of a **SMD** footprint, you can set it to **Top layer** or **Bottom layer**. For through hole components you should set it to **All**.

**Net:** You don’t need to enter anything here because at present this footprint is not connected to anything in a circuit.

**Width and Height:** When the shape is set to Round, Width will equal Height.

**Rotation:** At here, you can set Pad's rotation what you want.

**Hole(D):**  This is the drill hole **diameter** for a through hole pad. For a SMD Pad, set this to **zero**.

**Center-X and Center-Y:** using these two attributes, you can set the pad’s position with more precison, compared to using the mouse.

**Plated：** Yes or No.
 

### Via

When you want to lay the multilayer PCB, you need to add Vias for nets getting through layer and layer.

**Place a Via On a Track**

When placing a `via` on a track, the track will be cuted to two segments.  Place two vias on a tracks, you will get three segments, then you can change one segment to other layer id, or remove one of them.   
![](./images/142_PCB_ViaOnTrack.gif)


### Text

You can add more fonts from your computer or download some [free fonts:www.1001freefonts.com](http://www.1001freefonts.com/) .

Select the text, then you can find a Font-family attribute on the right panel like bellow image.  
![](./images/185_PCB_Text_AddFonts.png)  

Click the add button, then choose the font, the font file must be `ttf` or `otf`.  
![](./images/186_PCB_Text_FontsSupport.png)  

So you can add any fonts by your self. EasyEDA doesn't cache the font on our server, so if you close the editor, you need to add the font again by your self.

**Note:** *If you use the other font, the `LineWidth` attribute is useless, because it will be auto by change the `Height`.*



### Arc

You can draw many Arcs with different size, it's easy to create pretty cool PCB as you like.  

![](./images/242_PCB_PCBTools_Arc.png)  

EasyEDA provide two Arc tools:

- Start point fixed, you can change end point position and radius.  
![](./images/268_PCB_Arc.gif)
- Center point fixed, you can change radius.  
![](./images/269_PCB_Arc_Center.gif)

### Circle

You can draw a circle in PCB , but it just can be drew at SilkLayer and Document Layer. If you want to draw a circle at TopLayer or BottomLayer, please use Arc.

### Move

This option as same as schematic's drag.

### HOLE

There are lots of users don't know using PAD or VIA as a HOLE, they asked EasyEDA for help, so EasyEDA add a HOLE TOOL in the PCB toolbar.  
![](./images/139_PCB_PCBTool_Hole.png)

### Image  

On PCB and PCB Lib editor, there is a nice feature on the PCB Tools bar.
After click it and select the image, you will goto bellow image.  
![](images/184_PCB_InsertImage.png)  

In this dialog, you can choose your favorite image, EasyEDA support `JPG`, `BMP`, `PNG`, `GIF`, and `SVG`. not likes some other EDA tools, they just support a Monochrome Bitmap image, EasyEDA support full color. but Monochrome Bitmap is welcome.

You can adjust the tolerance, adjust simplify level and reset the image size at there.

And you can select shape invert. 

The image will be inserted to the active layer, if it is not right, you can change the attribute of it. Such as TopSilkLayer.    
![](images/187_PCB_InsertImageLayer.png)  


### Canvas Origin

This option as same as schematic's Canvas Origin.

### Connect Pad to Pad

When creating a PCB without Schematic, none of the pads on the Footprints have nets connecting them so there will be no ratlines. 
  
Rather than try to track the pads from scratch, it is a good idea to connect them up by hand first using `Connect Pad to Pad` from the PCB Tools palette. This will help you to remember to track the pads correctly with fewer mistakes.   

You can could also do this by setting net names for all the pads: if the two pads are given the same net name then EasyEDA will understand that they are connected together and will automatically create a ratline between them.  

![](images/119_PCB_PCBTool-ConnectPadToPad_1.gif)  

Or you can setting these two pads with the same net name at the right panel Pad Properties after you click the pad.

![](images/120_PCB_PCBTool-ConnectPadToPad_2.gif)  


### Copper Area 

Sometimes you will want to fill in or flood an area with copper. Usually this copper area will be connected to a net such as **GND** or a supply rail. You can draw the outline of a flood using the **Copper Area** button from the PCB Tools palette.

When selecting a copper area, you can find it’s attributes from the right hand **Properties** panels.

![](images/134_PCB_PCBTool_CopperArea.png)

**Layer:** Bottom, Top, Inner1, Inner2, Inner3, Inner4;

**Net:** the net that the copper area is connected to;

**Clearance:** clearance of the copper area from other nets and floods;

**Pad Connection:** direct or spoke (i.e. a cross shaped heat shunt);

**Keep Island:** Yes/No. This keeps or removes any isolated areas of copper created as part of the flooding process. It is usually good practice to removes these unless you really need them to maintain a more even spread of copper (copper balance) on your PCB);

**Fill Style:** No/Filled. No removes the fill so that you can see the tracking more clearly;

After drawing the copper area, set the net it is to be connected to (floating copper areas are not recommended because they can cause EMC and Signal Integrity (SI) problems).

Lastly, don’t forget to click the button Rebuild Copper Area to **rebuild** the flood.

**Two Tips:**

1.  Hotkey `Shift+B` to build all of the copper areas.
2.  Hotkey `Shift+M` to clear all of the copper areas.

### Solid Region

EasyEDA has added a new tool Solid Region for PCB design

![](images/121_PCB_PCBTool_SolidRegion.png)

This is a very useful, quick way to connect Pads. You can draw a Solid Region to include all of these pads with same net name, then set the region to the same net name as the pads. It is like Copper Area but easier to use for small areas. To use Solid Region like this, set the Type attribute (in the right hand Properties panel)  to Solid.

![](images/122_PCB_SolidRegion_1.png)

The Solid Region can also be used to create a cutout in a copper area.

If you have a copper area but need an area inside it to not be filled then you can draw a Solid Region  and set the Type attribute (in the right hand Properties panel)  to Cutout , then this area will be free of copper, as shown in the image below:

![](images/123_PCB_SolidRegion_Cutout.gif)

Lastly, by setting the Type attribute (in the right hand Properties panel) to NPTH(Non Plated Through Hole), Solid Region can be used to create a *Non Plated Through Hole* of an arbitrary shape.

When the Gerber files are generated, an area defined by a Solid Region set to a Type NPTH such as shown and the PCB photo view in the image as below, There will create an area defined to be a NPTH hole.

![](images/124_PCB_SolidRegion_NPTH.png)


### Measure/Dimension 

Making and adding measurements is useful in PCB design. EasyEDA provides two methods to do this.

1.  Dimension tool in the PCB Tools palette:  
	This tool can show three units on the canvas, milliliter, inch and millimeter.
 
	![](images/132_PCB_PCBTool_Dimension.png)
	
	When you click one side of the dimension on the PCB, you can drag it for any directions or change its length.
	![](images/276_PCB_PCBTools_Dimension.gif)

2.  Measure a distance use **M** Hotkey: press **M**, Or Via: **Super menu > Miscellaneous > Measure Distance**, then click the two points which you would like to measure.    
	**Note:** *This method will display the distance units which is the canvas' units.*  
	![](images/133_PCB_Dimension_KeyM.png)


### Rect

It seems like Solid Region , but it can't set Nets and set Layer as NTPH.

![](images/243_PCB_PCBTools_Rect.png)

### Group/Ungroup

Just like Group/Ungroup in the Schematic Editor can be used to create a schematic lib symbol in, you can use Group/Ungroup from the PCB Tools palette to create a PCB Lib footprint in the PCB editor.

For example, place Tracks and Pads on the canvas, then select all of them and click **Group/Ungroup** to group them like the image below:

![](images/118_PCB_PCBTool-Group.gif)

## Ratline

When you lay the track in the PCB, Between PIN and PIN as they have the same net name, among them will auto shown up a Ratline to reveal they are enable to connect with track.

![](images/222_PCB_Ratline.png)

If you want to some kind of ratline do not shown on the PCB editor, you can deselect which net you like in the design manager, as below deselect `+12V`:
If you still draw a track in `+12V` after deselect, canvas will not display this track , but it show a text with `+12V` as below.

![](images/223_PCB_UnShownRatline.png)

Base on this skill， you don't need lay GND net before copper area in the PCB.

## PCB Net

### Net Name Visible

PCB editor can display net name in the track or Pads, if you don't need this feature, just need to turn it off via： 

**Super menu > Miscellaneous > View > PCB Net Visible**, or press hotkey `Q` .

![](images/227_PCB_PCBNetVisible.png)

### Net Length

When select a track, then press `H` key, EasyEDA will highlight the whole net and pop a message box to tell you the whole net's length. like bellow image  
![](./images/138_PCB_NetLength_KeyH.png)

## Layer Setting 

Via **Super menu > Miscellaneous > Layer Options...**, Or Click **Layers**' gear icon.

You can find the Layer Options Settings dialog.

In this dialog, you can change the layer’s Color and configure which layers are shown on the Layers Tool. If you plan to design a PCB with more than 2 layers, then you must tick Inner1 and Inner2 for a 4 layer PCB plus Inner3 and Inner4 for a 6 layer PCB.

![](images/110_PCB_LayerOptions.png)


## Layers Tool 

Active Layer: The colours of the layers in the **Layers Tool** are defined in the Layer Options Settings. To work on a layer then you must make it the Active layer. To do this; click on the coloured rectangle representing the required layer. The pencil icon in the coloured rectangle, indicates that this is the active layer.

Show/Hide layers: click on the eye icons to show/hide layers.

![](images/111_PCB_LayerView.gif)

HotKeys for layer activation:

**T:** Top Layer is active  
**B:** Bottom Layer  
**1:** Inner1 Layer  
**2:** Inner2 Layer  
**3:** Inner3 Layer  
**4:** Inner4 Layer  



## Footprint attributes 

When selecting a Footprint, you can find its attributes at the right hand Properties panel.

![](images/116_PCB_FootprintAttributes.png)

**Layer**: You can set a footrpint to be on the Toplayer or Bottomlayer.   
*Note: The footprint mirrors when swapping layers.*

**X-Location and Y-Location**: Move the origin of the footprint to a precise position.

**Rotation**: Rotates the footprint about it’s origin over the range from 0o to any angle in 1o steps (visually of course multiples of 360o will appear identical).

**ID**: EasyEDA will assigned a unique ID for each footprint automatically, you can't modify it.  


### Change Attributes in Batch on PCB Editor

Some times, we need to change some attributes in the same together, such as the track width, hole size and font size.  
Now, you can select them and do some changes. Taking the track for an example. If you select 3 tracks, now you can change their `Width`, `Layer`, `Net` together.  

![](./images/262_PCB_TrackBatchModify.png)

Other items such as `Pad`, `Via`, and  `TEXT`, you can try to play this feature.



## Layout A PCB Without Schematic 

In some small PCB projects, maybe you don’t need a schematic. EasyEDA allows you to lay the PCB directly from the PCB Editor.

Start a new PCB and you can add footprints directly from the PCB Libs from Left Navigation Panel **Parts** and then just track them.  

Almost you need set net name between pad to pad, you can check above section to go on: [Connect Pad to Pad](./PCB.htm#Connect-Pad-to-Pad)



## Board Outline

Before placing footprint we need to create a board outline. The board outline must be drawn on the **BoardOutLine** layer. So first, set **BoardOutLine** as the active layer, then draw the board outline using **Track** and **Arc** from the PCB Tools palette.

![](images/125_PCB_Outline.png)

When converting a Schematic to PCB, EasyEDA will try to create a board outline for you.

The area of the default board outline area is 1.5 times the sum of the area of all of your footprints, so you can place all of your footprints into this board outline with some allowance for tracking. If you do not like the board outline, you can remove the elements it is made up from  and draw your own.

![](images/126_PCB_AutoOutline.png)

To create a simple rectangular board outline, this arc can be removed and the line X and Y end points edited - either directly in the Properties panel or by dragging the line ends - to close the rectangle.

Alternatively, an outline with more rounded corners can be created by copying the arc and rotating it in 90 degree steps to position it over the desired right angle corners and then editing the line X and Y end points - either by dragging the line ends or directly in the Properties panel - to overlap the arc end points (also shown but not editable in the Properties panel).  

And EasyEDA provide a **Board outline wizard**, it is very easy to create a board outline.
Via: **Super menu > Miscellaneous > Set Board Outline**, Or find it on the toolbar.  

![](./images/127_PCB_BoardOutlineWizard.png)

In this dialog, we provide 3 type board outline setting, Rectangular , Circular, Round Rect. If you need other complex board outline, you need to import a DXF file.


## Design Manager 

Just like Schematic’s Design Manager, PCB’s Design Manager can be found via:

**Left Navigation panel > Design**

or just press the `CTRL+D` hotkeys to open the Design Manager dialog.

In this dialog, you can:

1.  Click a component to highlight it.

2.  Check/uncheck a component to show/hide it.

3.  Filter to find a component or net.

4.  Click a net to highlight the tracks/vias with the same net.

5.  Check/uncheck the net to show/hide the net. For example, very often you may want to use this to hide a GND or supply net which has had a copper flood added to turn it into a plane and then show it again later.

6.  Double click the net to remove all of the track and via with the net name. If you want to reroute a net, this is the recommended method to use to un-route it first.

![](./images/018_Introduction_Design-Manager-PCB.png)


## Import Changes 

Sometimes, while working on a project, you need to make changes to the schematic and then update your board, to incorporate them.

It's easy to do this with EasyEDA.

Go to the **PCB Editor**,

**Super menu > Miscellaneous > Import Changes**

Or click that button at the tool bar  

![](./images/128_PCB_ImportChanges.png)

You will get a Confirm Importing changes information dialog:

![](images/129_PCB_ImportingConfirm.png)

If you are happy with your changes, just click the Apply Change button.

The changes will then be passed into the PCB layout and you can then adjust the tracking to suit.


## Invalid Packages 

Some times, when you try to convert a schematic to a PCB, you will get an error message dialog like below. Don’t worry, it is easy to fix this problem.

![](images/130_PCB_InvalidPackages.png)

From the error message, you will find that the symbol’s PIN number is different from PAD number. How cause that? Check the below image,

![](images/131_PCB_InvlaidPackages_Symbol.png)

![](images/277_PCB_InvalidPages_Footprint.png)

From the image, we can get the PIN number in the schematic symbol is setting as `3`, but the PAD Number in the PCB Footprint is setting as `2`. Now you have know the problem, how to fix this? 

- Solution One: Change the schematic symbol.
 Using [PinMap function](./schematic.htm#Pinmap-Modify-symbol-information). Change the PCB PIN from `3` to `2`. And save your schematic , and update PCB.

- Solution Two: Modify the Footprint.
 Edit the Footprint, change the PAD from `2` to `3`. And set this PAD net name as same as LED2 net name of schematic.  
 So, we should aware that PIN number should be the same as Pad number.


## DRC

EasyEDA provide a powerful real time DRC(Design Rule Check) function. 

Via at:**Super menu > Miscellaneous > Design Rule Setting** to open the **DRC** setting dialog:  
![](./images/135_PCB_DRCSetting.png)   

**Note:** *When you convert a schematic to PCB, the real time DRC is open. But in the old PCB, the real time DRC is closed. you can open it as above image.*  

This is a big feature of EasyEDA. It is hard to fix DRC errors after layout the PCB. Now EasyEDA will let you know the error in routing. You will find a `X` flag to mark the error, such as Track to Track or Track to PAD like bellow image
![](./images/136_PCB_DRCError.png)


## Auto Router

For some simply or prototype PCBs, you may want to use the auto router function to save time. Layout is a time cost and dull job. EasyEDA spends lots of time to provide such feature and loved by our users.
Steps:

**1 Click the the auto router button from the toolbar**

![](./images/180_PCB_AuotoRouter.png)

**2 Config the auto router**

 After you click that button, you will get a config dialog like bellow image.  

![](./images/181_PCB_AuotoRouterConfig.png)  

In the config dialog, you can set some rules to make the auto router profession.

If you want to keep the routed tracks, you need unchecked the `Ripup Nets`

The real time check box will let you see how it is going, but it will make the process a bit litter slow.   
![](./images/182_PCB_AuotoRouterProcess.png) 

If you like to keep the a net no route, you can skip it. For example, if you want to use copper area to connect `GND` net, you can skip the `GND` net. 

For the power supply track, you may want it to bigger, then you can add some special rules. 

**3 Run it**

Click the run button, waiting for  a few seconds, after add bottom and top copper area, you will get a finished PCB board like bellow image.

![](./images/183_PCB_AuotoRouterFinish.png) 
 
Some time, if you can't get it done, try bellow tips.

1. Skip the GND nets, add copper area to GND net.
2. use small tracks and small clearance, but make sure the value is more than 6mil.
3. Routing some key tracks manual before auto router. 
4. Add more layers, 4 layers or 6 layers

Some profession people don't like the auto router, because they think auto router is not profession, but you can the auto router to check your placement. to check the density of your PCB. 


## Photo View

EasyEDA has no 3D View at present, but we provide a nice Photo View to help you to check the PCB. There is a `PhotoView` button on the PCB document toolbar, like bellow image. If you can't see this button, try to **reload** PCB again.

![](./images/140_PCB_Toolbar_PhotoView.png)

After convert PCB to Photo View, you can see bellow image.

![](./images/141_PCB_PhotoView.png)


  
## Getting Fabrication Files

You can check via [Export Fabrication Files](./export.htm#Export-Fabrication-Files)





