Browser("Browser").Page("Page").Link("List Available Examples").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Page_2").WebRadioGroup("ctl00$MainContent$RadioButtonL").Select "DefectList.aspx" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page_2").WebButton("Select").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Page_2").WebButton("Run").Click @@ script infofile_;_ZIP::ssf4.xml_;_
