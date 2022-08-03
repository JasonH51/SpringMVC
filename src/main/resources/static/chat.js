$("document").ready(function(){
	$.get("/api/chat", function(data){
		console.log(data);
		
		for(let i = 0; i<data.length; i++){
			let current = data[i];
			$("#chatContent").append(`<p>${current.name}: ${current.content}`);
		}
	});
});