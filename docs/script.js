function feedback_handle() {
    let x = document.getElementById("Feedback").value;
    if (x.trim() === ""){
        window.alert("Please input your feedback");

    }
    else{
        
        document.getElementById("Feedback-response").innerText = "Thanks for your feedback";
    }
    
}

