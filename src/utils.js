//ele 要实现此功能DOM对象 callback加载更多的方法
export function loadMore(element, callback) {
    let timer;
    element.addEventListener('scroll', function () {
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            let clientHeight = element.clientHeight;
            let scrollTop = element.scrollTop;
            let scrollHeight = element.scrollHeight;
            if (clientHeight + scrollTop + 10 >= scrollHeight) {
                callback();
            }
        }, 100);
    });
}

//下拉刷新
export function downReferesh(element,callback){
    let startY;//刚按下的时候初始纵坐标
    let distance;//下拉的距离
    let originTop=element.offsetTop;//最初的距离父级顶部的距离

    element.addEventListener('touchstart',function(event){
        if(element.offsetTop == originTop && element.scrollTop ==0){
            startY= event.touches[0].pageY;
            element.addEventListener('touchmove',touchMove);
            element.addEventListener('touchend',touchEnd);
        }

        function touchMove(event){
            let pageY = event.touches[0].pageY;
            if(pageY > startY){//如果越来越大，表示下拉
                distance = pageY - startY;
                element.style.top = originTop+distance+'px';
            }else{
                element.removeEventListener('touchmove',touchMove);
                element.removeEventListener('touchend',touchEnd);
            }
        }
        function touchEnd(){
            element.removeEventListener('touchmove',touchMove);
            element.removeEventListener('touchend',touchEnd);
             let timer = setInterval(function(){
                if(distance<1){
                    element.style.top = originTop+'px';//11.5
                    clearInterval(timer);
                }else{
                    distance = Math.floor(distance/1.1);
                    element.style.top = originTop+(--distance)+'px';
                }
            },13);
            if(distance>30){
                callback();
            }
        }
    });
}
