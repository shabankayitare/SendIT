var parcels = {
				parcel1: {
					parcelname: "box",
					adress: "kigali",
					weight: 2,
					id: 1
				},
				parcel2: {
					parcelname: "paper",
					adress: "nyamata",
					weight: 1,
					id: 2
				},
				parcel3: {
					parcelname: "ibiryo",
					adress: "huye",
					weight: 2,
					id: 3
				},
				parcel4: {
					parcelname: "laptop",
					adress: "kicukiro",
					weight: 2,
					id: 4
				}
			}
 
exports.create = function(req, res) {
	var newparcel = req.body;
    parcels["parcel" + newpercel.id] = newparcel;
	console.log("--->After Post, parcels:\n" + JSON.stringify(parcels, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newparcel, null, 4));
};
 
exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(parcels, null, 4));
    res.end("All parcels: \n" + JSON.stringify(parcels, null, 4));  
};
 
exports.findOne = function(req, res) {
    var parcel = parcels["parcel" + req.params.id];
    console.log("--->Find parcel: \n" + JSON.stringify(parcel, null, 4));
    res.end( "Find a parcel:\n" + JSON.stringify(parcel, null, 4));
};
 
exports.update = function(req, res) {
	var id = parseInt(req.params.id);
	var updatedparcel = req.body; 
	if(parcels["parcel" + id] != null){
		// update data
		parcels["customer" + id] = updatedparcel;
 
		console.log("--->Update Successfully, parcels: \n" + JSON.stringify(parcels, null, 4))
		
		// return
		res.end("Update Successfully! \n" + JSON.stringify(updatedparcel, null, 4));
	}else{
		res.end("Don't Exist parcel:\n:" + JSON.stringify(updatedparcel, null, 4));
	}
};
 
exports.delete = function(req, res) {
	var deleteparcel = parcels["parcel" + req.params.id];
    delete parcels["parcel" + req.params.id];
    console.log("--->After deletion, parcel list:\n" + JSON.stringify(parcels, null, 4) );
    res.end( "Deleted parcel: \n" + JSON.stringify(deleteparcel, null, 4));
};