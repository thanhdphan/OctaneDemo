'made update
wait(5)
Browser("Browser").Page("Page").WebButton("Initialize Server").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Page").WebEdit("UserNameTextbox").Set "oauth2-o4zd94lthoBq60gYb8Rf@microfocus.com" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page").WebEdit("PasswordTextbox").SetSecure "5cd371798380c0bf24b3b20bad6fd51db41150979d6e07c45830fd41be379625e6da2ca411d8a4a7a9952e952e8f" @@ script infofile_;_ZIP::ssf3.xml_;_
wait(3)
Browser("Browser").Page("Page").WebButton("Authenticate").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Page").WebList("DomainList").Select "SAAS_INTERNAL" @@ script infofile_;_ZIP::ssf5.xml_;_
wait(3)
Browser("Browser").Page("Page").WebButton("Select Domain").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").WebList("ProjectList").Select "SAAS_INTERNAL.Demo" @@ script infofile_;_ZIP::ssf7.xml_;_
wait(3)
Browser("Browser").Page("Page").WebButton("Select Project").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").WebButton("Login").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").WebButton("Logout").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait(3)
