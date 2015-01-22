//you can get the EasyEDA json objects like https://gist.github.com/071d4680dcdbf6bf9dd6.git
//try to pen a pcb, then run bellow codes.

var json = api('getSource', {type: "json"}),
	id;

for(id in json.TRACK){
	if(json.TRACK.hasOwnProperty(id)){
		json.TRACK[id].strokeWidth = api('edit.unitConvert', {type:'mil2pixel',value:10}); // 10mil
	}
}

for(id in json.VIA){
	if(json.VIA.hasOwnProperty(id)){
		json.VIA[id].holeR = api('edit.unitConvert', {type:'mil2pixel',value:10}); // 10mil
	}
}
api('applySource', {source: json, createNew: true});