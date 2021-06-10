var post =
    [
        {
            intpresent: "Internshala presents",
            heading: "The Dream Icon Experience",
            tagline: "You, your favourite icon, and the chance of a lifetime!",
            launch_date: "4th June'21",
            REWARDS: "₹5000, certificates & exciting mementos!",
            apply_by: "11th June'21",
            span: ['Experience', 'Part time allowed'],
            source:"https://internshala.com/static/images/common/new_internshala_logo.svg"
        },
        {
            intpresent: "Internshala presents",
            heading: "The Dream Icon Experience",
            tagline: "You, your favourite icon, and the chance of a lifetime!",
            launch_date: "4th June'21",
            REWARDS: "₹5000, certificates & exciting mementos!",
            apply_by: "11th June'21",
            span: ['Experience','alow','Part time allowed'],
            source:"https://internshala.com/static/images/common/new_internshala_logo.svg"
        },
        {
            intpresent: "Internshala presents",
            heading: "The Dream Icon Experience",
            tagline: "You, your favourite icon, and the chance of a lifetime!",
            launch_date: "4th June'21",
            REWARDS: "₹5000, certificates & exciting mementos!",
            apply_by: "11th June'21",
            span: ['Experience', 'Part time allowed'],
            source:"https://internshala.com/static/images/common/new_internshala_logo.svg"
        },
        {
            intpresent: "Internshala presents",
            heading: "The Dream Icon Experience",
            tagline: "You, your favourite icon, and the chance of a lifetime!",
            launch_date: "4th June'21",
            REWARDS: "₹5000, certificates & exciting mementos!",
            apply_by: "11th June'21",
            span: ['Experience', 'Part time allowed'],
            source:"https://internshala.com/static/images/common/new_internshala_logo.svg"
        },
    ];
   
function postz()
{
    var RSlider = document.getElementById("RSlider");

    post.forEach(function (el)
    {
        var div = document.createElement('div');
        div.setAttribute('class', 'order');

        var div2 = document.createElement('div');
        div2.setAttribute('class', 'intrenship');
        
        var div3 = document.createElement('div');
        div3.setAttribute('class', 'contents');

        var p = document.createElement('p');
        p.innerText = el.intpresent;
        var h4 = document.createElement('h4');
        h4.innerText = el.heading;
        var p2 = document.createElement('p');
        p2.innerText = el.tagline;

        div3.append(p, h4, p2);
        
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
        title2.innerHTML = ` <i class="ic-16-money"></i><span>REWARDS</span>`;
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
        
        div21.append(point, point2, point3);
        
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

postz();