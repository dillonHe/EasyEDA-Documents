#EasyEDA Schematic File Format

Note: Schematic, Schematic Library, Spice Symbol, Subpart and Subckt are used the same file format.

##Head
###Head information for schematic and subckt.  

	"head":"1~1.7.5~Author`Dillon`~TRAN`2u`2m`0`{AC`dec``0`0`{DC`0``0`0`{TF```"

**Format:**

1. [Document type](./common.htm#documentType) :`1`
2. Document version: `1.7.5`
3. Custom attributes: **key: value** pairs, separate with **`**, added via **Add new parameter**  
  ![](./images/customAttributes.png)
4. Spice simulation configure store, Now can set four types `tran`, `AC`, `DC`, `TF`, every type split with `{`. When opening the simulation dialog, these information will be listed in like below image
![](./images/simulation.png)


###Head information for  Schematic Library, Spice Symbol and Subpart
	"head":"7~1.7.5~400~300~package`DIP08`nameDisplay`0`nameAlias`Model`Model`555`name`555`pre`U?`spicePre``Contributor`Dillon"

**Format:**

1. [Document type](./common.htm#documentType) :`7`
2. Document version: `1.7.5`
3. Origin X position. **Reserved field, can't be changeded** 
4. Origin Y position. **Reserved field, can't be changeded** 
5. Custom attributes: **key: value** pairs, separate with **`**, added via **Add new parameter**.   
*package*: *DIP08*  
*nameDispaly*: *0* (hide it is name when placed to schematic)  
*nameAlias*: *Model*   
*name*:*555*  
*pre*:*U?* , when place to schematic, will be marked as U1, U2. subpart will be set as *U?.1*, *U?.2* etc.  
*spicePre*:*X*, *X* stands for a subckt.
 
Place it to schematic canvas, it's attributes will be looked like below image. The name field is alias as Model and it is invisible. 
![](./images/schematicLibAttr.png)

##Canvas
	"canvas":"CA~1200~1200~#FFFFFF~yes~#CCCCCC~10~1200~1200~line~10~pixel~5"

1. Command: CA
2. View Box Width: 1200, View Box Width / Canvas width = scaleX
3. View Box Height: 1200,View Box Height / Canvas Height = scaleY
4. Back Ground: #FFFFFF
5. Grid Visible: yes/none
6. Grid Color: #CCCCCC
7. Grid Size: 10 pixel
8. Canvas Width: 1200 pixel
9. Canvas Height: 1200 pixel
10. Grid Style: line/dot
11. Snap Size: 10 pixel
12. Unit: pixel(Always pixel)
13. Alt Snap Size:5 (Snap Size when pressing the `ALT` Key)

Canvas setting image  
![](./images/SchematicCanvas.png)

##Shapes
###Rect
###Polyline
###Path
###Arrowhead
###Bus Entry
###Arc
###Pie
###Image
###Polygon
###Line
###Circle
###Bus
###Pin
###Ellipse
##Annotations
##Netlabels
##Netflags
##Wire
##Junctions
##SchLib