Setting.Item("RunMode") = 1
wait(3)
Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account My orders Sign").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "toddp" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5ccb83f614dfc995c065ee355a3998da9a8c2f3f" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(3)
