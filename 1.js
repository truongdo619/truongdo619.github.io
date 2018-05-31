$(document).ready(function()
{
	var kt = true;
	$("#1").click(function()
	{
		if (kt == true)
		{
		$("#one").addClass("appear");
		kt = false;
		return false;
		}
		else	
		{
		$("#one").removeClass("appear");
		kt = true;
		return false;
		}	
	})
})