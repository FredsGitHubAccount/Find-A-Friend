$("#submit-btn").on("click",function(){
    event.preventDefault();
  
    let valid = true;
    
    
  
    if($("#name".val() ==="" || $("#photo".val() ==="" ))){
        valid = false;
    }

    else if($("#q1".val() ==="empty" || $("#q2".val() ==="empty" ) || $("#q3".val() ==="empty" ) || $("#q4".val() ==="empty" ) || $("#q5".val() ==="empty" ))){
        valid = false
    }

    if (valid === true){
        alert("GJ")

    }

    else {
        alert("Fill out all fields");
    }
  

  
  })