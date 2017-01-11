# FAQ

 ## Please spend a few minutes reading this FAQ, it will save you lots of time getting started with EasyEDA.
 

##Concept
### How to find the list of hotkeys.
https://easyeda.com/Doc/Tutorial/introduction.htm#Hotkeys

### Where are my files?
   Your files are stored on EasyEDA servers, so you can access them anywhere and share them with your partners.
 
### Why does EasyEDA focus on Cloud based EDA?
  EasyEDA is built for people who like to work anywhere, who like to build projects together with other team members, who like to share their projects, who like something that operates like a github for hardware design. The only way to meet these needs is to build a Cloud version EDA.

### How can I work if there is no internet?

Although most of the time there are ways to access the internet easily and cheaply there may be times when, for whatever the reason, internet access is simply not possible. For times like this, EasyEDA is working to provide a desktop client soon.
  
### Does EasyEDA has a desktop version?
   At present, no but EasyEDA is developing and testing a desktop version to be introduced soon. 
   
   A Windows version will be available at the end of this year. Mac and Linux versions will be available early next year. 

### Which Browser is best for EasyEDA?
  **Chrome**. Firefox and Safari are OK too. If you are restricted to using other browsers, you would be better to download the EasyEDA desktop client when it becomes available (see above).

### How to go to your dashboard.
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
 
  
### How to delete a project.
   Select it and right click to open a context menu, like the image below.
   
![](./images/DeleteProject.png)
 
### How to delete a schematic or PCB.
   Select it and right click to open a context menu, like the image below.
 
![](./images/deleteSchematic.png) 


### How to share a project with others.
   1. Make your project public.
  Open https://easyeda.com/projects/mylists, then click the red `No entry' icon where indicated by the arrows. This icon will change to a green 'Tick' icon to show that the project is now public.
   ![](./images/makeitpublic.png)  

   2. To share a project privately with only selected collaborators via: 
   
   [Access Control](https://easyeda.com/Doc/Tutorial/share.htm#Access-Control) 
   
     You can right click your project and select the access control menu:

    ![](./images/access-control.png) 
  
       
### How to find the version history of schematics and PCBs.
  The version history of your EasyEDA schematics and PCBs can be accessed by right-clicking on the file you wish to query to open the context menu as shown in the image below: 
  
 ![](./images/versionHistory2.png)  
 
 Then click on the version number that you wish to view.
 
 **Note that saving a previous version will restore that version to being the current version of the file.**

## Schematic
### If I update the schematic, how do I then update the PCB?
  
The initial conversion of a schematic to PCB is done from within the Schematic Editor using the `Convert Project to PCB...` button as illustrated in the toolbar below but a new `Update PCB` button has been added so that modifications to the schematic can immediately be passed forward to update a selected PCB without having the PCB editor window already open. 
  ![](./images/sy-sch-pcb.png) 

Alternatively, you can import changes from the schematic from within the PCB Editor:

https://easyeda.com/Doc/Tutorial/PCB.htm#Import-Changes

### How to rename a Sheet/Document.
In this menu, there is a `Modify`, so you can rename your files.
![](./images/versionHistory2.png)  

### How to find components

The component search function has been significantly improved to make finding part symbols and footprints quicker and easier. Press `SHIFT+F` or click on the `Search components and modules...` icon on the toolbar: 

![](./images/components-button.png) 

In the new components dialog, it is easy to select the right components via tags and you can set tags for your own components.

### How to add sub parts to a schematic.
 You can add sub parts to a schematic one by one but please not that the sub parts prefix must be in the form of U1.1 U1.2 etc, and not U1.A U1.B.
 
![](./images/addsubpart.png)


### What is the unit of the schematic sheet?

  The basic unit of the schematic sheet is the pixel. 1 pixel is about 10mil (0.001 inch) but please note that this use of the pixels as a unit in a schematic is just for reference.


### For a complex project, I want to split the schematic over several sheets. Does EasyEDA support hierarchy?

 Please check out this link https://easyeda.com/Doc/Tutorial/schematic.htm#Hierarchy

 
### How to change the sheet size and modify the design information.

To change the sheet size, move the mouse anywhere over the lower right area of the drawing border or frame until the whole border highlights red and then right-click on it. Paper size and orientation can then be changed in `Sheet Attributes` in the right hand panel.

To modify the design information, left-click on the relevant blue text in the lower right area of the drawing border or frame to change it in `Text Attributes` in the right hand panel.  Double left-clicking the blue text will allow you to type new information directly in to the field. 

![](./images/sheetsize.png) 


### How to modify file the name and description.
Right click on the file and then select `Modify`. 

![](./images/ModifyRename.png)  

### How to change the default US resistor/capacitor/inductor symbol style to EU style.
Right click on the symbol or click the drop down list to change. These style changes are remembered from one session to the next.

 ![](./images/US-resitor.png) 

##Schematic library symbol
### How to create a schematic library symbol.

**Document > New > Schematic Lib**

![](./images/CreateSchematicLib.png) 


### How to tag my schematic library symbol.
 1. Open the schematic library dialog.
  ![](./images/components-button.png) 
 2. Right Click, then right click **Modify**
   ![](./images/tagSchematiclib.png)

### How to create sub parts for multi part components.
Right click the part then select **Add Sub Part** from the menu that opens:
  ![](./images/Subparts.png) 

### How to change the Package for a component.

https://easyeda.com/Doc/Tutorial/schematic.htm#Update-Package

##PCB
### How to change the Units of PCB from mil to mm or inch.
There is an option for that in PCB canvas attributes: 
![](./images/PCBunit.png) 
 
### How to pick and move the components on the PCB canvas quickly.

 Before routing the PCB, the components need to be positioned in suitable places on the PCB. In the PCB Editor, it can sometimes be quite to select components by clicking on the silkscreen outline or the pads. To select and move them more easily, please use drag mode (Hot Key `D`) or click the `Move` icon in the PCB Tools toolbar:
 ![](./images/dragPlace.png)
     

### Can I create a PCB without to create schematic?
  Yes but for any but the simplest PCBs, please see:
  
  https://easyeda.com/forum/topic/The_best_way_to_design_a_PCB_in_EasyEDA-ThR3pwqIC

### How to add more fonts for PCB.
https://easyeda.com/Doc/Tutorial/new.htm#More-Fonts-for-PCB

### How to insert an Image/Logo to PCB.
https://easyeda.com/Doc/Tutorial/new.htm#Insert-Image-Logo-to-PCB

### How to insert a DXF board outline.
https://easyeda.com/dillon/EasyEDA_provides_new_PCB_order_system_and_DXF_import-5bjd7pjcu

###How to create non rectangular pcb outline such as round? 
  You can import a DXF file for board outline, For round board outline, you can use a arc to do that, you need to change to board outline layer. the draw 1 arc like bellow image(need to adjust a bit litter), use this skill, you can use lines and arcs to create any complex board outlines.
![](./images/Boardoutline2.png) 


### How to add a slot and cut out. 
https://easyeda.com/Doc/Tutorial/new-v-3.10.htm#New-Pad-attribute
and https://easyeda.com/Doc/Tutorial/PCB.htm#Solid-Region-in-PCB

### How to measure dimensions on a PCB.

https://easyeda.com/Doc/Tutorial/PCB.htm#Measure

### How to add more layers.
 Click the layer options button, then tick the extra layers in the dialog that opens.
 ![](./images/Layersetting.png) 
 
### How to add solder mask.
   It is possible to get boards with the copper exposed so that you can apply a layer of solder over those tracks to further increase their current carrying capacity. In this case, you need to add solder mask over a copper (copper area, track, solid region). 
  EasyEDA will add solder mask for pads automatically. Sometimes however, you may need to add an aperture in the solder mask to expose and area of copper.
  1. First, add a top or bottom solder mask layer, as required.
   ![](./images/soldermask.png) 
  2. Next, draw a region in the solder mask layer over a copper item as illustrated in the image below. This in effect draws an aperture in the solder mask so that the copper item inside the region, in this case the track, will be not be covered by the green film of solder mask.
   ![](./images/soldermask2.png)  
 A common mistake is to just draw a solder mask, without a copper area, like the track pointed to by the yellow arrow. That is incorrect and does not produce the desired result.
 
### How do I set the dimensions of my PCB in the layout?
 PCB's dimension/size depends on the board outline, you can create your board outline, as shown in the image below.
![](./images/boardoutline.png)  

### My PCB is complex, how can I be sure that I have routed all of the tracks?
 Please use https://easyeda.com/Doc/Tutorial/introduction.htm#Improved-Design-Manager 
 
 In the net section, if you find a red	`X`, that means you have not completed that net:
 
![](./images/routedOK.png)

in this image, The `GND` is not finished, but `J1_2` is OK.

### I need to start my layout again, how can I remove all of the tracks?

![](./images/Unrouted.png) 

### How to put a component on the bottom layer?
 There are two ways to do this.
 
1. If your active layer is the bottom layer, then every component you place will be placed on the bottom layer automatically.
2. You can place a component then select it and change its layer attribute to `Bottom layer` in the right hand panel.
![](./images/bottomlayercomponent.png) 

### I can't convert schematic to PCB. Why is this?
 1. You have not set the right packages for your components. 
 2. https://easyeda.com/Doc/Tutorial/introduction.htm#Prefix-Conflict-Error
 3. https://easyeda.com/Doc/Tutorial/PCB.htm#Invalid-Packages


## PCB package.
### How to create a PCB package/library.
 ![](./images/PCBpacakge.png)  


##Keep in Mind

  1. There is no need to back up your schematics and PCBs manually. After the first save of any file, EasyEDA will back up all saved files automatically  under the [Version History](https://easyeda.com/Doc/Tutorial/new.htm#Version-History). If you want to back up your files locally, you can download a copy of the whole project or of individual files in a project in EasyEDA Source (JSON) format:
  
   ![](./images/download_project.png).
  
  and;
  
  Document > EasyEDA Source > Download
  
   ![](./images/easyeda_source.png).
 
  
  2. If you need help, you can contact us ![](https://easyeda.com/Doc/Tutorial/images/support_email.png) or ask via our support forum; we  will respond ASAP.
   
  
##Most Common Errors on EasyEDA.
  1. Manually creating backup schematics into the same project. When a project is converted to PCB, EasyEDA will merge all of the schematics under the same project into a single PCB. If there are multiple copies of the same schematic in a project then this will create errors such as duplicate part prefixes. Especially if you are new to EasyEDA, just keep one copy of each unique schematic in any one project. 
  2. Saving schematic and PCB into different projects. Unless you are absolutely sure that you will not need to update (Synchronise) your PCB from changes made to your schematic then please keep the schematics and PCB under the same project.
  3. Bad packages. Schematic symbols must have the appropriate footprints assigned to them, these footprints must exist in the library and - for any footprint that you have not created yourself - you must have clicked on the **Favorit e** option in the component search window to add it to your **Favorite Parts** list in the left hand Navigation panel.
  4. Using the polyline from the Drawing Tools Palette to connect symbol pins. To connect components together, you must use Wires from the Wiring Tools Palette.
  
 
##SPice Simulation FAQ
EasyEDA's mainly target is schematic and PCB, not for simulation. EasyEDA just support simple schematics simulation.
###How to set the resistance to a resistor 
   You can use the name attribute. Just set the name or double click the value text.

![](./images/Image224.png) 


###Where Can I found the Probe?
  Voltage probe, 
   ![](./images/Probe.png)
### Why I can't simulate my schematic
   EasyEDA just has very few simulation models, EasyEDA is powered by http://ngspice.sourceforge.net/ please check Ngspice to know what can be simulated.


## Others.
### Does EasyEDA canvas use the Cartesian coordinate system?

 Yes and no. 
 
 It uses X and Y coordinates where the horizontal X coordinate is positive to the right of the origin and negative to the left but the vertical Y coordinate is positive **below** the origin and negative above it. 
 
 Actually, we think our coordinate system is not very good but it is hard to change. 
 
![](./images/coorsystem.png)  
