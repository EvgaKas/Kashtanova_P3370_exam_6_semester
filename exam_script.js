var pole=[];
var was_pole=[];
var kolvo=100;
var stolbec=10;
var w=document.querySelector("div.pol");
var timer;

document.querySelector('div.start').addEventListener('click',Start);
document.querySelector('div.end').addEventListener('click',End);

for(var i=0;i<kolvo;i++)
{
  var q=document.createElement('div');
  q.id=i;
  if(i%stolbec>2&&i%stolbec<7)
     {
       q.className="sin";
       pole[i]=0;
       was_pole[i]=0;
     }
  else
  {
    q.className="wave";
    pole[i]=1;
    was_pole[i]=1;
  }
  w.appendChild(q);
}

function Start()
{
  timer=setInterval(changeAll,400);
}
function End()
{
  timer=clearInterval(timer);
}

function changeAll()
{
  var i=0;
  while(i<kolvo)
  {
    change(i);
    i++;
  }
  makeOld();
}

function change(i)
{
  var box=document.getElementById(i);
  var j=(i-1)<0?9:i-1;
  var box2=document.getElementById(j);
  if(was_pole[i]==0 && was_pole[j]==1)
     {
       box.className="wave";
       pole[i]=1;
     }
  if(was_pole[i]==1 && was_pole[j]==0)
    {
       box.className="sin";
       pole[i]=0;
    }
}

function makeOld()
{
  var i=0;
  while(i<kolvo)
  {
    was_pole[i]=pole[i];
      i++;
  }
}