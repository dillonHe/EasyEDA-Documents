# Common Information
EasyEDA is a free, zero-install, Web and cloud-based EDA tool suite, integrating powerful schematic capture, mixed-mode circuit simulation and PCB layout.

EasyEDA team tries to make our users happy. We provide an open ASCII file format. With this file format, you can create a schematic or PCB using some codes, even with Notepad. When you try to add hundreds of LEDs to a schematic or PCB batch, you will find out that you can use codes to create an EasyEDA file, then import it to EasyEDA. It is fun and quick.

EasyEDA's file is a JSON file, but we compress all of the shape's attributes to a simple string, which will make the file size smaller and saving to server faster. More importantly, with this solution you can create some very big designs. Most browsers will crash when trying to decode the big JSON files. But EasyEDA will provide an **API** to let you to access the EasyEDA friendly JSON object, so you can hack the designs in the EasyEDA editor.


Ok, let's explain them with examples.
## Example
### Schematic Example
[Schematic Example ](https://easyeda.com/file_view_simply-schematic_puoGYgasK.htm)
![](./images/schematic-example.png)


### Schematic JSON File Source
check it via github gist [Schematic json](https://gist.github.com/dillonHe/0b62babdb8ab3d2ad7d3#file-schematic-json)
<script src="https://gist.github.com/dillonHe/0b62babdb8ab3d2ad7d3.js"></script>

### PCB Example
[PCB Example](https://easyeda.com/file_view_Simply-PCB_K4gCYjhDB.htm)  
![](./images/PCB-examle.png)

### PCB JSON File Source
check it via github gist [PCB json](https://gist.github.com/dillonHe/279c55659bb7065258b6#file-pcb-json)
<script src="https://gist.github.com/dillonHe/279c55659bb7065258b6.js"></script>
##General File Struct
###Delimiter Mark
From the above JSON source, you can find there are lots of **`**, **~**, **^^** and **#@$**  
 characters. These characters are used as **delimiter mark**. These characters are not used frequently in design.

 ***Note: Although these characters were not picked properly at the very beginning, we can't change these, EasyEDA already has lots of existing designs***

#### ~ (Tilde)
 `~` is used to separate the attributes of the shapes. Taking rectangle as an example.  `R~170~100~10~10~200~130~#99FF00~1~0~none~gge36~`, when use pure JSON file, it should be look like below,
check it via github gist [rect json](https://gist.github.com/dillonHe/55151fae7c36785cdc31#file-rect-json).

<script src="https://gist.github.com/dillonHe/55151fae7c36785cdc31.js"></script>


So EasyEDA's source is small in file size and will transfer from the internet faster.


#### `(Back Quote)
  **`** is used to separate the custom attributes. 

**package`LED3MM** stands package:LED3MM 

#### ^^(Double Circumflex)
**^^** is used to join segments, just used in *netFlag* , *Pin* and *pAD*.

#### #@$(Octothorpe Ampersat Dollar)
Union the characters **#@$** as a supper mark, it will be used to implode the [shapes](./schematic.htm#Shapes) to a string, it's only used in *Schlib* and *PCBLIB*.



##Document Type
check it via github gist [document type](https://gist.github.com/dillonHe/8c1a0e599540980bf7ab#file-document-type-js)
<script src="https://gist.github.com/dillonHe/8c1a0e599540980bf7ab.js"></script>

## Canvas Coordinates
The canvas is a two-dimensional grid.  
The upper-left corner of the canvas has the coordinate (0,0)  
![](./images/coor.png)

## SVG
 EasyEDA uses [Scalable Vector Graphics (SVG)](http://en.wikipedia.org/wiki/SVG) which is an XML-based vector image format for two-dimensional graphics to realize the shapes.

##Q&A
### 1. How to check the json file format
 Check the [EasyEDA source dialog](https://easyeda.com/Doc/Tutorial/introduction.htm#EasyEDA-Source) out, copy the text to text area, then click the `Apply` button. That is all.