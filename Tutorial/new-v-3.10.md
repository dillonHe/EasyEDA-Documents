# What is new in the V3.10.X  
 

The new version is V3.10.x. EasyEDA has lots of new features in the version. Try it via [https://easyeda.com/editor](https://easyeda.com/editor).


![](./images/V3.10.x.png)
 



##Better Mac User Experience 
Mac users can use Chrome, EasyEDA works better under Chrome than Safari.

**1. Pan**
 
 **When Using Mouse**
Hold down  the right click and move your mouse, the canvas will be panned.
If you use the Magic Mouse, You need to enable the right click at first via this video. https://www.youtube.com/watch?v=ekzIoAxXSHE,

**When Using Touchpad **
 Hold down the `SHIFT` key, then move your one finger, the canvas will pan in horizontal direction.
 
Hold down the `Control` key, then move your one finger, the canvas will pan in  Vertical  direction. 

**2. Zoom in and zoom out**

 **When Using Mouse**
Scroll your middle button of mouser or Magic mouse.

 **When Using Touchpad **
Sliding your finger up  zoom in, and sliding down  zoom out.

## New Pad attribute.
add `Slot ` and `Plated` attributes for pad's hole like bellow image
![](images/image51.png)


## Components 
The new components will save your lots of time. Press hot key `SHIFT+F`  or click it via toolbar ![](./images/components-button.png) 
In the new components dialog, it is easy to select the right components via tags, and you can set tags for your components.

### New Dialog
   When creating a schematic lib, there is an input dialog, you would better to set the sourcing information, such as how to buy it and datasheet. If you don't like to add these information, you can skip this and add these later.

![](./images/newComponent.png) 


### New Component attribute
  EasyEDA adds a `Mounted` attribute at the component, if you don't want to assembly that components, you can set it to `NO` like bellow image. If set `Mounted` to `NO`, we don't list it to the BOM.
![](./images/mounted.png) 

### Components search dialog
If you selected the `EasyEDA Components`, you will find a dialog like bellow image.
 ![](./images/componentsDialog.png) 
EasyEDA team spend lots of time to build these components/packages, we recommend you to use these components, because we have sent the right packages for you and you can order the components from EasyEDA.  More important, we can solder these components too.
There are some other categories, you can try to explore. 
  ![](./images/Component-cat.png) 


## New search filter
 When updating a package, you may want to just  search package/footprint, so you can use the filter. `AXIAL doctype:pcb` the filter doctype:pcb will just search PCB package with the name AXIAL. 
  `doctype:sch` will help you to just search components without package.

 ![](./images/setpackage.png) 
 
 
## Synchronous schematic and PCB
 You can convert schematic to PCB bellow toolbar, if you modify the schematics and want to update the PCB again, you can click the `update PCB` button. 
  ![](./images/sy-sch-pcb.png) 



 ## Add Frame

 You can add some design notes at the frame, the good point is it is good to print your schematic if you set the right frame, such as A4 . 
 ![](./images/frames.png) , the right bottom zone can be drag and select, you can drag and delete the frame.


## Hide the simulation button
EasyEDA's simulation function is powerful, but it is not easy to use. Lot of users run a schematic which can't simulate, such as Wifi modules, MCU, DSP schematics, they never get the right results, then get disappointed, at the same time, waster lots of CPU resource.
So we hide the simulation button to avoid this, but you can use CTRL+R to run the simulation.

##Desktop version coming soon
  EasyEDA will provide a desktop version for offline use. 



Enjoy it, if you have any questions, do let us know.



 
 





 