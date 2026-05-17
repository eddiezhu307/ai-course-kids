const lessons = [
  {
    id: 1,
    module: "A",
    moduleName: "认识 AI",
    title: "我的 AI 同桌：AI 到底是什么？",
    scene: "同学说“AI 什么都会”，它真的什么都会吗？",
    concept: "AI、生成式 AI、数据、模式、概率预测。",
    output: "《我的 AI 使用说明书》",
    activities: [
      "老师说上半句，学生猜下半句，理解“根据前文预测”。",
      "对比搜索引擎、计算器、AI 对话工具分别适合做什么。",
      "让 AI 用 3 种方式解释“为什么天空是蓝色的”。"
    ],
    prompt: "请用适合 10 岁学生理解的方式解释生成式 AI。要求包含一个生活类比、一个优点、一个容易出错的地方。",
    safety: "AI 说得像真的，不代表一定是真的。"
  },
  {
    id: 2,
    module: "A",
    moduleName: "学习伙伴",
    title: "作业卡住了怎么办？",
    scene: "一道数学题不会，直接问 AI 要答案可以吗？",
    concept: "分步推理、提示词约束、答案验证。",
    output: "一张“不会做题求助卡”",
    activities: [
      "老师示范错误问法：“告诉我答案。”",
      "学生改成好问法：“不要直接给答案，请一步步提示我。”",
      "让 AI 出一道同类题，再由学生独立完成。"
    ],
    prompt: "你是一位耐心的老师。请不要直接告诉我答案。我卡在这道题：…… 请先问我一个问题，引导我想下一步。如果我回答错了，请指出原因，并给一个类似例子。",
    safety: "AI 可以讲思路，但作业理解必须由自己完成。"
  },
  {
    id: 3,
    module: "A",
    moduleName: "学习伙伴",
    title: "英语不会说怎么办？",
    scene: "遇到外国朋友、英语课口语展示，不知道怎么开口。",
    concept: "语言模型、语境、角色扮演、反馈。",
    output: "3 分钟 AI 英语情景对话",
    activities: [
      "选择点餐、问路、自我介绍、校园导览等场景。",
      "AI 扮演对话伙伴，学生进行 3 轮对话。",
      "AI 帮学生把中式表达改成自然表达。"
    ],
    prompt: "Please act as a friendly English speaking partner. I am a Chinese student preparing a campus tour. Ask me one simple question at a time, correct my sentence gently, and give me a more natural expression.",
    safety: "不要把真实学校、住址、电话号码放进对话。"
  },
  {
    id: 4,
    module: "A",
    moduleName: "学习伙伴",
    title: "复习总是乱怎么办？",
    scene: "快考试了，书翻了很多遍还是记不住。",
    concept: "知识结构化、错题归因、间隔复习。",
    output: "个人复习闯关地图",
    activities: [
      "把一个单元知识点交给 AI，生成知识树。",
      "输入错题原因，归类成概念不懂、计算粗心、审题不清。",
      "生成 7 天复习计划，并安排自测。"
    ],
    prompt: "请把这个单元整理成一张复习闯关地图：…… 要包含知识树、易错点、每天 20 分钟的 7 天复习计划和 5 道自测题。",
    safety: "复习计划要根据真实时间调整，不要把 AI 计划当成必须完成的命令。"
  },
  {
    id: 5,
    module: "B",
    moduleName: "表达判断",
    title: "作文没灵感怎么办？",
    scene: "作文题目发下来，大脑一片空白。",
    concept: "发散思维、故事结构、风格改写。",
    output: "故事大纲或作文草稿",
    activities: [
      "AI 生成 10 个选题，学生挑 1 个最有个人经历的。",
      "用人物、目标、困难、转折、结尾搭故事骨架。",
      "AI 只改语言，不替代个人经历。"
    ],
    prompt: "请帮我围绕“第一次独立完成一件事”想 8 个作文角度。不要直接写全文。每个角度给出人物、困难、转折和结尾。",
    safety: "真实体验必须来自自己，AI 负责整理和润色。"
  },
  {
    id: 6,
    module: "B",
    moduleName: "表达判断",
    title: "上台演讲紧张怎么办？",
    scene: "班会发言、竞选班干部、社团展示。",
    concept: "受众意识、结构化表达、模拟问答。",
    output: "1 分钟演讲稿和答辩卡",
    activities: [
      "用 AI 把想法整理成开场、三点内容、结尾。",
      "AI 扮演同学或老师，提出 3 个可能问题。",
      "学生进行 1 分钟演讲彩排。"
    ],
    prompt: "我要做 1 分钟班会发言，主题是“如何让班级更安静地午休”。请帮我写一个自然、不夸张、适合学生表达的讲稿，并附 3 个可能被问到的问题。",
    safety: "演讲稿要像自己的语言，不能背一段完全不像自己的文字。"
  },
  {
    id: 7,
    module: "B",
    moduleName: "表达判断",
    title: "网上信息是真的吗？",
    scene: "看到短视频、新闻、截图，不知道真假。",
    concept: "AI 幻觉、事实核查、信息来源、证据链。",
    output: "信息真假侦探报告",
    activities: [
      "给学生 3 条真假混合的信息。",
      "让 AI 先判断，再要求它说明依据。",
      "学生反查来源，区分观点、事实、广告、谣言。"
    ],
    prompt: "请帮我核查这条信息是否可信：…… 请分成“需要核查的关键点”“可能的可靠来源”“目前不能下结论的地方”，不要编造来源。",
    safety: "AI 可以列核查方向，最终判断要看可靠来源。"
  },
  {
    id: 8,
    module: "B",
    moduleName: "表达判断",
    title: "我也能做校园小记者",
    scene: "采访老师、同学或社团成员，不知道问什么。",
    concept: "采访提纲、摘要、标题、语气。",
    output: "校园采访稿或播客脚本",
    activities: [
      "AI 生成 10 个采访问题，学生删改成 6 个。",
      "模拟采访后，把记录交给 AI 整理成稿。",
      "讨论标题党和真实表达的区别。"
    ],
    prompt: "我要采访学校合唱社成员，主题是“为什么坚持练习”。请生成 10 个开放式问题，再帮我把它们按轻松开场、深入追问、结尾总结排序。",
    safety: "采访稿不能歪曲受访者原意，引用前要征得同意。"
  },
  {
    id: 9,
    module: "C",
    moduleName: "多媒体创作",
    title: "给班级做一张定制海报",
    scene: "运动会、读书节、社团招新，需要一张好看的宣传海报。",
    concept: "视觉提示词、构图、色彩、文字层级、图文关系。",
    output: "一张班级活动海报",
    activities: [
      "拆解一张海报：主标题、副标题、时间地点、行动信息。",
      "写图像提示词：主题、主体、风格、色彩、场景、比例。",
      "生成背景图后，再用排版工具加文字。"
    ],
    prompt: "主题：校园科技节海报背景。主体：学生在操场和实验室之间探索 AI、机器人、音乐和艺术。风格：明亮、青春、现代插画。构图：中间留大标题区域，底部留活动信息区域。不要出现真实学校名称和复杂小字。",
    safety: "AI 生成图适合做视觉背景，重要文字建议后期人工排版。"
  },
  {
    id: 10,
    module: "C",
    moduleName: "多媒体创作",
    title: "为校园定制一首歌",
    scene: "校庆、毕业季、运动会、班级纪念日。",
    concept: "歌词结构、旋律风格、节奏、版权意识。",
    output: "校园主题歌歌词与音乐方案",
    activities: [
      "采集校园关键词：操场、铃声、树、社团、朋友、梦想。",
      "AI 生成歌词初稿，学生改成更像自己学校的语言。",
      "选择歌曲风格：民谣、流行、说唱、合唱、电子。"
    ],
    prompt: "请为一所中学校园创作一首积极、温暖、有少年感的校园歌曲歌词。结构：主歌 1、预副歌、副歌、主歌 2、副歌。关键词：操场、图书馆、铃声、朋友、好奇心、未来。",
    safety: "讨论 AI 生成音乐能不能商用，以及署名怎么写。"
  },
  {
    id: 11,
    module: "C",
    moduleName: "多媒体创作",
    title: "把知识变成漫画或短视频",
    scene: "科学知识很抽象，讲给别人听很难。",
    concept: "分镜、镜头语言、知识可视化。",
    output: "6 格漫画或短视频分镜",
    activities: [
      "选择水循环、光合作用、重力、AI 如何学习等知识点。",
      "AI 生成 6 格漫画脚本或 30 秒短视频分镜。",
      "学生检查科学准确性，并设计画面。"
    ],
    prompt: "请把“AI 如何根据例子学习”改编成 6 格漫画脚本。每格包含画面、人物动作、旁白和需要核查的科学点。语言要适合小学生理解。",
    safety: "知识类作品要检查科学准确性，不能为了好玩乱改概念。"
  },
  {
    id: 12,
    module: "C",
    moduleName: "多媒体创作",
    title: "设计我的 AI 学习伙伴",
    scene: "希望有一个能提醒、鼓励、陪练的学习角色。",
    concept: "角色设定、人格一致性、系统提示词。",
    output: "AI 学习伙伴角色卡",
    activities: [
      "设计角色：名字、性格、擅长科目、说话风格、禁区。",
      "让 AI 扮演该角色陪练 5 分钟。",
      "修改角色卡，让它更有帮助但不过度代替自己。"
    ],
    prompt: "请扮演我的 AI 学习伙伴。你的性格是耐心、简洁、会鼓励。你不能直接替我完成作业，只能提示思路、追问我、帮我复盘。请先问我今天想学习什么。",
    safety: "AI 可以陪伴学习，但不能代替真实老师、家长和朋友。"
  },
  {
    id: 13,
    module: "D",
    moduleName: "项目展示",
    title: "用 AI 解决一个校园小问题",
    scene: "排队太久、教室太乱、书包太重、垃圾分类不清楚。",
    concept: "问题定义、用户需求、方案生成、可行性评估。",
    output: "校园问题解决方案一页纸",
    activities: [
      "学生列出校园小烦恼。",
      "用 AI 把抱怨改写成可解决的问题。",
      "生成 3 个方案，按成本、难度、影响力打分。"
    ],
    prompt: "请帮我把这个校园烦恼改写成一个可解决的问题：…… 再生成 3 个方案，并按成本、执行难度、影响范围给出 1-5 分评分。",
    safety: "校园方案要尊重他人，不能用 AI 生成伤害或羞辱同学的内容。"
  },
  {
    id: 14,
    module: "D",
    moduleName: "项目展示",
    title: "数据会说话",
    scene: "做一次班级小调查，不知道怎么分析。",
    concept: "数据采集、图表表达、结论边界。",
    output: "调查图表与解读页",
    activities: [
      "设计 5 个调查问题。",
      "收集班级小样本数据。",
      "让 AI 帮忙总结趋势，但学生检查是否过度推断。"
    ],
    prompt: "这是我们班关于午休体验的小调查数据：…… 请帮我总结 3 个趋势、2 个可能原因和 1 个不能轻易下结论的地方。",
    safety: "不要收集敏感个人信息，样本小的时候不能说成全校都这样。"
  },
  {
    id: 15,
    module: "D",
    moduleName: "项目展示",
    title: "AI 作品展策展课",
    scene: "16 课快结束了，如何把作品展示得更专业？",
    concept: "策展逻辑、观众路径、作品说明。",
    output: "个人作品展板",
    activities: [
      "整理作品：学习类、表达类、视觉类、项目类。",
      "AI 帮每个作品写 80 字说明，学生改成自己的口吻。",
      "设计展板标题、导览词和互动问题。"
    ],
    prompt: "请帮我为这个 AI 课程作品写 80 字展板说明：…… 说明要包含作品目标、AI 帮助、我自己的修改和观众可以关注的亮点。",
    safety: "作品说明要诚实，不夸大 AI 或自己的贡献。"
  },
  {
    id: 16,
    module: "D",
    moduleName: "项目展示",
    title: "毕业项目路演：校园 AI 创意节",
    scene: "向同学、老师、家长展示“我如何使用 AI 解决问题和创作”。",
    concept: "项目表达、复盘、AI 责任声明。",
    output: "3 分钟项目路演",
    activities: [
      "3 分钟路演：问题、方法、作品、AI 帮助、我的贡献。",
      "观众提问，学生答辩。",
      "完成个人 AI 学习宣言。"
    ],
    prompt: "请帮我准备一个 3 分钟项目路演提纲。项目主题是：…… 结构包含问题、我尝试的方法、AI 帮助了什么、我自己修改了什么、最终作品和下一步。",
    safety: "结课标准是能清楚说明“AI 帮我做了什么，我自己判断和修改了什么”。"
  }
];

const moduleArt = {
  A: "assets/scene-homework-photo.jpg",
  B: "assets/scene-safety-photo.jpg",
  C: "assets/scene-creative-photo.jpg",
  D: "assets/scene-project-photo.jpg"
};

const presets = {
  homework: {
    role: "你是一位耐心的老师，会用提问引导学生思考。",
    task: "请帮助我理解一道题，但不要直接告诉我答案。",
    context: "我现在卡在这一步：我不知道应该先找哪个条件。",
    format: "请一次只问我一个问题，并在我回答后再继续提示。",
    standard: "要求解释简单、适合 10-12 岁学生；如果我答错，请指出原因并给类似例子。"
  },
  english: {
    role: "You are a friendly English speaking partner for a Chinese student.",
    task: "Please practice a campus tour conversation with me.",
    context: "I know some basic words, but I am afraid of making mistakes.",
    format: "Ask one short question at a time. Correct my sentence gently.",
    standard: "Use simple English. Give me one more natural expression after each answer."
  },
  poster: {
    role: "你是一位校园活动视觉设计顾问。",
    task: "请帮我写一条 AI 图像生成提示词，用来生成校园科技节海报背景。",
    context: "活动面向 9-16 岁学生，主题包含 AI、音乐、艺术和科学实验。",
    format: "请按主题、主体、风格、色彩、构图、不要出现的内容输出。",
    standard: "画面明亮、青春、现代；中间留标题区域，底部留活动信息区域。"
  },
  song: {
    role: "你是一位了解青少年表达的校园歌曲创作顾问。",
    task: "请帮我创作一版校园主题歌歌词初稿。",
    context: "歌曲用于校庆或毕业季，关键词有操场、铃声、朋友、好奇心、未来。",
    format: "请输出主歌 1、预副歌、副歌、主歌 2、副歌。",
    standard: "中文歌词，积极温暖，有少年感，不要太成人化，不要模仿某位真实歌手。"
  },
  speech: {
    role: "你是一位擅长帮助学生公开表达的演讲教练。",
    task: "请帮我准备一段 1 分钟班会发言。",
    context: "主题是如何让班级午休更安静，我希望表达自然、不像背作文。",
    format: "请给出开场、三点内容、结尾，以及 3 个可能被问到的问题。",
    standard: "语气真诚、简短、有行动建议，适合学生上台表达。"
  }
};

const cases = {
  homework: {
    title: "作业卡住",
    weak: "这题答案是什么？",
    weakProblem: "AI 很可能直接给答案，孩子看起来完成了作业，其实没有形成理解。",
    strong: "请不要直接告诉我答案。请先帮我找出题目中的已知条件，再问我下一步该怎么做。如果我回答错了，请提醒我错在哪里。",
    outcome: ["保留学生思考空间", "把 AI 变成引导者", "更容易发现自己卡在哪一步"]
  },
  english: {
    title: "英语口语",
    weak: "帮我写一段英语对话。",
    weakProblem: "得到的是一段静态文本，学生可能还是不敢开口。",
    strong: "Please role-play as a new student visiting my school. Ask me one question at a time. After I answer, correct one mistake and give me a natural expression.",
    outcome: ["形成真实互动", "每轮只改一个错误", "适合课堂口语陪练"]
  },
  poster: {
    title: "校园海报",
    weak: "帮我做一张科技节海报。",
    weakProblem: "主题、风格、构图和文字区域都不清楚，生成结果容易混乱。",
    strong: "生成校园科技节海报背景：学生探索 AI、机器人、音乐和艺术；现代青春插画；蓝绿主色配橙色点缀；中间留标题区域；底部留活动信息区域；不出现真实学校名和复杂小字。",
    outcome: ["画面用途明确", "保留排版空间", "降低错误文字风险"]
  },
  song: {
    title: "校园歌曲",
    weak: "写一首好听的校园歌。",
    weakProblem: "“好听”太笼统，歌词可能成人化，也可能失去校园真实细节。",
    strong: "为 9-16 岁学生写一首积极温暖的校园歌曲歌词。结构为主歌、预副歌、副歌、主歌、副歌。关键词：操场、图书馆、铃声、朋友、好奇心、未来。不要模仿真实歌手。",
    outcome: ["结构清楚", "更有校园细节", "规避模仿和版权风险"]
  }
};

const quiz = [
  {
    q: "为了让 AI 做出更真实的校园海报，可以上传同学的清晰正脸照片。",
    answer: "false",
    feedback: "不建议上传未成年人清晰正脸照片。可以用不包含真实身份的插画风背景或后期排版。"
  },
  {
    q: "作业不会时，可以让 AI 直接给最终答案，然后自己照抄。",
    answer: "false",
    feedback: "AI 适合提示思路、讲类似例题、检查步骤。直接照抄会绕过真正的学习。"
  },
  {
    q: "AI 说某条新闻是真的，也需要继续看来源、时间和证据。",
    answer: "true",
    feedback: "正确。AI 可能说错或编造细节，重要信息要核查可靠来源。"
  },
  {
    q: "用 AI 辅助写歌、做海报时，最好能说明 AI 帮了什么、自己改了什么。",
    answer: "true",
    feedback: "正确。这是作品署名、版权意识和学习复盘的一部分。"
  },
  {
    q: "AI 学习伙伴可以鼓励我，但不能替代老师、家长和真实朋友。",
    answer: "true",
    feedback: "正确。AI 可以陪练和提醒，但重要决定和情绪支持仍需要真实的人际关系。"
  }
];

const portfolioItems = [
  ["AI 使用说明书", "写清楚 AI 擅长什么、不擅长什么、我该怎么问。"],
  ["不会做题求助卡", "沉淀 3 条“不要直接给答案”的求助句式。"],
  ["英语情景对话", "完成 3 分钟校园导览或日常交流脚本。"],
  ["复习闯关地图", "把一个单元变成知识树、易错点和 7 天计划。"],
  ["作文或故事大纲", "用个人经历完成一份可继续写作的大纲。"],
  ["演讲稿和答辩卡", "准备 1 分钟表达和 3 个可能问题。"],
  ["信息真假侦探报告", "记录核查关键点、可靠来源和不能下结论之处。"],
  ["校园采访稿", "完成采访提纲、记录整理和标题优化。"],
  ["班级活动海报", "生成背景，后期排版重要文字。"],
  ["校园主题歌方案", "包含歌词、风格选择和版权说明。"],
  ["漫画或短视频分镜", "把一个知识点改成 6 格漫画或 30 秒分镜。"],
  ["AI 学习伙伴角色卡", "写明性格、能力、说话方式和禁区。"],
  ["校园问题解决方案", "用成本、难度、影响力评估 3 个方案。"],
  ["调查图表与解读页", "展示小调查数据、趋势和结论边界。"],
  ["个人作品展板", "给作品写说明、导览词和互动问题。"],
  ["3 分钟项目路演稿", "讲清问题、过程、AI 帮助、个人贡献和下一步。"]
];

const routePlans = {
  junior: {
    study: ["先做第 1-4 课，重点练“不会做题怎么问”和“复习地图”。", "课堂多用模板卡和口头表达，减少一次性长文本输入。"],
    expression: ["先做第 5-8 课，重点用故事、演讲和采访建立表达信心。", "每节课保留 3 分钟同伴分享，让孩子说出自己的修改理由。"],
    creative: ["先做第 9-12 课，海报、歌曲、漫画和角色卡最容易让低龄学生有成就感。", "提醒孩子文字和事实要人工检查，图像不要包含真实身份。"],
    project: ["用第 13-16 课做轻量项目，问题可以从班级小烦恼开始。", "路演控制在 1-2 分钟，用作品说话，不追求复杂数据。"]
  },
  senior: {
    study: ["第 2、4、7、14 课可以加深，训练答案验证、错题归因和数据边界。", "要求学生比较 AI 给出的两种方法，并说明自己选择哪一种。"],
    expression: ["第 5-8 课加入受众分析、标题伦理和模拟答辩。", "让学生保留修改记录，展示从 AI 初稿到个人版本的变化。"],
    creative: ["第 9-12 课可以升级为完整创意包：海报、歌词、分镜、角色设定一起做。", "加入版权、署名、风格参考和商用边界讨论。"],
    project: ["第 13-16 课做完整项目制学习，包含调研、方案、作品展板和 3 分钟路演。", "评分重点放在问题真实、证据充分、个人贡献清晰。"]
  }
};

const state = {
  filter: "all",
  search: "",
  goal: "study",
  completed: new Set(JSON.parse(localStorage.getItem("completedLessons") || "[]")),
  portfolio: new Set(JSON.parse(localStorage.getItem("portfolioItems") || "[]"))
};

const lessonGrid = document.querySelector("#lessonGrid");
const progressNumber = document.querySelector("#progressNumber");
const progressBar = document.querySelector("#progressBar");
const dialog = document.querySelector("#lessonDialog");
const dialogContent = document.querySelector("#dialogContent");
const toast = document.querySelector("#toast");

function saveProgress() {
  localStorage.setItem("completedLessons", JSON.stringify([...state.completed]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function updateProgress() {
  const count = state.completed.size;
  progressNumber.textContent = `${count}/16`;
  progressBar.style.width = `${(count / lessons.length) * 100}%`;
}

function lessonMatches(lesson) {
  const byModule = state.filter === "all" || lesson.module === state.filter;
  const text = `${lesson.title} ${lesson.scene} ${lesson.concept} ${lesson.output} ${lesson.activities.join(" ")} ${lesson.prompt}`.toLowerCase();
  const bySearch = !state.search || text.includes(state.search.toLowerCase());
  return byModule && bySearch;
}

function renderLessons() {
  const visible = lessons.filter(lessonMatches);
  lessonGrid.innerHTML = "";

  if (!visible.length) {
    lessonGrid.innerHTML = `<div class="empty-state">没有找到对应课程。可以换一个关键词试试，比如“英语”“海报”“歌曲”。</div>`;
    return;
  }

  visible.forEach((lesson) => {
    const done = state.completed.has(lesson.id);
    const card = document.createElement("article");
    card.className = `lesson-card module-${lesson.module}${done ? " is-done" : ""}`;
    card.innerHTML = `
      <div class="lesson-top">
        <span class="lesson-num">${lesson.id}</span>
        <span class="lesson-badge">${lesson.moduleName}</span>
      </div>
      <img class="lesson-illustration" src="${moduleArt[lesson.module]}" alt="" loading="lazy">
      <h3>${lesson.title}</h3>
      <p>${lesson.scene}</p>
      <div class="lesson-meta">
        <span><strong>科普点</strong>${lesson.concept}</span>
        <span><strong>作品</strong>${lesson.output}</span>
      </div>
      <div class="lesson-actions">
        <button class="btn small" type="button" data-open="${lesson.id}">详情</button>
        <button class="btn small ${done ? "ghost" : "primary"}" type="button" data-toggle="${lesson.id}">${done ? "已点亮" : "点亮"}</button>
      </div>
    `;
    lessonGrid.appendChild(card);
  });
}

function moduleDescription(module) {
  const copy = {
    A: "从认识 AI、作业求助、英语陪练和复习地图开始，把 AI 变成学习伙伴。",
    B: "训练写作、演讲、采访和信息核查，让孩子表达更清楚，也更会判断。",
    C: "把 AI 用在海报、歌曲、漫画、角色卡里，形成多媒体作品。",
    D: "从校园问题、数据调查到作品展和路演，完成项目制学习闭环。"
  };
  return copy[module];
}

function openLesson(id) {
  const lesson = lessons.find((item) => item.id === id);
  if (!lesson) return;
  const done = state.completed.has(id);

  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <span class="lesson-badge">第 ${lesson.id} 课 · ${lesson.moduleName}</span>
      <h2>${lesson.title}</h2>
      <p>${moduleDescription(lesson.module)}</p>
    </div>
    <div class="dialog-body">
      <div class="detail-grid">
        <section class="detail-box">
          <h3>真实生活场景</h3>
          <p>${lesson.scene}</p>
        </section>
        <section class="detail-box">
          <h3>AI 科普点</h3>
          <p>${lesson.concept}</p>
        </section>
        <section class="detail-box">
          <h3>课堂活动</h3>
          <ul>${lesson.activities.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-box">
          <h3>学生作品</h3>
          <p>${lesson.output}</p>
        </section>
      </div>
      <section class="detail-box">
        <h3>推荐提示词</h3>
        <pre>${lesson.prompt}</pre>
      </section>
      <section class="detail-box">
        <h3>安全提醒</h3>
        <p>${lesson.safety}</p>
      </section>
      <div class="dialog-actions">
        <button class="btn primary" type="button" data-dialog-toggle="${lesson.id}">${done ? "取消点亮" : "点亮这节课"}</button>
        <button class="btn ghost" type="button" data-use-prompt="${lesson.id}">放进提示词训练器</button>
      </div>
    </div>
  `;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function toggleLesson(id) {
  if (state.completed.has(id)) {
    state.completed.delete(id);
    showToast("已取消点亮");
  } else {
    state.completed.add(id);
    showToast("课程已点亮");
  }
  saveProgress();
  updateProgress();
  renderLessons();
}

function updateRoute() {
  const age = document.querySelector("#ageSelect").value;
  const plan = routePlans[age][state.goal];
  const label = document.querySelector(`.chip[data-goal="${state.goal}"]`).textContent;
  document.querySelector("#routeOutput").innerHTML = `
    <strong>${label}路线建议</strong>
    <p>${plan[0]}</p>
    <p>${plan[1]}</p>
  `;
}

function loadPreset(key) {
  const preset = presets[key];
  document.querySelector("#roleInput").value = preset.role;
  document.querySelector("#taskInput").value = preset.task;
  document.querySelector("#contextInput").value = preset.context;
  document.querySelector("#formatInput").value = preset.format;
  document.querySelector("#standardInput").value = preset.standard;
  updatePrompt();
}

function updatePrompt() {
  const role = document.querySelector("#roleInput").value.trim();
  const task = document.querySelector("#taskInput").value.trim();
  const context = document.querySelector("#contextInput").value.trim();
  const format = document.querySelector("#formatInput").value.trim();
  const standard = document.querySelector("#standardInput").value.trim();
  const fields = [role, task, context, format, standard];
  const filled = fields.filter(Boolean).length;
  const enoughDetail = fields.filter((value) => value.length >= 18).length;
  const score = Math.min(100, Math.round((filled * 14) + (enoughDetail * 6)));

  document.querySelector("#scoreBar").style.width = `${score}%`;
  document.querySelector("#scoreText").textContent = `${score}%`;
  document.querySelector("#promptOutput").textContent = `角色：${role || "……"}\n任务：${task || "……"}\n背景：${context || "……"}\n格式：${format || "……"}\n标准：${standard || "……"}`;
}

function renderCase(key) {
  const item = cases[key];
  document.querySelector("#caseBoard").innerHTML = `
    <article class="case-column">
      <header>
        <h3>普通问法</h3>
        <span>${item.title}案例</span>
      </header>
      <div class="case-content">
        <pre>${item.weak}</pre>
        <p>${item.weakProblem}</p>
      </div>
    </article>
    <article class="case-column">
      <header>
        <h3>更好的问法</h3>
        <span>把任务、边界和标准说清楚</span>
      </header>
      <div class="case-content">
        <pre>${item.strong}</pre>
        <ul>${item.outcome.map((point) => `<li>${point}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function renderQuiz() {
  document.querySelector("#quizList").innerHTML = quiz.map((item, index) => `
    <fieldset class="quiz-question" data-index="${index}">
      <h3>${index + 1}. ${item.q}</h3>
      <div class="quiz-options">
        <label><input type="radio" name="q${index}" value="true"> 对</label>
        <label><input type="radio" name="q${index}" value="false"> 错</label>
      </div>
      <p class="quiz-feedback"></p>
    </fieldset>
  `).join("");
}

function checkQuiz(event) {
  event.preventDefault();
  let score = 0;
  quiz.forEach((item, index) => {
    const block = document.querySelector(`.quiz-question[data-index="${index}"]`);
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    block.classList.remove("is-right", "is-wrong");
    const feedback = block.querySelector(".quiz-feedback");

    if (!checked) {
      feedback.textContent = "这题还没有选择。";
      block.classList.add("is-wrong");
      return;
    }

    if (checked.value === item.answer) {
      score += 1;
      block.classList.add("is-right");
      feedback.textContent = `答对了。${item.feedback}`;
    } else {
      block.classList.add("is-wrong");
      feedback.textContent = `再想想。${item.feedback}`;
    }
  });
  document.querySelector("#quizResult").textContent = `本次得分：${score}/${quiz.length}。${score === quiz.length ? "很好，可以给同学讲安全规则了。" : "错题正适合拿来讨论。"} `;
}

function renderPortfolio() {
  const list = document.querySelector("#portfolioList");
  list.innerHTML = portfolioItems.map(([name, desc], index) => {
    const checked = state.portfolio.has(index);
    return `
      <label class="portfolio-item">
        <input type="checkbox" data-portfolio="${index}" ${checked ? "checked" : ""}>
        <span><strong>${name}</strong><span>${desc}</span></span>
      </label>
    `;
  }).join("");
}

function savePortfolio() {
  localStorage.setItem("portfolioItems", JSON.stringify([...state.portfolio]));
}

document.querySelector(".nav-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector("#siteNav");
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("is-open", !expanded);
});

document.querySelector("#siteNav").addEventListener("click", () => {
  document.querySelector("#siteNav").classList.remove("is-open");
  document.querySelector(".nav-toggle").setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.filter = button.dataset.filter;
    renderLessons();
  });
});

document.querySelector("#lessonSearch").addEventListener("input", (event) => {
  state.search = event.target.value.trim();
  renderLessons();
});

lessonGrid.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open]");
  const toggleButton = event.target.closest("[data-toggle]");
  if (openButton) openLesson(Number(openButton.dataset.open));
  if (toggleButton) toggleLesson(Number(toggleButton.dataset.toggle));
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
  const closeButton = event.target.closest(".dialog-close");
  const toggleButton = event.target.closest("[data-dialog-toggle]");
  const usePromptButton = event.target.closest("[data-use-prompt]");
  if (closeButton) dialog.close();
  if (toggleButton) {
    toggleLesson(Number(toggleButton.dataset.dialogToggle));
    dialog.close();
  }
  if (usePromptButton) {
    const lesson = lessons.find((item) => item.id === Number(usePromptButton.dataset.usePrompt));
    document.querySelector("#roleInput").value = "你是一位适合 9-16 岁学生的 AI 学习教练。";
    document.querySelector("#taskInput").value = `请围绕课程“${lesson.title}”帮助我完成课堂任务。`;
    document.querySelector("#contextInput").value = lesson.scene;
    document.querySelector("#formatInput").value = "请按步骤、示例、我的练习、检查清单输出。";
    document.querySelector("#standardInput").value = `${lesson.safety} 作品目标：${lesson.output}`;
    updatePrompt();
    dialog.close();
    document.querySelector("#prompt").scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector("#ageSelect").addEventListener("change", updateRoute);
document.querySelectorAll(".chip").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    state.goal = button.dataset.goal;
    updateRoute();
  });
});

document.querySelector("#scenarioPreset").addEventListener("change", (event) => loadPreset(event.target.value));
document.querySelectorAll(".prompt-fields textarea").forEach((field) => field.addEventListener("input", updatePrompt));
document.querySelector("#copyPromptBtn").addEventListener("click", async () => {
  const text = document.querySelector("#promptOutput").textContent;
  try {
    await navigator.clipboard.writeText(text);
    showToast("提示词已复制");
  } catch {
    showToast("浏览器不允许直接复制，可以手动选中文本");
  }
});

document.querySelectorAll(".case-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".case-tab").forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    renderCase(button.dataset.case);
  });
});

document.querySelector("#quizForm").addEventListener("submit", checkQuiz);
document.querySelector("#resetQuizBtn").addEventListener("click", () => {
  document.querySelector("#quizForm").reset();
  document.querySelectorAll(".quiz-question").forEach((block) => {
    block.classList.remove("is-right", "is-wrong");
    block.querySelector(".quiz-feedback").textContent = "";
  });
  document.querySelector("#quizResult").textContent = "";
});

document.querySelector("#portfolioList").addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-portfolio]");
  if (!checkbox) return;
  const index = Number(checkbox.dataset.portfolio);
  if (checkbox.checked) {
    state.portfolio.add(index);
  } else {
    state.portfolio.delete(index);
  }
  savePortfolio();
});

document.querySelector("#clearPortfolioBtn").addEventListener("click", () => {
  state.portfolio.clear();
  savePortfolio();
  renderPortfolio();
  showToast("作品包清单已清空");
});

updateRoute();
loadPreset("homework");
renderCase("homework");
renderQuiz();
renderPortfolio();
updateProgress();
renderLessons();
