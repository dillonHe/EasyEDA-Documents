# Common Information
EasyEDA is a free, zero-install, Web and cloud-based EDA tool suite, integrating powerful schematic capture, mixed-mode circuit simulation and PCB layout.

To help make our user's lives easier, the EasyEDA team provides all files in an open ASCII file format. With this file format, you can create a schematic or PCB simply by editing some codes just in a text editor like Notepad. When you need to change the package type for dozens of resistor or add hundreds of LEDs to a schematic or PCB design, knowing how to use the file codes to create an EasyEDA file which you can then import to EasyEDA allows you to do this far more quickly than editing the schematic or PCB in the EasyEDA editor browser window.

EasyEDA's file is a JSON file, but we compress all of the shape's attributes to a simple string, which will make the file size small and so will save to our server faster. More importantly, with this solution you can create some very big designs. Most browsers will crash when try to decode such big JSON files but EasyEDA will provide an **API** to let you to access the EasyEDA friendly JSON object, so you can hack designs in the EasyEDA editor.


Ok, let's explain how to do this with some examples.
## Example
### Schematic Example
[Schematic Example ](http://easyeda.com/file_view_simply-schematic_puoGYgasK.htm)
![](./images/schematic-example.png)


### Schematic JSON File Source <a name="schematicJson"></a>
check it via github gist [Schematic json](https://gist.github.com/dillonHe/0b62babdb8ab3d2ad7d3#file-schematic-json)
<script src="https://gist.github.com/dillonHe/0b62babdb8ab3d2ad7d3.js"></script>

### PCB Example
[PCB Example](http://easyeda.com/file_view_Simply-PCB_K4gCYjhDB.htm)  
![](./images/PCB-examle.png)

### PCB JSON File Source <a name="PCBJson"></a>
check it via github gist [PCB json](https://gist.github.com/dillonHe/279c55659bb7065258b6#file-pcb-json)
<script src="https://gist.github.com/dillonHe/279c55659bb7065258b6.js"></script>
##General File Struck
###Delimiter Mark
From the above JSON source, you can find there are lots of **`**, **~**, **^^** and **#@$**  
 characters. These characters are used as **delimiter marks**. These characters are not used frequently in design.

 ***Note: although these characters may not have been chosen picked properly at the very beginning of EasyEDA's development, we cannot now change them because EasyEDA now has too many designs***

#### ~ (Tilde)
 `~` is used to separate the attributes of the shapes. Taking rectangle as an example.  `R~170~100~10~10~200~130~#99FF00~1~0~none~gge36~`, when use pure JSON file, it should be look like below,
check it via github gist [rect json](https://gist.github.com/dillonHe/55151fae7c36785cdc31#file-rect-json).

<script src="https://gist.github.com/dillonHe/55151fae7c36785cdc31.js"></script>


So EasyEDA's source is small in file size so it can be transferred across the internet faster.


#### `(Back quote)<a name="backQuote"></a>
  **`** is used to separate the custom attributes. 

**package`LED3MM** stands for package: LED3MM 

#### ^^(Double circumflex) <a name="doubleCircumflex"></a>
**^^** is used to join segments, just used in *netFlag* , *Pin* and *pAD*.

#### #@$(Octothorpe Ampersat Dollar) <a name="octothorpeAmpersatDollar"></a>
Union the characters **#@$** as a super mark, it will be used to implode the [shapes](./schematic.htm#shapes) to a string, it is just used in *Schlib* and *PCBLIB*.



##Document Type <a name="documentType"></a>
check it via github gist [document type](https://gist.github.com/dillonHe/8c1a0e599540980bf7ab#file-document-type-js)
<script src="https://gist.github.com/dillonHe/8c1a0e599540980bf7ab.js"></script>

## Canvas Coordinates
The canvas is a two-dimensional grid.  
The upper-left corner of the canvas has the coordinates (0,0)
![](./images/coor.png)

## SVG
 EasyEDA uses [Scalable Vector Graphics (SVG)](http://en.wikipedia.org/wiki/SVG) which is an XML-based vector image format for two-dimensional graphics to realize the shapes.

##Q&A
### 1. How to check the JSON file format?
 Check the [EasyEDA source dialog](http://easyeda.com/Doc/Tutorial/introduction.htm# EasyEDASource) out, copy the text to text area, then click the `Apply` button. That is all.
