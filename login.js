function validate()
{
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	if(username=="admin" && password=="admin")
	{
		window.open("main.html");
		return false;
	}
	else
	{
		alert("Błędny login lub hasło!");	
	}
}
