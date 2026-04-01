// ===================== DATA =====================
var LOU_PAN = [
  {id:'lp01',name:'龙华·金贸府',district:'龙华区',price:21000,wy:3.8,tc:450,xq:'海口中学',type:'loupan',date:'2026-03-28',views:328,desc:'CBD核心地段，配套齐全，拎包入住'},
  {id:'lp02',name:'滨海御景',district:'龙华区',price:18500,wy:2.8,tc:380,xq:'龙华小学',type:'loupan',date:'2026-03-25',views:256,desc:'海景房，品质小区，环境优美'},
  {id:'lp03',name:'秀英·中央公园',district:'秀英区',price:16800,wy:2.5,tc:320,xq:'秀英学校',type:'loupan',date:'2026-03-27',views:412,desc:'公园环绕，生态宜居，交通便利'},
  {id:'lp04',name:'美兰·江东壹号',district:'美兰区',price:19500,wy:3.2,tc:400,xq:'美兰外国语',type:'loupan',date:'2026-03-26',views:389,desc:'江景豪宅，智慧社区，品牌物业'},
  {id:'lp05',name:'琼山·文锦华庭',district:'琼山区',price:15200,wy:2.2,tc:280,xq:'琼山中学',type:'loupan',date:'2026-03-24',views:267,desc:'学区房首选，教育资源优质'},
  {id:'lp06',name:'龙华·世贸雅居',district:'龙华区',price:23500,wy:4.0,tc:550,xq:'海口中学',type:'loupan',date:'2026-03-22',views:445,desc:'商业中心，投资自住两相宜'},
  {id:'lp07',name:'秀英·西海岸公馆',district:'秀英区',price:17800,wy:2.6,tc:350,xq:'海南侨中',type:'loupan',date:'2026-03-20',views:312,desc:'西海岸一线海景，度假养老首选'},
  {id:'lp08',name:'美兰·桂林洋花园',district:'美兰区',price:14300,wy:2.0,tc:250,xq:'桂林洋学校',type:'loupan',date:'2026-03-18',views:198,desc:'性价比最高，刚需首选'},
  {id:'lp09',name:'琼山·椰海新城',district:'琼山区',price:13800,wy:1.8,tc:220,xq:'琼山一小',type:'loupan',date:'2026-03-15',views:156,desc:'大型社区，生活配套完善'},
  {id:'lp10',name:'龙华·金融街壹号',district:'龙华区',price:28000,wy:5.0,tc:800,xq:'海口中学',type:'loupan',date:'2026-03-12',views:523,desc:'顶级豪宅，身份象征'},
  {id:'lp11',name:'秀英·永兴度假村',district:'秀英区',price:12500,wy:1.5,tc:180,xq:'永兴小学',type:'loupan',date:'2026-03-10',views:134,desc:'火山岩地貌，天然氧吧'},
  {id:'lp12',name:'美兰·白沙门公馆',district:'美兰区',price:22000,wy:3.5,tc:480,xq:'白沙门小学',type:'loupan',date:'2026-03-08',views:367,desc:'海甸岛核心，临近海南大学'},
];

var ERSHOU = [
  {id:'es01',name:'龙华·金贸府 精装三房',district:'龙华区',price:198,'unit':'万',wy:3.8,tc:450,area:'120平',type:'ershou',date:'2026-03-28',views:289,desc:'精装修，家具家电齐全，拎包入住'},
  {id:'es02',name:'滨海御景 两房急售',district:'龙华区',price:145,'unit':'万',wy:2.8,tc:380,area:'89平',type:'ershou',date:'2026-03-27',views:234,desc:'业主急售，价格可谈'},
  {id:'es03',name:'秀英·中央公园 大四房',district:'秀英区',price:265,'unit':'万',wy:2.5,tc:320,area:'158平',type:'ershou',date:'2026-03-26',views:378,desc:'南北通透，采光充足'},
  {id:'es04',name:'美兰·江东壹号 毛坯',district:'美兰区',price:178,'unit':'万',wy:3.2,tc:400,area:'105平',type:'ershou',date:'2026-03-25',views:198,desc:'毛坯新房，可按自己风格装修'},
  {id:'es05',name:'琼山·文锦华庭 两室',district:'琼山区',price:112,'unit':'万',wy:2.2,tc:280,area:'78平',type:'ershou',date:'2026-03-24',views:167,desc:'学区房，学位未用'},
  {id:'es06',name:'龙华·世贸雅居 豪装',district:'龙华区',price:320,'unit':'万',wy:4.0,tc:550,area:'142平',type:'ershou',date:'2026-03-22',views:445,desc:'豪华装修，品牌家具'},
  {id:'es07',name:'秀英·西海岸 三房',district:'秀英区',price:198,'unit':'万',wy:2.6,tc:350,area:'115平',type:'ershou',date:'2026-03-20',views:289,desc:'海景三房，视野开阔'},
  {id:'es08',name:'美兰·桂林洋 两室',district:'美兰区',price:98,'unit':'万',wy:2.0,tc:250,area:'72平',type:'ershou',date:'2026-03-18',views:123,desc:'刚需首选，总价低'},
  {id:'es09',name:'琼山·椰海新城 三室',district:'琼山区',price:125,'unit':'万',wy:1.8,tc:220,area:'95平',type:'ershou',date:'2026-03-15',views:156,desc:'婚房装修，保养好'},
  {id:'es10',name:'龙华·金融街 顶层复式',district:'龙华区',price:580,'unit':'万',wy:5.0,tc:800,area:'220平',type:'ershou',date:'2026-03-12',views:612,desc:'顶层复式，俯瞰全城'},
  {id:'es11',name:'秀英·永兴 独栋别墅',district:'秀英区',price:450,'unit':'万',wy:1.5,tc:180,area:'280平',type:'ershou',date:'2026-03-10',views:389,desc:'火山岩独栋，别墅花园'},
  {id:'es12',name:'美兰·白沙门 两房',district:'美兰区',price:158,'unit':'万',wy:3.5,tc:480,area:'88平',type:'ershou',date:'2026-03-08',views:201,desc:'海南大学旁，人文气息浓厚'},
];

var FANGCHAN_POLICY = [
  {id:'fp01',title:'海南省 2026 年楼市新政策发布',content:'海南省发布2026年楼市调控新规，继续坚持"房住不炒"定位，支持刚性和改善性住房需求，外地户籍可享受与本地户籍同等的公积金贷款政策。',source:'海南省住建厅',date:'2026-03-28',views:1245},
  {id:'fp02',title:'海口市放开限购区域名单',content:'海口市进一步优化限购政策，龙华区、秀英区部分区域取消限购，美兰区和琼山区继续执行限购政策但放宽购房资质审核。',source:'海口市住建局',date:'2026-03-25',views:987},
  {id:'fp03',title:'海南自贸港购房退税优惠延续',content:'海南自贸港个人所得税优惠、企业所得税优惠延续至2027年，购房退税政策继续执行，最高可退房价10%。',source:'海南省税务局',date:'2026-03-22',views:756},
  {id:'fp04',title:'海口市公积金贷款额度提高',content:'海口市公积金管理中心宣布，单身职工公积金贷款最高额度提高至60万，已婚职工最高80万，多子女家庭可上浮20%。',source:'海口公积金中心',date:'2026-03-20',views:645},
  {id:'fp05',title:'海南省预售资金监管新规',content:'海南省出台预售资金监管新规，开发商预售资金需全部存入监管账户，确保专款专用，防止烂尾楼发生。',source:'海南省金融局',date:'2026-03-18',views:534},
  {id:'fp06',title:'海口市二手房交易税费减免',content:'海口市下调二手房交易契税税率，首套房90平以下税率1%，90平以上1.5%，二套房统一2%。',source:'海口市税务局',date:'2026-03-15',views:467},
  {id:'fp07',title:'海南省全装修住宅新标准',content:'海南省发布全装修住宅工程质量验收新标准，要求装修主材品牌、质量等级必须在购房合同中明确标注。',source:'海南省质监站',date:'2026-03-12',views:378},
  {id:'fp08',title:'海口市学区房政策调整',content:'海口市调整学区划分原则，2026年起新建小区配套学校需与住宅同步交付，确保业主子女及时入学。',source:'海口市教育局',date:'2026-03-10',views:823},
  {id:'fp09',title:'海南自贸港人才购房补贴',content:'海南省对自贸港引进人才提供购房补贴，A类人才最高补贴100万，B类人才50万，C类人才20万。',source:'海南省人才局',date:'2026-03-08',views:1123},
  {id:'fp10',title:'海口市物业费指导价公布',content:'海口市发布各区物业费政府指导价，龙华区最高3.8元/平/月，琼山区最低1.8元/平/月。',source:'海口市物价局',date:'2026-03-05',views:345},
  {id:'fp11',title:'海南省商业地产去库存政策',content:'海南省鼓励开发商将滞销商业地产改造为租赁住房，可享受土地增值税减免和金融支持政策。',source:'海南省自然资源厅',date:'2026-03-03',views:267},
  {id:'fp12',title:'海口市购房落户政策最新', content:'在海口购房60平以上可落户，购房面积越大积分越高，学历、社保可叠加积分。',source:'海口市公安局',date:'2026-02-28',views:934},
];

var CAR_DATA = [
  {id:'car01',name:'比亚迪汉 EV',brand:'比亚迪',district:'龙华区',price:22.8,type:'新能源电车',date:'2026-03-28',views:456,desc:'中大型纯电轿车，续航605km，配置L2辅助驾驶'},
  {id:'car02',name:'特斯拉 Model 3',brand:'特斯拉',district:'龙华区',price:24.59,type:'新能源电车',date:'2026-03-26',views:678,desc:'纯电轿车标杆车型，续航606km，智能驾驶领先'},
  {id:'car03',name:'蔚来 ET5',brand:'蔚来',district:'秀英区',price:29.8,type:'新能源电车',date:'2026-03-25',views:345,desc:'换电模式无续航焦虑，服务一流'},
  {id:'car04',name:'小鹏 P7i',brand:'小鹏',district:'美兰区',price:23.99,type:'新能源电车',date:'2026-03-24',views:289,desc:'智能座舱，NGP城市辅助驾驶'},
  {id:'car05',name:'理想 L6',brand:'理想',district:'龙华区',price:24.98,type:'新能源电车',date:'2026-03-22',views:512,desc:'增程式中大型SUV，家庭出行首选'},
  {id:'car06',name:'广汽 AION Y',brand:'广汽',district:'琼山区',price:11.98,type:'新能源电车',date:'2026-03-20',views:234,desc:'紧凑型纯电SUV，性价比极高'},
  {id:'car07',name:'极氪 001',brand:'极氪',district:'秀英区',price:26.9,type:'新能源电车',date:'2026-03-18',views:367,desc:'猎装轿跑，续航560km，性能强劲'},
  {id:'car08',name:'比亚迪海鸥',brand:'比亚迪',district:'美兰区',price:7.38,type:'电动车',date:'2026-03-15',views:567,desc:'小型电动车，都市通勤利器'},
  {id:'car09',name:'小牛 NXT',brand:'小牛',district:'龙华区',price:0.99,type:'电动车',date:'2026-03-12',views:345,desc:'高端智能电动车，续航150km'},
  {id:'car10',name:'雅迪 E10',brand:'雅迪',district:'琼山区',price:0.58,type:'电动车',date:'2026-03-10',views:423,desc:'国民电动车品牌，质量可靠'},
  {id:'car11',name:'台铃 超能S',brand:'台铃',district:'秀英区',price:0.68,type:'电动车',date:'2026-03-08',views:278,desc:'长续航电动车，一次充电200km'},
  {id:'car12',name:'爱玛 晴天',brand:'爱玛',district:'美兰区',price:0.55,type:'电动车',date:'2026-03-05',views:189,desc:'轻便时尚，适合女性用户'},
];

var XUECHE_DATA = [
  {id:'xc01',title:'滴滴出行海南新规：司机必须本地车牌',content:'滴滴出行发布海南区域运营新规，要求所有在海南接单的网约车必须为海南本地车牌，外省车辆需办理入岛运营证。',date:'2026-03-28',views:678},
  {id:'xc02',title:'高德打车海口司机招募中，佣金降至15%',content:'高德打车宣布海口地区新司机招募计划，前3个月佣金仅收15%，老司机推荐新司机奖励500元。',date:'2026-03-25',views:534},
  {id:'xc03',title:'海口市网约车从业资格证报名通知',content:'海口市道路运输管理局发布2026年第一批次网约车从业资格证报名通知，报名时间3月15日-4月15日。',date:'2026-03-22',views:445},
  {id:'xc04',title:'新能源网约车充电桩覆盖率提升至85%',content:'海南省充电基础设施建设加快，海口市主城区新能源网约车充电桩覆盖率达85%，平均1.2公里一个快充桩。',date:'2026-03-20',views:367},
  {id:'xc05',title:'海口网约车违规处罚标准出台',content:'海口市交管局公布网约车违规处罚标准：无证运营罚款1-3万，平台违规最高罚款10万。',date:'2026-03-18',views:289},
  {id:'xc06',title:'曹操出行海口开城，招募司机',content:'曹操出行正式进入海口市场，现招募全职和兼职司机，平台抽成低至12%，周结算工资。',date:'2026-03-15',views:456},
  {id:'xc07',title:'美团打车海南司机培训课程上线',content:'美团打车推出海南专属司机培训课程，完成培训可获得接单优先级加成和平台补贴。',date:'2026-03-12',views:323},
  {id:'xc08',title:'海口市道路运输从业资格证办理指南',content:'详细介绍海口市网络预约出租汽车驾驶员证办理流程、条件、材料及注意事项。',date:'2026-03-10',views:534},
  {id:'xc09',title:'新能源网约车保险新政策出台',content:'海南省出台新能源网约车专属保险政策保费下调约20%，且理赔速度加快50%。',date:'2026-03-08',views:278},
  {id:'xc10',title:'海口网约车投诉处理时效缩短至24小时',content:'海口市要求各网约车平台建立快速投诉处理机制，一般投诉24小时内必须给出处理结果。',date:'2026-03-05',views:198},
];

var GOSSIP = [
  {id:'gp01',title:'龙华区某楼盘烂尾？官方辟谣：已重组复工',content:'近日有市民反映龙华区某在建楼盘疑似烂尾，开发商回应称正在进行资产重组，项目更名为"龙华幸福里"已全面复工。',date:'2026-03-28',views:1567},
  {id:'gp02',title:'海口二手房交易新套路：低评估价避税风险大',content:'近期海口二手房市场出现低评估价避税操作，业内提醒：此操作存在合同无效风险，买卖双方需谨慎。',date:'2026-03-26',views:1234},
  {id:'gp03',title:'某中介公司卷款跑路，受害者已报案',content:'海口某小型房产中介公司收取客户定金后失联，受害者已向警方报案，警方已立案侦查。',date:'2026-03-24',views:2345},
  {id:'gp04',title:'购房合同陷阱：这些条款要注意',content:'业内人士提醒购房合同中常见陷阱：延期交房违约金过低、精装修标准模糊、违约责任不对等等问题。',date:'2026-03-22',views:987},
  {id:'gp05',title:'海口部分区域房价或将迎来调整',content:'据业内分析，受政策影响海口部分区域房价可能出现结构性调整，刚需购房者可关注龙华区次新房。',date:'2026-03-20',views:1567},
  {id:'gp06',title:'女子买二手房遇"凶宅"，状告原房东',content:'海口一女子购买二手房后得知该房曾发生过非正常死亡事件，遂将原房东告上法庭，要求退房退款。',date:'2026-03-18',views:3456},
  {id:'gp07',title:'购房定金能退吗？这些情况可以！',content:'律师解读：开发商五证不全、房屋存在重大质量问题、规划变更影响居住品质等情况下，购房定金可依法退还。',date:'2026-03-15',views:1234},
  {id:'gp08',title:'海口多个小区物业费涨价遭业主抵制', content:'海口多个小区物业公司在未充分告知业主的情况下单方面提高物业费，引发业主集体拒缴抗议。',date:'2026-03-12',views:876},
  {id:'gp09',title:'房产证迟迟办不下来？可能是这些问题',content:'购房多年房产证一直办不下来，常见原因：开发商土地抵押未解除、验收未完成、欠缴税费等。',date:'2026-03-10',views:1456},
  {id:'gp10',title:'海口"学区房"骗局：名校名额是假的',content:'海口出现多起"学区房"诈骗案，不法分子虚构学区名额骗取购房定金，购房者务必核实学区划分。',date:'2026-03-08',views:2876},
  {id:'gp11',title:'海口电动车新规：无牌电动车上路将被扣',content:'海口市交警部门加大无牌电动车整治力度，4月1日起无牌电动车上路一律扣车并处罚款500元。',date:'2026-03-05',views:2345},
  {id:'gp12',title:'网约车新手必看：海口这些路段高峰期别去',content:'老司机经验分享：海口龙昆南路、国兴大道、海秀快速路高峰期拥堵严重，新手建议避开或错峰出行。',date:'2026-03-03',views:1234},
];

var NEWS_DATA = FANGCHAN_POLICY.concat(CAR_DATA.slice(0,5)).concat(XUECHE_DATA.slice(0,5));

// ===================== CLOUD STORAGE =====================
function getCloud(){try{return JSON.parse(localStorage.getItem(CLOUD_KEY)||'{}');}catch(e){return {};}}
function setCloud(d){localStorage.setItem(CLOUD_KEY,JSON.stringify(d));}
function cloudPush(path,val){
  var d=getCloud(),keys=path.split('/'),obj=d;
  for(var i=0;i<keys.length-1;i++){if(!obj[keys[i]])obj[keys[i]]={};obj=obj[keys[i]];}
  var id=Date.now().toString(36)+Math.random().toString(36).substr(2,5);
  obj[id]=val;setCloud(d);return id;
}

// ===================== INIT =====================
window.addEventListener('load',function(){
  // Hide loading
  setTimeout(function(){
    document.getElementById('loadingScreen').classList.add('hide');
    setTimeout(function(){document.getElementById('loadingScreen').style.display='none';},500);
  },1200);
  // Check login
  var saved=localStorage.getItem('fangwu_current_user');
  if(saved){try{currentUser=JSON.parse(saved);}catch(e){}}
  // Create particles
  createParticles();
  // Scroll events
  window.addEventListener('scroll',function(){
    document.getElementById('scrollTopBtn').classList.toggle('show',window.scrollY>400);
  });
  // Load data
  renderHomeNews();
  renderFangchanCards('loupan');
  renderTudiCards();
  renderCarCards();
  renderXuecheSection();
  renderAllNews();
  initAdmin();
  // Animate on scroll
  var observer=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');}});
  },{threshold:0.1});
  document.querySelectorAll('.fade-in').forEach(function(el){observer.observe(el);});
});

// ===================== PARTICLES =====================
function createParticles(){
  var container=document.getElementById('particles');
  if(!container)return;
  for(var i=0;i<30;i++){
    var p=document.createElement('div');
    p.className='particle';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(Math.random()*10+8)+'s';
    p.style.animationDelay=(Math.random()*10)+'s';
    p.style.width=(Math.random()*3+1)+'px';
    p.style.height=p.style.width;
    container.appendChild(p);
  }
}

// ===================== NAVIGATION =====================
function goPage(page){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  var el=document.getElementById('page-'+page);
  if(el)el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  // Update nav links
  document.querySelectorAll('.nav-links a').forEach(function(a){a.classList.remove('active');});
  var links=document.querySelectorAll('.nav-links a');
  var idx={'home':0,'fangchan':1,'diandongche':2,'xueche':3,'news':4};
  if(idx[page]!==undefined&&links[idx[page]])links[idx[page]].classList.add('active');
}

function toggleMobileMenu(){
  document.querySelector('.nav-links').classList.toggle('show');
}

// ===================== MODALS =====================
function showModal(id){document.getElementById(id).classList.add('show');}
function closeModal(id){document.getElementById(id).classList.remove('show');}

// ===================== AUTH =====================
function doLogin(){
  var u=document.getElementById('loginUsername').value.trim();
  var p=document.getElementById('loginPwd').value;
  if(!u||!p){toast('请输入用户名和密码','error');return;}
  var users=getCloud().users||{};
  var found=null;
  for(var k in users){
    if((users[k].name===u||users[k].phone===u)&&users[k].password===p){found=users[k];break;}
  }
  if(!found){toast('用户名或密码错误','error');return;}
  currentUser=found;
  localStorage.setItem('fangwu_current_user',JSON.stringify(found));
  closeModal('loginModal');
  toast('登录成功！欢迎回来，'+found.name,'success');
}

function doRegister(){
  var name=document.getElementById('regUsername').value.trim();
  var phone=document.getElementById('regPhone').value.trim();
  var pwd=document.getElementById('regPwd').value;
  var pwd2=document.getElementById('regPwd2').value;
  if(!name||!phone||!pwd){toast('请填写完整信息','error');return;}
  if(name.length<2){toast('用户名至少2个字符','error');return;}
  if(!/^1[3-9]\d{9}$/.test(phone)){toast('请输入有效手机号','error');return;}
  if(pwd.length<6){toast('密码至少6个字符','error');return;}
  if(pwd!==pwd2){toast('两次密码不一致','error');return;}
  var users=getCloud().users||{};
  if(users[name]){toast('用户名已被注册','error');return;}
  var newUser={name:name,phone:phone,password:pwd,regTime:new Date().toISOString(),status:'active'};
  users[name]=newUser;
  getCloud().users=users;setCloud(getCloud());
  currentUser=newUser;
  localStorage.setItem('fangwu_current_user',JSON.stringify(newUser));
  closeModal('registerModal');
  toast('注册成功！欢迎加入，'+name,'success');
}

// ===================== DISTRICT/SUB TAB =====================
function switchDistrict(page,district){
  var container=document.getElementById(page+'Districts');
  if(container)container.querySelectorAll('.dist-btn').forEach(function(b){b.classList.toggle('active',b.textContent.trim()===district||(district==='all'&&b.textContent.trim()==='全部区域'));});
}

function switchSubTab(page,tab){
  document.querySelectorAll('.sub-tabs').forEach(function(el){el.querySelectorAll('.sub-tab').forEach(function(b){b.classList.remove('active');});});
  event.target.classList.add('active');
  // Dispatch event for render
  window.dispatchEvent(new CustomEvent('subtabchange',{detail:{page:page,tab:tab}}));
  // Render based on tab
  if(page==='fangchan'){
    if(tab==='loupan'||tab==='ershou')renderFangchanCards(tab);
    else if(tab==='policy')renderFangchanPolicy();
    else renderGossip();
  } else if(page==='car'){
    renderCarCards();
  }
}

function switchNewsTab(type){
  document.getElementById('newsTabs').querySelectorAll('.tab').forEach(function(t){t.classList.remove('active');});
  event.target.classList.add('active');
  if(type==='all')renderAllNews();
  else if(type==='fangchan')renderFangchanNews();
  else if(type==='car')renderCarNews();
}

// ===================== RENDER FUNCTIONS =====================
function makeCard(item,isCar){
  var price=item.price?(item.price+''+(item['unit']?'<small>'+item['unit']+'</small>':'<small>元/平</small>')):'面议';
  var icons={'龙华区':'&#128205;','秀英区':'&#127961;','美兰区':'&#127968;','琼山区':'&#127795;'};
  var icon=icons[item.district]||'&#128205;';
  return '<div class="card" onclick="showDetail(\''+item.id+'\')">'+
    '<div class="card-img">'+icon+'</div>'+
    '<div class="card-body">'+
    (item.tag?'<span class="card-tag">'+item.tag+'</span>':'')+
    '<div class="card-title">'+item.name+'</div>'+
    '<div class="card-meta">'+
    '<span><i class="fas fa-map-marker-alt"></i> '+item.district+'</span>'+
    (item.wy?'<span><i class="fas fa-building"></i> '+item.wy+'元/平</span>':'')+
    (item.area?'<span><i class="fas fa-expand"></i> '+item.area+'</span>':'')+
    '</div>'+
    '<div class="card-price">'+price+'</div>'+
    '</div>'+
    '<div class="card-footer">'+
    '<div class="card-footer-left"><i class="fas fa-clock"></i> '+item.date+'</div>'+
    '<div class="card-footer-left"><i class="fas fa-eye"></i> '+item.views+'</div>'+
    '</div></div>';
}

function renderFangchanCards(type){
  var data=type==='ershou'?ERSHOU:LOU_PAN;
  var grid=document.getElementById('fangchanCardGrid');
  if(!grid)return;
  var html='';
  data.forEach(function(item){html+=makeCard(item);});
  grid.innerHTML=html||'<div style="text-align:center;color:var(--text2);padding:60px 0">暂无信息</div>';
  grid.style.display='grid';
  var pol=document.getElementById('fangchanPolicyList');
  if(pol)pol.style.display='none';
  var nl=document.getElementById('fangchanNewsList');
  if(nl)nl.style.display='none';
}

function renderFangchanPolicy(){
  var html='';
  FANGCHAN_POLICY.forEach(function(item){
    html+='<div class="policy-item"><div class="policy-icon"><i class="fas fa-scroll"></i></div><div class="policy-content">'+
      '<div class="policy-title">'+item.title+'</div>'+
      '<div class="policy-desc">'+item.content+'</div>'+
      '<div class="policy-date"><i class="fas fa-building"></i> '+item.source+' &middot; '+item.date+' &middot; '+item.views+' 阅读</div>'+
      '</div></div>';
  });
  var pol=document.getElementById('fangchanPolicyList');
  if(pol){pol.innerHTML=html;pol.style.display='flex';}
  var grid=document.getElementById('fangchanCardGrid');
  if(grid)grid.style.display='none';
  var nl=document.getElementById('fangchanNewsList');
  if(nl)nl.style.display='none';
}

function renderGossip(){
  var html='';
  GOSSIP.forEach(function(item){
    html+='<div class="news-item"><div class="news-img"><i class="fas fa-exclamation-circle"></i></div><div class="news-content">'+
      '<div class="news-title">'+item.title+'</div>'+
      '<div class="news-meta"><span>'+item.date+'</span><span class="news-tag">小道消息</span><span><i class="fas fa-eye"></i> '+item.views+'</span></div>'+
      '</div></div>';
  });
  var nl=document.getElementById('fangchanNewsList');
  if(nl){nl.innerHTML=html;nl.style.display='flex';}
  var grid=document.getElementById('fangchanCardGrid');
  if(grid)grid.style.display='none';
  var pol=document.getElementById('fangchanPolicyList');
  if(pol)pol.style.display='none';
}

function renderTudiCards(){
  var grid=document.getElementById('tudiCardGrid');
  if(!grid)return;
  var items=LOU_PAN.map(function(l){return Object.assign({},l,{name:l.name.replace('楼盘','土地'),type:'tdinfo'});});
  var html='';
  items.slice(0,8).forEach(function(item){html+=makeCard(item);});
  grid.innerHTML=html||'<div style="text-align:center;color:var(--text2);padding:60px 0">暂无土地信息</div>';
}

function renderCarCards(){
  var grid=document.getElementById('carCardGrid');
  if(!grid)return;
  var html='';
  CAR_DATA.forEach(function(item){html+=makeCard(item,true);});
  grid.innerHTML=html||'<div style="text-align:center;color:var(--text2);padding:60px 0">暂无车辆信息</div>';
}

function renderXuecheSection(){
  var grid=document.getElementById('xuecheFeatureGrid');
  if(!grid)return;
  var features=[
    {icon:'&#128666;',title:'平台政策咨询',desc:'滴滴、高德、美团、曹操最新政策解读'},
    {icon:'&#128104;',title:'从业资格培训',desc:'网约车从业资格证报名、培训、拿证一站式服务'},
    {icon:'&#128663;',title:'新能源车购车',desc:'与4S店合作，专享团购价，贷款优惠'},
    {icon:'&#128086;',title:'租车服务',desc:'多种车型可选，月租低至2800元，含保险'},
    {icon:'&#128275;',title:'合规运营指导',desc:'违规处理、证件办理、平台规则全解答'},
    {icon:'&#128172;',title:'老司机交流',desc:'加入司机社群，共享接单技巧'},
  ];
  var html='';
  features.forEach(function(f){
    html+='<div class="feature-card"><div class="feature-icon">'+f.icon+'</div><div class="feature-title">'+f.title+'</div><div class="feature-desc">'+f.desc+'</div></div>';
  });
  grid.innerHTML=html;

  var nl=document.getElementById('xuecheNewsList');
  if(nl){
    var nh='';
    XUECHE_DATA.forEach(function(item){
      nh+='<div class="news-item"><div class="news-img"><i class="fas fa-taxi"></i></div><div class="news-content">'+
        '<div class="news-title">'+item.title+'</div>'+
        '<div class="news-meta"><span>'+item.date+'</span><span class="news-tag">平台政策</span><span><i class="fas fa-eye"></i> '+item.views+'</span></div>'+
        '</div></div>';
    });
    nl.innerHTML=nh;
  }
}

function renderHomeNews(){
  var el=document.getElementById('homeNewsList');
  if(!el)return;
  var items=FANGCHAN_POLICY.slice(0,5);
  var html='';
  items.forEach(function(item){
    html+='<div class="news-item"><div class="news-img"><i class="fas fa-building"></i></div><div class="news-content">'+
      '<div class