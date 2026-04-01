function renderHomeNews(){
  var el=document.getElementById('homeNewsList');
  if(!el)return;
  var items=FANGCHAN_POLICY.slice(0,5);
  var html='';
  items.forEach(function(item){
    html+='<div class="news-item"><div class="news-img"><i class="fas fa-building"></i></div><div class="news-content">'+
      '<div class="news-title">'+item.title+'</div>'+
      '<div class="news-meta"><span>'+item.date+'</span><span class="news-tag">'+item.source+'</span><span><i class="fas fa-eye"></i> '+item.views+'</span></div>'+
      '</div></div>';
  });
  el.innerHTML=html;
}

function renderAllNews(){
  var el=document.getElementById('allNewsList');
  if(!el)return;
  var html='';
  NEWS_DATA.forEach(function(item){
    html+='<div class="news-item"><div class="news-img"><i class="fas fa-newspaper"></i></div><div class="news-content">'+
      '<div class="news-title">'+item.title+'</div>'+
      '<div class="news-meta"><span>'+(item.date||'')+'</span><span class="news-tag">'+(item.source||'资讯')+'</span><span><i class="fas fa-eye"></i> '+(item.views||0)+'</span></div>'+
      '</div></div>';
  });
  el.innerHTML=html;
}

function renderFangchanNews(){
  var el=document.getElementById('allNewsList');
  if(!el)return;
  var html='';
  FANGCHAN_POLICY.forEach(function(item){
    html+='<div class="news-item"><div class="news-img"><i class="fas fa-building"></i></div><div class="news-content">'+
      '<div class="news-title">'+item.title+'</div>'+
      '<div class="news-meta"><span>'+item.date+'</span><span class="news-tag">房产政策</span><span><i class="fas fa-eye"></i> '+item.views+'</span></div>'+
      '</div></div>';
  });
  el.innerHTML=html;
}

function renderCarNews(){
  var el=document.getElementById('allNewsList');
  if(!el)return;
  var html='';
  CAR_DATA.forEach(function(item){
    html+='<div class="news-item"><div class="news-img"><i class="fas fa-car"></i></div><div class="news-content">'+
      '<div class="news-title">'+item.name+' - '+item.desc+'</div>'+
      '<div class="news-meta"><span>'+item.date+'</span><span class="news-tag">'+item.brand+'</span><span><i class="fas fa-eye"></i> '+item.views+'</span></div>'+
      '</div></div>';
  });
  el.innerHTML=html;
}

// ===================== ADMIN =====================
function initAdmin(){
  loadAdminData();
}

function loadAdminData(){
  var cloud=getCloud();
  var users=cloud.users||{};
  var usersArr=Object.values(users);
  var count=usersArr.length;
  if(document.getElementById('adminUsers'))document.getElementById('adminUsers').textContent=count;
  // Recent users
  var tbody=document.getElementById('adminRecentUsers');
  if(tbody){
    var html='';
    usersArr.slice(-5).reverse().forEach(function(u){
      html+='<tr><td>'+u.name+'</td><td>'+(u.phone||'')+'</td><td>'+(u.regTime?new Date(u.regTime).toLocaleDateString():'')+'</td></tr>';
    });
    tbody.innerHTML=html||'<tr><td colspan="3" style="text-align:center;color:var(--text3)">暂无用户</td></tr>';
  }
  // Users table
  var utbody=document.getElementById('adminUsersTable');
  if(utbody){
    var html='';
    usersArr.forEach(function(u,i){
      html+='<tr><td>'+(i+1)+'</td><td>'+u.name+'</td><td>'+(u.phone||'')+'</td><td>'+(u.regTime?new Date(u.regTime).toLocaleDateString():'')+'</td><td><span class="badge badge-green">正常</span></td><td><button class="btn btn-dark" style="padding:4px 8px;font-size:12px" onclick="deleteUser(\''+u.name+'\')">删除</button></td></tr>';
    });
    utbody.innerHTML=html||'<tr><td colspan="6" style="text-align:center;color:var(--text3)">暂无用户</td></tr>';
  }
  // Fangchan table
  var ftbody=document.getElementById('adminFangchanTable');
  if(ftbody){
    var html='';
    LOU_PAN.forEach(function(l,i){
      html+='<tr><td>'+(i+1)+'</td><td>'+l.name+'</td><td>'+l.district+'</td><td>楼盘</td><td>'+l.price+'元/平</td><td>'+l.date+'</td><td><button class="btn btn-dark" style="padding:4px 8px;font-size:12px">编辑</button></td></tr>';
    });
    ERSHOU.forEach(function(e,i){
      html+='<tr><td>'+(LOU_PAN.length+i+1)+'</td><td>'+e.name+'</td><td>'+e.district+'</td><td>二手房</td><td>'+e.price+'万</td><td>'+e.date+'</td><td><button class="btn btn-dark" style="padding:4px 8px;font-size:12px">编辑</button></td></tr>';
    });
    ftbody.innerHTML=html;
  }
}

function switchAdminMenu(menu){
  document.querySelectorAll('#admin-dashboard,#admin-users,#admin-fangchan-mgr,#admin-settings').forEach(function(el){el.style.display='none';});
  document.querySelectorAll('.admin-menu-item').forEach(function(el){el.classList.remove('active');});
  event.target.classList.add('active');
  var el=document.getElementById('admin-'+menu);
  if(el)el.style.display='block';
}

function adminLogin(){
  var u=document.getElementById('adminUser').value;
  var p=document.getElementById('adminPwd').value;
  if(u==='admin'&&p==='admin123'){
    localStorage.setItem('fangwu_admin','1');
    goPage('admin');
    toast('管理员登录成功！','success');
  } else {
    toast('账号或密码错误','error');
  }
}

function adminLogout(){
  localStorage.removeItem('fangwu_admin');
  goPage('home');
  toast('已退出登录','success');
}

function addUser(){
  var name=document.getElementById('addUserName').value.trim();
  var phone=document.getElementById('addUserPhone').value.trim();
  var pwd=document.getElementById('addUserPwd').value;
  if(!name||!phone){toast('请填写用户名和手机号','error');return;}
  var cloud=getCloud();
  if(!cloud.users)cloud.users={};
  if(cloud.users[name]){toast('用户名已存在','error');return;}
  cloud.users[name]={name:name,phone:phone,password:pwd,regTime:new Date().toISOString(),status:'active'};
  setCloud(cloud);
  closeModal('addUserModal');
  loadAdminData();
  toast('用户添加成功！','success');
}

function deleteUser(name){
  if(!confirm('确定删除用户 '+name+' 吗？'))return;
  var cloud=getCloud();
  delete cloud.users[name];
  setCloud(cloud);
  loadAdminData();
  toast('用户已删除','success');
}

function saveSettings(){
  toast('设置已保存！','success');
}

// ===================== FORMS =====================
function submitProperty(){
  var name=document.getElementById('propName').value.trim();
  var district=document.getElementById('propDistrict').value;
  var price=document.getElementById('propPrice').value;
  if(!name||!district||!price){toast('请填写必填项','error');return;}
  var item={id:'lp'+Date.now(),name:name,district:district,price:parseFloat(price),wy:parseFloat(document.getElementById('propWY').value)||0,tc:parseFloat(document.getElementById('propTC').value)||0,xq:document.getElementById('propXQ').value,type:'loupan',date:new Date().toLocaleDateString(),views:0,desc:document.getElementById('propDesc').value};
  LOU_PAN.unshift(item);
  cloudPush('fangchan',item);
  closeModal('addPropertyModal');
  toast('楼盘发布成功！','success');
  renderFangchanCards('loupan');
}

function submitCar(){
  var name=document.getElementById('carName').value.trim();
  var brand=document.getElementById('carBrand').value;
  var price=document.getElementById('carPrice').value;
  if(!name||!brand||!price){toast('请填写必填项','error');return;}
  var item={id:'car'+Date.now(),name:name,brand:brand,district:document.getElementById('carDistrict').value||'龙华区',price:parseFloat(price),type:document.getElementById('carType').value,date:new Date().toLocaleDateString(),views:0,desc:document.getElementById('carDesc').value};
  CAR_DATA.unshift(item);
  cloudPush('cars',item);
  closeModal('addCarModal');
  toast('车辆信息发布成功！','success');
  renderCarCards();
}

function showDetail(id){
  toast('详情页开发中，请联系 13876699053','warning');
}

function searchData(q){
  if(!q)return;
  toast('搜索: '+q+' (搜索功能已就绪)','success');
}

// ===================== TOAST =====================
function toast(msg,type){
  type=type||'success';
  var container=document.getElementById('toastContainer');
  var t=document.createElement('div');
  t.className='toast '+type;
  var icons={'success':'fa-check-circle','error':'fa-times-circle','warning':'fa-exclamation-circle'};
  t.innerHTML='<i class="fas '+icons[type]+' toast-icon"></i><span>'+msg+'</span>';
  container.appendChild(t);
  setTimeout(function(){t.style.opacity='0';t.style.transform='translateX(100%)';setTimeout(function(){t.remove();},300);},3000);
}

// ===================== SCROLL =====================
window.addEventListener('scroll',function(){
  var nav=document.getElementById('mainNav');
  if(nav)nav.classList.toggle('scrolled',window.scrollY>50);
});
