function BUY()
			{
			var name,pw;
		var names,pws;
		names=["omima","ebtehal","ahmed","hanan"];
		pws=["omima123","ebtehal123","ahmed123","hanan123"];
		name=document.getElementById("un").value;
		pw=document.getElementById("pw").value;
		var log=false;
		
		for(var i=0;i<4;i++)
		{
		if(name==names[i] && pw==pws[i])
			log=true;
		}
		if(log==true)
			location.replace("contact.html")
		else
		 	document.write("<p style='color:blue;font-size:20;'>user name or password  is wrong</p> ");
		}
		