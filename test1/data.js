// TEST 1 題庫資料（答案 + 選項英文/中譯，來源：解析本 p315 起，逐題核對）
// 資料模型：q[題號] = { part, ans, ask?{en,zh}, opts:[{k,en,zh}] }
//   part1：無 ask（看圖）；part2/3/4：ask = 聽到的問句/題目
window.QUIZ = {
  test: 1,
  q: {
    1: { part:1, ans:"C", opts:[
      {k:"A", en:"He is closing a door.", zh:"他正在關門。"},
      {k:"B", en:"He is sipping from a bottle.", zh:"他正在啜飲著瓶裝的飲料。"},
      {k:"C", en:"Some clothes are being packed.", zh:"一些衣服正在被打包中。"},
      {k:"D", en:"Some cushions have been laid on the floor.", zh:"一些坐墊被放在地板上。"}
    ]},
    2: { part:1, ans:"A", opts:[
      {k:"A", en:"A man is using a laptop.", zh:"一個男人正在使用筆電。"},
      {k:"B", en:"A man is boarding an airplane.", zh:"一個男人正在登機。"},
      {k:"C", en:"A man is looking out a window.", zh:"一個男人正在向窗外看。"},
      {k:"D", en:"A man is taking off his jacket.", zh:"一個男人正在脫外套。"}
    ]},
    3: { part:1, ans:"D", opts:[
      {k:"A", en:"A suitcase has been left in a van.", zh:"行李箱被留在廂型車內。"},
      {k:"B", en:"A plant has fallen off a desk.", zh:"植物從桌子上掉了下來。"},
      {k:"C", en:"One of the women is cleaning a room.", zh:"其中一個女子正在打掃房間。"},
      {k:"D", en:"A man is waiting at a counter.", zh:"男子正在櫃台等候。"}
    ]},
    4: { part:1, ans:"D", opts:[
      {k:"A", en:"A cart is being pushed.", zh:"手推車正在被推著。"},
      {k:"B", en:"Equipment is being installed.", zh:"設備正在被安裝。"},
      {k:"C", en:"They are sweeping a floor.", zh:"他們正在打掃地板。"},
      {k:"D", en:"They are wearing face masks.", zh:"他們戴著口罩。"}
    ]},
    5: { part:1, ans:"B", opts:[
      {k:"A", en:"A box has been placed on the ground.", zh:"箱子被放置在地上。"},
      {k:"B", en:"A table is next to a loading ramp.", zh:"桌子在裝卸坡道旁邊。"},
      {k:"C", en:"A road is being paved by workers.", zh:"道路正被工人鋪設著。"},
      {k:"D", en:"A truck is being towed into a garage.", zh:"一輛卡車正被拖進車庫。"}
    ]},
    6: { part:1, ans:"C", opts:[
      {k:"A", en:"A cabinet is being set up in a kitchen.", zh:"櫥櫃正被設置在廚房中。"},
      {k:"B", en:"The woman is handing a cup to a man.", zh:"女子正在把杯子遞給男子。"},
      {k:"C", en:"The man is leaning over a table.", zh:"男子正俯身靠在桌上。"},
      {k:"D", en:"A dish is being wiped with a towel.", zh:"盤子正被毛巾擦拭。"}
    ]},

    7: { part:2, ans:"A", ask:{en:"What color will the T-shirts be?", zh:"T 恤要什麼顏色？"}, opts:[
      {k:"A", en:"White, I think.", zh:"白色的，我想。"},
      {k:"B", en:"They arrived on Friday.", zh:"它們週五到貨。"},
      {k:"C", en:"Creating the logo.", zh:"正在製作商標。"}
    ]},
    8: { part:2, ans:"B", ask:{en:"Could you give me an update on the marketing campaign?", zh:"你能告訴我行銷活動的最新進度嗎？"}, opts:[
      {k:"A", en:"Most of the new advertisements.", zh:"大部分的新廣告。"},
      {k:"B", en:"The entire team will get an e-mail.", zh:"整個團隊都會收到一封電子郵件。"},
      {k:"C", en:"I called the customers.", zh:"我打電話給客戶了。"}
    ]},
    9: { part:2, ans:"C", ask:{en:"Who is representing our company at the trade show?", zh:"誰將代表我們公司參加貿易展？"}, opts:[
      {k:"A", en:"Within 90 days.", zh:"在 90 天內。"},
      {k:"B", en:"The presentation went really well.", zh:"簡報進行得很順利。"},
      {k:"C", en:"I'm waiting to hear back from Greg.", zh:"我正在等候 Greg 的回覆。"}
    ]},
    10: { part:2, ans:"B", ask:{en:"When is ShoreTech's new phone coming out?", zh:"ShoreTech 的新手機什麼時候上市？"}, opts:[
      {k:"A", en:"He's back from a recent holiday.", zh:"他剛從最近的假期回來。"},
      {k:"B", en:"In May.", zh:"在五月。"},
      {k:"C", en:"With some extra buttons.", zh:"附帶一些額外的按鍵。"}
    ]},
    11: { part:2, ans:"C", ask:{en:"Would it be okay to hold a meeting here?", zh:"在這裡開會可以嗎？"}, opts:[
      {k:"A", en:"This is the sales report.", zh:"這是業務報告。"},
      {k:"B", en:"Under the table.", zh:"在桌子底下。"},
      {k:"C", en:"The conference room would be better.", zh:"會議室會更好。"}
    ]},
    12: { part:2, ans:"A", ask:{en:"Which floor is the engineering team on?", zh:"工程團隊在哪一層樓？"}, opts:[
      {k:"A", en:"They're on the seventh.", zh:"他們在第七層。"},
      {k:"B", en:"The accounting department.", zh:"會計部門。"},
      {k:"C", en:"A leak in the ceiling.", zh:"天花板漏水。"}
    ]},
    13: { part:2, ans:"B", ask:{en:"The movie Tiger Park has gotten good reviews.", zh:"電影《Tiger Park》得到了很好的評價。"}, opts:[
      {k:"A", en:"Our film class is canceled.", zh:"我們的電影課被取消了。"},
      {k:"B", en:"A lot of tickets have sold out.", zh:"很多票都已經賣完了。"},
      {k:"C", en:"Let's see modern exhibits.", zh:"我們去看現代的展覽品吧。"}
    ]},
    14: { part:2, ans:"B", ask:{en:"How did you get the idea to start a delivery service?", zh:"你是怎麼想到要開始送貨服務的？"}, opts:[
      {k:"A", en:"Terry got a job.", zh:"Terry 找到了工作。"},
      {k:"B", en:"My friend suggested it.", zh:"我朋友建議的。"},
      {k:"C", en:"I appreciate the offer.", zh:"我很感激這個提議。"}
    ]},
    15: { part:2, ans:"B", ask:{en:"Isn't this vending machine out of order?", zh:"這台自動販賣機不是故障了嗎？"}, opts:[
      {k:"A", en:"The order arrived yesterday.", zh:"訂單昨天到了。"},
      {k:"B", en:"Someone came and fixed it.", zh:"有人來把它修好了。"},
      {k:"C", en:"The cheapest candy bar.", zh:"最便宜的糖果棒。"}
    ]},
    16: { part:2, ans:"C", ask:{en:"When will the factory inspection start?", zh:"工廠檢查何時開始？"}, opts:[
      {k:"A", en:"That's a good choice.", zh:"這是個好選擇。"},
      {k:"B", en:"In the garden.", zh:"在花園裡。"},
      {k:"C", en:"As soon as the CEO gets here.", zh:"等執行長到這裡後。"}
    ]},
    17: { part:2, ans:"C", ask:{en:"I should make a reservation for next week's luncheon, shouldn't I?", zh:"我應該為下週的午宴訂位，不是嗎？"}, opts:[
      {k:"A", en:"The menu is completely new.", zh:"菜單是全新的。"},
      {k:"B", en:"It was very successful.", zh:"它非常成功。"},
      {k:"C", en:"Why don't I handle that?", zh:"不如這件事由我來處理吧？"}
    ]},
    18: { part:2, ans:"B", ask:{en:"Are you willing to work on weekends if necessary?", zh:"如果有必要，你願意在週末工作嗎？"}, opts:[
      {k:"A", en:"To the right.", zh:"往右邊。"},
      {k:"B", en:"Sorry, I can't.", zh:"抱歉，我不行。"},
      {k:"C", en:"I really enjoyed it.", zh:"我真的很享受它。"}
    ]},
    19: { part:2, ans:"A", ask:{en:"Who was that in your office this morning?", zh:"今天早上在你辦公室的那個人是誰？"}, opts:[
      {k:"A", en:"The new intern.", zh:"新來的實習生。"},
      {k:"B", en:"They were first in line.", zh:"他們排在隊伍的第一個。"},
      {k:"C", en:"Yes, at eight o'clock.", zh:"是的，在八點。"}
    ]},
    20: { part:2, ans:"B", ask:{en:"Can we get a discount at the amusement park?", zh:"我們在遊樂園可以打折嗎？"}, opts:[
      {k:"A", en:"I want to try that ride, too.", zh:"我也想去坐那個遊樂設施。"},
      {k:"B", en:"Look at the guidebook.", zh:"看看指南手冊。"},
      {k:"C", en:"If we open it.", zh:"如果我們開的話。"}
    ]},
    21: { part:2, ans:"A", ask:{en:"Sydney Shopping Mall is not as popular as it used to be.", zh:"雪梨購物中心不像過去那麼受歡迎了。"}, opts:[
      {k:"A", en:"But its location is still convenient.", zh:"但它的位置還是很方便的。"},
      {k:"B", en:"The customer service desk.", zh:"客戶服務台。"},
      {k:"C", en:"I used up all the paper.", zh:"我用完了所有的紙張。"}
    ]},
    22: { part:2, ans:"C", ask:{en:"Did you see the new billboard?", zh:"你有看到新的大型廣告牌了嗎？"}, opts:[
      {k:"A", en:"My desk is over there.", zh:"我的辦公桌在那邊。"},
      {k:"B", en:"I like my neighborhood.", zh:"我喜歡我住的這一帶。"},
      {k:"C", en:"Yes, on the Seaward Building.", zh:"有的，在 Seaward 大樓。"}
    ]},
    23: { part:2, ans:"A", ask:{en:"Why was the deadline extended?", zh:"為什麼截止日期延後了？"}, opts:[
      {k:"A", en:"Because we found some errors.", zh:"因為我們找到了一些錯誤。"},
      {k:"B", en:"Here's my receipt.", zh:"這是我的收據。"},
      {k:"C", en:"I purchased them online.", zh:"我是在網路上買的。"}
    ]},
    24: { part:2, ans:"B", ask:{en:"How many people will attend the legal conference?", zh:"有多少人將參加法律會議？"}, opts:[
      {k:"A", en:"We should hire a lawyer.", zh:"我們應該聘請律師。"},
      {k:"B", en:"Well, Mark and I are definitely going.", zh:"這個嘛，Mark 和我一定會去。"},
      {k:"C", en:"They are on my desk.", zh:"它們在我的桌上。"}
    ]},
    25: { part:2, ans:"A", ask:{en:"Are you selling your house or leasing it?", zh:"你是要賣房子還是出租？"}, opts:[
      {k:"A", en:"I'll let you know when I decide.", zh:"等我決定後再告訴你。"},
      {k:"B", en:"That was the best we could do.", zh:"那是我們能做到的最好的了。"},
      {k:"C", en:"Sure, I can arrange a meeting.", zh:"當然，我可以安排會議。"}
    ]},
    26: { part:2, ans:"A", ask:{en:"When did the Goldtree Company set the budget?", zh:"Goldtree 公司是在什麼時候編列預算的？"}, opts:[
      {k:"A", en:"During last week's board meeting.", zh:"在上週的董事會會議期間。"},
      {k:"B", en:"Yes, at the shopping mall.", zh:"是的，在購物中心。"},
      {k:"C", en:"He is in charge of the supplies.", zh:"他負責供應品。"}
    ]},
    27: { part:2, ans:"C", ask:{en:"Where do we go after watching the product demonstration?", zh:"看完產品示範後我們要去哪裡？"}, opts:[
      {k:"A", en:"The other members of our division.", zh:"我們部門的其他成員。"},
      {k:"B", en:"That movie was very interesting.", zh:"那部電影非常有趣。"},
      {k:"C", en:"To the conference room.", zh:"去會議室。"}
    ]},
    28: { part:2, ans:"B", ask:{en:"X-Tech will install the security alarm for free.", zh:"X-Tech 將會免費安裝安全警報器。"}, opts:[
      {k:"A", en:"The road signs are incorrect.", zh:"那些路標不正確。"},
      {k:"B", en:"We'll save a lot of money, then.", zh:"那麼我們將會省下很多錢了。"},
      {k:"C", en:"No, those are extra sheets.", zh:"不，那些是多餘的紙張。"}
    ]},
    29: { part:2, ans:"A", ask:{en:"Aren't the flowers at this shop a bit disappointing?", zh:"這家店的花是不是有點令人失望？"}, opts:[
      {k:"A", en:"I can't find anything good either.", zh:"我也找不到什麼好東西。"},
      {k:"B", en:"By trimming off the leaves.", zh:"透過修剪葉子。"},
      {k:"C", en:"Dale was appointed to the board.", zh:"Dale 被任命進入董事會。"}
    ]},
    30: { part:2, ans:"C", ask:{en:"What did you order at the restaurant?", zh:"你在餐廳點了什麼？"}, opts:[
      {k:"A", en:"About 50 dollars.", zh:"大約 50 元。"},
      {k:"B", en:"We sat near the entrance.", zh:"我們坐在入口附近。"},
      {k:"C", en:"I had a steak.", zh:"我點了一塊牛排。"}
    ]},
    31: { part:2, ans:"C", ask:{en:"Can you find Ms. Findley's office yourself, or should I show you the way?", zh:"你自己找得到 Findley 小姐的辦公室嗎，還是需要我幫你指路？"}, opts:[
      {k:"A", en:"She accepted another promotion.", zh:"她接受了另一個升職。"},
      {k:"B", en:"We have enough space.", zh:"我們有足夠的空間。"},
      {k:"C", en:"I'll look at the directory.", zh:"我會查看樓層指南。"}
    ]},

    // ===== Part 3（Q32–70）對話：set=共用音檔組；graphic=圖表題 =====
    32: { part:3, ans:"A", set:"32-34", stem:{en:"Where most likely does the man work?", zh:"男子最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a repair shop", zh:"在維修店"},
      {k:"B", en:"At a bank", zh:"在銀行"},
      {k:"C", en:"At a theater", zh:"在劇院"},
      {k:"D", en:"At a law firm", zh:"在律師事務所"}
    ]},
    33: { part:3, ans:"B", set:"32-34", stem:{en:"What does the man say he can do?", zh:"男子說他可以做什麼？"}, opts:[
      {k:"A", en:"Upgrade a device", zh:"升級裝置"},
      {k:"B", en:"Recover some data", zh:"復原一些資料"},
      {k:"C", en:"Extend business hours", zh:"延長營業時間"},
      {k:"D", en:"Install some software", zh:"安裝一些軟體"}
    ]},
    34: { part:3, ans:"B", set:"32-34", stem:{en:"What does the man ask the woman to do?", zh:"男子要求女子做什麼？"}, opts:[
      {k:"A", en:"Enter a password", zh:"輸入密碼"},
      {k:"B", en:"Return on another day", zh:"改天再來"},
      {k:"C", en:"E-mail more information", zh:"用電子郵件提供更多資訊"},
      {k:"D", en:"Pay a fee", zh:"付費"}
    ]},
    35: { part:3, ans:"C", set:"35-37", stem:{en:"What did the man do yesterday?", zh:"男子昨天做了什麼？"}, opts:[
      {k:"A", en:"He visited a local store.", zh:"他去了當地一家商店。"},
      {k:"B", en:"He went to a popular restaurant.", zh:"他去了一家熱門餐廳。"},
      {k:"C", en:"He watched a television show.", zh:"他看了一個電視節目。"},
      {k:"D", en:"He made a reservation.", zh:"他訂了位。"}
    ]},
    36: { part:3, ans:"B", set:"35-37", stem:{en:"What does the woman suggest the man do?", zh:"女子建議男子做什麼？"}, opts:[
      {k:"A", en:"Pick up a flyer from a stack", zh:"從一疊傳單中拿一張"},
      {k:"B", en:"Purchase some seasoning", zh:"購買一些調味料"},
      {k:"C", en:"Try some free samples", zh:"試吃一些免費樣品"},
      {k:"D", en:"Place an online order", zh:"線上下單"}
    ]},
    37: { part:3, ans:"A", set:"35-37", stem:{en:"What problem does the woman mention?", zh:"女子提到什麼問題？"}, opts:[
      {k:"A", en:"An item is unavailable.", zh:"某商品缺貨。"},
      {k:"B", en:"A sale has ended.", zh:"特價已結束。"},
      {k:"C", en:"A machine was damaged.", zh:"一台機器損壞了。"},
      {k:"D", en:"A store will close early.", zh:"商店將提早關門。"}
    ]},
    38: { part:3, ans:"D", set:"38-40", stem:{en:"Who most likely are the speakers?", zh:"說話者最可能是誰？"}, opts:[
      {k:"A", en:"Newspaper reporters", zh:"報社記者"},
      {k:"B", en:"Interior decorators", zh:"室內裝潢師"},
      {k:"C", en:"Restaurant owners", zh:"餐廳老闆"},
      {k:"D", en:"Product designers", zh:"產品設計師"}
    ]},
    39: { part:3, ans:"B", set:"38-40", stem:{en:"What does the woman mean when she says, \"You can just leave it on my desk\"?", zh:"女子說「你直接放在我桌上就好」是什麼意思？"}, opts:[
      {k:"A", en:"She has read a document already.", zh:"她已經讀過某份文件。"},
      {k:"B", en:"She will perform a task later.", zh:"她稍後會處理一項工作。"},
      {k:"C", en:"She is able to attend an event.", zh:"她能夠出席某活動。"},
      {k:"D", en:"She needs to assemble an appliance.", zh:"她需要組裝一台電器。"}
    ]},
    40: { part:3, ans:"A", set:"38-40", stem:{en:"What will the speakers most likely do next?", zh:"說話者接下來最可能做什麼？"}, opts:[
      {k:"A", en:"Speak with a coworker", zh:"與同事談話"},
      {k:"B", en:"Prepare a receipt", zh:"準備收據"},
      {k:"C", en:"Evaluate some plans", zh:"評估一些方案"},
      {k:"D", en:"Sign a contract", zh:"簽合約"}
    ]},
    41: { part:3, ans:"A", set:"41-43", stem:{en:"What is the woman concerned about?", zh:"女子擔心什麼？"}, opts:[
      {k:"A", en:"The appearance of an item", zh:"某物品的外觀"},
      {k:"B", en:"The size of a building", zh:"一棟建築的大小"},
      {k:"C", en:"The location of a display", zh:"一個展示的位置"},
      {k:"D", en:"The color of a business card", zh:"名片的顏色"}
    ]},
    42: { part:3, ans:"B", set:"41-43", stem:{en:"What do the men want to change?", zh:"男士們想更換什麼？"}, opts:[
      {k:"A", en:"Decorations", zh:"裝飾品"},
      {k:"B", en:"Furniture", zh:"家具"},
      {k:"C", en:"Equipment", zh:"設備"},
      {k:"D", en:"Plants", zh:"植物"}
    ]},
    43: { part:3, ans:"C", set:"41-43", stem:{en:"What does the woman offer to do?", zh:"女子主動提出做什麼？"}, opts:[
      {k:"A", en:"Discuss a budget with clients", zh:"與客戶討論預算"},
      {k:"B", en:"Work an additional shift", zh:"多上一個班"},
      {k:"C", en:"Collect some tools", zh:"收拾一些工具"},
      {k:"D", en:"Search for some items", zh:"尋找一些物品"}
    ]},
    44: { part:3, ans:"C", set:"44-46", stem:{en:"What department does the man most likely work in?", zh:"男子最可能在哪個部門工作？"}, opts:[
      {k:"A", en:"Sales", zh:"業務"},
      {k:"B", en:"Marketing", zh:"行銷"},
      {k:"C", en:"Customer service", zh:"客戶服務"},
      {k:"D", en:"Human resources", zh:"人力資源"}
    ]},
    45: { part:3, ans:"A", set:"44-46", stem:{en:"What information does the man ask for?", zh:"男子要求什麼資訊？"}, opts:[
      {k:"A", en:"A school name", zh:"學校名稱"},
      {k:"B", en:"A date of birth", zh:"出生日期"},
      {k:"C", en:"A transaction amount", zh:"交易金額"},
      {k:"D", en:"An account number", zh:"帳號"}
    ]},
    46: { part:3, ans:"A", set:"44-46", stem:{en:"What does the man instruct the woman to do?", zh:"男子指示女子做什麼？"}, opts:[
      {k:"A", en:"Change a password", zh:"更改密碼"},
      {k:"B", en:"Reply to an e-mail", zh:"回覆電子郵件"},
      {k:"C", en:"Download a file", zh:"下載檔案"},
      {k:"D", en:"Go to a branch", zh:"前往分行"}
    ]},
    47: { part:3, ans:"D", set:"47-49", stem:{en:"What did the man make a proposal about?", zh:"男子針對什麼提出提案？"}, opts:[
      {k:"A", en:"Leave requests", zh:"請假申請"},
      {k:"B", en:"Staff bonuses", zh:"員工獎金"},
      {k:"C", en:"Corporate vehicles", zh:"公司車輛"},
      {k:"D", en:"Company phones", zh:"公司手機"}
    ]},
    48: { part:3, ans:"D", set:"47-49", stem:{en:"What does the woman mean when she says, \"We discussed that on Friday\"?", zh:"女子說「我們週五討論過那件事了」是什麼意思？"}, opts:[
      {k:"A", en:"She has a question about a topic.", zh:"她對某主題有疑問。"},
      {k:"B", en:"She is frustrated by a delay.", zh:"她對延誤感到沮喪。"},
      {k:"C", en:"She is prepared for a task.", zh:"她已為某項工作做好準備。"},
      {k:"D", en:"She has already given her opinion.", zh:"她已經表達過意見。"}
    ]},
    49: { part:3, ans:"B", set:"47-49", stem:{en:"What will the woman most likely do next?", zh:"女子接下來最可能做什麼？"}, opts:[
      {k:"A", en:"Distribute some handouts", zh:"發放一些講義"},
      {k:"B", en:"Contact a senior executive", zh:"聯絡一位高階主管"},
      {k:"C", en:"Organize a training session", zh:"安排一場訓練課程"},
      {k:"D", en:"Put away some equipment", zh:"收起一些設備"}
    ]},
    50: { part:3, ans:"C", set:"50-52", stem:{en:"What are the speakers mainly discussing?", zh:"說話者主要在討論什麼？"}, opts:[
      {k:"A", en:"A business trip", zh:"一趟商務出差"},
      {k:"B", en:"An investment strategy", zh:"一項投資策略"},
      {k:"C", en:"Some presentation material", zh:"一些簡報資料"},
      {k:"D", en:"Some customer feedback", zh:"一些客戶意見"}
    ]},
    51: { part:3, ans:"D", set:"50-52", stem:{en:"What is mentioned about the Bendale branch?", zh:"關於 Bendale 分店提到了什麼？"}, opts:[
      {k:"A", en:"It will host an event.", zh:"它將舉辦活動。"},
      {k:"B", en:"It has been understaffed.", zh:"它人手不足。"},
      {k:"C", en:"It did not provide some data.", zh:"它沒有提供某些資料。"},
      {k:"D", en:"It may be closing.", zh:"它可能即將關閉。"}
    ]},
    52: { part:3, ans:"B", set:"50-52", stem:{en:"What will the man probably do before 11 A.M.?", zh:"男子可能會在上午 11 點前做什麼？"}, opts:[
      {k:"A", en:"Book a conference room", zh:"預訂會議室"},
      {k:"B", en:"Send an e-mail", zh:"寄電子郵件"},
      {k:"C", en:"Meet a store manager", zh:"與店長碰面"},
      {k:"D", en:"Fix a photocopier", zh:"修理影印機"}
    ]},
    53: { part:3, ans:"B", set:"53-55", stem:{en:"What type of event is being planned?", zh:"正在籌劃什麼樣的活動？"}, opts:[
      {k:"A", en:"An award ceremony", zh:"頒獎典禮"},
      {k:"B", en:"A retirement party", zh:"退休派對"},
      {k:"C", en:"A musical concert", zh:"音樂會"},
      {k:"D", en:"A business conference", zh:"商務研討會"}
    ]},
    54: { part:3, ans:"C", set:"53-55", stem:{en:"What does the woman ask about?", zh:"女子詢問什麼？"}, opts:[
      {k:"A", en:"The address of a hotel", zh:"一間飯店的地址"},
      {k:"B", en:"The date of an occasion", zh:"某場合的日期"},
      {k:"C", en:"The capacity of a venue", zh:"一個場地的容納人數"},
      {k:"D", en:"The name of a guest", zh:"一位賓客的姓名"}
    ]},
    55: { part:3, ans:"C", set:"53-55", stem:{en:"What will be available at no additional charge?", zh:"什麼將免費提供？"}, opts:[
      {k:"A", en:"A customized menu", zh:"客製化菜單"},
      {k:"B", en:"A valet service", zh:"代客泊車服務"},
      {k:"C", en:"An audio system", zh:"音響系統"},
      {k:"D", en:"A professional photographer", zh:"專業攝影師"}
    ]},
    56: { part:3, ans:"A", set:"56-58", stem:{en:"What is the conversation mainly about?", zh:"這段對話主要關於什麼？"}, opts:[
      {k:"A", en:"A record error", zh:"一個記錄錯誤"},
      {k:"B", en:"An overtime schedule", zh:"加班排程"},
      {k:"C", en:"A staff shortage", zh:"人手短缺"},
      {k:"D", en:"A policy change", zh:"政策變更"}
    ]},
    57: { part:3, ans:"D", set:"56-58", stem:{en:"What did the man do on June 5?", zh:"男子在 6 月 5 日做了什麼？"}, opts:[
      {k:"A", en:"He attended a workshop.", zh:"他參加了一場研討會。"},
      {k:"B", en:"He met with a client.", zh:"他與客戶會面。"},
      {k:"C", en:"He visited a doctor.", zh:"他去看醫生。"},
      {k:"D", en:"He went to the airport.", zh:"他去了機場。"}
    ]},
    58: { part:3, ans:"A", set:"56-58", stem:{en:"What does the woman ask the man to do?", zh:"女子要求男子做什麼？"}, opts:[
      {k:"A", en:"Complete a form", zh:"填寫一份表格"},
      {k:"B", en:"Talk to a coworker", zh:"與同事談談"},
      {k:"C", en:"Print an itinerary", zh:"列印行程表"},
      {k:"D", en:"Transport some merchandise", zh:"運送一些商品"}
    ]},
    59: { part:3, ans:"D", set:"59-61", stem:{en:"What is the conversation mainly about?", zh:"這段對話主要關於什麼？"}, opts:[
      {k:"A", en:"A travel budget", zh:"旅遊預算"},
      {k:"B", en:"A convention topic", zh:"大會主題"},
      {k:"C", en:"A gathering date", zh:"聚會日期"},
      {k:"D", en:"An event location", zh:"活動地點"}
    ]},
    60: { part:3, ans:"C", set:"59-61", stem:{en:"What did Jeremiah recently do?", zh:"Jeremiah 最近做了什麼？"}, opts:[
      {k:"A", en:"He gave a keynote speech.", zh:"他發表了主題演講。"},
      {k:"B", en:"He met with an ecologist.", zh:"他與生態學家會面。"},
      {k:"C", en:"He made a reservation.", zh:"他做了預訂。"},
      {k:"D", en:"He sent out a memo.", zh:"他發出了一份備忘錄。"}
    ]},
    61: { part:3, ans:"B", set:"59-61", stem:{en:"What did the woman apologize for?", zh:"女子為什麼道歉？"}, opts:[
      {k:"A", en:"She did not book the ticket.", zh:"她沒有訂票。"},
      {k:"B", en:"She gave the wrong information.", zh:"她給了錯誤的資訊。"},
      {k:"C", en:"She did not recognize some colleagues.", zh:"她沒認出一些同事。"},
      {k:"D", en:"She did not arrange transportation.", zh:"她沒有安排交通。"}
    ]},
    62: { part:3, ans:"C", set:"62-64", graphic:"g62.png", stem:{en:"What will most likely happen next week?", zh:"下週最可能發生什麼事？"}, opts:[
      {k:"A", en:"A work space will be repainted.", zh:"一個工作區將被重新粉刷。"},
      {k:"B", en:"A storage area will be cleaned.", zh:"一個儲藏區將被清理。"},
      {k:"C", en:"Some equipment will be installed.", zh:"一些設備將被安裝。"},
      {k:"D", en:"Some computers will be updated.", zh:"一些電腦將被更新。"}
    ]},
    63: { part:3, ans:"A", set:"62-64", stem:{en:"Look at the graphic. Which room will the woman use on Monday?", zh:"看圖。女子週一將使用哪個房間？"}, opts:[
      {k:"A", en:"Room 301", zh:"Room 301"},
      {k:"B", en:"Room 302", zh:"Room 302"},
      {k:"C", en:"Room 303", zh:"Room 303"},
      {k:"D", en:"Room 304", zh:"Room 304"}
    ]},
    64: { part:3, ans:"A", set:"62-64", stem:{en:"What is mentioned about Mr. Hobbs?", zh:"關於 Hobbs 先生提到了什麼？"}, opts:[
      {k:"A", en:"He joined another firm.", zh:"他加入了另一家公司。"},
      {k:"B", en:"He decided to take a vacation.", zh:"他決定休假。"},
      {k:"C", en:"He arranged a client meeting.", zh:"他安排了客戶會議。"},
      {k:"D", en:"He transferred to a different branch.", zh:"他調到了別的分店。"}
    ]},
    65: { part:3, ans:"D", set:"65-67", graphic:"g65.png", stem:{en:"Where do the speakers work?", zh:"說話者在哪裡工作？"}, opts:[
      {k:"A", en:"At a jewelry shop", zh:"在珠寶店"},
      {k:"B", en:"At a restaurant", zh:"在餐廳"},
      {k:"C", en:"At a travel agency", zh:"在旅行社"},
      {k:"D", en:"At a clothing company", zh:"在服飾公司"}
    ]},
    66: { part:3, ans:"B", set:"65-67", stem:{en:"Look at the graphic. Which branch will be expanded?", zh:"看圖。哪個分店將被擴展？"}, opts:[
      {k:"A", en:"Miami", zh:"Miami"},
      {k:"B", en:"Denver", zh:"Denver"},
      {k:"C", en:"Philadelphia", zh:"Philadelphia"},
      {k:"D", en:"Austin", zh:"Austin"}
    ]},
    67: { part:3, ans:"A", set:"65-67", stem:{en:"What will the man most likely do this afternoon?", zh:"男子今天下午最可能做什麼？"}, opts:[
      {k:"A", en:"Create a report", zh:"製作一份報告"},
      {k:"B", en:"Tour a convention hall", zh:"參觀會議廳"},
      {k:"C", en:"Evaluate some applicants", zh:"評估一些應徵者"},
      {k:"D", en:"Listen to some examples", zh:"聽一些範例"}
    ]},
    68: { part:3, ans:"B", set:"68-70", graphic:"g68.png", stem:{en:"Look at the graphic. Whose information is incorrect?", zh:"看圖。誰的資訊有誤？"}, opts:[
      {k:"A", en:"Anne Harris", zh:"Anne Harris"},
      {k:"B", en:"Javier Marquez", zh:"Javier Marquez"},
      {k:"C", en:"Beth Adams", zh:"Beth Adams"},
      {k:"D", en:"Dave Lee", zh:"Dave Lee"}
    ]},
    69: { part:3, ans:"A", set:"68-70", stem:{en:"What does the man suggest?", zh:"男子建議什麼？"}, opts:[
      {k:"A", en:"Rescheduling an appointment", zh:"重新安排預約"},
      {k:"B", en:"Replacing a part", zh:"更換一個零件"},
      {k:"C", en:"Providing a refund", zh:"提供退款"},
      {k:"D", en:"Notifying a supervisor", zh:"通知主管"}
    ]},
    70: { part:3, ans:"D", set:"68-70", stem:{en:"According to the woman, what will a customer receive?", zh:"根據女子所說，顧客將會收到什麼？"}, opts:[
      {k:"A", en:"A newsletter", zh:"一份電子報"},
      {k:"B", en:"A confirmation code", zh:"一組確認碼"},
      {k:"C", en:"A coupon", zh:"一張優惠券"},
      {k:"D", en:"A free service", zh:"一項免費服務"}
    ]},

    // ===== Part 4（Q71–100）獨白 =====
    71: { part:4, ans:"C", set:"71-73", stem:{en:"What is the speaker mostly discussing?", zh:"說話者主要在討論什麼？"}, opts:[
      {k:"A", en:"A customer complaint", zh:"一則顧客投訴"},
      {k:"B", en:"Product reviews", zh:"產品評論"},
      {k:"C", en:"A company policy", zh:"一項公司政策"},
      {k:"D", en:"Sales strategies", zh:"銷售策略"}
    ]},
    72: { part:4, ans:"B", set:"71-73", stem:{en:"What will be provided to the listeners?", zh:"將提供給聽眾什麼？"}, opts:[
      {k:"A", en:"Name tags", zh:"名牌"},
      {k:"B", en:"Employee manuals", zh:"員工手冊"},
      {k:"C", en:"Clothing items", zh:"服飾用品"},
      {k:"D", en:"Gift cards", zh:"禮品卡"}
    ]},
    73: { part:4, ans:"C", set:"71-73", stem:{en:"What will happen over the next two weeks?", zh:"接下來兩週將發生什麼？"}, opts:[
      {k:"A", en:"Job interviews will be conducted.", zh:"將進行工作面試。"},
      {k:"B", en:"Training workshops will be held.", zh:"將舉辦訓練工作坊。"},
      {k:"C", en:"Customer feedback will be collected.", zh:"將收集顧客意見。"},
      {k:"D", en:"Marketing data will be reviewed.", zh:"將檢視行銷資料。"}
    ]},
    74: { part:4, ans:"D", set:"74-76", stem:{en:"Who most likely are the listeners?", zh:"聽眾最可能是誰？"}, opts:[
      {k:"A", en:"Restaurant customers", zh:"餐廳顧客"},
      {k:"B", en:"Event attendees", zh:"活動參加者"},
      {k:"C", en:"Airline passengers", zh:"航空乘客"},
      {k:"D", en:"Resort guests", zh:"度假村房客"}
    ]},
    75: { part:4, ans:"B", set:"74-76", stem:{en:"What is located on the second floor?", zh:"二樓有什麼？"}, opts:[
      {k:"A", en:"A dining facility", zh:"一間餐飲設施"},
      {k:"B", en:"A rental shop", zh:"一間租借店"},
      {k:"C", en:"A lounge area", zh:"一個休息區"},
      {k:"D", en:"A gift shop", zh:"一間禮品店"}
    ]},
    76: { part:4, ans:"B", set:"74-76", stem:{en:"What are some listeners asked to do?", zh:"一些聽眾被要求做什麼？"}, opts:[
      {k:"A", en:"Sign up for an activity", zh:"報名參加一項活動"},
      {k:"B", en:"Provide a description", zh:"提供描述"},
      {k:"C", en:"Submit a proof of purchase", zh:"出示購買證明"},
      {k:"D", en:"Show a photo identification", zh:"出示附照片證件"}
    ]},
    77: { part:4, ans:"C", set:"77-79", stem:{en:"Where does the speaker most likely work?", zh:"說話者最可能在哪裡工作？"}, opts:[
      {k:"A", en:"At a supermarket", zh:"在超市"},
      {k:"B", en:"At a hospital", zh:"在醫院"},
      {k:"C", en:"At a graphic design company", zh:"在平面設計公司"},
      {k:"D", en:"At an art gallery", zh:"在美術館"}
    ]},
    78: { part:4, ans:"A", set:"77-79", stem:{en:"Why is the speaker concerned?", zh:"說話者為什麼擔心？"}, opts:[
      {k:"A", en:"A client has not contacted him.", zh:"一位客戶尚未聯絡他。"},
      {k:"B", en:"A deadline has not been confirmed.", zh:"一個截止日期尚未確認。"},
      {k:"C", en:"A package was not sent to him.", zh:"一個包裹沒有寄給他。"},
      {k:"D", en:"A flight has been delayed.", zh:"一班航班延誤了。"}
    ]},
    79: { part:4, ans:"A", set:"77-79", stem:{en:"Why does the speaker say, \"I don't need anything else\"?", zh:"說話者為什麼說「我不需要其他東西了」？"}, opts:[
      {k:"A", en:"He is ready to begin an assignment.", zh:"他準備好開始一項任務。"},
      {k:"B", en:"He is unable to reply to an e-mail.", zh:"他無法回覆電子郵件。"},
      {k:"C", en:"He is excited about an event.", zh:"他對某活動感到興奮。"},
      {k:"D", en:"He is satisfied with a product.", zh:"他對某產品感到滿意。"}
    ]},
    80: { part:4, ans:"B", set:"80-82", stem:{en:"What can the software program be used for?", zh:"這個軟體程式可以用來做什麼？"}, opts:[
      {k:"A", en:"Finding locations", zh:"尋找地點"},
      {k:"B", en:"Filling out forms", zh:"填寫表格"},
      {k:"C", en:"Editing photographs", zh:"編輯照片"},
      {k:"D", en:"Sending messages", zh:"傳送訊息"}
    ]},
    81: { part:4, ans:"D", set:"80-82", stem:{en:"What is an advantage of the program?", zh:"這個程式有什麼優點？"}, opts:[
      {k:"A", en:"It is valid for multiple years.", zh:"它有效期長達多年。"},
      {k:"B", en:"It provides online assistance.", zh:"它提供線上協助。"},
      {k:"C", en:"It ensures quick service.", zh:"它確保快速服務。"},
      {k:"D", en:"It is updated regularly.", zh:"它定期更新。"}
    ]},
    82: { part:4, ans:"C", set:"80-82", stem:{en:"What can the listeners do by February 15?", zh:"聽眾在 2 月 15 日前可以做什麼？"}, opts:[
      {k:"A", en:"Watch an online demonstration", zh:"觀看線上示範"},
      {k:"B", en:"Download a trial version", zh:"下載試用版"},
      {k:"C", en:"Get a discount", zh:"取得折扣"},
      {k:"D", en:"Extend a warranty", zh:"延長保固"}
    ]},
    83: { part:4, ans:"C", set:"83-85", stem:{en:"Who most likely is the speaker?", zh:"說話者最可能是誰？"}, opts:[
      {k:"A", en:"An event planner", zh:"活動策劃人"},
      {k:"B", en:"A store owner", zh:"店主"},
      {k:"C", en:"A tour guide", zh:"導覽員"},
      {k:"D", en:"A local artist", zh:"當地藝術家"}
    ]},
    84: { part:4, ans:"A", set:"83-85", stem:{en:"What are the listeners not allowed to do?", zh:"聽眾不被允許做什麼？"}, opts:[
      {k:"A", en:"Take photographs", zh:"拍照"},
      {k:"B", en:"Eat food", zh:"吃東西"},
      {k:"C", en:"Touch exhibits", zh:"觸摸展品"},
      {k:"D", en:"Make noise", zh:"製造噪音"}
    ]},
    85: { part:4, ans:"B", set:"83-85", stem:{en:"According to the speaker, what will take place in the afternoon?", zh:"根據說話者，下午將進行什麼？"}, opts:[
      {k:"A", en:"A scheduled cleaning", zh:"一次預定的清潔"},
      {k:"B", en:"A fund-raising event", zh:"一場募款活動"},
      {k:"C", en:"An art lesson", zh:"一堂美術課"},
      {k:"D", en:"An exhibit opening", zh:"一場展覽開幕"}
    ]},
    86: { part:4, ans:"A", set:"86-88", stem:{en:"Who is Maria Lopez?", zh:"Maria Lopez 是誰？"}, opts:[
      {k:"A", en:"A writer", zh:"一位作家"},
      {k:"B", en:"A public official", zh:"一位公職人員"},
      {k:"C", en:"An athlete", zh:"一位運動員"},
      {k:"D", en:"A teacher", zh:"一位老師"}
    ]},
    87: { part:4, ans:"A", set:"86-88", stem:{en:"Why were funds donated?", zh:"為什麼捐出這些款項？"}, opts:[
      {k:"A", en:"To buy some materials", zh:"為了購買一些材料"},
      {k:"B", en:"To organize some classes", zh:"為了舉辦一些課程"},
      {k:"C", en:"To pay for a promotional campaign", zh:"為了支付一場宣傳活動"},
      {k:"D", en:"To create a community park", zh:"為了建造一座社區公園"}
    ]},
    88: { part:4, ans:"D", set:"86-88", stem:{en:"What does the speaker mean when she says, \"but there is a lot of work to be done on this facility\"?", zh:"說話者說「但這個設施還有很多工作要做」是什麼意思？"}, opts:[
      {k:"A", en:"A proposal may not get approved.", zh:"一項提案可能不會獲准。"},
      {k:"B", en:"A crew may not be large enough.", zh:"人手可能不夠。"},
      {k:"C", en:"A budget may have to be increased.", zh:"預算可能必須增加。"},
      {k:"D", en:"A project may take more time.", zh:"工程可能需要更多時間。"}
    ]},
    89: { part:4, ans:"C", set:"89-91", stem:{en:"Where is the speech most likely being given?", zh:"這場演說最可能在哪裡發表？"}, opts:[
      {k:"A", en:"At an awards ceremony", zh:"在頒獎典禮上"},
      {k:"B", en:"At a trade fair", zh:"在貿易展上"},
      {k:"C", en:"At a company party", zh:"在公司派對上"},
      {k:"D", en:"At a sports competition", zh:"在體育競賽上"}
    ]},
    90: { part:4, ans:"B", set:"89-91", stem:{en:"What does the speaker say about the Havana branch?", zh:"說話者對 Havana 分店說了什麼？"}, opts:[
      {k:"A", en:"It will hire additional employees.", zh:"它將招聘更多員工。"},
      {k:"B", en:"It has received positive feedback.", zh:"它收到了正面的回饋。"},
      {k:"C", en:"It will be sold to another company.", zh:"它將被賣給另一家公司。"},
      {k:"D", en:"It was featured on a television program.", zh:"它曾在電視節目中被介紹。"}
    ]},
    91: { part:4, ans:"A", set:"89-91", stem:{en:"What will probably happen next?", zh:"接下來可能發生什麼？"}, opts:[
      {k:"A", en:"A worker will give a speech.", zh:"一位員工將發表演說。"},
      {k:"B", en:"Certificates will be distributed.", zh:"將頒發證書。"},
      {k:"C", en:"A decision will be announced.", zh:"將宣布一項決定。"},
      {k:"D", en:"Serving staff will enter a room.", zh:"服務人員將進入房間。"}
    ]},
    92: { part:4, ans:"A", set:"92-94", stem:{en:"According to the speaker, what will start next Monday?", zh:"根據說話者，下週一將開始什麼？"}, opts:[
      {k:"A", en:"A renovation project", zh:"一項翻修工程"},
      {k:"B", en:"A board meeting", zh:"一場董事會議"},
      {k:"C", en:"A city tour", zh:"一趟城市導覽"},
      {k:"D", en:"A government inspection", zh:"一次政府檢查"}
    ]},
    93: { part:4, ans:"D", set:"92-94", stem:{en:"What does the speaker mean when she says, \"There will be signs\"?", zh:"說話者說「會有標示」是什麼意思？"}, opts:[
      {k:"A", en:"Attractions will be easy to access.", zh:"景點將容易抵達。"},
      {k:"B", en:"Facilities will be available for use.", zh:"設施將可供使用。"},
      {k:"C", en:"Visitors can be registered in advance.", zh:"訪客可事先登記。"},
      {k:"D", en:"Employees will be able to recognize areas.", zh:"員工將能辨認各區域。"}
    ]},
    94: { part:4, ans:"C", set:"92-94", stem:{en:"What should the listeners do if they have any questions?", zh:"如果聽眾有任何問題該怎麼做？"}, opts:[
      {k:"A", en:"Stop by a lobby desk", zh:"到大廳服務台"},
      {k:"B", en:"Check a map", zh:"查看地圖"},
      {k:"C", en:"E-mail a manager", zh:"寄電子郵件給經理"},
      {k:"D", en:"Call a team", zh:"打電話給某團隊"}
    ]},
    95: { part:4, ans:"B", set:"95-97", graphic:"g95.png", stem:{en:"Where is the talk most likely being given?", zh:"這段談話最可能在哪裡進行？"}, opts:[
      {k:"A", en:"In a manufacturing facility", zh:"在製造廠"},
      {k:"B", en:"In a convention booth", zh:"在展覽攤位"},
      {k:"C", en:"In a travel agency", zh:"在旅行社"},
      {k:"D", en:"In a private residence", zh:"在私人住宅"}
    ]},
    96: { part:4, ans:"D", set:"95-97", stem:{en:"Look at the graphic. Which product is the speaker introducing?", zh:"看圖。說話者正在介紹哪項產品？"}, opts:[
      {k:"A", en:"SwiftSimple", zh:"SwiftSimple"},
      {k:"B", en:"SwiftRelax", zh:"SwiftRelax"},
      {k:"C", en:"SwiftPlus", zh:"SwiftPlus"},
      {k:"D", en:"SwiftLux", zh:"SwiftLux"}
    ]},
    97: { part:4, ans:"D", set:"95-97", stem:{en:"What will some listeners probably do next?", zh:"一些聽眾接下來可能做什麼？"}, opts:[
      {k:"A", en:"Visit a Web site", zh:"瀏覽網站"},
      {k:"B", en:"Exit a venue", zh:"離開會場"},
      {k:"C", en:"Place an order", zh:"下單"},
      {k:"D", en:"Form a line", zh:"排隊"}
    ]},
    98: { part:4, ans:"B", set:"98-100", graphic:"g98.png", stem:{en:"According to the speaker, what did the listener do this morning?", zh:"根據說話者，聽者今天早上做了什麼？"}, opts:[
      {k:"A", en:"He printed a document.", zh:"他列印了一份文件。"},
      {k:"B", en:"He made an inquiry.", zh:"他做了詢問。"},
      {k:"C", en:"He went to an office.", zh:"他去了一間辦公室。"},
      {k:"D", en:"He requested a refund.", zh:"他要求退款。"}
    ]},
    99: { part:4, ans:"C", set:"98-100", stem:{en:"Look at the graphic. What information will be changed?", zh:"看圖。哪項資訊將被更改？"}, opts:[
      {k:"A", en:"5", zh:"5"},
      {k:"B", en:"15", zh:"15"},
      {k:"C", en:"25", zh:"25"},
      {k:"D", en:"20", zh:"20"}
    ]},
    100: { part:4, ans:"B", set:"98-100", stem:{en:"What does the speaker encourage the listener to do?", zh:"說話者鼓勵聽者做什麼？"}, opts:[
      {k:"A", en:"Return a phone call", zh:"回電"},
      {k:"B", en:"Use a free service", zh:"使用免費服務"},
      {k:"C", en:"Pay an additional fee", zh:"支付額外費用"},
      {k:"D", en:"Sign a card", zh:"簽一張卡片"}
    ]}
  }
};
