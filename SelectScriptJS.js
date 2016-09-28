<script>
	function myFunction() {
   	
   	var x = document.getElementById("system").selectedIndex;

   a document.getElementsByTagName("option")[x].value;

    b = document.getElementsByTagName("option");
	
	switch(a){
	
	case "ALMAVIVA":
	b[0].setAttribute("selected", "selected");
	break;
	
	case "ALLIANZ":
	b[1].setAttribute("selected", "selected");
	break;
	
	case "BAML":
	b[2].setAttribute("selected", "selected");
	break;
	
	case "BEVCHAIN":
	b[3].setAttribute("selected", "selected");
	break;
	
	case "CYCLONE":
	b[4].setAttribute("selected", "selected");
	break;
	
	case "EDICOM":
	b[5].setAttribute("selected", "selected");
	break;
	
	case "LUIS SIMOES":
	b[6].setAttribute("selected", "selected");
	break;
	
	case "SERLOVECA":
	b[7].setAttribute("selected", "selected");
	break;
	
	case "ROLOG":
	b[8].setAttribute("selected", "selected");
	break;
	
	case "MANUGISTICS":
	b[9].setAttribute("selected", "selected");
	break;
	
	default:
	
	}



	}
	</script>
