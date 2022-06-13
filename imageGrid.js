let imgArr = [];
let grid = [];

function render(){
	 
}

function createGrid(rows, cols){
	let cycles = Math.ceil(rows*cols/srcArr.length);
	let indices = [];
	for(let i=0;i<cycles;i++){
		indices.push(...randomPermutation(srcArr.length));
	}
	return {"pictures":indices.slice(0,rows*cols),
			"rows":rows,
			"cols":cols};
}

function drawGrid(grid, scaleW, scaleH){
	//console.log('hi');
	for(let i=0;i<grid.pictures.length;i++){
		//f.fillRect((i%grid.cols)*scaleW, Math.floor((i/grid.cols))*scaleH, scaleW, scaleH);
		f.drawImage(imgArr[grid.pictures[i]], Math.floor(i%grid.cols)*scaleW, Math.floor(i/grid.cols)*scaleH, scaleW, scaleH);
	}
}

async function loadImages(){
	for(let url of srcArr){
		console.log(url);
		let img = await loadImage(url);
		imgArr.push(img);
	}
	console.log(imgArr);
}

function loadImage(src){

	return new Promise( (resolve, reject) => {
	
		let img = new Image();
		img.onload = ()=>{
			img.src = src;
			resolve(img);
		}
		img.onerror = (e)=>{
			reject(e);
		}
		img.src = src;
	});

}

function randomPermutation(n){
	let nums = Array.from({length:n}, (v, i)=>i);
	let p = [];
	for(let i=0;i<n;i++){
		p.push(nums.splice(Math.floor(Math.random()*nums.length), 1)[0])
	}
	return p;
}

function render(w, h){
	f.clearRect(0, 0, c.width, c.height);
	drawGrid(grid, w, h);
}