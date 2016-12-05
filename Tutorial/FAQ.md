# FAQ

 ## Please spend a few minutes reading this FAQ, it will save you lots of time getting started with EasyEDA.
 
##Keep in Mind

  1. There is no need to back up your schematics and PCBs manually. After the first save of any file, EasyEDA will back up all saved files automatically  under the [Version History](https://easyeda.com/Doc/Tutorial/new.htm#Version-History). If you want to back up your files locally, you can download a copy of the whole project or of individual project files in a projects in EasyEDA Source (JSON) format:
  
  INSERT IMAGE OF RIGHT CLICK DOWNLOAD PROJECT
  
  and
  
  Document > EasyEDA Source > Download
  
 
  
  2. If you need help, you can contact us ![](https://easyeda.com/Doc/Tutorial/images/support_email.png) or ask via our support forum; we  will respond ASAP.
   
  
##Most Common Errors on EasyEDA.
  1. Manually creating backup schematics into the same project. When a project is converted to PCB, EasyEDA will merge all of the schematics under the same project into a single PCB. If there are multiple copies of the same schematic in a project then this will create errors such as duplicate part prefixes. Especially if you are new to EasyEDA, just keep one copy of each unique schematic in any one project. 
  2. Saving schematic and PCB into different projects. Unless you are absolutely sure that you will not need to update (Synchronise) your PCB from changes made to your schematic then please keep the schematics and PCB under the same project.
  3. Bad packages. Schematic symbols must have the appropriate footprints assigned to them, these footprints must exist in the library and - for any footprint that you have not created yourself - you must have clicked on the **Favorite** option in the component search window to add it to your **Favorite Parts** list in the left hand Navigation panel.
  4. Using the polyline from the Drawing Tools Palette to connect symbol pins. To connect components together, you must use Wires from the Wiring Tools Palette.
  
   
##Concept
### How to find the list of hotkeys?
https://easyeda.com/Doc/Tutorial/introduction.htm#Hotkeys

### Where are my files?
   Your files are stored on EasyEDA servers, so you can access them anywhere and share them with your partners.
 
###Why does EasyEDA focus on Cloud based EDA?
  EasyEDA is built for people who like to work anywhere, who like to build projects together with other team members, who like to share their projects, who like something that operates like a github for hardware design. The only way to meet these needs is to build a Cloud version EDA.

###How can I work if there is no internet?

NEED TO CLARIFY THIS:

+++++++++++++++++++++++++

  The internet will be very easy and cheap to get. If you don't have a very such low possible to happen to this, maybe you need to have rest.  For the google time, if no internet, we maybe don't know to how to design and code, so just have a short rest. and EasyEDA will provide a desktop client soon.
  
+++++++++++++++++++++++++
  
### Does EasyEDA has a desktop version?
   At present, no but EasyEDA is developing and testing a desktop version soon. A Windows version will be available at the end of this year. Mac and Linux versions will be available early next year. 

### Which Browser is best for EasyEDA?
  **Chrome**. Firefox and Safari are OK too. If you are restricted to using other browsers, you would be better to download the EasyEDA desktop client when it becomes available (see above).

###How to go to your dashboard?
 In the [dashboard](https://easyeda.com/projects/mylists), you can check all your Projects, Modules, Components and Favorites, projects others have shared with you, forum posts and orders. 
 
 There are two ways to arrive there.
   1. From the Editor, you can click on the logo:     
      ![](./images/dashboard-logo.png). 
      
   2. From the homepage:   
      ![](./images/dashboard-homepage.png). 


## Projects and Files
### Where can I find my projects and files?
   1. From the Editor, you can find them via **My projects** from the drop down menu in the left hand Navigation panel.
      ![](./images/myprojects.png)

   2. From the dashboard 
      [https://easyeda.com/projects/mylists](https://easyeda.com/projects/mylists)
 
  
### How to delete a project?
   Select it and right click to open a context menu, like the image below.
   
![](./images/DeleteProject.png)
 
### How to delete a schematic or PCB?
 Select it and right click to open a context menu, like the image below.
![](./images/deleteSchematic.png) 

### How to share a project with others.
   1. Make your project public.
  Open https://easyeda.com/projects/mylists, then click the arrows place. it will be green after public.
   ![](./images/makeitpublic.png)  

   2. [Via Access Control](https://easyeda.com/Doc/Tutorial/share.htm#Access-Control) 
     You can right click your project and select the access control menu.

    ![](./images/access-control.png) 
  
       
### How to find  history version of the schematics and PCBs
  For schematics and PCBs, EasyEDA provide version history, you can find them as shown in the image below: 
 ![](./images/versionHistory2.png)  

## Schematic
###If I update the schematic, how to Synchronous schematic and PCB?
  
Converting a schematic to PCB can be done using the `Convert Project to PCB...` button as illustrated in the toolbar below but a new `update PCB` button has been added so that modifications to the schematic can immediately be passed forward to update the a selected PCB without having the PCB editor window already open. 
  ![](./images/sy-sch-pcb.png) 

Or you can import change via PCB https://easyeda.com/Doc/Tutorial/PCB.htm#Import-Changes
### How to find the components
The component search function has been significantly improved to make finding part symbols and footprints quicker and easier. Press hot key `SHIFT+F` or click it via toolbar ![](./images/components-button.png) 
In the new components dialog, it is easy to select the right components via tags and you can set tags for your own components.

###How to add sub part to schematic
 You can add the sub part one by one on schematic, please note, the sub parts prefix is U1.1 U1.2 etc, not U1.A U1.B
![](./images/addsubpart.png)


###What is the unit of the  schematic sheet.
  It is pixel, 1 pixel is about 10mil, schematic's unit is just for reference.


###For the complex project, I want to draw many schematics, how to use hierarchy.
 Check this link https://easyeda.com/Doc/Tutorial/schematic.htm#Hierarchy out.

 
###How to change the sheet size and modify the design information.
select the blue zone of sheet, you can change it paper size.  Double click the the text will allow you to type new information. 
![](./images/sheetsize.png) 


### Rename and modify the information
Right click then Modify it. 
![](./images/ModifyRename.png)  

###How to change the US resistor to EU resistor style?
Right click or click the drop down list to change. If you change, EasyEDA will keep the style.

 ![](./images/US-resitor.png) 

##Schematic library
###How to create schematic library.
**Document > New > Schematic Lib**
![](./images/CreateSchematicLib.png) 


### How to tag my schematic library.
 1. Open the schematic library dialog.
  ![](./images/components-button.png) 
 2. Right Click, then right click the **Modify**
   ![](./images/tagSchematiclib.png)

### How to create sub part for some gates components.
Right click the part, there is a menu, **Add Sub Part**
  ![](./images/Subparts.png) 

###  I like SMD package. How to change Package for my components.
https://easyeda.com/Doc/Tutorial/schematic.htm#Update-Package

##PCB
### How to change the Units of PCB from mil to mm or Inch.
In PCB canvas attributes, there is an option for that
![](./images/PCBunit.png) 
 
### How to pick and move the components on the PCB canvas quickly?
 Before routing the PCB, we need to place the the components on the right place. On PCB, it is a bit litter hard to select them, we need to click the edge  or pads of the components. If you you want to move them quickly, please use drag model(Hot Key `D`) or click the toolbar.
 ![](./images/dragPlace.png)
     

### Can I create a PCB without to create schematic?
  Yes!

### How to add more fonts for PCB?
https://easyeda.com/Doc/Tutorial/new.htm#More-Fonts-for-PCB

### How to Insert Image/Logo to PCB
https://easyeda.com/Doc/Tutorial/new.htm#Insert-Image-Logo-to-PCB

### How to insert a DXF board outline?
https://easyeda.com/dillon/EasyEDA_provides_new_PCB_order_system_and_DXF_import-5bjd7pjcu

### How to add  slot and cut out?
https://easyeda.com/Doc/Tutorial/new-v-3.10.htm#New-Pad-attribute
and https://easyeda.com/Doc/Tutorial/PCB.htm#Solid-Region-in-PCB

##Measure 

https://easyeda.com/Doc/Tutorial/PCB.htm#Measure

### More layers.
 Click the layer options button, then there is a dialog.
 ![](./images/Layersetting.png) 
 
### How to add solder mask.
   It is possible to get boards with the copper exposed so that you can apply a layer of solder over those tracks to further increase their current carrying capacity. In this case, you need to add solder mask over a copper( copper area, track, solid regin) 
  EasyEDA will add solder mask for pads automatic, some time, you can add some solder mask to let the copper expose.
  1. add solder mask layer. top or bottom.
   ![](./images/soldermask.png) 
  2. draw a solder mask over a copper item like bellow image. then that track will be not cover with green oil. 
   ![](./images/soldermask2.png)  
 Lots of users make a mistake, they just draw a solder mask, without a cooper area. like the yellow arrow point track. That is incorrect.
###How do I set the dimensions of my PCB in the layout?
 PCB's dimension/size depends on the board outline, you can create your board outline, like bellow image.
![](./images/boardoutline.png)  

###My PCB is complex, how to know if I have routed all of the tracks?
 Please use https://easyeda.com/Doc/Tutorial/introduction.htm#Improved-Design-Manager, in the net section, if you find a red 	`X`, that means you have not completed  that net 
![](./images/routedOK.png) , in this image, The `GND` is not finished, but `J1_2` is OK.

### I need to layout again, how to remove all of the tracks?
![](./images/Unrouted.png) 

###How to put a component on the bottom layer?
 There are two ways.
1. If your active layer is bottom layer, every component you place, will be set as bottom layer automatic.
2. You can select it and change it attribute to bottom layer too.


![](./images/bottomlayercomponent.png) 

### I can't convert schematic to PCB, what are the problems?
 1. You don't set the right packages for your components. 
 2. https://easyeda.com/Doc/Tutorial/introduction.htm#Prefix-Conflict-Error
 3. https://easyeda.com/Doc/Tutorial/PCB.htm#Invalid-Packages


##PCB package 
###How to create a PCB package/library
 ![](./images/PCBpacakge.png)  

## Others.
### Is EasyEDA cavnas Cartesian coordinate system ?
 No.  We think our coordinate system is not very good, but it is hard to change. 
![](./images/coorsystem.png)  
