function huoqu(){
	

fetch('..\\api\\yulu.json')
.then(response=>{
	if(!response.ok){
		console.log("连接失败",Error)
	}
	return response.json();
})
.then(data=>{
	const w=document.getElementById("wen");
	const h=document.getElementById("hui");
	
	if(data.length >0){
		const randm = Math.floor(Math.random()*data.length);
		const content = data[randm];
		
		w.innerHTML=content.ask;
		h.innerHTML=content.ans;
		
	}
	
})
.catch(error =>{
	console.error("获取失败```\n",error);
});


}
huoqu();