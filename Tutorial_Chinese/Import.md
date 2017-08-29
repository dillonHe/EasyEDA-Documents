
# 导入 

立创EDA目前支持导入的电路设计文件有：

-   Altium Designer/Protel DXP ASCII格式的原理图/PCB
-   Eagle 原理图/PCB/库文件


你可以在 **文件 > 导入** 打开导入对话框。

![](images/147_Import_NewImport.png)

提取库文件功能只对Altium Designer原理图文件，PCB文件和Eagle库文件有效。


## 导入Altium Designer文件 

立创EDA仅支持以**ASCII格式**保存的原理图文件和PCB文件。所以你要导入的文件必须先保存为ASCII格式：

![](images/148_Import_AltiumDesignerASCII.png)

导入Altium Designer原理图文件，PCB文件效果已经非常出色，如下图：

![](images/149_Import_AltiumDesignerSchemaitc.png)

Altium Designer原理图库文件，PCB库文件并不支持保存为 **ASCII**格式，所以立创EDA不支持直接导入Altium Designer的库文件。

你可以将需要的导入的库文件全部放在原理图或PCB中，再将原理图和PCB另存为ASCII格式，再导入时选择“提取库文件”即可将库文件全部提取。提取后可以直接放置在相应的画布上，也可以直接添加到个人库中。

![](images/149_Import_AltiumDesignerExtractLibs.png)

## 导入Eagle文件 

立创EDA支持Eagle文件导入，但是仅支持Eagle v6.0及以上版本的文件，因为Eagle从这些版本才开始采用**ASCII XML**结构的数据来保存本地文件。
除了原理图和PCB，还可以直接导入库文件。选择导入库文件时，编辑器会自动切换至提取库文件选项。

![](images/284_Import_EagleExtractLibs.png)
                    

## 导入DXF文件 

如果你需要设计及其复杂的边框，设计美观的图案，并且你有现有的素材并保存为DXF格式。那么你可以尝试使用导入DXF功能。

在**文档** > **导入DXF** 打开导入对话框：

![](images/152_Import_DXF.png) 

选择了DXF文件后，会显现DXF文件预览：

![](images/153_Import_DXF_ImportDialog.png)

立创EDA提供四种单位：英寸inch、厘米cm、毫米mm、密耳mil。 并可选择需导入的层：顶层、底层、顶层丝印、底层丝印、边框、文档。

点击“导入”按钮后，即可在画布中出现。

![](images/154_Import_DXF_Imported.png)

上图提供的DXF文件可以自行下载体验： [DXF边框范例](/Doc/Tutorial/Doc/test.dxf)  
 
**注意：**

-	*只支持在PCB文件导入DXF。*
-	*导入的DXF文件必须以 .dxf 为扩展名。*
-	*当你选择导入的层是边框时，圆圈会被转换为过孔。*
-	*会有一些细节项目无法完美支持。* 