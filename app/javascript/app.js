$("#submit-btn").on("click",function(event){
    event.preventDefault();
    

    let valid = true;
  
    
    if($("#name").val() === "" || $("#photo").val() ==="" ){
        valid = false;
    }
    else if($("#q1").val() ==="empty" || $("#q2").val() ==="empty" || $("#q3").val() ==="empty" ||$("#q4").val() ==="empty" ||$("#q5").val() ==="empty"){
        valid = false
    }

    if (valid === true){
       
        let newUser = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores:[      
          $("#q1").val(),
					$("#q2").val(),
					$("#q3").val(),
					$("#q4").val(),
          $("#q5").val()]
        };

    $.post("/api/friends",newUser);

    $("#name").val("");
    $("#photo").val("");
    for(let i = 1; i<6;i++){
      $(`#q${i}`).val("");
    }

    }
    
    else {
        alert("Fill out all fields");
    }
  

  })