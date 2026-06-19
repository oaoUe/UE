// TEST 3 題庫資料（答案 + 選項英文/中譯）
// 來源：Part 1/2 選項=聽力詳解 doc p392–397；Part 3/4 題幹+選項=試題頁 doc p100–106；中譯多為自譯。
// 答案來源：詳解頁 doc p392 答案總表（最可靠）→ build\test3_answers.json
// 資料模型：q[題號] = { part, ans, set?, graphic?, ask?{en,zh}, stem?{en,zh}, opts:[{k,en,zh}] }
// 全 100 題完成。
window.QUIZ = {
  test: 3,
  q: {
    // ===== Part 1：照片題（Q1–6） =====
    1: { part:1, ans:"B", opts:[
      {k:"A", en:"He is planting some flowers.", zh:"他正在種一些花。"},
      {k:"B", en:"He is using an appliance.", zh:"他正在使用家電用品。"},
      {k:"C", en:"He is arranging some chairs.", zh:"他正在整理一些椅子。"},
      {k:"D", en:"He is painting a fence.", zh:"他正在刷圍欄。"}
    ]},
    2: { part:1, ans:"A", opts:[
      {k:"A", en:"A man is drinking from a cup.", zh:"男子正在用杯子喝水。"},
      {k:"B", en:"A set of shelves has been emptied.", zh:"一組架子已經被清空了。"},
      {k:"C", en:"An apron is lying on the table.", zh:"一件圍裙被放在桌子上。"},
      {k:"D", en:"A woman is holding a tray.", zh:"女子正拿著托盤。"}
    ]},
    3: { part:1, ans:"B", opts:[
      {k:"A", en:"The man is sitting on a sofa.", zh:"男子坐在沙發上。"},
      {k:"B", en:"The woman is handling some plates.", zh:"女子正在端著一些盤子。"},
      {k:"C", en:"The man is carrying a box.", zh:"男子正在搬一個箱子。"},
      {k:"D", en:"The woman is closing some curtains.", zh:"女子正在關窗簾。"}
    ]},
    4: { part:1, ans:"A", opts:[
      {k:"A", en:"One of the women is pushing a vehicle.", zh:"其中一名女子正在推一輛車。"},
      {k:"B", en:"One of the women is closing a window.", zh:"其中一名女子正在關一扇窗。"},
      {k:"C", en:"Some women are seated in a car.", zh:"一些女子坐在汽車裡。"},
      {k:"D", en:"Some people are crossing the street.", zh:"一些人正在過馬路。"}
    ]},
    5: { part:1, ans:"D", opts:[
      {k:"A", en:"Monitors have been set on the floor.", zh:"螢幕被放在地板上。"},
      {k:"B", en:"Cabinet drawers have been left open.", zh:"橱櫃的抽屜被開著。"},
      {k:"C", en:"Chairs are lined up along a wall.", zh:"椅子沿著牆壁排成一排。"},
      {k:"D", en:"Office desks are unoccupied.", zh:"辦公桌沒有人使用。"}
    ]},
    6: { part:1, ans:"C", opts:[
      {k:"A", en:"He is pushing a button.", zh:"他正在按一個按鈕。"},
      {k:"B", en:"He is adjusting a watch.", zh:"他正在調整一隻手錶。"},
      {k:"C", en:"He is facing a microphone.", zh:"他正面對著一支麥克風。"},
      {k:"D", en:"He is watching a concert.", zh:"他正在觀看音樂會。"}
    ]},

    // ===== Part 2：應答問題（Q7–31，純音檔，A–C）=====
    // 來源：聽力詳解 doc p392–397。答案經 test3_answers.json 核對。
    7: { part:2, ans:"B", ask:{en:"Where did you get your television repaired?", zh:"你在哪裡把電視修好的？"}, opts:[
      {k:"A", en:"I compared two models.", zh:"我比較了兩個型號。"},
      {k:"B", en:"The shop I bought it at.", zh:"我買的那家店。"},
      {k:"C", en:"Last night.", zh:"昨晚。"}
    ]},
    8: { part:2, ans:"A", ask:{en:"How much cash will I need?", zh:"我需要多少現金？"}, opts:[
      {k:"A", en:"About 30 dollars.", zh:"大約 30 元。"},
      {k:"B", en:"Five different wallet designs.", zh:"五款不同的錢包設計。"},
      {k:"C", en:"By making an appointment.", zh:"透過預約。"}
    ]},
    9: { part:2, ans:"B", ask:{en:"Are staff allowed to bring guests into the building?", zh:"員工可以帶客人進入大樓嗎？"}, opts:[
      {k:"A", en:"About employee benefits.", zh:"關於員工福利。"},
      {k:"B", en:"Sure. But register them in advance.", zh:"當然。但請提前登記。"},
      {k:"C", en:"She can park there.", zh:"她可以在那裡停車。"}
    ]},
    10: { part:2, ans:"B", ask:{en:"You moved into a new apartment last week, didn't you?", zh:"你上週搬進新公寓了，對嗎？"}, opts:[
      {k:"A", en:"Mrs. Roy's house.", zh:"Roy 太太的房子。"},
      {k:"B", en:"Yes. Everything went smoothly.", zh:"是的，一切都很順利。"},
      {k:"C", en:"All the furniture fits.", zh:"所有家具都放得下。"}
    ]},
    11: { part:2, ans:"A", ask:{en:"Haven't the company president appeared on television before?", zh:"公司總裁以前沒有上過電視嗎？"}, opts:[
      {k:"A", en:"I don't believe so.", zh:"我不這樣認為。"},
      {k:"B", en:"It may have been unplugged.", zh:"可能插頭被拔掉了。"},
      {k:"C", en:"He just walked by a minute ago.", zh:"他一分鐘前剛路過。"}
    ]},
    12: { part:2, ans:"B", ask:{en:"Should I replace the water filter every two weeks or once a month?", zh:"我應該每兩週還是每個月更換一次濾水器？"}, opts:[
      {k:"A", en:"I'd suggest that.", zh:"我會這樣建議。"},
      {k:"B", en:"What does the manual say?", zh:"手冊上怎麼說？"},
      {k:"C", en:"John replaced the printer cartridge.", zh:"John 更換了印表機墨水匣。"}
    ]},
    13: { part:2, ans:"A", ask:{en:"Have all the members of the research team seen the prototype?", zh:"研究團隊的所有成員都看過原型了嗎？"}, opts:[
      {k:"A", en:"No. Dave Greer still has to check it.", zh:"沒有。Dave Greer 還得確認一下。"},
      {k:"B", en:"Not very often.", zh:"不太常。"},
      {k:"C", en:"See some new keyboards.", zh:"看看一些新的鍵盤。"}
    ]},
    14: { part:2, ans:"C", ask:{en:"How many admission tickets are left over?", zh:"還剩多少張入場票？"}, opts:[
      {k:"A", en:"By next Monday.", zh:"下週一之前。"},
      {k:"B", en:"I'm not sure I have time.", zh:"我不確定我有沒有時間。"},
      {k:"C", en:"More than 30.", zh:"超過 30 張。"}
    ]},
    15: { part:2, ans:"B", ask:{en:"Why is the Internet connection so slow today?", zh:"今天網路連線為什麼這麼慢？"}, opts:[
      {k:"A", en:"I'll notify the provider.", zh:"我會通知網路供應商。"},
      {k:"B", en:"Your lunch appointment is tomorrow.", zh:"你的午餐約定是明天。"},
      {k:"C", en:"To select the interns.", zh:"為了選拔實習生。"}
    ]},
    16: { part:2, ans:"B", ask:{en:"When can I expect to see the dentist?", zh:"我什麼時候可以看到牙醫？"}, opts:[
      {k:"A", en:"Yes, he's downstairs.", zh:"是的，他在樓下。"},
      {k:"B", en:"At about 10 o'clock.", zh:"大約 10 點。"},
      {k:"C", en:"Dr. Wilkins works at this clinic.", zh:"Wilkins 醫師在這家診所工作。"}
    ]},
    17: { part:2, ans:"C", ask:{en:"Who is the tall man standing in the corner?", zh:"角落裡那個高個子男人是誰？"}, opts:[
      {k:"A", en:"I always take this road.", zh:"我總是走這條路。"},
      {k:"B", en:"He explained the revenue chart.", zh:"他解釋了營收圖表。"},
      {k:"C", en:"That's my former boss.", zh:"那是我以前的老闆。"}
    ]},
    18: { part:2, ans:"C", ask:{en:"Garcia Steel is one of the country's leading exporters.", zh:"Garcia Steel 是全國頂尖出口商之一。"}, opts:[
      {k:"A", en:"Those are shipping containers.", zh:"那些是貨運集裝箱。"},
      {k:"B", en:"We will finish soon.", zh:"我們快完成了。"},
      {k:"C", en:"It is a very successful company.", zh:"那是一家非常成功的公司。"}
    ]},
    19: { part:2, ans:"A", ask:{en:"Do you have your presentation notes with you?", zh:"你有帶簡報筆記嗎？"}, opts:[
      {k:"A", en:"Yes, I do.", zh:"是的，我有帶。"},
      {k:"B", en:"Right inside this folder.", zh:"就在這個資料夾裡。"},
      {k:"C", en:"When will it start?", zh:"什麼時候開始？"}
    ]},
    20: { part:2, ans:"C", ask:{en:"Could I take a look at that pamphlet you're holding?", zh:"我可以看一下你手上拿的那本小冊子嗎？"}, opts:[
      {k:"A", en:"She is a musician.", zh:"她是一名音樂家。"},
      {k:"B", en:"Of course. It's the newest model.", zh:"當然。這是最新型號。"},
      {k:"C", en:"There's a pile of them beside you.", zh:"你旁邊有一疊。"}
    ]},
    21: { part:2, ans:"C", ask:{en:"Is this the bus going to the airport?", zh:"這是前往機場的公車嗎？"}, opts:[
      {k:"A", en:"The one in my office.", zh:"我辦公室裡的那個。"},
      {k:"B", en:"Every 20 minutes.", zh:"每 20 分鐘一班。"},
      {k:"C", en:"There should be a sign.", zh:"應該有一個標誌。"}
    ]},
    22: { part:2, ans:"B", ask:{en:"How should we arrange the desks for the seminar?", zh:"我們應該如何排列研討會的桌子？"}, opts:[
      {k:"A", en:"From 5 to 6 p.m.", zh:"下午 5 點到 6 點。"},
      {k:"B", en:"Let's put them in a circle.", zh:"我們把它們排成圓形吧。"},
      {k:"C", en:"She has a range of customers.", zh:"她有各種各樣的顧客。"}
    ]},
    23: { part:2, ans:"C", ask:{en:"Hasn't that author published a new book?", zh:"那位作者不是出了一本新書嗎？"}, opts:[
      {k:"A", en:"I prefer to use public transportation.", zh:"我比較喜歡使用大眾運輸。"},
      {k:"B", en:"Yes, that facility is convenient.", zh:"是的，那個設施很方便。"},
      {k:"C", en:"I don't think it's out, yet.", zh:"我認為還沒有出版。"}
    ]},
    24: { part:2, ans:"A", ask:{en:"Why wasn't our newsletter mailed to customers?", zh:"為什麼我們的電子報沒有寄給客戶？"}, opts:[
      {k:"A", en:"Are you sure it wasn't?", zh:"你確定沒有寄嗎？"},
      {k:"B", en:"I heard about that discount.", zh:"我聽說那個折扣了。"},
      {k:"C", en:"Near the post office.", zh:"在郵局附近。"}
    ]},
    25: { part:2, ans:"C", ask:{en:"I can't find my glasses.", zh:"我找不到我的眼鏡。"}, opts:[
      {k:"A", en:"That product is on sale.", zh:"那個產品正在打折。"},
      {k:"B", en:"You'd better check this report.", zh:"你最好確認這份報告。"},
      {k:"C", en:"I haven't seen them, either.", zh:"我也沒看到。"}
    ]},
    26: { part:2, ans:"A", ask:{en:"Who did you hire to cater your birthday party?", zh:"你找誰來負責你生日派對的餐飲？"}, opts:[
      {k:"A", en:"I went with your recommendation.", zh:"我採用了你的推薦。"},
      {k:"B", en:"The price is so high.", zh:"價格這麼貴。"},
      {k:"C", en:"Oh, this present is for me?", zh:"喔，這個禮物是給我的嗎？"}
    ]},
    27: { part:2, ans:"C", ask:{en:"Would you like to ride in the front seat of the car?", zh:"你想坐汽車的前座嗎？"}, opts:[
      {k:"A", en:"According to the mechanic.", zh:"根據技師的說法。"},
      {k:"B", en:"Please turn up the heat.", zh:"請把暖氣調高一點。"},
      {k:"C", en:"No, the back is fine.", zh:"不，後座就可以了。"}
    ]},
    28: { part:2, ans:"A", ask:{en:"Members get a 20 percent discount, don't they?", zh:"會員可以享有八折優惠，對嗎？"}, opts:[
      {k:"A", en:"That is no longer our policy.", zh:"那已經不是我們的政策了。"},
      {k:"B", en:"Charge it to my card, please.", zh:"請刷我的卡。"},
      {k:"C", en:"Yes, I'm working full-time.", zh:"是的，我正在全職工作。"}
    ]},
    29: { part:2, ans:"B", ask:{en:"What time do you want a wake-up call?", zh:"你幾點需要電話叫醒服務？"}, opts:[
      {k:"A", en:"As long as we order room service.", zh:"只要我們有訂客房服務就行。"},
      {k:"B", en:"I'll just set the alarm on my phone.", zh:"我會在手機上設鬧鐘。"},
      {k:"C", en:"In the front of the library.", zh:"在圖書館前面。"}
    ]},
    30: { part:2, ans:"A", ask:{en:"Including the case, this tablet weighs about 600 grams.", zh:"包含保護殼在內，這款平板電腦大概重 600 公克。"}, opts:[
      {k:"A", en:"I'm more concerned with the price.", zh:"我更在意價格。"},
      {k:"B", en:"Both computers are turned on.", zh:"兩台電腦都開著。"},
      {k:"C", en:"I'll call, just in case.", zh:"我會打電話，以防萬一。"}
    ]},
    31: { part:2, ans:"B", ask:{en:"You couldn't cancel the order from Thompson Office Supplies, could you?", zh:"你無法取消來自 Thompson 辦公用品的訂單，是嗎？"}, opts:[
      {k:"A", en:"I couldn't attend the seminar.", zh:"我無法參加研討會。"},
      {k:"B", en:"The shipment had already arrived.", zh:"貨物已經到了。"},
      {k:"C", en:"No, this is the correct venue.", zh:"不，這是正確的地點。"}
    ]},

    // ===== Part 3：對話（Q32–70），set=共用音檔的三題組，graphic=圖表題 =====
    32: { part:3, ans:"B", set:"32-34", stem:{en:"Where is the conversation most likely taking place?", zh:"這段對話最可能發生在哪裡？"}, opts:[
      {k:"A", en:"At a train station", zh:"在火車站"},
      {k:"B", en:"At an airport", zh:"在機場"},
      {k:"C", en:"At a taxi stand", zh:"在計程車招呼站"},
      {k:"D", en:"At a bus stop", zh:"在公車站"}
    ]},
    33: { part:3, ans:"A", set:"32-34", stem:{en:"According to the man, what will be discussed in a meeting?", zh:"根據男子所說，會議中將討論什麼？"}, opts:[
      {k:"A", en:"A budget plan", zh:"預算計畫"},
      {k:"B", en:"A conference", zh:"研討會"},
      {k:"C", en:"A hiring process", zh:"招聘流程"},
      {k:"D", en:"An expansion", zh:"業務擴展"}
    ]},
    34: { part:3, ans:"D", set:"32-34", stem:{en:"What does the man say he will do?", zh:"男子說他將會做什麼？"}, opts:[
      {k:"A", en:"Make a presentation", zh:"做簡報"},
      {k:"B", en:"Wait in a lounge area", zh:"在等候區等待"},
      {k:"C", en:"Speak to a ticketing agent", zh:"與售票員交談"},
      {k:"D", en:"Contact a director", zh:"聯繫主管"}
    ]},
    35: { part:3, ans:"B", set:"35-37", stem:{en:"What did the woman do last week?", zh:"女子上週做了什麼？"}, opts:[
      {k:"A", en:"Opened an account", zh:"開立帳戶"},
      {k:"B", en:"Made a purchase", zh:"購買商品"},
      {k:"C", en:"Rescheduled an appointment", zh:"重新安排約定"},
      {k:"D", en:"Called a business", zh:"致電給公司"}
    ]},
    36: { part:3, ans:"C", set:"35-37", stem:{en:"According to the man, what should the woman do?", zh:"根據男子所說，女子應該怎麼做？"}, opts:[
      {k:"A", en:"Return at a later date", zh:"改天再回來"},
      {k:"B", en:"Print out a receipt", zh:"列印收據"},
      {k:"C", en:"Go to a service counter", zh:"去服務台"},
      {k:"D", en:"Provide an order number", zh:"提供訂單號碼"}
    ]},
    37: { part:3, ans:"C", set:"35-37", stem:{en:"What is near a makeup display?", zh:"化妝品展示區附近有什麼？"}, opts:[
      {k:"A", en:"An entrance", zh:"入口"},
      {k:"B", en:"A restroom", zh:"洗手間"},
      {k:"C", en:"An escalator", zh:"電扶梯"},
      {k:"D", en:"An information desk", zh:"服務台"}
    ]},
    38: { part:3, ans:"D", set:"38-40", stem:{en:"Why is the woman worried?", zh:"女子為何感到擔憂？"}, opts:[
      {k:"A", en:"A lifeguard didn't attend training.", zh:"救生員沒有參加訓練。"},
      {k:"B", en:"A visitor has been injured.", zh:"有訪客受傷了。"},
      {k:"C", en:"An event will be postponed.", zh:"活動將被延期。"},
      {k:"D", en:"A facility will need more staff.", zh:"場地需要更多員工。"}
    ]},
    39: { part:3, ans:"B", set:"38-40", stem:{en:"What is mentioned about Diana Harris?", zh:"關於 Diana Harris，提到了什麼？"}, opts:[
      {k:"A", en:"She disagrees with a proposal.", zh:"她不同意一個提案。"},
      {k:"B", en:"She is not at work today.", zh:"她今天沒上班。"},
      {k:"C", en:"She will not fulfill a request.", zh:"她不會完成一項請求。"},
      {k:"D", en:"She has filled out a form.", zh:"她已填寫了一份表格。"}
    ]},
    40: { part:3, ans:"C", set:"38-40", stem:{en:"Why will the man make an announcement?", zh:"男子為什麼要發佈公告？"}, opts:[
      {k:"A", en:"To praise some workers", zh:"為了讚揚一些員工"},
      {k:"B", en:"To clarify a policy", zh:"為了釐清一項政策"},
      {k:"C", en:"To ask for volunteers", zh:"為了招募志願者"},
      {k:"D", en:"To apologize for a mistake", zh:"為了道歉"}
    ]},
    41: { part:3, ans:"D", set:"41-43", stem:{en:"Where do the speakers most likely work?", zh:"說話者最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a retail outlet", zh:"在零售店"},
      {k:"B", en:"At an electronics store", zh:"在電子產品店"},
      {k:"C", en:"At a film studio", zh:"在電影製作公司"},
      {k:"D", en:"At a movie theater", zh:"在電影院"}
    ]},
    42: { part:3, ans:"B", set:"41-43", stem:{en:"Why does the man say, \"I think it's the bulb\"?", zh:"男子說「我認為是燈泡的問題」的目的是什麼？"}, opts:[
      {k:"A", en:"To ask for some advice", zh:"尋求建議"},
      {k:"B", en:"To explain a malfunction", zh:"解釋故障原因"},
      {k:"C", en:"To oppose an idea", zh:"反對一個想法"},
      {k:"D", en:"To make a request", zh:"提出請求"}
    ]},
    43: { part:3, ans:"B", set:"41-43", stem:{en:"What does the man say he will do?", zh:"男子說他將會做什麼？"}, opts:[
      {k:"A", en:"Turn on a device", zh:"打開一台設備"},
      {k:"B", en:"Get an item", zh:"去拿一樣東西"},
      {k:"C", en:"Arrange some plans", zh:"安排一些計劃"},
      {k:"D", en:"Assist some customers", zh:"協助一些顧客"}
    ]},
    44: { part:3, ans:"C", set:"44-46", stem:{en:"What is the woman's problem?", zh:"女子遇到了什麼問題？"}, opts:[
      {k:"A", en:"She does not know a brand name.", zh:"她不知道品牌名稱。"},
      {k:"B", en:"She missed a sales promotion.", zh:"她錯過了促銷活動。"},
      {k:"C", en:"She is unable to find an item.", zh:"她找不到一件商品。"},
      {k:"D", en:"She left a membership card at home.", zh:"她把會員卡忘在家裡了。"}
    ]},
    45: { part:3, ans:"D", set:"44-46", stem:{en:"What does Ben recommend?", zh:"Ben 推薦做什麼？"}, opts:[
      {k:"A", en:"Purchasing a product soon", zh:"盡快購買商品"},
      {k:"B", en:"Asking for a partial refund", zh:"要求部分退款"},
      {k:"C", en:"Testing an electronic device", zh:"測試一台電子設備"},
      {k:"D", en:"Checking a store catalog", zh:"查看店內型錄"}
    ]},
    46: { part:3, ans:"A", set:"44-46", stem:{en:"What is the woman asked to do?", zh:"女子被要求做什麼？"}, opts:[
      {k:"A", en:"Conduct an interview", zh:"進行採訪"},
      {k:"B", en:"Write an article", zh:"撰寫文章"},
      {k:"C", en:"Inspect a facility", zh:"視察設施"},
      {k:"D", en:"Place an order", zh:"下訂單"}
    ]},
    47: { part:3, ans:"B", set:"47-49", stem:{en:"What is mentioned about Proto Corporation?", zh:"關於 Proto 公司，提到了什麼？"}, opts:[
      {k:"A", en:"It opened a factory.", zh:"它開設了一家工廠。"},
      {k:"B", en:"It released a statement.", zh:"它發佈了一份聲明。"},
      {k:"C", en:"It received a prize.", zh:"它獲得了一個獎項。"},
      {k:"D", en:"It sponsored an event.", zh:"它贊助了一項活動。"}
    ]},
    48: { part:3, ans:"A", set:"47-49", stem:{en:"What is the woman concerned about?", zh:"女子擔心什麼？"}, opts:[
      {k:"A", en:"Logging in to a Web site", zh:"登入一個網站"},
      {k:"B", en:"Confirming some facts", zh:"確認一些事實"},
      {k:"C", en:"Meeting a due date", zh:"趕上截止日期"},
      {k:"D", en:"Negotiating a contract", zh:"談判合約"}
    ]},
    49: { part:3, ans:"C", set:"47-49", stem:{en:"What does the woman say is in her office?", zh:"女子說她辦公室裡有什麼？"}, opts:[
      {k:"A", en:"Student essays", zh:"學生作文"},
      {k:"B", en:"Report cards", zh:"成績單"},
      {k:"C", en:"Registration forms", zh:"登記表"},
      {k:"D", en:"Lecture notes", zh:"課堂筆記"}
    ]},
    50: { part:3, ans:"D", set:"50-52", stem:{en:"Why does the man apologize?", zh:"男子為何道歉？"}, opts:[
      {k:"A", en:"An invitation was declined.", zh:"邀請被拒絕了。"},
      {k:"B", en:"A vehicle broke down.", zh:"車輛拋錨了。"},
      {k:"C", en:"A project was canceled.", zh:"專案被取消了。"},
      {k:"D", en:"A meeting started late.", zh:"會議晚開始了。"}
    ]},
    51: { part:3, ans:"C", set:"50-52", stem:{en:"What did the woman do last month?", zh:"女子上個月做了什麼？"}, opts:[
      {k:"A", en:"She entertained some clients.", zh:"她招待了一些客戶。"},
      {k:"B", en:"She hired a new employee.", zh:"她招募了一名新員工。"},
      {k:"C", en:"She located a suitable place.", zh:"她找到了合適的地點。"},
      {k:"D", en:"She visited several branches.", zh:"她拜訪了幾個分部。"}
    ]},
    52: { part:3, ans:"D", set:"50-52", stem:{en:"What does the woman agree to do?", zh:"女子同意做什麼？"}, opts:[
      {k:"A", en:"Announce a program", zh:"公佈一個計畫"},
      {k:"B", en:"Assemble a team", zh:"組建一個團隊"},
      {k:"C", en:"Reserve a room", zh:"預訂一個房間"},
      {k:"D", en:"Accept a position", zh:"接受一個職位"}
    ]},
    53: { part:3, ans:"A", set:"53-55", stem:{en:"What are the speakers mainly discussing?", zh:"說話者主要在討論什麼？"}, opts:[
      {k:"A", en:"A corporate event", zh:"公司活動"},
      {k:"B", en:"A hotel opening", zh:"飯店開幕"},
      {k:"C", en:"A business trip", zh:"商務出差"},
      {k:"D", en:"A training workshop", zh:"培訓研討會"}
    ]},
    54: { part:3, ans:"D", set:"53-55", stem:{en:"Why is Pete worried?", zh:"Pete 為什麼感到擔憂？"}, opts:[
      {k:"A", en:"Some menu options are not available.", zh:"一些菜單選項缺貨。"},
      {k:"B", en:"An item has been damaged.", zh:"一件物品損壞了。"},
      {k:"C", en:"A space must be cleaned.", zh:"場地需要清潔。"},
      {k:"D", en:"Some food is expensive.", zh:"一些食物太貴了。"}
    ]},
    55: { part:3, ans:"A", set:"53-55", stem:{en:"What will the woman do today?", zh:"女子今天會做什麼？"}, opts:[
      {k:"A", en:"Check a list", zh:"確認清單"},
      {k:"B", en:"Make a call", zh:"打電話"},
      {k:"C", en:"Write a report", zh:"撰寫報告"},
      {k:"D", en:"Visit a venue", zh:"拜訪場地"}
    ]},
    56: { part:3, ans:"C", set:"56-58", stem:{en:"Where most likely do the speakers work?", zh:"說話者最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a dining establishment", zh:"在餐飲業"},
      {k:"B", en:"At a department store", zh:"在百貨公司"},
      {k:"C", en:"At a manufacturing facility", zh:"在製造廠"},
      {k:"D", en:"At a consulting firm", zh:"在顧問公司"}
    ]},
    57: { part:3, ans:"A", set:"56-58", stem:{en:"What did the company do last year?", zh:"公司去年做了什麼？"}, opts:[
      {k:"A", en:"It hired some employees.", zh:"它招募了一些員工。"},
      {k:"B", en:"It conducted online training.", zh:"它舉辦了線上培訓。"},
      {k:"C", en:"It transferred some staff members.", zh:"它調動了一些員工。"},
      {k:"D", en:"It held an advertising workshop.", zh:"它舉辦了廣告研討會。"}
    ]},
    58: { part:3, ans:"A", set:"56-58", stem:{en:"Why does the woman say, \"they went through our normal orientation process\"?", zh:"女子說「他們接受了我們正常的新人培訓流程」的目的是什麼？"}, opts:[
      {k:"A", en:"To show disagreement", zh:"表示不同意"},
      {k:"B", en:"To indicate satisfaction", zh:"表示滿意"},
      {k:"C", en:"To express gratitude", zh:"表達感謝"},
      {k:"D", en:"To offer confirmation", zh:"提供確認"}
    ]},
    59: { part:3, ans:"B", set:"59-61", stem:{en:"What are the speakers mainly discussing?", zh:"說話者主要在討論什麼？"}, opts:[
      {k:"A", en:"New textbooks", zh:"新教科書"},
      {k:"B", en:"Class preparations", zh:"備課"},
      {k:"C", en:"Group projects", zh:"小組作業"},
      {k:"D", en:"University policies", zh:"大學政策"}
    ]},
    60: { part:3, ans:"C", set:"59-61", stem:{en:"What does the man offer to do?", zh:"男子提出要做什麼？"}, opts:[
      {k:"A", en:"Share information with a team", zh:"與團隊分享資訊"},
      {k:"B", en:"Attend a special course", zh:"參加特別課程"},
      {k:"C", en:"Make copies of a document", zh:"影印文件"},
      {k:"D", en:"Lead a seminar", zh:"主持研討會"}
    ]},
    61: { part:3, ans:"A", set:"59-61", stem:{en:"What does the woman say is in her office?", zh:"女子說她辦公室裡有什麼？"}, opts:[
      {k:"A", en:"Student essays", zh:"學生作文"},
      {k:"B", en:"Report cards", zh:"成績單"},
      {k:"C", en:"Registration forms", zh:"登記表"},
      {k:"D", en:"Lecture notes", zh:"課堂筆記"}
    ]},
    62: { part:3, ans:"B", set:"62-64", graphic:"g62.png", stem:{en:"Why does the woman ask for the man's opinion?", zh:"女子為何詢問男子的意見？"}, opts:[
      {k:"A", en:"She ordered the wrong dish.", zh:"她點了錯誤的菜。"},
      {k:"B", en:"She has never eaten at the restaurant.", zh:"她從未在這家餐廳用餐。"},
      {k:"C", en:"She is allergic to some ingredients.", zh:"她對某些食材過敏。"},
      {k:"D", en:"She does not eat spicy food.", zh:"她不吃辣。"}
    ]},
    63: { part:3, ans:"D", set:"62-64", graphic:"g62.png", stem:{en:"What does the man recommend?", zh:"男子推薦什麼？"}, opts:[
      {k:"A", en:"Getting a dish for takeout", zh:"外帶一道菜"},
      {k:"B", en:"Sampling some items", zh:"試吃一些食物"},
      {k:"C", en:"Looking at a new menu", zh:"看看新菜單"},
      {k:"D", en:"Avoiding a specific meal", zh:"避開特定餐點"}
    ]},
    64: { part:3, ans:"C", set:"62-64", graphic:"g62.png", stem:{en:"Look at the graphic. How much will the woman most likely pay?", zh:"看圖表。女子最可能付多少錢？"}, opts:[
      {k:"A", en:"$10", zh:"10 美元"},
      {k:"B", en:"$11", zh:"11 美元"},
      {k:"C", en:"$12", zh:"12 美元"},
      {k:"D", en:"$13", zh:"13 美元"}
    ]},
    65: { part:3, ans:"D", set:"65-67", graphic:"g65.png", stem:{en:"Who most likely are the speakers?", zh:"說話者最可能是誰？"}, opts:[
      {k:"A", en:"Advertising consultants", zh:"廣告顧問"},
      {k:"B", en:"Department managers", zh:"部門主管"},
      {k:"C", en:"Personal assistants", zh:"個人助理"},
      {k:"D", en:"Event planners", zh:"活動規劃師"}
    ]},
    66: { part:3, ans:"B", set:"65-67", graphic:"g65.png", stem:{en:"According to the speakers, what turned out well?", zh:"根據說話者，什麼進展順利？"}, opts:[
      {k:"A", en:"A sales presentation", zh:"業務簡報"},
      {k:"B", en:"A marketing effort", zh:"行銷努力"},
      {k:"C", en:"A press conference", zh:"記者會"},
      {k:"D", en:"An employee orientation", zh:"員工入職培訓"}
    ]},
    67: { part:3, ans:"B", set:"65-67", graphic:"g65.png", stem:{en:"Look at the graphic. Which time slot is now open?", zh:"看圖表。現在哪個時段空出來了？"}, opts:[
      {k:"A", en:"9:00 a.m.", zh:"上午 9:00"},
      {k:"B", en:"10:30 a.m.", zh:"上午 10:30"},
      {k:"C", en:"1:00 p.m.", zh:"下午 1:00"},
      {k:"D", en:"2:30 p.m.", zh:"下午 2:30"}
    ]},
    68: { part:3, ans:"B", set:"68-70", graphic:"g68.png", stem:{en:"What does the man say he is prioritizing?", zh:"男子說他在優先考量什麼？"}, opts:[
      {k:"A", en:"Making monthly payments", zh:"按月還款"},
      {k:"B", en:"Limiting total costs", zh:"控制總費用"},
      {k:"C", en:"Reducing an interest rate", zh:"降低利率"},
      {k:"D", en:"Opening a new account", zh:"開立新帳戶"}
    ]},
    69: { part:3, ans:"D", set:"68-70", graphic:"g68.png", stem:{en:"Look at the graphic. Which mortgage type does the woman recommend?", zh:"看圖表。女子推薦哪種貸款類型？"}, opts:[
      {k:"A", en:"Standard", zh:"標準型"},
      {k:"B", en:"Elevated", zh:"高級型"},
      {k:"C", en:"Accelerated", zh:"加速型"},
      {k:"D", en:"Swift", zh:"迅速型"}
    ]},
    70: { part:3, ans:"C", set:"68-70", graphic:"g68.png", stem:{en:"What does the woman offer to do?", zh:"女子提出要做什麼？"}, opts:[
      {k:"A", en:"Print out a document", zh:"列印文件"},
      {k:"B", en:"Provide a reference", zh:"提供參考資料"},
      {k:"C", en:"Determine an amount", zh:"確定金額"},
      {k:"D", en:"Modify a plan", zh:"修改計畫"}
    ]},

    // ===== Part 4：獨白（Q71–100），set=共用音檔的三題組，graphic=圖表題 =====
    71: { part:4, ans:"A", set:"71-73", stem:{en:"Where most likely is the announcement being made?", zh:"這個廣播最可能在哪裡播出？"}, opts:[
      {k:"A", en:"At a sports stadium", zh:"在運動場"},
      {k:"B", en:"At a fitness center", zh:"在健身中心"},
      {k:"C", en:"At a school auditorium", zh:"在學校禮堂"},
      {k:"D", en:"At a medical office", zh:"在診所"}
    ]},
    72: { part:4, ans:"C", set:"71-73", stem:{en:"According to the speaker, what caused a delay?", zh:"根據廣播者所說，是什麼造成了延誤？"}, opts:[
      {k:"A", en:"A technical malfunction", zh:"技術故障"},
      {k:"B", en:"Limited parking", zh:"停車位不足"},
      {k:"C", en:"A team's late arrival", zh:"球隊抵達晚了"},
      {k:"D", en:"An award ceremony", zh:"頒獎典禮"}
    ]},
    73: { part:4, ans:"B", set:"71-73", stem:{en:"What does the speaker say will happen after the game?", zh:"廣播者說比賽後將發生什麼事？"}, opts:[
      {k:"A", en:"Autographs will be signed.", zh:"將有球員簽名活動。"},
      {k:"B", en:"A coach will be honored.", zh:"教練將受到表彰。"},
      {k:"C", en:"The team will celebrate its anniversary.", zh:"球隊將慶祝週年紀念。"},
      {k:"D", en:"A training session will be held.", zh:"將舉行一次訓練。"}
    ]},
    74: { part:4, ans:"A", set:"74-76", stem:{en:"What type of business is being advertised?", zh:"廣告宣傳的是哪種類型的企業？"}, opts:[
      {k:"A", en:"An interior decorating service", zh:"室內裝潢服務"},
      {k:"B", en:"An insurance company", zh:"保險公司"},
      {k:"C", en:"A household cleaning service", zh:"家庭清潔服務"},
      {k:"D", en:"A real estate agency", zh:"房地產公司"}
    ]},
    75: { part:4, ans:"D", set:"74-76", stem:{en:"How is Niles and Kelly different from its competitors?", zh:"Niles and Kelly 與競爭對手有何不同？"}, opts:[
      {k:"A", en:"It has a satisfaction guarantee.", zh:"它提供滿意保證。"},
      {k:"B", en:"It has a mobile application.", zh:"它有行動應用程式。"},
      {k:"C", en:"It provides delivery service.", zh:"它提供送貨服務。"},
      {k:"D", en:"It offers free initial consultations.", zh:"它提供免費初次諮詢。"}
    ]},
    76: { part:4, ans:"C", set:"74-76", stem:{en:"What is available for the rest of the month?", zh:"本月剩餘時間有什麼優惠？"}, opts:[
      {k:"A", en:"Express shipping", zh:"快速送貨"},
      {k:"B", en:"Free membership", zh:"免費會員資格"},
      {k:"C", en:"A promotional discount", zh:"促銷折扣"},
      {k:"D", en:"An extended warranty", zh:"延長保固"}
    ]},
    77: { part:4, ans:"B", set:"77-79", stem:{en:"Who most likely are the listeners?", zh:"聽眾最可能是哪些人？"}, opts:[
      {k:"A", en:"Reporters", zh:"記者"},
      {k:"B", en:"Writers", zh:"作家"},
      {k:"C", en:"Musicians", zh:"音樂家"},
      {k:"D", en:"Teachers", zh:"教師"}
    ]},
    78: { part:4, ans:"A", set:"77-79", stem:{en:"According to the speaker, what do the catalogs contain?", zh:"根據廣播者所說，型錄包含什麼內容？"}, opts:[
      {k:"A", en:"Upcoming publications", zh:"即將出版的刊物"},
      {k:"B", en:"Lists of famous designers", zh:"知名設計師名單"},
      {k:"C", en:"Job announcements", zh:"職缺公告"},
      {k:"D", en:"Recent workshops", zh:"近期工作坊"}
    ]},
    79: { part:4, ans:"C", set:"77-79", stem:{en:"What can the listeners do at Edwards Hall?", zh:"聽眾可以在 Edwards Hall 做什麼？"}, opts:[
      {k:"A", en:"Borrow a book", zh:"借書"},
      {k:"B", en:"Take a class", zh:"上課"},
      {k:"C", en:"Listen to a story", zh:"聆聽故事"},
      {k:"D", en:"Watch a documentary", zh:"觀看紀錄片"}
    ]},
    80: { part:4, ans:"D", set:"80-82", stem:{en:"What is the main topic of the news report?", zh:"這則新聞報導的主題是什麼？"}, opts:[
      {k:"A", en:"A community festival", zh:"社區節慶活動"},
      {k:"B", en:"A street closure", zh:"道路封閉"},
      {k:"C", en:"An election result", zh:"選舉結果"},
      {k:"D", en:"A new device", zh:"新裝置"}
    ]},
    81: { part:4, ans:"A", set:"80-82", stem:{en:"According to the speaker, what are the riders required to do?", zh:"根據廣播者所說，騎乘者必須做什麼？"}, opts:[
      {k:"A", en:"Wear safety equipment", zh:"穿戴安全裝備"},
      {k:"B", en:"Stay on city sidewalks", zh:"待在城市人行道上"},
      {k:"C", en:"Avoid driving after dark", zh:"避免在天黑後騎乘"},
      {k:"D", en:"Register their devices", zh:"登記他們的裝置"}
    ]},
    82: { part:4, ans:"D", set:"80-82", stem:{en:"What does the speaker mean when he says, \"there are still long lines outside stores selling the product\"?", zh:"廣播者說「販售產品的商店外仍然大排長龍」是什麼意思？"}, opts:[
      {k:"A", en:"Buyers demanded a refund.", zh:"買家要求退款。"},
      {k:"B", en:"Some instructions were not followed.", zh:"一些指示沒有被遵守。"},
      {k:"C", en:"An event was canceled.", zh:"活動被取消了。"},
      {k:"D", en:"The restrictions did not affect sales.", zh:"限制措施沒有影響銷售。"}
    ]},
    83: { part:4, ans:"C", set:"83-85", stem:{en:"Where will the listeners most likely go first?", zh:"聽眾最可能先去哪裡？"}, opts:[
      {k:"A", en:"To the ticket office", zh:"去售票處"},
      {k:"B", en:"To the visitor's center", zh:"去遊客中心"},
      {k:"C", en:"To the photography hall", zh:"去攝影展覽廳"},
      {k:"D", en:"To the building lobby", zh:"去大廳"}
    ]},
    84: { part:4, ans:"B", set:"83-85", stem:{en:"Who most likely is Gonzalo Ruiz?", zh:"Gonzalo Ruiz 最可能是誰？"}, opts:[
      {k:"A", en:"A caterer", zh:"餐飲供應商"},
      {k:"B", en:"A sculptor", zh:"雕塑家"},
      {k:"C", en:"A curator", zh:"策展人"},
      {k:"D", en:"A guide", zh:"導覽員"}
    ]},
    85: { part:4, ans:"A", set:"83-85", stem:{en:"According to the speaker, what will the listeners do at 10:30 a.m.?", zh:"根據廣播者所說，聽眾在上午 10:30 將做什麼？"}, opts:[
      {k:"A", en:"Take a break", zh:"休息"},
      {k:"B", en:"See some pictures", zh:"觀看一些畫作"},
      {k:"C", en:"Form a team", zh:"組成一個團隊"},
      {k:"D", en:"Meet an artist", zh:"與藝術家見面"}
    ]},
    86: { part:4, ans:"D", set:"86-88", stem:{en:"Why was Jenna MacArthur hired?", zh:"Jenna MacArthur 為何被聘用？"}, opts:[
      {k:"A", en:"To serve as an assistant", zh:"擔任助理"},
      {k:"B", en:"To counsel students", zh:"輔導學生"},
      {k:"C", en:"To promote a college", zh:"推廣學院"},
      {k:"D", en:"To lead a department", zh:"領導部門"}
    ]},
    87: { part:4, ans:"C", set:"86-88", stem:{en:"What will Ms. MacArthur speak about?", zh:"MacArthur 女士將談論什麼？"}, opts:[
      {k:"A", en:"A popular book", zh:"一本暢銷書"},
      {k:"B", en:"Some exam details", zh:"一些考試細節"},
      {k:"C", en:"Some planned changes", zh:"一些計劃中的變動"},
      {k:"D", en:"An administrative duty", zh:"行政職責"}
    ]},
    88: { part:4, ans:"B", set:"86-88", stem:{en:"What does the speaker imply when he says, \"Mr. Dryson has a schedule for next week's workshop\"?", zh:"廣播者說「Dryson 先生已有下週工作坊的時間表」暗示什麼？"}, opts:[
      {k:"A", en:"There's a new research project starting.", zh:"有一個新研究計畫即將啟動。"},
      {k:"B", en:"There's more information to be shared.", zh:"還有更多資訊要分享。"},
      {k:"C", en:"A speech will be postponed.", zh:"一場演講將被延期。"},
      {k:"D", en:"Some volunteer speakers are needed.", zh:"需要一些志願演講者。"}
    ]},
    89: { part:4, ans:"C", set:"89-91", stem:{en:"Who most likely is the speaker?", zh:"廣播者最可能是誰？"}, opts:[
      {k:"A", en:"A building contractor", zh:"建築承包商"},
      {k:"B", en:"A gallery owner", zh:"藝廊老闆"},
      {k:"C", en:"An instructor", zh:"講師"},
      {k:"D", en:"An attorney", zh:"律師"}
    ]},
    90: { part:4, ans:"A", set:"89-91", stem:{en:"What can the listeners take home?", zh:"聽眾可以帶什麼回家？"}, opts:[
      {k:"A", en:"An artwork", zh:"一件藝術品"},
      {k:"B", en:"A brochure", zh:"一本冊子"},
      {k:"C", en:"A certificate", zh:"一張證書"},
      {k:"D", en:"A shipment", zh:"一批貨物"}
    ]},
    91: { part:4, ans:"D", set:"89-91", stem:{en:"What does the speaker remind the listeners to do?", zh:"廣播者提醒聽眾要做什麼？"}, opts:[
      {k:"A", en:"Use some tools carefully", zh:"小心使用工具"},
      {k:"B", en:"Purchase some souvenirs", zh:"購買紀念品"},
      {k:"C", en:"Rearrange some tables", zh:"重新排列桌子"},
      {k:"D", en:"Leave some items", zh:"留下一些物品"}
    ]},
    92: { part:4, ans:"D", set:"92-94", stem:{en:"Where does the speaker probably work?", zh:"廣播者可能在哪裡工作？"}, opts:[
      {k:"A", en:"At an appliance store", zh:"在家電店"},
      {k:"B", en:"At an auto repair shop", zh:"在汽車維修店"},
      {k:"C", en:"At a marketing firm", zh:"在行銷公司"},
      {k:"D", en:"At a car manufacturer", zh:"在汽車製造商"}
    ]},
    93: { part:4, ans:"C", set:"92-94", stem:{en:"Why does the speaker say, \"it seems there are too many new products on the market\"?", zh:"廣播者說「市場上似乎有太多新產品」的目的是什麼？"}, opts:[
      {k:"A", en:"To request a list of competitors", zh:"要求提供競爭對手名單"},
      {k:"B", en:"To suggest a product", zh:"推薦一個產品"},
      {k:"C", en:"To explain the low sales", zh:"解釋低迷的銷售額"},
      {k:"D", en:"To ask for feedback", zh:"要求回饋"}
    ]},
    94: { part:4, ans:"B", set:"92-94", stem:{en:"What is mentioned about Ms. Rice?", zh:"關於 Rice 女士，提到了什麼？"}, opts:[
      {k:"A", en:"She is pleased with a commercial.", zh:"她對廣告感到滿意。"},
      {k:"B", en:"She is returning to the office today.", zh:"她今天回辦公室。"},
      {k:"C", en:"She is satisfied with the trip.", zh:"她對此次旅行感到滿意。"},
      {k:"D", en:"She agrees with expanding a budget.", zh:"她同意擴大預算。"}
    ]},
    95: { part:4, ans:"D", set:"95-97", graphic:"g95.png", stem:{en:"What does the speaker like about the poster?", zh:"廣播者喜歡海報的哪個地方？"}, opts:[
      {k:"A", en:"The price", zh:"價格"},
      {k:"B", en:"The placement of text", zh:"文字排版"},
      {k:"C", en:"The color scheme", zh:"配色方案"},
      {k:"D", en:"The type of font", zh:"字體類型"}
    ]},
    96: { part:4, ans:"B", set:"95-97", graphic:"g95.png", stem:{en:"Look at the graphic. Which information should be changed?", zh:"看圖表。哪項資訊應該更改？"}, opts:[
      {k:"A", en:"Gleeful Tones", zh:"Gleeful Tones"},
      {k:"B", en:"Tenor Trio", zh:"Tenor Trio"},
      {k:"C", en:"The Martin Brothers", zh:"The Martin Brothers"},
      {k:"D", en:"Samuel Harris", zh:"Samuel Harris"}
    ]},
    97: { part:4, ans:"B", set:"95-97", graphic:"g95.png", stem:{en:"What does the speaker say she will do next week?", zh:"廣播者說她下週將做什麼？"}, opts:[
      {k:"A", en:"Perform in a concert", zh:"在音樂會演出"},
      {k:"B", en:"Get a confirmation", zh:"取得確認"},
      {k:"C", en:"Find a new sponsor", zh:"尋找新贊助商"},
      {k:"D", en:"Attend a festival", zh:"參加節慶活動"}
    ]},
    98: { part:4, ans:"A", set:"98-100", graphic:"g98.png", stem:{en:"According to the speaker, what will happen next year?", zh:"根據廣播者所說，明年將發生什麼事？"}, opts:[
      {k:"A", en:"A product will become available.", zh:"一款產品將上市。"},
      {k:"B", en:"The price of a device will be reduced.", zh:"裝置的價格將降低。"},
      {k:"C", en:"The name of a model will be announced.", zh:"一個型號的名稱將被公佈。"},
      {k:"D", en:"A customer survey will be conducted.", zh:"將進行顧客調查。"}
    ]},
    99: { part:4, ans:"D", set:"98-100", graphic:"g98.png", stem:{en:"Look at the graphic. Which feature will the listeners try to improve?", zh:"看圖表。聽眾將嘗試改善哪個功能？"}, opts:[
      {k:"A", en:"Processing speed", zh:"處理速度"},
      {k:"B", en:"Screen quality", zh:"螢幕品質"},
      {k:"C", en:"Camera quality", zh:"相機品質"},
      {k:"D", en:"Battery life", zh:"電池壽命"}
    ]},
    100: { part:4, ans:"B", set:"98-100", graphic:"g98.png", stem:{en:"What does the speaker ask the listeners to do?", zh:"廣播者要求聽眾做什麼？"}, opts:[
      {k:"A", en:"Visit a Web site", zh:"造訪一個網站"},
      {k:"B", en:"Prepare some suggestions", zh:"準備一些建議"},
      {k:"C", en:"Create a schedule", zh:"制定時程表"},
      {k:"D", en:"Hand in some paperwork", zh:"繳交文件"}
    ]}
  }
};
