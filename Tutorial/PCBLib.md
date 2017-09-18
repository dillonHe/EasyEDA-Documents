
# Creating The PCB Libs

There will be times when you will need a PCB footprint that is not already in the EasyEDA libraries.  

The process of creating your own PCB Libs is very similar to how you make symbols for your own Schematic Libs.

You can start a new PCB lib as shown below:

![](images/143_PCBLibs_NewLib.png)

## PCBLib Tools

PCBLib Tools almost are the same as PCB tools, just lacking some of the functions.
![](images/226_PCBLib_PCBLibTools.gif)


## Others 

1.  It is important to set the right Snap and Grid sizes to ensure that the pads on the finished footprint snap exactly to the grid and so connect the nets. For example, if you are creating a DIP package, set the Grid size to 100mil.

2.  Keep all other shapes such as component outlines and any associated pin identification marks or text on the TopSilkLayer. EasyEDA will automatically take care of the actual layer assignment when you place the footprint on the PCB.

3.  `CTRL+S` to save your footprint designs and you will find them saved into the **Parts > My Parts > Packages** section of the left Navigation panel. 

4.  Annular ring of the pad/via is too small, keep the annular ring >= 4mil. In this case, you can add a `Hole`  
  ![](images/146_PCBLibs_NewPadRing.png)


## Edit PCBLibs

When you feel the PCB Libs(footprint) can not be satisfy for you, you can edit it.

Via **"Parts" > "Search Part/My Parts/LCSC Parts/System Components/User Contributions" > Select Package > Edit**

![](images/291_PCBLibs_Edit.png)

when you finish and save , it will be saved to your personal libraries "My Parts" and become your personal libraries.
​ 
