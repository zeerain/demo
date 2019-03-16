require('./css/global.css')
require('./css/animations.css')
require('./css/zepto.fullpage.css')
require('./css/page.css')

// import Parallax from 'parallax-js'
import $ from 'jquery'
require('./js/js.fullpage.js')

var forEach = [].forEach;
// $('.wp-inner')[0].fullpage();

$('.wp-inner')[0].fullpage({
    change: function (e) {
        console.log('change啊啊啊啊啊啊', e);
        
        // 移除动画属性
        forEach.call(document.querySelectorAll('.js-animate'), function (v) {
            v.classList.remove(v.dataset['animate']);
            v.classList.add('hide');
        });
        if (e.cur === 1  || e.cur === 2 || e.cur === 6) {
            var background = new Image();
            background.src = './images/bg/bg2.jpg';
            $('#bg-scene').css({
                backgroundImage: 'url(' + background.src + ')'
            })
            // background.onload = function () {
                
            // }
            
            $('.left-icon').addClass('hide')
            $('.right-icon').addClass('hide')
            $('.left-logo').removeClass('hide')
            $('.right-logo').removeClass('hide')

            $('.nf').removeClass('hide')
            $('.center-invite-text').removeClass('hide')
            
            $('.center-invite-text').removeClass('t100')
            $('.left-logo').removeClass('t50')
            $('.right-logo').removeClass('t60')

        } else if (e.cur === 0) {
            $('.left-icon').removeClass('hide')
            $('.right-icon').removeClass('hide')
            $('.nf').addClass('hide')
            $('.center-invite-text').addClass('hide')
            $('.left-logo').addClass('hide')
            $('.right-logo').addClass('hide')

            var background = new Image();
            background.src = './images/bg/scene-bg.jpg';
            background.onload = function () {
                $('#bg-scene').css({
                    backgroundImage: 'url(' + background.src + ')'
                })
            }
        } else if (e.cur === 4) {
            var background = new Image();
            background.src = './images/bg/bg5.jpg';
            $('#bg-scene').css({
                backgroundImage: 'url(' + background.src + ')'
            })
            $('.nf').addClass('hide')
            $('.center-invite-text').addClass('t100')
            $('.left-logo').addClass('t50')
            $('.right-logo').addClass('t60')

        }

        if (e.cur === 7) {
            // $.fn.fullpage.stop();

            $("#scene8").on("touchmove",function(e){
            // console.log('this', $(this), $.fn);

                e.stopPropagation();
            });
            $("#scene8").on("touchend",function(e){
                // console.log('this', $(this), $.fn);
    
                    e.stopPropagation();
                });
            
        }        
    },
    afterChange: function (e) {
        console.log('afterChange666666');

        // 添加动画属性
        forEach.call(document.querySelectorAll('.page')[e.cur].querySelectorAll('.js-animate'), function(v) {
            var time = v.dataset.time;
            setTimeout(function () {
                v.classList.add(v.dataset['animate']);
                v.classList.remove('hide');
            }, time);
        });
    },
    dir: 'h',
});
setTimeout(function () {
//   var scene = document.getElementById('bg-scene');
//   var parallaxInstance = new Parallax(scene);

//   var scene2 = document.getElementById('scene');
//   var parallaxInstance2 = new Parallax(scene2);
}, 1000)





