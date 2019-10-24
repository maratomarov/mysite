var images=['1.jpg','2.jpg','3.jpg']
var img=document.getElementById('img')
var galery=document.getElementById('galery').innerHTML
var i=0
img.src=galery+images[i]
function next(){
	i++
	if(i==images.length){
		i=0
	}
	img.src=galery+images[i]
}
function prev(){
	i--
	if(i==-1){
		i=images.length-1
	}
	img.src=galery+images[i]
}

function addimg1(){
	img.src=galery+images[0]
}
function addimg2(){
	img.src=galery+images[1]
}
function addimg3(){
	img.src=galery+images[2]
}
