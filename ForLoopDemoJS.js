/*For Loop */

var policeDept=0;
var fireDept=0;
var hospitalDept=0;

/*Output only Dept number if the following condition is true:

1. Number of Department should be equal between 1 to 7.
2. No Deparment should have same number.
3. The sum of all department number should be equal to 12.
4. policeDept should be even number.

*/

document.write("P\tF\tH");
document.write("<br>");
for(policeDept = 1; policeDept<=7; policeDept++){
	for(fireDept = 1; fireDept<=7; fireDept++){
		for(hospitalDept= 1; hospitalDept<=7; hospitalDept++){

			if((policeDept+fireDept+hospitalDept==12) && (policeDept%2==0) &&(policeDept != fireDept) &&(policeDept != hospitalDept) &&(fireDept != hospitalDept) ){
		document.write(policeDept + "\t" + fireDept + "\t" + hospitalDept );document.write("<br>");
}
		}
	
		
	}

}

/*Output

P	F	H
2	3	7
2	4	6
2	6	4
2	7	3
4	1	7
4	2	6
4	3	5
4	5	3
4	6	2
4	7	1
6	1	5
6	2	4
6	4	2
6	5	1

*/