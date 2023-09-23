
//navbar
function menu(){
    var a = document.querySelectorAll("a");
    a.forEach(e=>{
        if(e.className === "links"){
            e.className += " responsive";
        }else{
            e.className = "links";
        }
    })
}

let section = document.querySelectorAll('section');
        let lists = document.querySelectorAll('LI');

        function activeLink(li) {
            lists.forEach((item) => item.classList.remove('active'));
            li.classList.add('active');
        }

        lists.forEach((item) =>
            item.addEventListener('click', function(){
                activeLink(this);
            }));

        window.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY,
                    offset = sec.offsetTop,
                    height = sec.offsetHeight,
                    id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    const target = document.querySelector(`[href='#${id}']`).parentElement;
                    activeLink(target);
                }
            })
        };