 
# New Sandbox Version.
 
The new sandbox version is V2.1.1. EasyEDA has lots of new features in the version. Try it via [http://sandbox.easyeda.com/editor](http://sandbox.easyeda.com/editor).

**Warn:Sandbox version is newer than released version[http://easyeda.com/editor](http://easyeda.com/editor), it can open your old files, but [http://easyeda.com/editor](http://easyeda.com/editor) can not open the files which are created by sandbox version before we release it a few weeks later.** 



 such as , , Improved Design Manager, SVG Preview, User Defined BOM Parameters, 

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

