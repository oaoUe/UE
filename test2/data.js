// TEST 2 題庫資料（答案 + 選項英文/中譯）
// 來源：Part 1 選項=聽力詳解 p353-354(doc index)；Part 3/4 題幹+選項=試題頁 p56-62；中譯多為自譯。
// 答案來源：Answer Key p270(doc index) → build\test2_answers.json（已程式+目視交叉核對）
// 資料模型：q[題號] = { part, ans, set?, graphic?, ask?{en,zh}, stem?{en,zh}, opts:[{k,en,zh}] }
// 全 100 題完成。Part 2 答案經 test2_answers.json 核對；少數誘答選項源自詳解小字，英文拼字可再複核。
window.QUIZ = {
  test: 2,
  q: {
    // ===== Part 1：照片題（Q1–6） =====
    1: { part:1, ans:"D", opts:[
      {k:"A", en:"He is trying on some clothes.", zh:"他正在試穿一些衣服。"},
      {k:"B", en:"He is opening a window.", zh:"他正在打開一扇窗戶。"},
      {k:"C", en:"He is reaching for a handrail.", zh:"他正伸手去拿欄杆。"},
      {k:"D", en:"He is walking up some stairs.", zh:"他正走上樓梯。"}
    ]},
    2: { part:1, ans:"C", opts:[
      {k:"A", en:"Books have fallen on the floor.", zh:"書本掉落在地板上。"},
      {k:"B", en:"A poster is being hung on a wall.", zh:"海報正被掛在牆上。"},
      {k:"C", en:"Flowers have been placed in a vase.", zh:"花被放置在花瓶裡。"},
      {k:"D", en:"Cups are stacked on a table.", zh:"杯子被疊放在桌上。"}
    ]},
    3: { part:1, ans:"B", opts:[
      {k:"A", en:"A cashier is putting on an apron.", zh:"收銀員正穿上圍裙。"},
      {k:"B", en:"A customer is handing an item to a cashier.", zh:"顧客正把商品遞給收銀員。"},
      {k:"C", en:"A customer is taking out a credit card.", zh:"顧客正拿出信用卡。"},
      {k:"D", en:"A cashier is arranging some beverages.", zh:"收銀員正在整理一些飲料。"}
    ]},
    4: { part:1, ans:"D", opts:[
      {k:"A", en:"A woman is waiting in a line.", zh:"女子正在排隊等候。"},
      {k:"B", en:"A woman is making a telephone call.", zh:"女子正在打電話。"},
      {k:"C", en:"A woman is standing on a train.", zh:"女子站在火車上。"},
      {k:"D", en:"A woman is using a touch screen.", zh:"女子正在使用觸控螢幕。"}
    ]},
    5: { part:1, ans:"A", opts:[
      {k:"A", en:"He is holding an umbrella.", zh:"他正拿著一把雨傘。"},
      {k:"B", en:"He is getting in a vehicle.", zh:"他正在上車。"},
      {k:"C", en:"He is buttoning his jacket.", zh:"他正在扣外套的鈕扣。"},
      {k:"D", en:"He is fixing his watch.", zh:"他正在修理他的手錶。"}
    ]},
    6: { part:1, ans:"B", opts:[
      {k:"A", en:"A worker is looking in some mirrors.", zh:"一名工人正照著鏡子。"},
      {k:"B", en:"A worker is hanging a clipboard.", zh:"一名工人正掛著板夾。"},
      {k:"C", en:"The sign is hanging next to a doorway.", zh:"招牌掛在門口旁邊。"},
      {k:"D", en:"Workers are painting a doorway.", zh:"工人們正在粉刷門口。"}
    ]},

    // ===== Part 2：應答問題（Q7–31，純音檔，A–C）=====
    // 來源：聽力詳解 doc p354–358。答案經 test2_answers.json 核對；少數誘答選項小字，英文拼字建議再複核。
    7: { part:2, ans:"A", ask:{en:"What do you need to buy at Harper Mall?", zh:"你需要在 Harper 購物中心買什麼？"}, opts:[
      {k:"A", en:"Some winter clothes.", zh:"一些冬季衣物。"},
      {k:"B", en:"No, we don't have any.", zh:"不，我們沒有任何庫存。"},
      {k:"C", en:"All sales are final.", zh:"所有特賣商品一律不退換。"}
    ]},
    8: { part:2, ans:"B", ask:{en:"How much does it cost to ride a bus from Rome?", zh:"從羅馬搭巴士要多少錢？"}, opts:[
      {k:"A", en:"I can give you a ride.", zh:"我可以載你一程。"},
      {k:"B", en:"The fare for a one-way trip is €2.", zh:"單程票價是 2 歐元。"},
      {k:"C", en:"Many people drive on weekends.", zh:"很多人在週末開車。"}
    ]},
    9: { part:2, ans:"C", ask:{en:"Will the leave policy go into effect this month?", zh:"這項休假政策這個月會生效嗎？"}, opts:[
      {k:"A", en:"The seminar was very effective.", zh:"研討會非常有效。"},
      {k:"B", en:"Yes. He left in July.", zh:"是的，他七月離職了。"},
      {k:"C", en:"Probably not.", zh:"大概不會。"}
    ]},
    10: { part:2, ans:"B", ask:{en:"Should we train the staff to use the new software?", zh:"我們該訓練員工使用新軟體嗎？"}, opts:[
      {k:"A", en:"A technician will install it.", zh:"一名技術人員會安裝它。"},
      {k:"B", en:"The training session is already scheduled.", zh:"訓練課程已經排定了。"},
      {k:"C", en:"Thanks for handing it out.", zh:"謝謝你發放出去。"}
    ]},
    11: { part:2, ans:"A", ask:{en:"Would you prefer to receive your phone bill by e-mail or a paper copy?", zh:"你想用電子郵件還是紙本收電話帳單？"}, opts:[
      {k:"A", en:"Either is fine with me.", zh:"兩種我都可以。"},
      {k:"B", en:"There is a phone in the lobby.", zh:"大廳裡有一支電話。"},
      {k:"C", en:"The package arrived yesterday.", zh:"包裹昨天到了。"}
    ]},
    12: { part:2, ans:"C", ask:{en:"Why did the server take your meal back?", zh:"服務生為何把你的餐點收回去？"}, opts:[
      {k:"A", en:"I'll treat you to dinner tonight.", zh:"我今晚請你吃晚餐。"},
      {k:"B", en:"Can I see a menu?", zh:"我可以看一下菜單嗎？"},
      {k:"C", en:"They gave me the wrong dish.", zh:"他們給錯我的菜了。"}
    ]},
    13: { part:2, ans:"A", ask:{en:"Is Carol leading today's yoga class, or Dan?", zh:"今天的瑜珈課是 Carol 帶還是 Dan 帶？"}, opts:[
      {k:"A", en:"It has been canceled, actually.", zh:"其實已經取消了。"},
      {k:"B", en:"He is a certified fitness coach.", zh:"他是有合格證照的健身教練。"},
      {k:"C", en:"I was just wondering about that.", zh:"我正想問這件事。"}
    ]},
    14: { part:2, ans:"C", ask:{en:"Most of our company's profits come from the Spanish market, right?", zh:"我們公司大部分的收益都來自西班牙市場，對吧？"}, opts:[
      {k:"A", en:"Daniel has never been there.", zh:"丹尼爾從沒去過那裡。"},
      {k:"B", en:"None of the class materials.", zh:"沒有任何課程資料。"},
      {k:"C", en:"That's correct.", zh:"沒錯。"}
    ]},
    15: { part:2, ans:"B", ask:{en:"Where do you want me to put these product displays?", zh:"你想要我把這些產品陳列放在哪裡？"}, opts:[
      {k:"A", en:"Before I leave today.", zh:"在我今天離開前。"},
      {k:"B", en:"The whole back wall.", zh:"整面後牆。"},
      {k:"C", en:"The store is very busy.", zh:"店裡很忙。"}
    ]},
    16: { part:2, ans:"C", ask:{en:"Where do you want me to put these display monitors?", zh:"你想要我把這些展示螢幕放在哪裡？"}, opts:[
      {k:"A", en:"Before I leave today.", zh:"在我今天離開前。"},
      {k:"B", en:"I trust your opinion.", zh:"我相信你的判斷。"},
      {k:"C", en:"The store is very busy.", zh:"店裡很忙。"}
    ]},
    17: { part:2, ans:"B", ask:{en:"Where was last year's conference held?", zh:"去年的會議在哪裡舉行？"}, opts:[
      {k:"A", en:"Have an interesting day.", zh:"祝你有有趣的一天。"},
      {k:"B", en:"The conference was held in Detroit.", zh:"會議在底特律舉行。"},
      {k:"C", en:"I haven't seen the schedule yet.", zh:"我還沒看過時間表。"}
    ]},
    18: { part:2, ans:"A", ask:{en:"When was the last time you cleaned the windows?", zh:"你上次清潔窗戶是什麼時候？"}, opts:[
      {k:"A", en:"Almost a month ago.", zh:"差不多一個月前。"},
      {k:"B", en:"The last time I visited.", zh:"我上次來訪的時候。"},
      {k:"C", en:"Here is the cleaning solution.", zh:"清潔劑在這裡。"}
    ]},
    19: { part:2, ans:"C", ask:{en:"Artists will set up booths for the festival.", zh:"藝術家將為這場節慶設置攤位。"}, opts:[
      {k:"A", en:"Chris set up the table.", zh:"Chris 擺好了桌子。"},
      {k:"B", en:"The organizer of the event.", zh:"活動的主辦單位。"},
      {k:"C", en:"I'm excited to see their work.", zh:"我很期待看到他們的作品。"}
    ]},
    20: { part:2, ans:"A", ask:{en:"Patrick Gibson will join us for the presentation, won't he?", zh:"Patrick Gibson 會加入我們的簡報，對吧？"}, opts:[
      {k:"A", en:"As far as I know.", zh:"據我所知會。"},
      {k:"B", en:"He hopes to attend.", zh:"他希望能出席。"},
      {k:"C", en:"A membership has benefits.", zh:"會員資格有好處。"}
    ]},
    21: { part:2, ans:"C", ask:{en:"Where is the information center located?", zh:"服務中心在哪裡？"}, opts:[
      {k:"A", en:"For an updated map.", zh:"為了一張更新的地圖。"},
      {k:"B", en:"The parking lot was full.", zh:"停車場滿了。"},
      {k:"C", en:"To the left of the South Entrance.", zh:"在南入口的左邊。"}
    ]},
    22: { part:2, ans:"B", ask:{en:"Would you look at this report?", zh:"你能看一下這份報告嗎？"}, opts:[
      {k:"A", en:"On the fifth of April.", zh:"在四月五日。"},
      {k:"B", en:"I'd be happy to.", zh:"我很樂意。"},
      {k:"C", en:"It's a comprehensive analysis.", zh:"這是一份完整的分析。"}
    ]},
    23: { part:2, ans:"C", ask:{en:"Haven't any letters arrived today?", zh:"今天沒有任何信件寄到嗎？"}, opts:[
      {k:"A", en:"Her arrival has been delayed.", zh:"她的抵達被延誤了。"},
      {k:"B", en:"Let me listen to it.", zh:"讓我聽聽看。"},
      {k:"C", en:"Two new employees.", zh:"兩位新員工。"}
    ]},
    24: { part:2, ans:"B", ask:{en:"Who took this photograph for your newspaper article?", zh:"誰為你的報紙報導拍了這張照片？"}, opts:[
      {k:"A", en:"I'll take some pictures for you.", zh:"我會幫你拍一些照片。"},
      {k:"B", en:"Matt Jenson.", zh:"Matt Jenson。"},
      {k:"C", en:"The Daily Business News is free.", zh:"每日商業新聞是免費的。"}
    ]},
    25: { part:2, ans:"A", ask:{en:"Has the new accountant announced his replacement?", zh:"新來的會計師宣布他的接替人選了嗎？"}, opts:[
      {k:"A", en:"Ms. Joyce was given the position.", zh:"Joyce 女士獲得了這個職位。"},
      {k:"B", en:"That part needs to be replaced.", zh:"那個部分需要更換。"},
      {k:"C", en:"Yes, a financial record.", zh:"是的，一筆財務紀錄。"}
    ]},
    26: { part:2, ans:"B", ask:{en:"Who is in charge of updating the company directory?", zh:"誰負責更新公司通訊錄？"}, opts:[
      {k:"A", en:"I passed him in the hallway.", zh:"我在走廊和他擦身而過。"},
      {k:"B", en:"That's the design department.", zh:"那是設計部門負責的。"},
      {k:"C", en:"It is updated every month.", zh:"它每個月更新一次。"}
    ]},
    27: { part:2, ans:"B", ask:{en:"Can I get a larger office when we move to the new building?", zh:"我們搬到新大樓時，我能換一間大一點的辦公室嗎？"}, opts:[
      {k:"A", en:"Sales have increased this month.", zh:"這個月銷售增加了。"},
      {k:"B", en:"I don't think that will be possible.", zh:"我想那恐怕不行。"},
      {k:"C", en:"It was cleaned recently.", zh:"它最近清理過了。"}
    ]},
    28: { part:2, ans:"A", ask:{en:"Plastic bottles must be placed in the black container from now on.", zh:"從現在起，塑膠瓶必須放進黑色容器裡。"}, opts:[
      {k:"A", en:"OK, I'll tell the staff right away.", zh:"好，我會馬上告訴員工。"},
      {k:"B", en:"This cabinet has extra space.", zh:"這個櫃子有多餘的空間。"},
      {k:"C", en:"Any of those places would be fun to visit.", zh:"那些地方任何一個都很值得去。"}
    ]},
    29: { part:2, ans:"C", ask:{en:"Do you recommend this e-reader, or is there a better model?", zh:"你推薦這款電子閱讀器，還是有更好的型號？"}, opts:[
      {k:"A", en:"I downloaded several books.", zh:"我下載了幾本書。"},
      {k:"B", en:"I tend to prefer online magazines.", zh:"我比較偏好線上雜誌。"},
      {k:"C", en:"It depends on the features you want.", zh:"那要看你想要的功能。"}
    ]},
    30: { part:2, ans:"C", ask:{en:"Polson Industries is closing this fall.", zh:"Polson 工業今年秋天要結束營業了。"}, opts:[
      {k:"A", en:"Only some of the time.", zh:"只是偶爾。"},
      {k:"B", en:"You can go if you want to.", zh:"你想去的話可以去。"},
      {k:"C", en:"Yes. I heard a news report about that.", zh:"是的，我聽到相關的新聞報導。"}
    ]},
    31: { part:2, ans:"A", ask:{en:"Why does your team need additional members?", zh:"你的團隊為何需要更多成員？"}, opts:[
      {k:"A", en:"Because we have a lot of work.", zh:"因為我們的工作量很大。"},
      {k:"B", en:"The personnel manager has the form.", zh:"人事經理有那份表格。"},
      {k:"C", en:"It doesn't charge any extra fees.", zh:"它不收任何額外費用。"}
    ]},

    // ===== Part 3：對話（Q32–70），set=共用音檔的三題組，graphic=圖表題 =====
    32: { part:3, ans:"D", set:"32-34", stem:{en:"Who most likely is the man?", zh:"男子最可能是誰？"}, opts:[
      {k:"A", en:"A government employee", zh:"政府員工"},
      {k:"B", en:"A personal assistant", zh:"私人助理"},
      {k:"C", en:"A salesperson", zh:"銷售員"},
      {k:"D", en:"A customer service representative", zh:"客服專員"}
    ]},
    33: { part:3, ans:"B", set:"32-34", stem:{en:"What information does the man ask for?", zh:"男子詢問什麼資訊？"}, opts:[
      {k:"A", en:"A vehicle model", zh:"車輛型號"},
      {k:"B", en:"An insurance number", zh:"保險號碼"},
      {k:"C", en:"A company name", zh:"公司名稱"},
      {k:"D", en:"A purchase date", zh:"購買日期"}
    ]},
    34: { part:3, ans:"C", set:"32-34", stem:{en:"What will the woman probably do next?", zh:"女子接下來最可能做什麼？"}, opts:[
      {k:"A", en:"Call another extension number", zh:"撥打另一個分機號碼"},
      {k:"B", en:"Write down some information", zh:"寫下一些資訊"},
      {k:"C", en:"Provide her location", zh:"提供她的所在位置"},
      {k:"D", en:"Take public transportation", zh:"搭乘大眾運輸"}
    ]},
    35: { part:3, ans:"A", set:"35-37", stem:{en:"Where most likely are the speakers?", zh:"說話者最可能在哪裡？"}, opts:[
      {k:"A", en:"At a supermarket", zh:"在超市"},
      {k:"B", en:"At a bakery", zh:"在麵包店"},
      {k:"C", en:"At a bank", zh:"在銀行"},
      {k:"D", en:"At a residence", zh:"在住宅"}
    ]},
    36: { part:3, ans:"A", set:"35-37", stem:{en:"Why does the man decline an offer?", zh:"男子為何婉拒提議？"}, opts:[
      {k:"A", en:"He has a different coupon.", zh:"他有另一張折價券。"},
      {k:"B", en:"He returned an item.", zh:"他退了一件商品。"},
      {k:"C", en:"He does not like the brand.", zh:"他不喜歡這個品牌。"},
      {k:"D", en:"He wants to try a new dish.", zh:"他想嘗試新菜色。"}
    ]},
    37: { part:3, ans:"C", set:"35-37", stem:{en:"What is required to get an additional discount?", zh:"要取得額外折扣需要什麼？"}, opts:[
      {k:"A", en:"A completed survey", zh:"完成的問卷"},
      {k:"B", en:"A membership card", zh:"會員卡"},
      {k:"C", en:"A shopping bag", zh:"購物袋"},
      {k:"D", en:"A sales receipt", zh:"銷售收據"}
    ]},
    38: { part:3, ans:"C", set:"38-40", stem:{en:"Which department does the man work in?", zh:"男子在哪個部門工作？"}, opts:[
      {k:"A", en:"Personnel", zh:"人事部"},
      {k:"B", en:"Sales", zh:"業務部"},
      {k:"C", en:"Accounting", zh:"會計部"},
      {k:"D", en:"Marketing", zh:"行銷部"}
    ]},
    39: { part:3, ans:"D", set:"38-40", stem:{en:"What does the woman mean when she says, \"our company president will be attending\"?", zh:"女子說「我們公司總裁會出席」是什麼意思？"}, opts:[
      {k:"A", en:"An executive should be contacted.", zh:"應該聯絡一位主管。"},
      {k:"B", en:"Some assistance will be given.", zh:"會提供一些協助。"},
      {k:"C", en:"A presentation has been delayed.", zh:"簡報已被延後。"},
      {k:"D", en:"An event is important.", zh:"一場活動很重要。"}
    ]},
    40: { part:3, ans:"C", set:"38-40", stem:{en:"What does the woman ask the man to do?", zh:"女子要男子做什麼？"}, opts:[
      {k:"A", en:"Cancel a meeting", zh:"取消一場會議"},
      {k:"B", en:"Call her back", zh:"回電給她"},
      {k:"C", en:"Go to another floor", zh:"前往另一個樓層"},
      {k:"D", en:"Submit some paperwork", zh:"繳交一些文件"}
    ]},
    41: { part:3, ans:"D", set:"41-43", stem:{en:"What did the woman already do?", zh:"女子已經做了什麼？"}, opts:[
      {k:"A", en:"She purchased a light.", zh:"她買了一盞燈。"},
      {k:"B", en:"She sent an e-mail.", zh:"她寄了一封電子郵件。"},
      {k:"C", en:"She received a delivery.", zh:"她收到一件送貨。"},
      {k:"D", en:"She viewed a Web site.", zh:"她看了一個網站。"}
    ]},
    42: { part:3, ans:"C", set:"41-43", stem:{en:"What does the store provide this month?", zh:"這家店本月提供什麼？"}, opts:[
      {k:"A", en:"An additional discount", zh:"額外折扣"},
      {k:"B", en:"Expedited shipping", zh:"加急運送"},
      {k:"C", en:"Free installation", zh:"免費安裝"},
      {k:"D", en:"A product sample", zh:"產品樣本"}
    ]},
    43: { part:3, ans:"B", set:"41-43", stem:{en:"What does the woman plan to do?", zh:"女子打算做什麼？"}, opts:[
      {k:"A", en:"Request a refund", zh:"要求退款"},
      {k:"B", en:"Compare some prices", zh:"比較一些價格"},
      {k:"C", en:"Post some reviews", zh:"張貼一些評論"},
      {k:"D", en:"Start a campaign", zh:"發起一項活動"}
    ]},
    44: { part:3, ans:"C", set:"44-46", stem:{en:"Where does the man work?", zh:"男子在哪裡工作？"}, opts:[
      {k:"A", en:"At a photography studio", zh:"在攝影工作室"},
      {k:"B", en:"At a department store", zh:"在百貨公司"},
      {k:"C", en:"At a dry cleaner", zh:"在乾洗店"},
      {k:"D", en:"At a fitness center", zh:"在健身中心"}
    ]},
    45: { part:3, ans:"B", set:"44-46", stem:{en:"What does the woman say about the shirt?", zh:"女子對於這件襯衫說了什麼？"}, opts:[
      {k:"A", en:"It has not been cleaned before.", zh:"它之前沒被清洗過。"},
      {k:"B", en:"It is needed for a company event.", zh:"公司活動需要用到它。"},
      {k:"C", en:"It was purchased online.", zh:"它是在網路上買的。"},
      {k:"D", en:"It is ready to be picked up.", zh:"它已經可以領取了。"}
    ]},
    46: { part:3, ans:"D", set:"44-46", stem:{en:"What will the woman do in 20 minutes?", zh:"女子在 20 分鐘後會做什麼？"}, opts:[
      {k:"A", en:"Join a party", zh:"參加派對"},
      {k:"B", en:"Create an account", zh:"建立帳戶"},
      {k:"C", en:"Place a call", zh:"打一通電話"},
      {k:"D", en:"Visit a shop", zh:"造訪一家店"}
    ]},
    47: { part:3, ans:"A", set:"47-49", stem:{en:"Where do the speakers most likely work?", zh:"說話者最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At an interior design firm", zh:"在室內設計公司"},
      {k:"B", en:"At a grocery store", zh:"在雜貨店"},
      {k:"C", en:"At an accommodation facility", zh:"在住宿設施"},
      {k:"D", en:"At a construction company", zh:"在建設公司"}
    ]},
    48: { part:3, ans:"D", set:"47-49", stem:{en:"Why does the man say, \"I have a list of suitable brands\"?", zh:"男子為何說「我有一份合適品牌的清單」？"}, opts:[
      {k:"A", en:"To accept a suggestion", zh:"為了接受建議"},
      {k:"B", en:"To make a request", zh:"為了提出要求"},
      {k:"C", en:"To approve a plan", zh:"為了核准計畫"},
      {k:"D", en:"To offer a solution", zh:"為了提供解決方案"}
    ]},
    49: { part:3, ans:"C", set:"47-49", stem:{en:"What will the woman do next?", zh:"女子接下來會做什麼？"}, opts:[
      {k:"A", en:"Contact a customer", zh:"聯絡一位客戶"},
      {k:"B", en:"Give a presentation", zh:"進行簡報"},
      {k:"C", en:"Attend a lunch event", zh:"參加午餐活動"},
      {k:"D", en:"Distribute some documents", zh:"分發一些文件"}
    ]},
    50: { part:3, ans:"B", set:"50-52", stem:{en:"Where is the conversation taking place?", zh:"對話發生在哪裡？"}, opts:[
      {k:"A", en:"In a factory", zh:"在工廠"},
      {k:"B", en:"In a warehouse", zh:"在倉庫"},
      {k:"C", en:"In a store", zh:"在商店"},
      {k:"D", en:"In a restaurant", zh:"在餐廳"}
    ]},
    51: { part:3, ans:"A", set:"50-52", stem:{en:"What are the men curious about?", zh:"男士們對什麼感到好奇？"}, opts:[
      {k:"A", en:"Benefits", zh:"福利"},
      {k:"B", en:"Wages", zh:"薪資"},
      {k:"C", en:"Safety", zh:"安全"},
      {k:"D", en:"Duties", zh:"職責"}
    ]},
    52: { part:3, ans:"C", set:"50-52", stem:{en:"According to the woman, what will be held later today?", zh:"根據女子所說，今天稍晚會舉行什麼？"}, opts:[
      {k:"A", en:"A facility tour", zh:"設施導覽"},
      {k:"B", en:"A government inspection", zh:"政府稽查"},
      {k:"C", en:"An employee meeting", zh:"員工會議"},
      {k:"D", en:"A job interview", zh:"工作面試"}
    ]},
    53: { part:3, ans:"A", set:"53-55", stem:{en:"Who most likely is the woman?", zh:"女子最可能是誰？"}, opts:[
      {k:"A", en:"A reporter", zh:"記者"},
      {k:"B", en:"A guard", zh:"警衛"},
      {k:"C", en:"An athlete", zh:"運動員"},
      {k:"D", en:"A coach", zh:"教練"}
    ]},
    54: { part:3, ans:"A", set:"53-55", stem:{en:"What will probably take place in the afternoon?", zh:"下午最可能會發生什麼？"}, opts:[
      {k:"A", en:"A sports game", zh:"一場運動比賽"},
      {k:"B", en:"A fund-raiser", zh:"一場募款活動"},
      {k:"C", en:"A sales presentation", zh:"一場銷售簡報"},
      {k:"D", en:"A photo shoot", zh:"一場攝影拍攝"}
    ]},
    55: { part:3, ans:"C", set:"53-55", stem:{en:"What does the man suggest that the woman should do?", zh:"男子建議女子應該做什麼？"}, opts:[
      {k:"A", en:"Leave an area", zh:"離開某個區域"},
      {k:"B", en:"Buy a ticket", zh:"買一張票"},
      {k:"C", en:"Wear a badge", zh:"配戴識別證"},
      {k:"D", en:"Check a bag", zh:"寄放一個包包"}
    ]},
    56: { part:3, ans:"A", set:"56-58", stem:{en:"What problem is mentioned?", zh:"提到了什麼問題？"}, opts:[
      {k:"A", en:"A deadline has been missed.", zh:"錯過了一個截止期限。"},
      {k:"B", en:"A property has been damaged.", zh:"一處房產受損了。"},
      {k:"C", en:"A device was not working properly.", zh:"一台裝置運作不正常。"},
      {k:"D", en:"A decision was not approved.", zh:"一項決定未獲核准。"}
    ]},
    57: { part:3, ans:"B", set:"56-58", stem:{en:"What will the woman do at 4 p.m.?", zh:"女子下午四點會做什麼？"}, opts:[
      {k:"A", en:"Show a property", zh:"帶看一處房產"},
      {k:"B", en:"Conduct a workshop", zh:"舉辦一場工作坊"},
      {k:"C", en:"Read some applications", zh:"審閱一些申請"},
      {k:"D", en:"Print some blueprints", zh:"列印一些藍圖"}
    ]},
    58: { part:3, ans:"A", set:"56-58", stem:{en:"What does Ted offer to do for the woman?", zh:"Ted 主動提議為女子做什麼？"}, opts:[
      {k:"A", en:"Move some furniture", zh:"搬動一些家具"},
      {k:"B", en:"Replace some equipment", zh:"更換一些設備"},
      {k:"C", en:"Reserve a meeting room", zh:"預訂一間會議室"},
      {k:"D", en:"Speak to a staff member", zh:"與一位員工談談"}
    ]},
    59: { part:3, ans:"D", set:"59-61", stem:{en:"Why is the woman calling?", zh:"女子為何打電話？"}, opts:[
      {k:"A", en:"To change a schedule", zh:"為了更改時程"},
      {k:"B", en:"To apologize for an error", zh:"為了一個錯誤道歉"},
      {k:"C", en:"To advertise an event", zh:"為了宣傳一場活動"},
      {k:"D", en:"To provide a reminder", zh:"為了提供提醒"}
    ]},
    60: { part:3, ans:"A", set:"59-61", stem:{en:"What did the woman e-mail to the man?", zh:"女子用電子郵件寄給男子什麼？"}, opts:[
      {k:"A", en:"Instructions for a test", zh:"檢查的注意事項"},
      {k:"B", en:"Medical records", zh:"病歷紀錄"},
      {k:"C", en:"Examination results", zh:"檢查結果"},
      {k:"D", en:"Directions to a pharmacy", zh:"前往藥局的路線"}
    ]},
    61: { part:3, ans:"D", set:"59-61", stem:{en:"What does the woman ask the man to do?", zh:"女子要男子做什麼？"}, opts:[
      {k:"A", en:"Download an application", zh:"下載一個應用程式"},
      {k:"B", en:"Call a doctor", zh:"打電話給醫生"},
      {k:"C", en:"Mail a document", zh:"郵寄一份文件"},
      {k:"D", en:"Bring a card", zh:"帶一張卡片來"}
    ]},
    62: { part:3, ans:"D", set:"62-64", graphic:"g62.png", stem:{en:"According to the woman, what will happen on May 13?", zh:"根據女子所說，5 月 13 日會發生什麼？"}, opts:[
      {k:"A", en:"Some staff will return to an office.", zh:"一些員工會回到辦公室。"},
      {k:"B", en:"Some orders will be placed.", zh:"會下一些訂單。"},
      {k:"C", en:"A grand opening will be held.", zh:"會舉行盛大開幕。"},
      {k:"D", en:"A construction project will end.", zh:"一項工程會結束。"}
    ]},
    63: { part:3, ans:"C", set:"62-64", stem:{en:"Look at the graphic. Which product will not be purchased?", zh:"看圖。哪項產品將不會被購買？"}, opts:[
      {k:"A", en:"Wooden bench", zh:"木製長凳"},
      {k:"B", en:"Short sofa", zh:"短沙發"},
      {k:"C", en:"Lounge chair", zh:"躺椅"},
      {k:"D", en:"Coffee table", zh:"咖啡桌"}
    ]},
    64: { part:3, ans:"B", set:"62-64", stem:{en:"What is the man unsure about?", zh:"男子對什麼不確定？"}, opts:[
      {k:"A", en:"Fabric material", zh:"布料材質"},
      {k:"B", en:"Color options", zh:"顏色選擇"},
      {k:"C", en:"Delivery dates", zh:"送貨日期"},
      {k:"D", en:"Shipping prices", zh:"運費價格"}
    ]},
    65: { part:3, ans:"D", set:"65-67", graphic:"g65.png", stem:{en:"What does the man ask about?", zh:"男子詢問什麼？"}, opts:[
      {k:"A", en:"Attending an event", zh:"參加一場活動"},
      {k:"B", en:"Locating an attraction", zh:"找到一處景點"},
      {k:"C", en:"Joining a club", zh:"加入一個社團"},
      {k:"D", en:"Making a reservation", zh:"進行預約"}
    ]},
    66: { part:3, ans:"B", set:"65-67", stem:{en:"Look at the graphic. Where will the gathering be held?", zh:"看圖。聚會將在哪裡舉行？"}, opts:[
      {k:"A", en:"In Picnic Area 1", zh:"在 1 號野餐區"},
      {k:"B", en:"In Picnic Area 2", zh:"在 2 號野餐區"},
      {k:"C", en:"In Picnic Area 3", zh:"在 3 號野餐區"},
      {k:"D", en:"In Picnic Area 4", zh:"在 4 號野餐區"}
    ]},
    67: { part:3, ans:"B", set:"65-67", stem:{en:"What will the man most likely do next?", zh:"男子接下來最可能做什麼？"}, opts:[
      {k:"A", en:"Review a list", zh:"檢視一份清單"},
      {k:"B", en:"Pay a fee", zh:"支付一筆費用"},
      {k:"C", en:"Confirm a date", zh:"確認一個日期"},
      {k:"D", en:"Visit a center", zh:"造訪一個中心"}
    ]},
    68: { part:3, ans:"C", set:"68-70", graphic:"g68.png", stem:{en:"What will the woman most likely do this afternoon?", zh:"女子今天下午最可能做什麼？"}, opts:[
      {k:"A", en:"Apply for a position", zh:"應徵一個職位"},
      {k:"B", en:"Notify a tenant", zh:"通知一位房客"},
      {k:"C", en:"Give an update", zh:"提供最新進度"},
      {k:"D", en:"Inspect an office", zh:"檢查一間辦公室"}
    ]},
    69: { part:3, ans:"C", set:"68-70", stem:{en:"Look at the graphic. Which building does the woman prefer?", zh:"看圖。女子偏好哪一棟大樓？"}, opts:[
      {k:"A", en:"Heisman Building", zh:"Heisman 大樓"},
      {k:"B", en:"Freeport Tower", zh:"Freeport 大樓"},
      {k:"C", en:"Lowden Center", zh:"Lowden 中心"},
      {k:"D", en:"Harborview Plaza", zh:"Harborview 廣場"}
    ]},
    70: { part:3, ans:"B", set:"68-70", stem:{en:"Why will the man call a real estate agent?", zh:"男子為何要打電話給房地產仲介？"}, opts:[
      {k:"A", en:"To discuss a problem", zh:"為了討論一個問題"},
      {k:"B", en:"To request a rental agreement", zh:"為了索取租約"},
      {k:"C", en:"To arrange a tour", zh:"為了安排看屋"},
      {k:"D", en:"To cancel an appointment", zh:"為了取消預約"}
    ]},

    // ===== Part 4：獨白（Q71–100），set=共用音檔的三題組，graphic=圖表題 =====
    71: { part:4, ans:"A", set:"71-73", stem:{en:"Who most likely is the speaker?", zh:"說話者最可能是誰？"}, opts:[
      {k:"A", en:"A director", zh:"導演"},
      {k:"B", en:"A photographer", zh:"攝影師"},
      {k:"C", en:"A journalist", zh:"記者"},
      {k:"D", en:"An actor", zh:"演員"}
    ]},
    72: { part:4, ans:"C", set:"71-73", stem:{en:"What will happen in two months?", zh:"兩個月後會發生什麼？"}, opts:[
      {k:"A", en:"A policy will be changed.", zh:"一項政策會被更改。"},
      {k:"B", en:"An article will be published.", zh:"一篇文章會被刊登。"},
      {k:"C", en:"A play will be performed.", zh:"一齣戲劇會被演出。"},
      {k:"D", en:"A soundtrack will be recorded.", zh:"一段配樂會被錄製。"}
    ]},
    73: { part:4, ans:"B", set:"71-73", stem:{en:"What does the speaker ask the listener to do on Saturday?", zh:"說話者要聽者在星期六做什麼？"}, opts:[
      {k:"A", en:"Read a manuscript", zh:"閱讀一份手稿"},
      {k:"B", en:"Visit a public facility", zh:"造訪一處公共設施"},
      {k:"C", en:"Pick up some tickets", zh:"領取一些票券"},
      {k:"D", en:"Prepare a résumé", zh:"準備一份履歷"}
    ]},
    74: { part:4, ans:"B", set:"74-76", stem:{en:"What is the topic of this week's podcast?", zh:"本週 podcast 的主題是什麼？"}, opts:[
      {k:"A", en:"Retirement planning", zh:"退休規劃"},
      {k:"B", en:"Job interview skills", zh:"求職面試技巧"},
      {k:"C", en:"Hiring procedures", zh:"招聘流程"},
      {k:"D", en:"Manufacturing processes", zh:"製造流程"}
    ]},
    75: { part:4, ans:"A", set:"74-76", stem:{en:"Who is Lionel Wesley?", zh:"Lionel Wesley 是誰？"}, opts:[
      {k:"A", en:"A department manager", zh:"部門經理"},
      {k:"B", en:"A financial consultant", zh:"財務顧問"},
      {k:"C", en:"An investment coordinator", zh:"投資協調專員"},
      {k:"D", en:"A college instructor", zh:"大學講師"}
    ]},
    76: { part:4, ans:"B", set:"74-76", stem:{en:"What will the speaker do next month?", zh:"說話者下個月會做什麼？"}, opts:[
      {k:"A", en:"Return calls from listeners", zh:"回覆聽眾的來電"},
      {k:"B", en:"Host a live broadcast", zh:"主持一場直播"},
      {k:"C", en:"Receive an award", zh:"領取一個獎項"},
      {k:"D", en:"Give away concert tickets", zh:"贈送演唱會門票"}
    ]},
    77: { part:4, ans:"C", set:"77-79", stem:{en:"Where do the listeners work?", zh:"聽者在哪裡工作？"}, opts:[
      {k:"A", en:"At an airline corporation", zh:"在航空公司"},
      {k:"B", en:"At a party-planning company", zh:"在派對籌劃公司"},
      {k:"C", en:"At a restaurant", zh:"在餐廳"},
      {k:"D", en:"At a staffing agency", zh:"在人力仲介公司"}
    ]},
    78: { part:4, ans:"D", set:"77-79", stem:{en:"What did a business recently do?", zh:"一家企業最近做了什麼？"}, opts:[
      {k:"A", en:"It moved to a new building.", zh:"它搬到了一棟新大樓。"},
      {k:"B", en:"It hired an advisor.", zh:"它聘請了一位顧問。"},
      {k:"C", en:"It offered discounts to customers.", zh:"它向顧客提供折扣。"},
      {k:"D", en:"It opened an outdoor area.", zh:"它開放了一處戶外區域。"}
    ]},
    79: { part:4, ans:"C", set:"77-79", stem:{en:"Why does the speaker say, \"I have told you this several times\"?", zh:"說話者為何說「我已經跟你們說過好幾次了」？"}, opts:[
      {k:"A", en:"To answer an inquiry", zh:"為了回答詢問"},
      {k:"B", en:"To correct a mistake", zh:"為了糾正錯誤"},
      {k:"C", en:"To express frustration", zh:"為了表達不滿"},
      {k:"D", en:"To indicate approval", zh:"為了表示贊同"}
    ]},
    80: { part:4, ans:"D", set:"80-82", stem:{en:"Who is Yang Xu?", zh:"Yang Xu 是誰？"}, opts:[
      {k:"A", en:"A curator", zh:"策展人"},
      {k:"B", en:"A host", zh:"主持人"},
      {k:"C", en:"A professor", zh:"教授"},
      {k:"D", en:"An artist", zh:"藝術家"}
    ]},
    81: { part:4, ans:"A", set:"80-82", stem:{en:"What does the speaker say about Maxwell Hall?", zh:"說話者對 Maxwell Hall 說了什麼？"}, opts:[
      {k:"A", en:"It is very spacious.", zh:"它非常寬敞。"},
      {k:"B", en:"It is near an entrance.", zh:"它靠近入口。"},
      {k:"C", en:"It will be renovated.", zh:"它將被翻修。"},
      {k:"D", en:"It will be blocked off.", zh:"它將被封閉。"}
    ]},
    82: { part:4, ans:"D", set:"80-82", stem:{en:"How can some listeners get free tickets to the event?", zh:"部分聽者如何取得活動的免費門票？"}, opts:[
      {k:"A", en:"By visiting a Web site", zh:"透過造訪網站"},
      {k:"B", en:"By sending a text message", zh:"透過傳送簡訊"},
      {k:"C", en:"By replying to an e-mail", zh:"透過回覆電子郵件"},
      {k:"D", en:"By making a call", zh:"透過打電話"}
    ]},
    83: { part:4, ans:"D", set:"83-85", stem:{en:"Who most likely is the speaker?", zh:"說話者最可能是誰？"}, opts:[
      {k:"A", en:"A computer seller", zh:"電腦銷售員"},
      {k:"B", en:"A hotel manager", zh:"飯店經理"},
      {k:"C", en:"A game developer", zh:"遊戲開發者"},
      {k:"D", en:"An event organizer", zh:"活動籌辦人"}
    ]},
    84: { part:4, ans:"B", set:"83-85", stem:{en:"What does the speaker imply when he says, \"they're going fast\"?", zh:"說話者說「它們很快就被搶光」是什麼意思？"}, opts:[
      {k:"A", en:"An event will begin early.", zh:"活動會提早開始。"},
      {k:"B", en:"A decision should be made soon.", zh:"應該盡快做決定。"},
      {k:"C", en:"Additional help will be needed.", zh:"會需要額外的協助。"},
      {k:"D", en:"It is late to change the date.", zh:"現在改日期已經太遲。"}
    ]},
    85: { part:4, ans:"A", set:"83-85", stem:{en:"Why does the speaker expect many visitors?", zh:"說話者為何預期會有許多訪客？"}, opts:[
      {k:"A", en:"Many games will be shown.", zh:"會展示許多遊戲。"},
      {k:"B", en:"A game designer will be speaking.", zh:"一位遊戲設計師會演講。"},
      {k:"C", en:"Some contests will be held.", zh:"會舉辦一些競賽。"},
      {k:"D", en:"A new hotel has opened up nearby.", zh:"附近新開了一間飯店。"}
    ]},
    86: { part:4, ans:"A", set:"86-88", stem:{en:"What is the focus of the conference?", zh:"這場研討會的重點是什麼？"}, opts:[
      {k:"A", en:"Online advertising", zh:"線上廣告"},
      {k:"B", en:"Workplace safety", zh:"職場安全"},
      {k:"C", en:"Web site design", zh:"網站設計"},
      {k:"D", en:"Personnel management", zh:"人事管理"}
    ]},
    87: { part:4, ans:"B", set:"86-88", stem:{en:"How is this year's conference different from previous ones?", zh:"今年的研討會與往年有何不同？"}, opts:[
      {k:"A", en:"It involves more speakers.", zh:"它有更多講者。"},
      {k:"B", en:"It features international researchers.", zh:"它邀請了國際研究人員。"},
      {k:"C", en:"It will include longer lectures.", zh:"它會包含較長的演講。"},
      {k:"D", en:"It is being held at a different venue.", zh:"它在不同的場地舉行。"}
    ]},
    88: { part:4, ans:"C", set:"86-88", stem:{en:"Why was the closing ceremony relocated?", zh:"閉幕典禮為何更改地點？"}, opts:[
      {k:"A", en:"A room has not been cleaned.", zh:"一間房間尚未清掃。"},
      {k:"B", en:"An event has been postponed.", zh:"一場活動已被延期。"},
      {k:"C", en:"A machine has stopped working.", zh:"一台機器故障了。"},
      {k:"D", en:"A speaker has not arrived.", zh:"一位講者尚未抵達。"}
    ]},
    89: { part:4, ans:"A", set:"89-91", stem:{en:"What will take place on Friday?", zh:"星期五會舉行什麼？"}, opts:[
      {k:"A", en:"A company retreat", zh:"公司的員工旅遊"},
      {k:"B", en:"A facility tour", zh:"設施導覽"},
      {k:"C", en:"A grand opening", zh:"盛大開幕"},
      {k:"D", en:"A board meeting", zh:"董事會議"}
    ]},
    90: { part:4, ans:"D", set:"89-91", stem:{en:"Why does the speaker tell the listeners to dress comfortably?", zh:"說話者為何要聽者穿得舒適？"}, opts:[
      {k:"A", en:"They will be competing in a race.", zh:"他們將參加賽跑。"},
      {k:"B", en:"They will be visiting construction sites.", zh:"他們將造訪工地。"},
      {k:"C", en:"They will be cleaning a park.", zh:"他們將清理一座公園。"},
      {k:"D", en:"They will be going for a walk.", zh:"他們將去散步。"}
    ]},
    91: { part:4, ans:"B", set:"89-91", stem:{en:"According to the speaker, what will the listeners do after some speeches?", zh:"根據說話者，聽者在一些演講後會做什麼？"}, opts:[
      {k:"A", en:"Take a lunch break", zh:"午休用餐"},
      {k:"B", en:"Break up into groups", zh:"分成小組"},
      {k:"C", en:"Return to their workplace", zh:"返回工作場所"},
      {k:"D", en:"Write down some notes", zh:"寫下一些筆記"}
    ]},
    92: { part:4, ans:"A", set:"92-94", stem:{en:"What will happen next month?", zh:"下個月會發生什麼？"}, opts:[
      {k:"A", en:"A job fair", zh:"一場就業博覽會"},
      {k:"B", en:"A transportation exposition", zh:"一場交通博覽會"},
      {k:"C", en:"A corporate fund-raiser", zh:"一場企業募款活動"},
      {k:"D", en:"A technology convention", zh:"一場科技大會"}
    ]},
    93: { part:4, ans:"B", set:"92-94", stem:{en:"What does the speaker imply when he says, \"the venue is a five-hour drive away\"?", zh:"說話者說「場地車程要五小時」是什麼意思？"}, opts:[
      {k:"A", en:"He is worried about transportation fee.", zh:"他擔心交通費用。"},
      {k:"B", en:"He is considering another travel option.", zh:"他正在考慮另一種交通方式。"},
      {k:"C", en:"He is unfamiliar with an event space.", zh:"他不熟悉某個活動場地。"},
      {k:"D", en:"He is thinking of booking a hotel.", zh:"他正考慮訂飯店。"}
    ]},
    94: { part:4, ans:"B", set:"92-94", stem:{en:"What does the speaker plan to do?", zh:"說話者打算做什麼？"}, opts:[
      {k:"A", en:"Send an invitation", zh:"寄送邀請函"},
      {k:"B", en:"Make a payment", zh:"進行付款"},
      {k:"C", en:"Rent a car", zh:"租一輛車"},
      {k:"D", en:"Apply for a credit card", zh:"申辦信用卡"}
    ]},
    95: { part:4, ans:"D", set:"95-97", graphic:"g95.png", stem:{en:"Which department do the listeners most likely belong to?", zh:"聽者最可能屬於哪個部門？"}, opts:[
      {k:"A", en:"Finance", zh:"財務部"},
      {k:"B", en:"Information Technology", zh:"資訊科技部"},
      {k:"C", en:"Design", zh:"設計部"},
      {k:"D", en:"Marketing", zh:"行銷部"}
    ]},
    96: { part:4, ans:"C", set:"95-97", stem:{en:"Look at the graphic. When will the campaign proposal be submitted?", zh:"看圖。行銷企劃提案將於何時提交？"}, opts:[
      {k:"A", en:"In May", zh:"在五月"},
      {k:"B", en:"In July", zh:"在七月"},
      {k:"C", en:"In September", zh:"在九月"},
      {k:"D", en:"In November", zh:"在十一月"}
    ]},
    97: { part:4, ans:"A", set:"95-97", stem:{en:"What will be given to the listeners?", zh:"將會給聽者什麼？"}, opts:[
      {k:"A", en:"A pamphlet", zh:"一本小冊子"},
      {k:"B", en:"A design proposal", zh:"一份設計提案"},
      {k:"C", en:"A product list", zh:"一份產品清單"},
      {k:"D", en:"A device", zh:"一台裝置"}
    ]},
    98: { part:4, ans:"B", set:"98-100", graphic:"g98.png", stem:{en:"Where does the speaker most likely work?", zh:"說話者最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a pharmacy", zh:"在藥局"},
      {k:"B", en:"At a dental clinic", zh:"在牙醫診所"},
      {k:"C", en:"At a fitness center", zh:"在健身中心"},
      {k:"D", en:"At a law office", zh:"在律師事務所"}
    ]},
    99: { part:4, ans:"A", set:"98-100", stem:{en:"What does the speaker recommend doing?", zh:"說話者建議做什麼？"}, opts:[
      {k:"A", en:"Using an online reservation system", zh:"使用線上預約系統"},
      {k:"B", en:"Speaking to a receptionist in person", zh:"親自向櫃台人員洽詢"},
      {k:"C", en:"Calling back during business hours", zh:"在營業時間回電"},
      {k:"D", en:"Sending a request by e-mail", zh:"以電子郵件提出要求"}
    ]},
    100: { part:4, ans:"D", set:"98-100", stem:{en:"Look at the graphic. Who can answer questions about financial matters?", zh:"看圖。誰能回答財務相關問題？"}, opts:[
      {k:"A", en:"Mark Davies", zh:"Mark Davies"},
      {k:"B", en:"Wendy Clark", zh:"Wendy Clark"},
      {k:"C", en:"Sandra Lee", zh:"Sandra Lee"},
      {k:"D", en:"Kyle Jeffries", zh:"Kyle Jeffries"}
    ]}
  }
};
