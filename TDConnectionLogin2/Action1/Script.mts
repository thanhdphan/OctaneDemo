﻿wait(1)
Browser("Browser").Page("Page").WebElement("Server URL: User Name:").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Page("Page").WebEdit("ServerURLTextbox").Set "https://almoreqcdemo15.saas.microfocus.com/qcbin" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page").WebButton("Initialize Server").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait(1)
Browser("Browser").Page("Page").WebEdit("UserNameTextbox").Set "saas_tphan" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Page").WebEdit("PasswordTextbox").SetSecure "5d4bc829c312733d716aacd04680464338aabe5ddde0" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("Page").WebButton("Authenticate").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait(1)
Browser("Browser").Page("Page").WebList("DomainList").Select "SAAS_INTERNAL" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").WebButton("Select Domain").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait(1)
Browser("Browser").Page("Page").WebList("ProjectList").Select "SAAS_INTERNAL.for_thanh" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").WebButton("Select Project").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait(1)
Browser("Browser").Page("Page").WebButton("Login").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait(1)
