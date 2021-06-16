// var post =
//     [
//         {
//             heading: "Social Media Marketing",
//             tagline: "The Zowie Store",
//             launch_date: "4th June'21",
//             REWARDS: "₹5000",
//             apply_by: "11th June'21",
//             duration:"4 Weeks",
//             span: ['Experience', 'Part time allowed'],
//             source:"https://internshala.com/cached_uploads/logo%2F60be130364bec1623069443.jpg"
//         },
//         {
//             heading: "Mobile App Development",
//             tagline: "snippt",
//             launch_date: "4th June'21",
//             REWARDS: "₹5000",
//             apply_by: "11th June'21",
//             duration:"6 Months",
//             span: ['Experience','alow','Part time allowed'],
//             source:"https://internshala.com/cached_uploads/logo%2F5e2fdcb75bb791580194999.png"
//         },
//         {
//             heading: "Data Analytics (Supply Chain Management)",
//             tagline: "Ruby Capital",
//             launch_date: "11th June'21",
//             REWARDS: "₹5000",
//             apply_by: "11th June'21",
//             span: ['Experience', 'Part time allowed'],
//             source:"https://internshala.com/cached_uploads/logo%2F5e2fdd59cf2061580195161.png"
//         },
//         {
//             intpresent: "Internshala presents",
//             heading: "The Dream Icon Experience",
//             tagline: "You, your favourite icon, and the chance of a lifetime!",
//             launch_date: "4th June'21",
//             REWARDS: "₹5000",
//             apply_by: "11th June'21",
//             span: ['Experience', 'Part time allowed'],
//             source:"https://internshala.com/static/images/common/new_internshala_logo.svg"
//         },
//         {
//             heading: "The Dream Icon Experience",
//             tagline: "You, your favourite icon, and the chance of a lifetime!",
//             launch_date: "4th June'21",
//             REWARDS: "₹5000, certificates & exciting mementos!",
//             apply_by: "11th June'21",
//             span: ['Experience', 'Part time allowed'],
//             source:"https://internshala.com/static/images/common/new_internshala_logo.svg"
//         },
//     ];
var objArray = {};
function category(val,name)
{
    
    var snt = JSON.parse(localStorage.getItem('postDetails'));
    const obj = { [name]: val };
    objArray[name] = val;
    if (objArray.category != undefined)
    {
        snt = snt.filter(function (a) {
            return a.category == objArray.category;
        });
    }
     
    if (objArray.location != undefined)
    {

        
        snt = snt.filter(function (a) {
            return a.location == objArray.location;
        });
    }

    if (objArray.wfh != undefined)
    {

        
        snt = snt.filter(function (a)
        {
            if (objArray.wfh == 'yes')
            {
                return a.wfh == objArray.wfh;
            }
            else
            {
                return snt;
            }
           
        });
    }

    if (objArray.parttime != undefined)
    {

        
        snt = snt.filter(function (a)
        {
            if (objArray.parttime == 'yes')
            {
                return a.parttime == objArray.parttime;
            }
            else
            {
                return snt;
            }
           
        });
    }

    if (objArray.REWARDS != undefined)
    {

        
        snt = snt.filter(function (a)
        {
            if (objArray.REWARDS > 0)
            {
                return a.REWARDS > Number(objArray.REWARDS);
            }
            else
            {
                return snt;
            }
               
            
        });
    }

    if (objArray.launch_date != undefined)
    {

        
        snt = snt.filter(function (a)
        {
                return a.launch_date >= objArray.launch_date;
            
        });
    }

    if (objArray.duration != undefined)
    {

        
        snt = snt.filter(function (a)
        {
                return a.duration == objArray.duration;
            
        });
    }




    renderPost(snt);
}




   
function renderPost(post,status="")
{
    var RSlider = document.getElementById("RSlider");
    if (status != 2)
    {
        RSlider.innerHTML = "";
    }
    var post_count = document.getElementById("postcount");
    post_count.innerText = post.length;

    post.reverse().forEach(function (el)
    {
        var div = document.createElement('div');
        div.setAttribute('class', 'order');

        var div2 = document.createElement('div');
        div2.setAttribute('class', 'intrenship');
        
        var div3 = document.createElement('div');
        div3.setAttribute('class', 'contents');
        if (el.intpresent) {
            var p = document.createElement('p');
            p.innerText = el.intpresent;
        }
        var h4 = document.createElement('h4');
        h4.innerText = el.heading;
        var p2 = document.createElement('p');
        p2.innerText = el.tagline;
        if (el.intpresent)
        {
            div3.append(p, h4, p2);
        }
        else {
            div3.append(h4, p2);
        }
        
        var div4 = document.createElement('div');
        div4.setAttribute('class', 'img');
        var img = document.createElement("img");
        img.src = el.source;
        div4.append(img);

        div2.append(div3,div4);


        var div21 = document.createElement('div');
        div21.setAttribute('class', 'discrip');
        
        var point = document.createElement('div');
        point.setAttribute('class', 'point');
        var title = document.createElement('div');
        title.setAttribute('class', 'titles');
        title.innerHTML = `<i class="ic-16-play-circle"></i><span>Launch date</span>`;
        var p3 = document.createElement('p');
        p3.innerText = el.launch_date;
        point.append(title, p3);
        
        var point2 = document.createElement('div');
        point2.setAttribute('class', 'point');
        var title2 = document.createElement('div');
        title2.setAttribute('class', 'titles');
        title2.innerHTML = ` <i class="ic-16-money"></i><span>Stipend</span>`;
        var p4 = document.createElement('p');
        p4.innerText = el.REWARDS;
        point2.append(title2, p4);

        var point3 = document.createElement('div');
        point3.setAttribute('class', 'point');
        var title3 = document.createElement('div');
        title3.setAttribute('class', 'titles');
        title3.innerHTML = `<i class="ic-16-hourglass"></i><span>Apply By</span>`;
        var p5 = document.createElement('p');
        p5.innerText = el.apply_by;
        point3.append(title3, p5);
        if (el.duration)
        {
            var point4 = document.createElement('div');
            point4.setAttribute('class', 'point');
            var title4 = document.createElement('div');
            title4.setAttribute('class', 'titles');
            title4.innerHTML = `<i class="ic-16-calendar"></i><span>DURATION</span>`;
            var p6 = document.createElement('p');
            p6.innerText = el.duration;
            point4.append(title4, p6);
            div21.append(point, point4,point2, point3);
        }
        
        else
        {
            div21.append(point,point2, point3);
        }
        
        var div22 = document.createElement('div');
        div22.setAttribute('class', 'details');
        var div221 = document.createElement('div');
        div221.setAttribute('class', 'spanCategory');

        el.span.forEach(function (spt) {
            var sp = document.createElement('span');
            sp.innerHTML = spt;
            div221.append(sp);

        });

        var divLa = document.createElement('div');
        divLa.innerHTML = `<a href="#">View details <i class="ic-16-chevron-right"></i></a>`;
        div22.append(div221,divLa);
         
        div.append(div2, div21, div22);
        RSlider.append(div);

        
    });
    
}

renderPost(JSON.parse(localStorage.getItem('postDetails')),'2');
