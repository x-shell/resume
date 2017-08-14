//
// var name = "周桂旭"; //定义变量 名字
// var formattedName = HTMLheaderName.replace("%data%", name); //定义一个储存名字的变量，并且使用replace查找 “%data%”然后跟着是替换的变量
// $("#header").append(formattedName); //使用jq 语句，查找 id为 header的标签，然后添加插入 上面定义的变量。
//
// var role = "前端开发";
// var roleName = HTMLheaderRole.replace("%data%", role);
// $("#header").append(roleName);
// ////////////////////////////////////////////////////////////
//
var bio = {
    "name": "周桂旭",
    "rol": "前端开发",
    "contacts": {
        "mobile": "18665070653",
        "email": "1453113602@qq.com",
        "location": "广州天河区龙洞",
        "github": "https://x-shell.github.io/X-Shell-.github.io/"
    },
    "welcomeMessage": "学而思之，吾自当强。</br>"+
    "学习能力强：能迅速学习公司的规章制度，和工作流程，专研新技术，乐于挑战。"+
    "专业技能强：前端基本功扎实,具有独立前端编写能力。能够从页面设计图精确还原保真的页面原型，喜欢钻研新技术。",
    "skills": ["Photoshop", "Html5", "Css3","JavaScript", "Jquery", "Git", "Bootstrap"],
    "bioPic": "./images/fry.jpg",
    "display": function() {
        var headerName = HTMLheaderName.replace("%data%", bio.name);
        var headerRole = HTMLheaderRole.replace("%data%", bio.rol);
        $("#header").prepend(headerName, headerRole);
        var contactsMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var contactsLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var contactsAll = contactsMobile + contactsEmail + contactsLocation + contactsGithub;
        $("#topContacts").append(contactsAll);
        var headerPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var headerWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage.toUpperCase());
        var headerAll = headerPic + headerWelcomeMsg;
        $("#header").append(headerAll);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var displayskitt = HTMLskills.replace("%data%", skill);
                $("#skills").append(displayskitt);
            });
        }

        //底部
        $("#footerContacts").append(contactsAll);
    }
};


/////////////////////////////////////

//工作经验
var work = {
    "jobs": [{
        "employer": "广州小狗仔宠物用品有限公司",
        "title": "网页设计/制作/美工",
        "location": "广州市天河区林和西路",
        "dates": "2016.07-2017.08",
        "description": "在该公司主要负责两部分内容：" +
            " 1.香港B2C官网负责每月一次的感谢日活动所需的设计图，日常编辑产品上下架，首页、海报等所有页面设计。涉及部分页面前端代码的开发、解决运行中出现的各种问题。" +
            " 2.淘宝店铺：独自负责淘宝店铺的首页装修设计、详情页、二级活动页、海报、推广图等所有设计，使用淘宝开放平台的widget库编写店铺特效代码。",
    },
    {
        "employer": "广州善贝服装有限公司",
        "title": "网页设计/制作/美工",
        "location": "广州市天河区广州大道北",
        "dates": "2015.05-2016.06",
        "description": "期间负责品牌的天猫京东旗舰店的装修设计与制作：" +
            "1. 对产品进行直观、 感性、 富有吸引力的描述， 提高产品描述的吸引力及转换率；" +
            "2. 负责淘宝店铺形象设计策划， 配合运营产品拍照、 文字描述和图片优化；" +
            "3. 负责网店日常形像管理， 美化修改产品页面， 定期更新店铺主页；" +
            "4. 负责品牌整体形象规范化、 活动页面策划及制作， 包括网店风格及商品展示设计， 并结合商品的特性制作图文并茂、 有美感、 有吸引购买力的描述模板；" +
            "5. 设计直通车， 钻展， 淘宝促销活动素材等广告图片；" +
            "6. 参与天猫京东双11， 双十二等大促活动的 首页和二级页面规划， 设计,特效制作。"
    }
   ],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart); //在id为 workExperience里 插入 htmlworkstart。
            var fromattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var fromattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var fromattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var fromattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var fromattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var fromattedAll = fromattedEmployer + fromattedTitle + fromattedLocation + fromattedDates + fromattedDescription;
            $(".work-entry:last").append(fromattedAll);
        }
    }

};


//////////////////////////////////////

//教育信息
var education = {
    "schools": [
      {
        "name": "广州美术学院",
        "degree": "大专",
        "dates": "2017-2019",
        "location": "广州市海珠区",
        "majors": ["艺术设计","平面广告"],
        "url": "https://gzarts.edu.cn/2013"
    }
  ],
    "onlineCourses": [
      {
        "title": "前端开发",
        "school": "udactiy优达学城",
        "dates": "2017.06",
        "url": "https://udacity.com"
    }
  ],
    display: function() {
        education.schools.forEach(
          function (item){
                $("#education").append(HTMLschoolStart);
                var displayEducationName = HTMLschoolName.replace("%data%", item.name);
                var displayEducationLocation = HTMLschoolLocation.replace("%data%", item.location);
                var displayEducationDegree = HTMLschoolDegree.replace("%data%", item.degree);
                var displayEducationMajors = HTMLschoolMajor.replace("%data%", item.majors);
                var displayEducationDates = HTMLschoolDates.replace("%data%", item.dates);
                var displayEducationAll = displayEducationName + displayEducationDegree + displayEducationDates + displayEducationLocation + displayEducationMajors;
                $(".education-entry:last").append(displayEducationAll);
          }// 为什么在这里加分号就出现错误呢？
        );
        education.onlineCourses.forEach(
          function(item){
            $(".education-entry:last").append(HTMLonlineClasses);
            var displayEducationTitlee = HTMLonlineTitle.replace("%data%", item.title);
            var displayEducationSchool = HTMLonlineSchool.replace("%data%", item.school);
            var displayEducationDates = HTMLonlineDates.replace("%data%", item.dates);
            var displayEducationUrl = HTMLonlineURL.replace("%data%", item.url);
            var displayEducationAll = displayEducationTitlee + displayEducationSchool + displayEducationDates + displayEducationUrl;
            $(".education-entry:last").append(displayEducationAll);
          }
        );
        //for遍历
        // for (var edu = 0; edu < education.schools.length; edu++) {
        //     $("#education").append(HTMLschoolStart);
        //     var displayEducationName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        //     var displayEducationLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        //     var displayEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        //     var displayEducationMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        //     var displayEducationDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        //     var displayEducationAll = displayEducationName + displayEducationDegree + displayEducationDates + displayEducationLocation + displayEducationMajors;
        //     $(".education-entry:last").append(displayEducationAll);
        // };
    }
};



//////////////////////////////////////

//项目经验
var projects = {
    "project": [
      {
        "title": "第一个个人网站",
        "dates": "2017",
        "description": "第一个个人网站博客，使用自定义的响应式设计，无bootstrap组件",
        "images": ["./images/works1-large.jpg"]
    },
    {
      "title": "电子简历",
      "dates": "2017",
      "description": "使用固定html模板加joson填充的电子简历。",
      "images": ["./images/works2-large.jpg"]
  }
],
    display: function() {
        for (var vul = 0; vul < projects.project.length; vul++) {
            $("#projects").append(HTMLprojectStart);
            var displayTitle = HTMLprojectTitle.replace("%data%", projects.project[vul].title);
            var displayDates = HTMLprojectDates.replace("%data%", projects.project[vul].dates);
            var displayDescription = HTMLprojectDescription.replace("%data%", projects.project[vul].description);
            var projectsDisplayAll = displayTitle + displayDates + displayDescription;
            $(".project-entry:last").append(projectsDisplayAll);
            projects.project[vul].images.forEach( function (item) {
              var displayImages = HTMLprojectImage.replace("%data%", item);
              $(".project-entry:last").append(displayImages);
            });
        };
    }
};
bio.display();
work.display();
education.display();
projects.display();
//////////////////////////////////////////

$("#mapDiv").append(gaodeMap);
