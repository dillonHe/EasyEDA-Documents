#EasyEDA PCB File Object

Note: PCB and Package are used the same format. 

*EasyEDA PCB File Object* is a JSON Object which allows you to hack your designs via other language, such as Javascript, Python, PHP, C, C++. The funny thing is that your can control/modify your design in EasyEDA editor via Javascript language. So you can use codes to create your own outline.

##Rules
### JSON Keys
 Every EasyEDA graph unit has an unique key, such as  "TRACK", "PAD", "VIA", "TEXT", "DIMENSION", "FOOTPRINT", "ARC", "RECT", "CIRCLE", "HOLE", "COPPERAREA", "SOLIDREGION", "DRCRULE", "FABRICATION"

### itemOrder key
   Becuase of an object in EasyEDA  is an unordered set of name/value pairs in [JSON format](http://json.org/), but EasyEDA's graphs are ordered. We need an array to store the order of these objects. Every package has an itemOrder key and the whole JSON object has an itemOrder key.

##Example
### File

![](./images/filePCBJson.png)  
Open [PCB Example ](https://easyeda.com/file_view_PCB-File-Object_T97H30mki.htm)

### TRACK
    "TRACK":{
        "gge6":{
            "gId":"gge6",
            "layerid":"1",
            "net":"S$7",
            "pointArr":[
                {
                    "x":357,
                    "y":171
                },
                {
                    "x":456,
                    "y":171
                }
            ],
            "strokeWidth":1
        }
		......
    },

All tracks will be stored to **TRACK** key, their id will be taken as the key such as `gge6`.

### SIGNALS
EasyEDA group all the objects with the same net name in one array.  
### FOOTPRINT
  All packages will be stored to **FOOTPRINT**, their id will be taken as the key such as `gge7`. PCB package JSON is bit litter complication, it has lots of other **JSON Keys**, such as `TRACK`, `ARC`, `RECT` etc.

Note: please check the other shapes format via below JSON example 
### JSON example
check the complete JSON object via github gist [PCB Json object](https://gist.github.com/071d4680dcdbf6bf9dd6.git)
<script src="https://gist.github.com/dillonHe/071d4680dcdbf6bf9dd6.js"></script>