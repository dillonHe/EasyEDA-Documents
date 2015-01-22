 
# New Sandbox Version.
 
The new sandbox version is V2.1.1. EasyEDA has lots of new features in the version. Try it via [http://sandbox.easyeda.com/editor](http://sandbox.easyeda.com/editor).

**Warn:Sandbox version is newer than released version[http://easyeda.com/editor](http://easyeda.com/editor), it can open your old files, but [http://easyeda.com/editor](http://easyeda.com/editor) can not open the files which are created by sandbox version before we release it a few weeks later.** 


## Open File Format

 If you want to hack EasyEDA's EDA files, you can check [http://easyeda.com/Doc/Open-File-Format/](http://easyeda.com/Doc/Open-File-Format/) out.  
1. You can use some codes or notepad to create an EasyEDA file. Cool!
2. You can adjust your designs with EasyEDA's API.

## API Plug 

We spent months to realize this, maybe we need a full document to elaborate this function. Before we provide this, you can try to play.
### How to find the plug entance
![](./images/API-entance.png)

### Extensions Setting
You can enable or disable the default extensions, after enable, please **reload** the EasyEDA editor. We will give you a file about how to create an extensions soon. 
![](./images/Extensions-Setting.png)
 
If you enable the **Theme Colors** Extension, you will find a button on the tool bar like bellow image
![](./images/Theme-Colors.png) 
if you click the **Black On White**, you will find your schematic changes like bellow image, this is useful when you would like to print your design on a paper.
![](./images/blackOnWhite.png).

### Scripts
If you just need some simple functions, you don't need to create an extension. You just need to create a single Javascipt file and keep it in this list.
![](./images/scripts.png).
1. You can select the `Hello World`, then click the `Run` button.
2. You can select some items, then try `Move Selected Objects`.

### Run Script code
In some case, you just need to run the function one time, such as create a user define board outline in codes, changing the Track width, change the hole size etc. You can use this way.
![](./images/script.png).
**example 1 Art **
You can open an empty schematic and copy [this example javascript codes](https://raw.githubusercontent.com/dillonHe/EasyEDA-Documents/master/API/example/schematicShapes.js) to the text box to run a test. After clicking the `Run` button, you will see bellow art image.
![](./images/api-example-art.png)

**example 2 Change track width and via hole size **
You can open a **PCB** and copy [this example javascript codes](https://raw.githubusercontent.com/dillonHe/EasyEDA-Documents/master/API/example/modifyTrackVia.js) to the text box to run a test. After that, All tracks will be 10mil.

##Improved Design Manager
In the schematic and PCB file, there is toggle button [Design Manager <-> Properties] on the top right, when you switch to Design Manager, you will see bellow image
![](./images/DesignManager.png)

You can highlight the components and net, at the same time, you can check the ** DRC Errors**.

Schematic has design manager too, and you can filter and highlight the components, such as type a `R`, you will find all resistors.
![](./images/DesignManager-schematic.png)

##SVG Preview
![](./images/SVG-Preview.png)
After click the `SVG Preview` button, you will see a nice SVG image and you can save the SVG file to your hard drive. This operation will be faster than export, because you don't need to send the file to EasyEDA server, and it is safe.

##User Defined BOM Parameters
After select a schematic lib, you can add a parameter, and you can mark it as `In BOM`, when you export a BOM file, you can find this in CSV file.
![](./images/UserDefineBOM.png)

##Prefix Start
Every **new** schematic file has a `Prefix Start` custom paarameter, some users would like use  **multi-sheet designs**, but they hate every prefix start by 1, they hope one schematic start by 1, next start by 100, 200, 300. So you can use this solution.
![](./images/Prefix-Start.png)

##Allow to adjust the right panel width
Some Russian, German users' language is long, so they can addjust the width.

![](./images/rightPanelWidth.png) 

## New Pad shapes
