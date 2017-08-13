/*
使用占位符
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="rol">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';

var HTMLskillsStart = '<h3 id="skills-h3">技能一览：</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="https://x-shell.github.io/X-Shell-.github.io/">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>主修： %data%</em>';

var HTMLonlineClasses = '<h3 class="oltitle">线上课程：</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var gaodeMap = '<div id="map"></div>';


/*
国际化按钮
*/
// $(document).ready(function() {
//     $('button').click(function() {
//         var $name = $('#name');
//         var iName = inName($name.text()) || function() {};
//         $name.html(iName);
//     });
// });
//
// //测试jq的api
// var clickLocations = [];
//
// function logClicks(x, y) {
//     clickLocations.push({
//         x: x,
//         y: y
//     });
//     console.log('x location: ' + x + '; y location: ' + y);
// }

$(document).click(function(loc) {
    // your code goes here!
});
/*
这里是我们为网站生成自定义的Google地图的地方。
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // 声明一个全局映射变量

// 从这里开始!当载入页面时，将调用initializeMap()。

function initializeMap() {
    // 创建地图对象
    map = new AMap.Map('map', {
        resizeEnable: true,
        zoom:11,
        center: [113.2759952545166, 23.117055306224895]
    });

     map.plugin(["AMap.ToolBar"], function() {
        // 添加 工具条
         map.addControl(new AMap.ToolBar());
    });
    var locations = locationFinder();
    locations.forEach(function(place) {
        searchLocation(place);
    });
    map.setFitView();
}

function locationFinder() {
    // 初始化一个空的数组，用来存储地点
    var locations = [];
    //将 bio 的 contacts 数据里的地址添加到 locations 数组里
    locations.push(bio.contacts.location);

    //迭代 education 的 schools 数据里的地址，并将地址添加到 locations 数组里
    education.schools.forEach(function(school) {
        locations.push(school.location);
    });

    // 迭代 work 的 jobs 数据里的地址，并将地址添加到 locations 数组里
    work.jobs.forEach(function(job) {
        locations.push(job.location);
    });
    return locations;
}

function searchLocation(name) {
    AMap.service('AMap.PlaceSearch', function() { //回调函数
        //实例化PlaceSearch
        placeSearch = new AMap.PlaceSearch();

        //使用placeSearch对象调用关键字搜索的功能
        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
             pageSize: 1,
             pageIndex: 5,
             city: "020", //城市，默认：全国
            //  map: map,
        });

        //关键字查询地点坐标
        placeSearch.search(name, function(status, result) {
            //使用 result 在地图上创建标记
            var position = extraPositionFromJson(result);
            placeMarker(position.lng, position.lat, map);
        });
    })
}

//解析 JSON 并返回地图的坐标
function extraPositionFromJson(json) {
    var poiList = json.poiList;
    var pois = poiList.pois;
    var location = pois[0].location;

    return location;
}

//在相应的坐标中添加标记
function placeMarker(lng, lat, map) {
    marker = new AMap.Marker({
        position: [lng, lat],
        map: map
    });
}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
    map.setFitView();
})
