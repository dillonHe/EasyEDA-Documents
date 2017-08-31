
# 导出 

立创EDA支持导出多种类型的文件，以便于满足你在多方面的需求。


## 导出原理图

导出原理图可通过点击：**文档 > 导出** 会打开以下对话框：

![](images/155_Export_SchematicExportDialog.png)

-	**导出选项：**可选择PDF，PNG，SVG文件。
-	**宽：** 该选项是指所导出图片的宽度，仅对导出PNG有效。默认为0，代表实际尺寸。数值越高代表导出的分辨率越高，比如你输入1024，那么导出PNG图片的宽度为1024像素，图片高则根据原理图自动调整。
-	**线宽增量：** 0代表实际尺寸。当你设置为1时，线宽会增大一倍。如下图，左边线宽为0，右边线宽为1.

![](images/156_Export_SchematicExport_PenWidth.png)

## 打印原理图

在点击 **文件** > **打印** 后，会打开一个网页，并调出浏览器打印对话框，设置参数后直接打印即可。请留意打印边界的设置，否则打印出来的画面可能会超出单页界面。

也可以使用导出的PDF，PNG，SVG进行打印。建议优先选择PDF打印。

## 下载原理图文档

立创EDA支持你下载自己的原理图文件，以EasyEDA格式源码方式下载，.json为后缀名。

你可以在**文档** > **EasyEDA格式源码**下载：

![](images/285_Export_SchematicEasyEDASource.png)

也可以使用**下载工程**功能下载：**选择原理图所在的工程  > 点击右键 > 下载工程**。

更多关于EasyEDA格式源码的信息，请查看下面[导出EasyEDA源码文件](./Export.htm#导出EasyEDA源码文件)章节。

## 导出BOM

立创EDA支持导出BOM表(物料清单)，以便于你购买所需的零件。
BOM导出可以点击工具栏的BOM图标：

![](images/273_Export_BOM_Icon.png)

点击后会弹出一个导出对话框，在这个对话框里，直接点击“从立创商城购买”按钮即可下载CSV格式的BOM表。   

导出前，你还可以为零件指定立创商城的零件编号，以利于在立创商城上方便购买元件，下单时直接上传BOM表即可：

![](images/085_Export_BOM_Assign.png)

点击分配图标后会打开元件库搜索框，在这里找到你想要的零件后然后点击“分配”完成编号指定，分配的编号将出现在BOM中。

![](images/274_Export_BOM_Assigned.png)

未来BOM导出功能会与立创商城打通，将实现一键加入购物车功能，届时将大大方便用户采购元件。

BOM打开后如图：

![](images/086_Export_BOM_CSV.png)

## 导出网表

立创EDA支持导出多种EDA使用的网表文件格式。可导出单一文档网表也可导出整个工程的网表。

支持的格式有：Spice仿真格式，Protel/Altium格式，Pads格式，FreePCB格式，Kicad格式，Eagle格式，OrCAD格式。

打开通过：**超级菜单 > 杂项 > 生成本文件网络/生成本工程网络**

![](images/087_Schematic_NetlistForDocument.png)


## 导出PCB

导出PCB设计与导出原理图设计的一样。在 **文档 > 导出** 或 **文档 > 打印**，点击后会打开如下对话框：

![](images/157_Export_PCBExport_Dialog.png)

-	**导出选项：**可选择PDF，PNG，SVG格式文件。
-	**宽：** 该选项是指所导出图片的宽度，仅对导出PNG有效。默认为0，代表实际尺寸。数值越高代表导出的分辨率越高，比如你输入1024，那么导出PNG图片的宽度为1024像素，图片高则根据原理图自动调整。
-	**合并层：**选择的层将全部打印在一个PDF/PNG/SVG里面。
-	**分离层：**选择的层会分别在一个单独文件里，以压缩包的形式导出。只有选择分离层时，层的镜像选项才可以使用。
-	**色彩：**有全彩和白底黑图。若自己制作PCB建议选择白底黑图。
-	**装配图**：选择该选项后只打印顶层和底层的装配位置。如插件孔，焊盘等。

**注意：** 

-	*如果你要打印1:1大小的PCB，请选择导出 PDF(1:1)。*

## 下载PCB文档

下载方法与前面的**下载原理图文档**一致。

## 生成制造文件

当你完成PCB设计之后，你可以生成Gerber文件，通过：**超级菜单 > 杂项 > 生成制造文件**，或者点击工具栏上的生成制造文件图标：

![](./images/142_PCB_FabricationOutput.png)

点击后会打开一个下载页面，点击下载即可。

![](./images/221_Export_DownloadGerberFile.png)

如果你需要PCB打样，建议通过立创EDA的兄弟公司嘉立创：[www.sz-jlc.com](www.sz-jlc.com)

当然，你也可以将导出的Gerber文件发给任意一个厂家进行生产，立创EDA并没有做任何使用限制！！

## 导出贴片坐标信息

立创EDA支持导出SMT坐标信息，以便于工厂进行SMT贴片。

导出可点击：**超级菜单 > 杂项 >  生成贴片坐标文件**  

![](images/220_Export_GeneratesPickAndPlaceFile.png)

导出的文件格式为CSV，打开后如下：

![](images/206_Export_PickAndPlaceCSV.png)

目前导出的文件暂时仅支持mil单位，以后会增加对其他单位的支持。


### 导出打印并自制PCB板

如果你不想花钱打样PCB，想自己打印并腐蚀。比如：[百度经验：教你轻松自制PCB电路板](https://jingyan.baidu.com/article/414eccf64c14a36b431f0ae1.html)；[百度经验：自制电路板制作PCB的过程](https://jingyan.baidu.com/article/8cdccae979e128315413cd1c.html)  
你可以参考以下步骤。

1、导出PCB为PDF： **文件 > 导出**，或者 **文件 > 打印**。一般选底层。请按需选择是否需要镜像导出。

**注意：** 

-	*请确保选择的颜色是白底黑图。*

![](images/158_Export_PrintPDF.png)   

2、在PDF阅读器打开PDF，确认是否符合要求。

![](images/159_Export_ViewPDF.png)

3、使用碳粉打印机打印在转印纸上。

![](images/160_Export_PDFToPaper.png)

4、使用熨斗印在PCB基板上。

![](images/161_Export_CopyToCopper.png)

5、腐蚀PCB板并清洗碳粉。

6、钻孔。

![](images/162_Export_DrillPCB.png)

7、零件焊接，并完成PCB制作。

![](images/163_Export_SolderPCB.png) 


## 导出SVG源文件 

立创EDA支持导出原理图，PCB，库文件的SVG源文件。

在**文档 > SVG源码**打开。

点击下载后直接得到一个SVG后缀的文件，然后可以通过文本编辑器或浏览器打开该文件。你也可以复制对话框内的代码在编辑器中进行编辑，SVG编辑器推荐 [Inkscape：https://inkscape.org/zh/](https://inkscape.org/zh/) 

该导出SVG功能可直接在本地完成，无需联网。

![](images/021_Introduction_SVGSource.png)  


## 导出EasyEDA源码文件

立创EDA支持导出原理图，PCB，库文件的EasyEDA源码文件。

通过 **文档 > EasyEDA格式源码** 打开。

![](images/285_Export_SchematicEasyEDASource.png)

EasyEDA格式源码文件是一个**JSON**文件，该文件类型可以被很多程序打开和编辑。 关于Json的介绍请查看：[Json.cn: 什么是Json](http://www.json.cn/wiki.html)；[Json官网: Json介绍](http://www.json.org/json-zh.html)

开放的EasyEDA源码文件允许你在文本编辑器上进行编辑，这可以很方便地修改原理图、Spice文件、原理图库文件，以及PCB文件和封装。

点击“下载”即可将文档以json的格式下载。导出EasyEDA源码文件是一个很好分享/备份你的作品的方法。使用该方法你的文件可以不需要保存文件到立创EDA的服务器。Json文件可以被高度压缩为zip或7z。它可以通过电子邮件发送给任何人，而且他们在立创EDA编辑器中可以正常打开，完全不用担心他们是否拥有和你一样的库文件。

为此，立创EDA还提供了读写EasyEDA文件的接口，可自行编写在立创EDA编辑器上运行的脚本。详情可查看[立创EDA API接口](./API.htm#立创EDA API接口)章节。
