'Added a comment
Browser("Browser").Page("Page").Link("List Available Examples").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Page_2").WebRadioGroup("ctl00$MainContent$RadioButtonL").Select "DefectList.aspx" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page_2").WebButton("Select").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(1)
Browser("Browser").Page("Page_2").WebButton("Run").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(1)
Browser("Browser").Page("Defects List").Link("List Available Examples").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(5)
Browser("Browser").Page("Page_2").Link("Home").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page_3").WebButton("Logout").Click @@ script infofile_;_ZIP::ssf7.xml_;_
