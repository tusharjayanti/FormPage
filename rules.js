function myfunction() 
{ 
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	if(age<18)
	{
		alert("You are not an Adult");
	}
	else
	{
		alert("Submitted");
	}
}