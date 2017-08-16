
# 演示视频

<iframe frameborder="0" width="906" height="610" src="https://v.qq.com/iframe/player.html?vid=r05228zg4fw&tiny=0&auto=0" allowfullscreen></iframe>


# 更新说明—v4.8.5版
 
LCEDA/立创EDA在v4.8.5版添加了很多新特性.  
请前往编辑器体验：[https://lceda.cn/editor](https://lceda.cn/editor).


## 桌面客户端下载

我们已经提供桌面客户端下载，下载地址： [https://lceda.cn/page/download](https://lceda.cn/page/download)  
**请注意：**若网页版和客户端几乎同时进行修改保存时，客户端会出现感叹号提示同步冲突，此时你需选择所需的对应版本（Use Cloud，使用云端版本；Use Local，使用本地版本），否则在客户端的修改将不会被同步至服务器，且gerber导出也不会应用客户端最新的PCB。

![](images/283_Introduction_DesktopSyncConflict.png)

## 文件标签切换

It's easy to fit your documents tab location.  
![](images/279_Introduction_EditorTabSwitch.gif)

## 量角器

We add a protractor for PCB tools.  
![](images/280_PCB_PCBTools_Protractor.gif)

## 封装管理器功能增强
1.Footprint manager will check your part's package correct or not automatically.  If the part without the package or this package doesn't exist in EasyEDA Libraries, or if the part's Pins doesn't correspond the package's Pads correctly, the footprint manager will show the red alert.   
Notice：If your schematic have many different packages, the footprint manager will take a few seconds to the check the packages.  
2.In the preview area, you can zoom in, zoom out and pan with mouse.  
![](images/281_Schematic_FootprintManagerEnhance.png)

## 新增立创贴片零件库

我们新增了一个立创可贴片零件库，这个库属于立创商城库的子集，可方便使用立创贴片服务的用户选料，里面包含了690种零件，数量在不断增加中。预计今年年底就可以提供贴片服务，敬请期待。

![](images/282_Schematic_Parts_AssemblyComponents.png)





# What is new in V4.6.4 
**New Footprint Manager**

In this version we provide a powerful footprint manager tool.
It supports batch modifying component packages. For more detail please refer to the [Footprint Manager](./Schematic.htm#Footprint-Manager) section.

![](images/264_Schematic_FootprintManager.png)

![](images/267_Schematic_FootprintManagerUI.png)


**New Arc tool**

A new arc tool which is center point fixed, and you can change the radius easily.

![](./images/269_PCB_Arc_Center.gif)

**Global Delete**

Have you been upset because you couldn't delete the same units of schematic or PCB. Now we tried to solve this problem via the global delete feature.
You can easily globally delete the same units of your choice.

![](./images/272_Introduction_Skill_GlobalDelete.png)

**Move selected component**

When moving the selected component, the connected wire will move vertically and horizontally.

![](images/273_Schematic_WireAndComponentMove.gif)

**BOM export on the top toolbar**

![](images/273_Export_BOM_Icon.png)

In the BOM export dialog，you can assign LCSC part's order code for your components.

![](images/085_Export_BOM_Assign.png)

After clicking on the assign icon，the components and packages search dialog will open in which you can choose the component that you want to assign.

![](images/274_Export_BOM_Assigned.png)


**More Align options**

The Editor provides more alignment options as below. 
These options can make your design more convenient.

![](images/275_Introduction_Align.png)


**Import enhance**

**New Altium Design Import**  
  It is faster and better, and it support big files. Please make sure that you save the file as ASCII before importing.  

**Better DXF Import**    
 Importing DXF file to PCB is better.

