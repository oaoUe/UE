// TEST 4 題庫資料（答案 + 選項英文/中譯）
// 來源：Part 1/2 選項=聽力詳解 doc p432–437；Part 3/4 題幹+選項=試題頁 doc p144–150；中譯多為自譯。
// 答案來源：答案卡 doc p272 TEST 4 欄目視轉錄 → build\test4_answers.json
// 資料模型：q[題號] = { part, ans, set?, graphic?, ask?{en,zh}, stem?{en,zh}, opts:[{k,en,zh}] }
// 全 100 題完成。
window.QUIZ = {
  test: 4,
  q: {
    // ===== Part 1：照片題（Q1–6） =====
    1: { part:1, ans:"B", opts:[
      {k:"A", en:"He is typing on a keyboard.", zh:"他正在用鍵盤打字。"},
      {k:"B", en:"A laptop has been opened.", zh:"一台筆記型電腦已被打開。"},
      {k:"C", en:"He is making a call.", zh:"他正在打電話。"},
      {k:"D", en:"Some notebooks are arranged on the table.", zh:"一些筆記本被擺放在桌上。"}
    ]},
    2: { part:1, ans:"A", opts:[
      {k:"A", en:"Some people are sitting next to a window.", zh:"一些人坐在窗戶旁邊。"},
      {k:"B", en:"One of the women is adjusting a clock.", zh:"其中一名女子正在調整時鐘。"},
      {k:"C", en:"Some people are listening to musicians.", zh:"一些人在聆聽音樂家演奏。"},
      {k:"D", en:"One of the women is leaving a restaurant.", zh:"其中一名女子正在離開餐廳。"}
    ]},
    3: { part:1, ans:"D", opts:[
      {k:"A", en:"A woman is cleaning a shelf.", zh:"女子正在清潔一個架子。"},
      {k:"B", en:"A woman is throwing away some trash.", zh:"女子正在丟棄一些垃圾。"},
      {k:"C", en:"A woman is leaning on a counter.", zh:"女子正倚靠著一個台面。"},
      {k:"D", en:"A woman is looking into a refrigerator.", zh:"女子正往冰箱裡看。"}
    ]},
    4: { part:1, ans:"A", opts:[
      {k:"A", en:"Crates have been stacked in a storeroom.", zh:"板條箱被堆放在倉庫裡。"},
      {k:"B", en:"A container is being filled in a market.", zh:"一個容器正在市場裡被裝滿。"},
      {k:"C", en:"Shelves are being built in a building.", zh:"架子正在建築物內被搭建。"},
      {k:"D", en:"A truck has been loaded in a warehouse.", zh:"一輛卡車已在倉庫中被裝載。"}
    ]},
    5: { part:1, ans:"B", opts:[
      {k:"A", en:"They are walking across a road.", zh:"他們正在穿越一條道路。"},
      {k:"B", en:"They are picking up some cardboard.", zh:"他們正在撿起一些紙板。"},
      {k:"C", en:"They are running in a field.", zh:"他們正在田野中奔跑。"},
      {k:"D", en:"They are putting up a tent.", zh:"他們正在搭建一頂帳篷。"}
    ]},
    6: { part:1, ans:"C", opts:[
      {k:"A", en:"She is lifting a glass bottle.", zh:"她正在舉起一個玻璃瓶。"},
      {k:"B", en:"A cup is being washed.", zh:"一個杯子正在被洗滌。"},
      {k:"C", en:"A microscope is being used.", zh:"有人正在使用顯微鏡。"},
      {k:"D", en:"She is wearing safety goggles.", zh:"她正戴著護目鏡。"}
    ]},

    // ===== Part 2：應答問題（Q7–31，純音檔，A–C）=====
    7: { part:2, ans:"A", ask:{en:"Where should we meet up after work?", zh:"我們下班後應該在哪裡碰面？"}, opts:[
      {k:"A", en:"Wait for me at Frye Street Station.", zh:"在 Frye Street 車站等我。"},
      {k:"B", en:"Both meetings went well.", zh:"兩次會議都進行得很順利。"},
      {k:"C", en:"I work at a department store.", zh:"我在一家百貨公司工作。"}
    ]},
    8: { part:2, ans:"C", ask:{en:"Do I need a receipt to return goods?", zh:"我需要收據才能退貨嗎？"}, opts:[
      {k:"A", en:"No, I need to buy some.", zh:"不，我需要買一些。"},
      {k:"B", en:"I often shop there.", zh:"我經常在那裡購物。"},
      {k:"C", en:"That's not necessary.", zh:"不需要。"}
    ]},
    9: { part:2, ans:"B", ask:{en:"Dr. Horton has to cancel your appointment due to an emergency.", zh:"Horton 醫生因緊急情況必須取消您的預約。"}, opts:[
      {k:"A", en:"Traffic delays are expected to be bad.", zh:"交通延誤預計將會很嚴重。"},
      {k:"B", en:"I hope the situation isn't too serious.", zh:"我希望情況不是太嚴重。"},
      {k:"C", en:"Go to the medical clinic across the street.", zh:"去馬路對面的診所。"}
    ]},
    10: { part:2, ans:"A", ask:{en:"You didn't have any issues during your trip to Paris, right?", zh:"您在巴黎的旅途中沒有遇到任何問題，對嗎？"}, opts:[
      {k:"A", en:"It went very smoothly.", zh:"一切進行得非常順利。"},
      {k:"B", en:"No, they will leave tomorrow.", zh:"不，他們明天將離開。"},
      {k:"C", en:"Software problems are common with the phone.", zh:"軟體問題在手機中很常見。"}
    ]},
    11: { part:2, ans:"C", ask:{en:"Did the package get dropped off at our store?", zh:"包裹送到我們店裡了嗎？"}, opts:[
      {k:"A", en:"You can drop me off at home.", zh:"你可以讓我在家附近下車。"},
      {k:"B", en:"The shipping fee varies.", zh:"運費各有不同。"},
      {k:"C", en:"I'm not sure, actually.", zh:"我不確定，老實說。"}
    ]},
    12: { part:2, ans:"B", ask:{en:"Is the gym open this holiday weekend?", zh:"健身房這個假日週末有開放嗎？"}, opts:[
      {k:"A", en:"One of the trainers.", zh:"教練之一。"},
      {k:"B", en:"Only on Sunday.", zh:"只有星期日。"},
      {k:"C", en:"Spending time with my family.", zh:"和我的家人共度時光。"}
    ]},
    13: { part:2, ans:"C", ask:{en:"Why was our meeting delayed by an hour?", zh:"為什麼我們的會議延誤了一個小時？"}, opts:[
      {k:"A", en:"I attend all conferences on time.", zh:"我每次開會都準時出席。"},
      {k:"B", en:"After the deadline was established.", zh:"在截止日期確定之後。"},
      {k:"C", en:"A conference room wasn't available.", zh:"會議室沒有空。"}
    ]},
    14: { part:2, ans:"A", ask:{en:"Who asked to have cream with their coffee?", zh:"是誰要求在咖啡裡加奶油的？"}, opts:[
      {k:"A", en:"It was the man over there.", zh:"是那邊的男士。"},
      {k:"B", en:"The tea will be ready shortly.", zh:"茶馬上就準備好了。"},
      {k:"C", en:"Yes, I can get some for you.", zh:"好的，我可以去拿一些。"}
    ]},
    15: { part:2, ans:"B", ask:{en:"Are the board members going to make a decision today or tomorrow?", zh:"董事會成員今天還是明天要做決定？"}, opts:[
      {k:"A", en:"It rained heavily yesterday as well.", zh:"昨天也下了很大的雨。"},
      {k:"B", en:"This afternoon, if possible.", zh:"如果可以的話，今天下午。"},
      {k:"C", en:"My membership has expired.", zh:"我的會員資格已到期。"}
    ]},
    16: { part:2, ans:"C", ask:{en:"How can we improve the evaluation process?", zh:"我們如何改善評估流程？"}, opts:[
      {k:"A", en:"Isn't it possible to upgrade those passengers?", zh:"升級那些旅客不是不可能的嗎？"},
      {k:"B", en:"Your presentation was very interesting.", zh:"您的簡報非常有趣。"},
      {k:"C", en:"Let's do them more often.", zh:"我們更頻繁地進行吧。"}
    ]},
    17: { part:2, ans:"C", ask:{en:"Do you want to open your bakery?", zh:"你想開設你的烘焙坊嗎？"}, opts:[
      {k:"A", en:"Yes, I'd like to go soon.", zh:"是的，我很快就想去。"},
      {k:"B", en:"We offer pastries and bread.", zh:"我們提供糕點和麵包。"},
      {k:"C", en:"It will be in San Alito.", zh:"它將會在 San Alito。"}
    ]},
    18: { part:2, ans:"B", ask:{en:"You haven't approved the budget increase yet, have you?", zh:"您還沒有批准預算增加，對嗎？"}, opts:[
      {k:"A", en:"The stock price has increased.", zh:"股價已上漲了。"},
      {k:"B", en:"The director will make the final decision.", zh:"主管將做最終決定。"},
      {k:"C", en:"Our fund-raiser was a great success.", zh:"我們的募款活動非常成功。"}
    ]},
    19: { part:2, ans:"A", ask:{en:"Are you going to buy a new computer?", zh:"你打算買一台新電腦嗎？"}, opts:[
      {k:"A", en:"No. My current one is just fine.", zh:"不，我現有的電腦就夠好了。"},
      {k:"B", en:"I installed the software application.", zh:"我安裝了軟體應用程式。"},
      {k:"C", en:"You can pay with credit card.", zh:"您可以用信用卡付款。"}
    ]},
    20: { part:2, ans:"C", ask:{en:"Who came up with our company's new slogan?", zh:"是誰想出了我們公司的新口號？"}, opts:[
      {k:"A", en:"I will come down from the third floor.", zh:"我會從三樓下來。"},
      {k:"B", en:"It was very effective.", zh:"效果非常好。"},
      {k:"C", en:"I believe Hyurae suggested it.", zh:"我相信是 Hyurae 建議的。"}
    ]},
    21: { part:2, ans:"B", ask:{en:"Did many people attend the product launch?", zh:"很多人參加了產品發布會嗎？"}, opts:[
      {k:"A", en:"It was released on March 15.", zh:"它是在 3 月 15 日發布的。"},
      {k:"B", en:"The CEO was disappointed with the turnout.", zh:"執行長對出席人數感到失望。"},
      {k:"C", en:"It includes many exciting features.", zh:"它包含許多令人興奮的功能。"}
    ]},
    22: { part:2, ans:"A", ask:{en:"When would you like to arrange an appointment with Mr. Jones?", zh:"您想什麼時候與 Jones 先生安排約談？"}, opts:[
      {k:"A", en:"I'm free on July 12.", zh:"我 7 月 12 日有空。"},
      {k:"B", en:"That time will be convenient.", zh:"那個時間會很方便。"},
      {k:"C", en:"Holston Community Center.", zh:"Holston 社區中心。"}
    ]},
    23: { part:2, ans:"C", ask:{en:"Do you repair electronic devices at this store?", zh:"這家店有修理電子設備嗎？"}, opts:[
      {k:"A", en:"Our latest model is very popular.", zh:"我們最新的型號非常受歡迎。"},
      {k:"B", en:"The store is open until 8 p.m.", zh:"這家店一直開到晚上 8 點。"},
      {k:"C", en:"You should go to our branch on Elm Street.", zh:"您應該去我們在 Elm Street 的分店。"}
    ]},
    24: { part:2, ans:"A", ask:{en:"Can I renew my apartment lease for another year?", zh:"我可以再續租公寓一年嗎？"}, opts:[
      {k:"A", en:"Yes, but the rent will go up slightly.", zh:"可以，但租金會稍微上漲。"},
      {k:"B", en:"A spare bedroom would be nice.", zh:"一間備用臥室會很好。"},
      {k:"C", en:"The album was released in April.", zh:"這張專輯是在四月發行的。"}
    ]},
    25: { part:2, ans:"B", ask:{en:"Which event are we catering on Wednesday evening?", zh:"我們星期三晚上要替哪個活動提供餐飲服務？"}, opts:[
      {k:"A", en:"The people will arrive late.", zh:"賓客將晚點到達。"},
      {k:"B", en:"Gold Industries' year-end party.", zh:"Gold Industries 的年終派對。"},
      {k:"C", en:"More plates are needed.", zh:"需要更多的盤子。"}
    ]},
    26: { part:2, ans:"A", ask:{en:"Why did Ken leave the delivery van outside the post office?", zh:"為何 Ken 把貨運車停在郵局外面？"}, opts:[
      {k:"A", en:"The parking lot is completely full.", zh:"停車場已經滿了。"},
      {k:"B", en:"The mail is delivered every day.", zh:"郵件是每天遞送的。"},
      {k:"C", en:"He left it there at about noon.", zh:"他大約在正午時把車停在那裡。"}
    ]},
    27: { part:2, ans:"C", ask:{en:"An expert is coming in tomorrow to discuss stress management techniques.", zh:"明天有一位專家來討論壓力管理技巧。"}, opts:[
      {k:"A", en:"Both consultants are able to review them.", zh:"兩位顧問都能夠審查它們。"},
      {k:"B", en:"An announcement will be made next week.", zh:"下週將發布公告。"},
      {k:"C", en:"I hope our employees find that helpful.", zh:"我希望我們的員工覺得那有幫助。"}
    ]},
    28: { part:2, ans:"B", ask:{en:"The EXS smartphone is going to be recalled, isn't it?", zh:"EXS 智慧型手機會被召回，不是嗎？"}, opts:[
      {k:"A", en:"Yes, we're all attending.", zh:"是的，我們都會參加。"},
      {k:"B", en:"It seems so.", zh:"好像是這樣。"},
      {k:"C", en:"It has a very big screen.", zh:"它有一個非常大的螢幕。"}
    ]},
    29: { part:2, ans:"B", ask:{en:"Does this box need to be thrown away, or should I keep it here?", zh:"這個箱子需要丟掉，還是應該放在這裡保管？"}, opts:[
      {k:"A", en:"We should definitely take the bus.", zh:"我們一定要搭公車。"},
      {k:"B", en:"I'm going to use it.", zh:"我之後要使用它。"},
      {k:"C", en:"In the lost and found container.", zh:"在失物招領處。"}
    ]},
    30: { part:2, ans:"C", ask:{en:"Your insurance expires at the end of April.", zh:"您的保險將於 4 月底到期。"}, opts:[
      {k:"A", en:"Check the juice's expiration date.", zh:"請檢查果汁的有效日期。"},
      {k:"B", en:"The drive will take 15 minutes.", zh:"車程需要 15 分鐘。"},
      {k:"C", en:"Can I just extend it now?", zh:"我可以現在就延長嗎？"}
    ]},
    31: { part:2, ans:"A", ask:{en:"How will the company celebrate its 25th anniversary?", zh:"公司將如何慶祝 25 週年紀念日？"}, opts:[
      {k:"A", en:"Several options are being considered.", zh:"正在考慮幾個方案。"},
      {k:"B", en:"I received an invitation to her party.", zh:"我收到了她的派對邀請。"},
      {k:"C", en:"I have worked here for 20 years.", zh:"我在這裡工作了 20 年。"}
    ]},

    // ===== Part 3：對話（Q32–70），set=共用音檔的三題組，graphic=圖表題 =====
    32: { part:3, ans:"C", set:"32-34", stem:{en:"Where do the speakers most likely work?", zh:"說話者最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a restaurant", zh:"在餐廳"},
      {k:"B", en:"At a shipping firm", zh:"在航運公司"},
      {k:"C", en:"At a law office", zh:"在律師事務所"},
      {k:"D", en:"At a retail outlet", zh:"在零售店"}
    ]},
    33: { part:3, ans:"B", set:"32-34", stem:{en:"What is the man concerned about?", zh:"男子在擔心什麼？"}, opts:[
      {k:"A", en:"He does not like some food.", zh:"他不喜歡某些食物。"},
      {k:"B", en:"He might not meet a deadline.", zh:"他可能趕不上截止日期。"},
      {k:"C", en:"He did not receive an assignment.", zh:"他沒有收到一項任務。"},
      {k:"D", en:"He missed a trade show.", zh:"他錯過了一個貿易展覽。"}
    ]},
    34: { part:3, ans:"D", set:"32-34", stem:{en:"What does the woman recommend?", zh:"女子推薦做什麼？"}, opts:[
      {k:"A", en:"Changing a deadline", zh:"更改截止日期"},
      {k:"B", en:"Making a reservation", zh:"進行預訂"},
      {k:"C", en:"Taking a break", zh:"休息"},
      {k:"D", en:"Getting some takeout", zh:"外帶餐點"}
    ]},
    35: { part:3, ans:"B", set:"35-37", stem:{en:"How did the woman learn about a promotion?", zh:"女子是如何得知這個晉升消息的？"}, opts:[
      {k:"A", en:"By speaking to a friend", zh:"透過與朋友交談"},
      {k:"B", en:"By going online", zh:"透過上網"},
      {k:"C", en:"By reading a newspaper", zh:"透過閱讀報紙"},
      {k:"D", en:"By listening to the radio", zh:"透過聽廣播"}
    ]},
    36: { part:3, ans:"A", set:"35-37", stem:{en:"Why does the man suggest testing a vehicle?", zh:"男子為何建議試駕車輛？"}, opts:[
      {k:"A", en:"To determine whether it functions properly", zh:"為了確認是否正常運作"},
      {k:"B", en:"To examine whether it is durable", zh:"為了檢查是否耐用"},
      {k:"C", en:"To confirm that it is the right size", zh:"為了確認尺寸是否合適"},
      {k:"D", en:"To make sure that it has a feature", zh:"為了確認它是否具備某功能"}
    ]},
    37: { part:3, ans:"A", set:"35-37", stem:{en:"What does the man ask the woman to do?", zh:"男子要求女子做什麼？"}, opts:[
      {k:"A", en:"Fill out a form", zh:"填寫表格"},
      {k:"B", en:"Check some price tags", zh:"查看一些價格標籤"},
      {k:"C", en:"Wait in a line", zh:"排隊等候"},
      {k:"D", en:"Provide a credit card", zh:"提供一張信用卡"}
    ]},
    38: { part:3, ans:"D", set:"38-40", stem:{en:"What problem does the man mention?", zh:"男子提到了什麼問題？"}, opts:[
      {k:"A", en:"A report has some errors.", zh:"一份報告有一些錯誤。"},
      {k:"B", en:"A lawyer is not in his office.", zh:"一位律師不在辦公室。"},
      {k:"C", en:"A proposal was rejected.", zh:"一個提案被拒絕了。"},
      {k:"D", en:"A key is not in its usual spot.", zh:"一把鑰匙不在它通常的地方。"}
    ]},
    39: { part:3, ans:"B", set:"38-40", stem:{en:"Why will the man contact Ms. Sheppard?", zh:"男子為何要聯繫 Sheppard 女士？"}, opts:[
      {k:"A", en:"To verify a date", zh:"為了確認日期"},
      {k:"B", en:"To request a document", zh:"為了要求一份文件"},
      {k:"C", en:"To organize a meeting", zh:"為了安排會議"},
      {k:"D", en:"To explain a new task", zh:"為了說明一項新任務"}
    ]},
    40: { part:3, ans:"C", set:"38-40", stem:{en:"What will the woman probably do next?", zh:"女子接下來可能會做什麼？"}, opts:[
      {k:"A", en:"Review some reports", zh:"審閱一些報告"},
      {k:"B", en:"Return to her desk", zh:"回到她的座位"},
      {k:"C", en:"Search for a maintenance worker", zh:"尋找維修人員"},
      {k:"D", en:"Print some more copies", zh:"列印更多份"}
    ]},
    41: { part:3, ans:"D", set:"41-43", stem:{en:"What does the man want to do?", zh:"男子想做什麼？"}, opts:[
      {k:"A", en:"Move out of a rental unit", zh:"搬出租賃的單位"},
      {k:"B", en:"Renovate a building", zh:"翻修建築物"},
      {k:"C", en:"Speak to a tenant", zh:"與房客交談"},
      {k:"D", en:"View an apartment", zh:"看公寓"}
    ]},
    42: { part:3, ans:"B", set:"41-43", stem:{en:"Why must the speakers wait?", zh:"說話者為何必須等待？"}, opts:[
      {k:"A", en:"A space is being prepared.", zh:"場地正在準備中。"},
      {k:"B", en:"More people will arrive.", zh:"更多人將到達。"},
      {k:"C", en:"A manager is attending to other clients.", zh:"一位主管正在招待其他客戶。"},
      {k:"D", en:"Some paperwork must be filled out.", zh:"一些文件必須填寫。"}
    ]},
    43: { part:3, ans:"D", set:"41-43", stem:{en:"What does the man plan to do?", zh:"男子計劃做什麼？"}, opts:[
      {k:"A", en:"Apply for a job", zh:"申請工作"},
      {k:"B", en:"Contact a property manager", zh:"聯繫物業管理員"},
      {k:"C", en:"Submit a payment", zh:"提交付款"},
      {k:"D", en:"Set up a home office", zh:"設立家庭辦公室"}
    ]},
    44: { part:3, ans:"A", set:"44-46", stem:{en:"What is the woman's problem?", zh:"女子遇到了什麼問題？"}, opts:[
      {k:"A", en:"A device has been damaged.", zh:"一個設備已經損壞了。"},
      {k:"B", en:"A promotion has ended.", zh:"一個促銷活動已結束。"},
      {k:"C", en:"A part is missing.", zh:"一個零件不見了。"},
      {k:"D", en:"A coupon is invalid.", zh:"一張優惠券無效。"}
    ]},
    45: { part:3, ans:"D", set:"44-46", stem:{en:"What does the woman mean when she says, \"I bought it almost two years ago\"?", zh:"女子說「我是將近兩年前買的」是什麼意思？"}, opts:[
      {k:"A", en:"A model is not available.", zh:"一個型號缺貨。"},
      {k:"B", en:"A repair should be made.", zh:"應該進行維修。"},
      {k:"C", en:"An item has lasted a long time.", zh:"一件商品已使用很長時間。"},
      {k:"D", en:"A guarantee has expired.", zh:"保固已到期。"}
    ]},
    46: { part:3, ans:"A", set:"44-46", stem:{en:"What does the woman want to do?", zh:"女子想做什麼？"}, opts:[
      {k:"A", en:"Look at a product", zh:"查看一個產品"},
      {k:"B", en:"Compare some prices", zh:"比較一些價格"},
      {k:"C", en:"Sign up for a service", zh:"辦理一項服務"},
      {k:"D", en:"Contact another branch", zh:"聯繫另一個分店"}
    ]},
    47: { part:3, ans:"C", set:"47-49", stem:{en:"According to the woman, who is Beatrice Chung?", zh:"根據女子所說，Beatrice Chung 是誰？"}, opts:[
      {k:"A", en:"A government worker", zh:"政府工作人員"},
      {k:"B", en:"A board member", zh:"董事會成員"},
      {k:"C", en:"A client", zh:"客戶"},
      {k:"D", en:"An advisor", zh:"顧問"}
    ]},
    48: { part:3, ans:"D", set:"47-49", stem:{en:"What problem does the woman mention?", zh:"女子提到了什麼問題？"}, opts:[
      {k:"A", en:"Some equipment needs to be repaired.", zh:"一些設備需要維修。"},
      {k:"B", en:"An appointment was canceled.", zh:"一個預約被取消了。"},
      {k:"C", en:"Some packages have not arrived yet.", zh:"一些包裹尚未到達。"},
      {k:"D", en:"An error was made.", zh:"出現了錯誤。"}
    ]},
    49: { part:3, ans:"A", set:"47-49", stem:{en:"What does the woman suggest?", zh:"女子建議做什麼？"}, opts:[
      {k:"A", en:"Returning to a workspace", zh:"回到工作場所"},
      {k:"B", en:"Postponing a presentation", zh:"推遲一個簡報"},
      {k:"C", en:"Referring to a calendar", zh:"參照日曆"},
      {k:"D", en:"Sending an e-mail", zh:"發送電子郵件"}
    ]},
    50: { part:3, ans:"B", set:"50-52", stem:{en:"Who is the woman?", zh:"女子是什麼人？"}, opts:[
      {k:"A", en:"A radio host", zh:"廣播節目主持人"},
      {k:"B", en:"An author", zh:"作家"},
      {k:"C", en:"A show producer", zh:"節目製作人"},
      {k:"D", en:"A journalist", zh:"記者"}
    ]},
    51: { part:3, ans:"A", set:"50-52", stem:{en:"Why does the man say, \"I'll e-mail you a list by tomorrow afternoon\"?", zh:"男子說「我明天下午之前會把清單寄給你」的目的是什麼？"}, opts:[
      {k:"A", en:"To accept a request", zh:"為了接受一個請求"},
      {k:"B", en:"To schedule some interviews", zh:"為了安排一些採訪"},
      {k:"C", en:"To answer survey questions", zh:"為了回答調查問題"},
      {k:"D", en:"To update an address", zh:"為了更新地址"}
    ]},
    52: { part:3, ans:"D", set:"50-52", stem:{en:"What will the woman probably do on Wednesday?", zh:"女子星期三可能會做什麼？"}, opts:[
      {k:"A", en:"Interview for a job", zh:"參加求職面試"},
      {k:"B", en:"Make an announcement", zh:"發布公告"},
      {k:"C", en:"Begin a team project", zh:"開始一個團隊項目"},
      {k:"D", en:"Attend a conference", zh:"出席一個研討會"}
    ]},
    53: { part:3, ans:"D", set:"53-55", stem:{en:"What are the speakers mainly discussing?", zh:"說話者主要在討論什麼？"}, opts:[
      {k:"A", en:"Office renovations", zh:"辦公室翻新"},
      {k:"B", en:"Technical support", zh:"技術支援"},
      {k:"C", en:"Registration fees", zh:"報名費"},
      {k:"D", en:"Educational courses", zh:"教育課程"}
    ]},
    54: { part:3, ans:"C", set:"53-55", stem:{en:"Who is Mr. Mossberg?", zh:"Mossberg 先生是什麼人？"}, opts:[
      {k:"A", en:"A technician", zh:"技術人員"},
      {k:"B", en:"A salesperson", zh:"業務員"},
      {k:"C", en:"An instructor", zh:"講師"},
      {k:"D", en:"An architect", zh:"建築師"}
    ]},
    55: { part:3, ans:"A", set:"53-55", stem:{en:"Why does Mr. Mossberg mention a Web site?", zh:"Mossberg 先生為何提到一個網站？"}, opts:[
      {k:"A", en:"To explain how to register for class", zh:"為了說明如何報名課程"},
      {k:"B", en:"To announce the changes to a schedule", zh:"為了公告時程變更"},
      {k:"C", en:"To notify the listeners that an online page is not working", zh:"為了通知聽眾一個線上頁面無法正常運作"},
      {k:"D", en:"To give the new location of a class", zh:"為了提供課程的新地點"}
    ]},
    56: { part:3, ans:"C", set:"56-58", stem:{en:"Which field do the speakers most likely work in?", zh:"說話者最可能在哪個領域工作？"}, opts:[
      {k:"A", en:"Marketing", zh:"行銷"},
      {k:"B", en:"Manufacturing", zh:"製造業"},
      {k:"C", en:"Fashion design", zh:"時裝設計"},
      {k:"D", en:"Construction", zh:"建築"}
    ]},
    57: { part:3, ans:"A", set:"56-58", stem:{en:"What does the woman like about a fall clothing line?", zh:"女子喜歡秋季服裝系列的哪個地方？"}, opts:[
      {k:"A", en:"Its colors", zh:"其顏色"},
      {k:"B", en:"Its style", zh:"其風格"},
      {k:"C", en:"Its price", zh:"其價格"},
      {k:"D", en:"Its fit", zh:"其合身度"}
    ]},
    58: { part:3, ans:"C", set:"56-58", stem:{en:"What will the speakers do next?", zh:"說話者接下來將做什麼？"}, opts:[
      {k:"A", en:"Move a product display", zh:"移動產品展示"},
      {k:"B", en:"Create some new designs", zh:"創作一些新設計"},
      {k:"C", en:"Show some drawings", zh:"展示一些草圖"},
      {k:"D", en:"Place some orders", zh:"下訂單"}
    ]},
    59: { part:3, ans:"B", set:"59-61", stem:{en:"What event are the speakers most likely planning?", zh:"說話者最可能在策劃什麼活動？"}, opts:[
      {k:"A", en:"A facility tour", zh:"設施參觀"},
      {k:"B", en:"An art exhibition", zh:"藝術展覽"},
      {k:"C", en:"A gallery relocation", zh:"藝廊搬遷"},
      {k:"D", en:"A photo shoot", zh:"攝影拍攝"}
    ]},
    60: { part:3, ans:"A", set:"59-61", stem:{en:"What does the woman agree to do?", zh:"女子同意做什麼？"}, opts:[
      {k:"A", en:"Meet with an artist", zh:"與藝術家見面"},
      {k:"B", en:"Accept some submissions", zh:"接受一些提交作品"},
      {k:"C", en:"Draft an agreement", zh:"起草一份協議"},
      {k:"D", en:"Check an address", zh:"確認地址"}
    ]},
    61: { part:3, ans:"B", set:"59-61", stem:{en:"What does the woman ask for?", zh:"女子要求什麼？"}, opts:[
      {k:"A", en:"Some price estimates", zh:"一些價格估算"},
      {k:"B", en:"Some contact information", zh:"一些聯絡方式"},
      {k:"C", en:"Some promotional materials", zh:"一些促銷材料"},
      {k:"D", en:"Some art supplies", zh:"一些藝術材料"}
    ]},
    62: { part:3, ans:"D", set:"62-64", graphic:"g62.png", stem:{en:"What did the woman do this afternoon?", zh:"女子今天下午做了什麼？"}, opts:[
      {k:"A", en:"She visited a theater.", zh:"她參觀了一個劇院。"},
      {k:"B", en:"She read an article.", zh:"她閱讀了一篇文章。"},
      {k:"C", en:"She listened to a voice mail.", zh:"她聆聽了一則語音留言。"},
      {k:"D", en:"She bought some tickets.", zh:"她購買了一些票。"}
    ]},
    63: { part:3, ans:"A", set:"62-64", graphic:"g62.png", stem:{en:"Look at the graphic. Which showtime will the speakers attend?", zh:"看圖表。說話者將參加哪個場次？"}, opts:[
      {k:"A", en:"6:30 p.m.", zh:"下午 6:30"},
      {k:"B", en:"7:00 p.m.", zh:"下午 7:00"},
      {k:"C", en:"7:30 p.m.", zh:"下午 7:30"},
      {k:"D", en:"8:00 p.m.", zh:"下午 8:00"}
    ]},
    64: { part:3, ans:"B", set:"62-64", graphic:"g62.png", stem:{en:"What does the man suggest?", zh:"男子建議做什麼？"}, opts:[
      {k:"A", en:"Taking a bus", zh:"搭公車"},
      {k:"B", en:"Sharing a car", zh:"共乘汽車"},
      {k:"C", en:"Getting some snacks", zh:"買一些零食"},
      {k:"D", en:"Watching some trailers", zh:"觀看一些預告片"}
    ]},
    65: { part:3, ans:"D", set:"65-67", graphic:"g65.png", stem:{en:"What does the woman ask the man to do?", zh:"女子要求男子做什麼？"}, opts:[
      {k:"A", en:"Put some items on hold", zh:"為一些物品保留"},
      {k:"B", en:"Renew a subscription", zh:"續訂"},
      {k:"C", en:"Update a library membership", zh:"更新圖書館會員資格"},
      {k:"D", en:"Make a recommendation", zh:"提出推薦"}
    ]},
    66: { part:3, ans:"A", set:"65-67", graphic:"g65.png", stem:{en:"Look at the graphic. Which row will the woman search in?", zh:"看圖表。女子將在哪一排搜尋？"}, opts:[
      {k:"A", en:"Row A", zh:"第 A 排（小說）"},
      {k:"B", en:"Row B", zh:"第 B 排（歷史）"},
      {k:"C", en:"Row C", zh:"第 C 排（科技）"},
      {k:"D", en:"Row D", zh:"第 D 排（教育）"}
    ]},
    67: { part:3, ans:"C", set:"65-67", graphic:"g65.png", stem:{en:"According to the man, what is available on a Web site?", zh:"根據男子所說，網站上有什麼？"}, opts:[
      {k:"A", en:"Reviews from members", zh:"會員評論"},
      {k:"B", en:"Coupons for shoppers", zh:"購物優惠券"},
      {k:"C", en:"Details about audiobooks", zh:"有聲書詳情"},
      {k:"D", en:"Information about policies", zh:"政策資訊"}
    ]},
    68: { part:3, ans:"C", set:"68-70", graphic:"g68.png", stem:{en:"Look at the graphic. Which item is not currently in stock?", zh:"看圖表。哪個商品目前缺貨？"}, opts:[
      {k:"A", en:"Handle S4", zh:"Handle S4"},
      {k:"B", en:"Nextus RS", zh:"Nextus RS"},
      {k:"C", en:"Modus XS", zh:"Modus XS"},
      {k:"D", en:"Benton 10", zh:"Benton 10"}
    ]},
    69: { part:3, ans:"B", set:"68-70", graphic:"g68.png", stem:{en:"What did the woman unpack?", zh:"女子拆開了什麼？"}, opts:[
      {k:"A", en:"Some computers", zh:"一些電腦"},
      {k:"B", en:"Some televisions", zh:"一些電視"},
      {k:"C", en:"Some gaming consoles", zh:"一些遊戲主機"},
      {k:"D", en:"Some cell phones", zh:"一些手機"}
    ]},
    70: { part:3, ans:"A", set:"68-70", graphic:"g68.png", stem:{en:"What is mentioned about a shipment?", zh:"關於貨物，提到了什麼？"}, opts:[
      {k:"A", en:"It is going to be delivered soon.", zh:"它即將被送達。"},
      {k:"B", en:"It was smaller than expected.", zh:"它比預期的小。"},
      {k:"C", en:"It had to be returned to a seller.", zh:"它必須退回賣家。"},
      {k:"D", en:"It was mailed out two days ago.", zh:"它兩天前已寄出。"}
    ]},

    // ===== Part 4：獨白（Q71–100），set=共用音檔的三題組，graphic=圖表題 =====
    71: { part:4, ans:"A", set:"71-73", stem:{en:"Who most likely is the speaker?", zh:"廣播者最可能是誰？"}, opts:[
      {k:"A", en:"A bank teller", zh:"銀行行員"},
      {k:"B", en:"A travel agent", zh:"旅行社人員"},
      {k:"C", en:"A human resources representative", zh:"人力資源部門代表"},
      {k:"D", en:"A project manager", zh:"專案經理"}
    ]},
    72: { part:4, ans:"C", set:"71-73", stem:{en:"What problem does the speaker mention?", zh:"廣播者提到了什麼問題？"}, opts:[
      {k:"A", en:"A credit card has expired.", zh:"一張信用卡已到期。"},
      {k:"B", en:"A bill has not been paid.", zh:"一張帳單未付款。"},
      {k:"C", en:"An application was rejected.", zh:"一份申請被拒絕了。"},
      {k:"D", en:"An account cannot be accessed.", zh:"一個帳戶無法存取。"}
    ]},
    73: { part:4, ans:"B", set:"71-73", stem:{en:"What does the speaker say the listener should do?", zh:"廣播者說聽眾應該做什麼？"}, opts:[
      {k:"A", en:"Report an issue", zh:"回報一個問題"},
      {k:"B", en:"Submit another document", zh:"提交另一份文件"},
      {k:"C", en:"Get a photo taken", zh:"去拍一張照片"},
      {k:"D", en:"Contact a homeowner", zh:"聯繫一位房主"}
    ]},
    74: { part:4, ans:"B", set:"74-76", stem:{en:"What is being advertised?", zh:"廣告宣傳的是什麼？"}, opts:[
      {k:"A", en:"A delivery company", zh:"一家快遞公司"},
      {k:"B", en:"A ride service", zh:"一個叫車服務"},
      {k:"C", en:"An airline", zh:"一家航空公司"},
      {k:"D", en:"A car manufacturer", zh:"一家汽車製造商"}
    ]},
    75: { part:4, ans:"A", set:"74-76", stem:{en:"What is offered for free?", zh:"提供什麼免費服務？"}, opts:[
      {k:"A", en:"Drinks", zh:"飲料"},
      {k:"B", en:"Pillows", zh:"枕頭"},
      {k:"C", en:"Umbrellas", zh:"雨傘"},
      {k:"D", en:"Headphones", zh:"耳機"}
    ]},
    76: { part:4, ans:"A", set:"74-76", stem:{en:"According to the speaker, how can the listeners receive a discount?", zh:"根據廣播者所說，聽眾如何獲得折扣？"}, opts:[
      {k:"A", en:"By using a mobile application", zh:"透過使用行動應用程式"},
      {k:"B", en:"By entering a promotional code", zh:"透過輸入促銷代碼"},
      {k:"C", en:"By giving feedback", zh:"透過提供意見回饋"},
      {k:"D", en:"By picking up a brochure", zh:"透過索取一份宣傳冊"}
    ]},
    77: { part:4, ans:"D", set:"77-79", stem:{en:"Where are the listeners?", zh:"聽眾在哪裡？"}, opts:[
      {k:"A", en:"At a town hall", zh:"在市政廳"},
      {k:"B", en:"At a vegetable farm", zh:"在蔬菜農場"},
      {k:"C", en:"At a shopping mall", zh:"在購物中心"},
      {k:"D", en:"At a historical museum", zh:"在歷史博物館"}
    ]},
    78: { part:4, ans:"A", set:"77-79", stem:{en:"What is featured in the special exhibit?", zh:"特別展覽的主題是什麼？"}, opts:[
      {k:"A", en:"Photographs", zh:"照片"},
      {k:"B", en:"Films", zh:"電影"},
      {k:"C", en:"Artifacts", zh:"文物"},
      {k:"D", en:"Garments", zh:"服裝"}
    ]},
    79: { part:4, ans:"C", set:"77-79", stem:{en:"What does the speaker mean when she says, \"there are no group tours scheduled today\"?", zh:"廣播者說「今天沒有安排任何團體導覽」是什麼意思？"}, opts:[
      {k:"A", en:"Some tickets are sold out.", zh:"一些門票已售完。"},
      {k:"B", en:"The listeners will be unable to attend an exhibit.", zh:"聽眾將無法參加展覽。"},
      {k:"C", en:"The listeners don't have to worry about a crowd.", zh:"聽眾不必擔心人潮擁擠。"},
      {k:"D", en:"A closing time will be changed.", zh:"閉館時間將會更改。"}
    ]},
    80: { part:4, ans:"C", set:"80-82", stem:{en:"What is the announcement mainly about?", zh:"這則公告主要是關於什麼？"}, opts:[
      {k:"A", en:"Monthly festivals", zh:"每月節慶活動"},
      {k:"B", en:"Remodeled bus stops", zh:"重新改建的公車站"},
      {k:"C", en:"Route changes", zh:"路線變更"},
      {k:"D", en:"Weather updates", zh:"天氣更新"}
    ]},
    81: { part:4, ans:"D", set:"80-82", stem:{en:"What can the listeners find on a Web site?", zh:"聽眾可以在網站上找到什麼？"}, opts:[
      {k:"A", en:"A company's reviews", zh:"公司評價"},
      {k:"B", en:"A sign-in sheet", zh:"簽到表"},
      {k:"C", en:"An event timetable", zh:"活動時間表"},
      {k:"D", en:"A revised schedule", zh:"修訂後的時刻表"}
    ]},
    82: { part:4, ans:"B", set:"80-82", stem:{en:"What are the listeners encouraged to do?", zh:"聽眾被鼓勵做什麼？"}, opts:[
      {k:"A", en:"Reserve a seat", zh:"預訂座位"},
      {k:"B", en:"Leave earlier than usual", zh:"比平常更早出發"},
      {k:"C", en:"Drive instead of taking a bus", zh:"開車而非搭公車"},
      {k:"D", en:"Take a map", zh:"拿一份地圖"}
    ]},
    83: { part:4, ans:"C", set:"83-85", stem:{en:"Where most likely do the listeners work?", zh:"聽眾最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a service center", zh:"在服務中心"},
      {k:"B", en:"At a jewelry store", zh:"在珠寶店"},
      {k:"C", en:"At a modeling agency", zh:"在模特兒公司"},
      {k:"D", en:"At a wedding venue", zh:"在婚禮場地"}
    ]},
    84: { part:4, ans:"B", set:"83-85", stem:{en:"What will Mr. Foley do?", zh:"Foley 先生將做什麼？"}, opts:[
      {k:"A", en:"Meet with some customers", zh:"與一些客戶會面"},
      {k:"B", en:"Inspect some goods", zh:"檢查一些商品"},
      {k:"C", en:"Discuss some products", zh:"討論一些產品"},
      {k:"D", en:"Process an online order", zh:"處理一份網路訂單"}
    ]},
    85: { part:4, ans:"A", set:"83-85", stem:{en:"Why does the speaker say, \"Most of you in the sales department are new\"?", zh:"廣播者說「你們銷售部門的大多數人都是新人」的目的是什麼？"}, opts:[
      {k:"A", en:"To emphasize the importance of the meeting", zh:"為了強調會議的重要性"},
      {k:"B", en:"To request a promotion", zh:"為了要求升職"},
      {k:"C", en:"To reschedule a training session", zh:"為了重新安排培訓"},
      {k:"D", en:"To suggest some improvements", zh:"為了建議一些改進"}
    ]},
    86: { part:4, ans:"B", set:"86-88", stem:{en:"Where most likely does the listener work?", zh:"聽眾最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a post office", zh:"在郵局"},
      {k:"B", en:"At a restaurant", zh:"在餐廳"},
      {k:"C", en:"At a hotel", zh:"在飯店"},
      {k:"D", en:"At a repair center", zh:"在維修中心"}
    ]},
    87: { part:4, ans:"C", set:"86-88", stem:{en:"What problem does the speaker mention?", zh:"廣播者提到了什麼問題？"}, opts:[
      {k:"A", en:"A product has been lost.", zh:"一個產品遺失了。"},
      {k:"B", en:"An item has been damaged.", zh:"一件物品損壞了。"},
      {k:"C", en:"A service has not started again.", zh:"一項服務尚未恢復。"},
      {k:"D", en:"A vacation plan was canceled.", zh:"一個度假計劃被取消了。"}
    ]},
    88: { part:4, ans:"D", set:"86-88", stem:{en:"What does the speaker say she has already done?", zh:"廣播者說她已經做了什麼？"}, opts:[
      {k:"A", en:"She signed a receipt.", zh:"她簽署了一份收據。"},
      {k:"B", en:"She sent a letter.", zh:"她寄出了一封信。"},
      {k:"C", en:"She visited an office.", zh:"她拜訪了一個辦公室。"},
      {k:"D", en:"She made an online inquiry.", zh:"她提交了一個線上詢問。"}
    ]},
    89: { part:4, ans:"D", set:"89-91", stem:{en:"What is the announcement mainly about?", zh:"這則公告主要是關於什麼？"}, opts:[
      {k:"A", en:"The date of a screening", zh:"放映的日期"},
      {k:"B", en:"The duration of a project", zh:"一個計畫的持續時間"},
      {k:"C", en:"Advice from executives", zh:"高層主管的建議"},
      {k:"D", en:"Reviews of a show", zh:"一個節目的評論"}
    ]},
    90: { part:4, ans:"B", set:"89-91", stem:{en:"What are the listeners asked to do?", zh:"聽眾被要求做什麼？"}, opts:[
      {k:"A", en:"Silence mobile phones", zh:"將手機靜音"},
      {k:"B", en:"Indicate a preference", zh:"表明一個偏好"},
      {k:"C", en:"Produce another series", zh:"製作另一個系列"},
      {k:"D", en:"Meet with a group of people", zh:"與一群人見面"}
    ]},
    91: { part:4, ans:"A", set:"89-91", stem:{en:"Why does the speaker say \"I'll be meeting the producer again next Tuesday\"?", zh:"廣播者說「我下週二將再次與製作人會面」的目的是什麼？"}, opts:[
      {k:"A", en:"To announce a deadline", zh:"為了宣布一個截止日期"},
      {k:"B", en:"To change a schedule", zh:"為了更改時程"},
      {k:"C", en:"To correct an error", zh:"為了更正錯誤"},
      {k:"D", en:"To make a complaint", zh:"為了提出投訴"}
    ]},
    92: { part:4, ans:"C", set:"92-94", stem:{en:"What is mentioned about Mr. Spark?", zh:"關於 Spark 先生，提到了什麼？"}, opts:[
      {k:"A", en:"He transferred to a new department.", zh:"他調到了新部門。"},
      {k:"B", en:"He retired from work.", zh:"他從工作中退休了。"},
      {k:"C", en:"He ordered more equipment.", zh:"他訂購了更多設備。"},
      {k:"D", en:"He was given a promotion.", zh:"他獲得了升職。"}
    ]},
    93: { part:4, ans:"C", set:"92-94", stem:{en:"According to the speaker, why will Mr. Spark visit local stations?", zh:"根據廣播者所說，Spark 先生為何要拜訪各地的站點？"}, opts:[
      {k:"A", en:"To give informational talks", zh:"為了進行資訊說明"},
      {k:"B", en:"To purchase office supplies", zh:"為了採購辦公用品"},
      {k:"C", en:"To carry out inspections", zh:"為了進行檢查"},
      {k:"D", en:"To train some workers", zh:"為了培訓一些員工"}
    ]},
    94: { part:4, ans:"D", set:"92-94", stem:{en:"What will the listeners do after a speech?", zh:"聽眾在演講結束後將做什麼？"}, opts:[
      {k:"A", en:"Watch a demonstration", zh:"觀看示範"},
      {k:"B", en:"Register for an event", zh:"報名一個活動"},
      {k:"C", en:"Fill out a survey", zh:"填寫一份調查"},
      {k:"D", en:"Join a gathering", zh:"參加一個聚會"}
    ]},
    95: { part:4, ans:"A", set:"95-97", graphic:"g95.png", stem:{en:"Who most likely are the listeners?", zh:"聽眾最可能是哪些人？"}, opts:[
      {k:"A", en:"Shoppers", zh:"購物者"},
      {k:"B", en:"Festival planners", zh:"節慶活動策劃者"},
      {k:"C", en:"News reporters", zh:"新聞記者"},
      {k:"D", en:"Sales personnel", zh:"銷售人員"}
    ]},
    96: { part:4, ans:"C", set:"95-97", graphic:"g95.png", stem:{en:"Look at the graphic. Which lot will be used for an event?", zh:"看圖表。哪個停車場將用於活動？"}, opts:[
      {k:"A", en:"A", zh:"A"},
      {k:"B", en:"B", zh:"B"},
      {k:"C", en:"C", zh:"C"},
      {k:"D", en:"D", zh:"D"}
    ]},
    97: { part:4, ans:"B", set:"95-97", graphic:"g95.png", stem:{en:"What are the listeners reminded to do?", zh:"聽眾被提醒要做什麼？"}, opts:[
      {k:"A", en:"Take public transportation", zh:"搭乘大眾交通工具"},
      {k:"B", en:"Purchase a ticket", zh:"購買一張票"},
      {k:"C", en:"Display a parking pass", zh:"展示停車證"},
      {k:"D", en:"Try a new menu item", zh:"嘗試一道新菜"}
    ]},
    98: { part:4, ans:"D", set:"98-100", graphic:"g98.png", stem:{en:"What will probably happen next week?", zh:"下週可能會發生什麼事？"}, opts:[
      {k:"A", en:"A museum will host a special guest.", zh:"一家博物館將接待一位特別來賓。"},
      {k:"B", en:"A business meeting will be held.", zh:"一個商務會議將召開。"},
      {k:"C", en:"An artist will present some works.", zh:"一位藝術家將展示一些作品。"},
      {k:"D", en:"A museum will be reorganized.", zh:"一家博物館將進行重新整頓。"}
    ]},
    99: { part:4, ans:"D", set:"98-100", graphic:"g98.png", stem:{en:"Look at the graphic. Which number is incorrect?", zh:"看圖表。哪個數字有誤？"}, opts:[
      {k:"A", en:"12", zh:"12"},
      {k:"B", en:"5", zh:"5"},
      {k:"C", en:"18", zh:"18"},
      {k:"D", en:"7", zh:"7"}
    ]},
    100: { part:4, ans:"B", set:"98-100", graphic:"g98.png", stem:{en:"What does the speaker suggest?", zh:"廣播者建議做什麼？"}, opts:[
      {k:"A", en:"Altering an artwork", zh:"修改一件藝術品"},
      {k:"B", en:"Requesting an express delivery", zh:"要求快速送貨"},
      {k:"C", en:"Forwarding an e-mail", zh:"轉發一封電子郵件"},
      {k:"D", en:"Checking a reduced budget", zh:"確認縮減後的預算"}
    ]}
  }
};
