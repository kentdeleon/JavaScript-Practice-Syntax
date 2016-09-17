/*Break Statement*/

for(i =0; i<=10; i++){
	if(i==5){
	break;
	}
	document.write(i +"<br>");
}
/*Output
0
1
2
3
4
*/
/*Continue Statement */

document.write("<br>");

for(i =0; i<=10; i++){
	if(i==5){
	continue;
	}
	document.write(i +"<br>");
}


/*Output
1
2
3
4
6
7
8
9
10
*/