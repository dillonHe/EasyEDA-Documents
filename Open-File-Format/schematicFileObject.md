#EasyEDA Schematic File Object

Note: Schematic, Schematic Library, Spice Symbol, Subpart and Subckt are used the same  format. 

*EasyEDA Schematic File Object* is a JSON Object which allows you to hack your designs via other language, such as Javascript, Python, PHP, C, C++. The funny thing is that your can control/modify your design in EasyEDA editor via Javascript language.

##Rules
### JSON Keys
 Every EasyEDA graph unit has an unique key, such as  "**wire**", "**schlib**", "**junction**", "**bus**", "**busentry**", "**netlabel**", "**netflag**", "**pin**", "**polyline**", "**path**", "**arc**", "**rect**", "**polygon**", "**arrowhead**", "**ellipse**", "**image**"

### itemOrder key
   Becuase of an object in EasyEDA  is an unordered set of name/value pairs in [JSON format](http://json.org/), but EasyEDA's graphs are ordered. We need an array to store the order of these objects. Every schematic lib has an itemOrder key and the whole JSON object has an itemOrder key.

##Example
### File

![](./images/fileJson.png)  
Open [Schematic Example ](http://easyeda.com/file_view_Schmatic-File-Object_TLJ4qomki.htm)

### wire
    "wire":{
        "gge48":{
            "gId":"gge48",
            "strokeColor":"#008800",
            "strokeWidth":"1",
            "strokeStyle":0,
            "fillColor":"none",
            "pointArr":[
                {
                    "x":290,
                    "y":430
                },
                {
                    "x":370,
                    "y":430
                },
                {
                    "x":370,
                    "y":490
                }
            ]
        }
		..........
    }

All wires will be stored to **wire** key, their id will be taken as the key such as `gge48`.

### schlib
  All schematic components will be stored to **schlib**, their id will be taken as the key such as `gge7`. Schematic component JSON is bit litter complication, it has lots of other **JSON Keys**, such as `polyline`, `image`, `path` etc.

Note: please check the other shapes format via below JSON example 
### JSON example
check the complete JSON object via github gist [Schematic Json object](https://gist.github.com/dillonHe/fe0bb029c51603077ad9)
<script src="https://gist.github.com/dillonHe/fe0bb029c51603077ad9.js"></script>