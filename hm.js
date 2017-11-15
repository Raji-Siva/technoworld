var im=document.getElementById("prv");
i=0;
var v=setInterval(slide,1500);
function slide()
{
	a=new Array("hm1.jpg","hm2.jpg","hm3.jpg","hm4.jpg","hm5.jpg");
	im.src=a[i];
	i++;
	if(i>=a.length)
	{
		i=0;
	}
}
function s1()
{
	clearInterval(v);
	im.style.opacity("1.0");
}
function s2()
{
	v=setInterval(slide,1500);
}
