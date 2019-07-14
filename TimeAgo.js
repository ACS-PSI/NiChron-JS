// TimeAgo-JS 0.1
/* 
    * bNsEV-470UF-wZzzt-vhDyd-QShGr
    * DQpOL-EKbX7-Lytai-DTxOW-EAdMX
    * 46BO4-aTvZz-Fbukn-zesXw-SRlAk
    * D7aKq-suTBv-ouwXJ-qi33m-gEalA
    * BC7Oa-1Bs3M-Hsh0E-o3Tt3-rs0zS
    * 1PGdW-2k4Gp-ZwtXp-wVTzu-TdvOQ
*/
(function(){
    class TimeAgo {
        constructor(opts) {
            this.options = Object.assign(TimeAgo.defaults, opts);
            var interval = 1000;
            if (this.options.update.interval >= 1000 && this.options.update.interval !== 'null' && this.options.update.interval !== 'NaN') interval = parseInt(this.options.update.interval, 10);
            var PrevUpdate = new Date(document.getElementById(this.options.selector.pId).getAttribute("data-" + this.options.selector.attr));
            var now = new Date();
            var Old = now.getTime() - PrevUpdate.getTime();
            var Years = Old / (1000 * 60 * 60 * 24 * 365);
            var Months;
            var Days = Old / (1000 * 60 * 60 * 24);
            var Hours = Old / (1000 * 60 * 60);
            var Min = Old / (1000 * 60);
            var Sec = Old / (1000);
            var Res;
            var Ago = false;
            let p = document.getElementById(this.options.selector.pId);
            if (this.options.update.active) {
                document.body.onload = TimeAgoF;
                var Seccp = setInterval(TimeAgoF, interval);
            }
            else {
                document.body.onload = TimeAgoF;
            }
            function TimeAgoF() {
                now = new Date();
                Old = now.getTime() - PrevUpdate.getTime();
                Years = Old / (1000 * 60 * 60 * 24 * 365);
                Days = Old / (1000 * 60 * 60 * 24);
                Months = Days / 12;
                Hours = Old / (1000 * 60 * 60);
                Min = Old / (1000 * 60);
                Sec = Old / (1000);
                if(Old <= 0){
                    Ago = false;
                    var dist = PrevUpdate.getTime() - now;
/*                     var years = Math.floor(dist / (1000 * 60 * 60 * 24 * 12 * 365));
                    var months = Math.floor(dist / (1000 * 60 * 60 * 24 * 12));
                    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((dist % (1000 * 60)) / 1000); */
                    var years = parseInt(Years * -1,10);
                    var months = parseInt(Months * -1,10);
                    var days = parseInt(Days * -1,10);
                    var hours = parseInt(Hours * -1,10);
                    var minutes = parseInt(Min * -1,10);
                    var seconds = parseInt(Sec * -1,10);
/*                     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s "; */
                    if(seconds < 30) {
                        Res = this.TimeAgo.defaults.text.in.fewSec;
                    }else if(seconds > 30 && seconds < 60){
                        Res = seconds + " " + this.TimeAgo.defaults.text.after.sec;
                    }else if(minutes >=1 && minutes < 60){
                        if (minutes == 1) {
                            Res = minutes + " " + this.TimeAgo.defaults.text.after.min.sing;
                        }
                        else {
                            Res = minutes + " " + this.TimeAgo.defaults.text.after.min.plural;
                        }
                    }else if(hours >=1 && hours < 60){
                        if (hours == 1) {
                            Res = hours + " " + this.TimeAgo.defaults.text.after.hour.sing;
                        }
                        else {
                            Res = hours + " " + this.TimeAgo.defaults.text.after.hour.plural;
                        }
                    }else if(days >=1 && days < 60){
                        if (days == 1) {
                            Res = days + " " + this.TimeAgo.defaults.text.after.day.sing;
                        }
                        else {
                            Res = days + " " + this.TimeAgo.defaults.text.after.day.plural;
                        }
                    }else if(months >=1 && months < 60){
                        if (months == 1) {
                            Res = months + " " + this.TimeAgo.defaults.text.after.month.sing;
                        }
                        else {
                            Res = months + " " + this.TimeAgo.defaults.text.after.month.plural;
                        }
                    }else if(years >=1 && years < 60){
                        if (years == 1) {
                            Res = years + " " + this.TimeAgo.defaults.text.after.year.sing;
                        }
                        else {
                            Res = years + " " + this.TimeAgo.defaults.text.after.year.plural;
                        }
                    }
                }else {
                    Ago = true;
                    if (parseInt(Sec, 10) < 30) {
                        Res = this.TimeAgo.defaults.text.after.now;
                    }
                    else if (parseInt(Sec, 10) > 30 && parseInt(Sec, 10) < 60) {
                        Res = parseInt(Sec, 10) + " " + this.TimeAgo.defaults.text.after.sec  + this.TimeAgo.defaults.text.after.after;
                    }
                    else if (parseInt(Min, 10) >= 1 && parseInt(Min, 10) < 60) {
                        if (parseInt(Min, 10) == 1) {
                            Res = parseInt(Min, 10) + " " + this.TimeAgo.defaults.text.after.min.sing + this.TimeAgo.defaults.text.after.after;
                        }
                        else {
                            Res = parseInt(Min, 10) + " " + this.TimeAgo.defaults.text.after.min.plural + this.TimeAgo.defaults.text.after.after;
                        }
                    }
                    else if (parseInt(Hours, 10) >= 1 && parseInt(Hours, 10) < 24) {
                        if (parseInt(Hours, 10) == 1) {
                            Res = parseInt(Hours, 10) + " " + this.TimeAgo.defaults.text.after.hour.sing + this.TimeAgo.defaults.text.after.after;
                        }
                        else {
                            Res = parseInt(Hours, 10) + " " + this.TimeAgo.defaults.text.after.hour.plural + this.TimeAgo.defaults.text.after.after;
                        }
                    }
                    else if (parseInt(Days, 10) >= 1 && parseInt(Days, 10) < 31) {
                        if (parseInt(Days, 10) == 1) {
                            Res = parseInt(Days, 10) + " " + this.TimeAgo.defaults.text.after.day.sing + this.TimeAgo.defaults.text.after.after;
                        }
                        else {
                            Res = parseInt(Days, 10) + " " + this.TimeAgo.defaults.text.after.day.plural + this.TimeAgo.defaults.text.after.after;
                        }
                    }
                    else if (parseInt(Days, 10) >= 30 && parseInt(Days, 10) <= 31) {
                        if (parseInt(Months, 10) == 1) {
                            Res = parseInt(Months, 10) + " " + this.TimeAgo.defaults.text.after.month.sing + this.TimeAgo.defaults.text.after.after;
                        }
                        else {
                            Res = parseInt(Months, 10) + " " + this.TimeAgo.defaults.text.after.month.plural + this.TimeAgo.defaults.text.after.after;
                        }
                    }
                    else if (parseInt(Months, 10) >= 12) {
                        if (parseInt(Years, 10) == 1) {
                            Res = parseInt(Years, 10) + " " + this.TimeAgo.defaults.text.after.year.sing + this.TimeAgo.defaults.text.after.after;
                        }
                        else {
                            Res = parseInt(Years, 10) + " " + this.TimeAgo.defaults.text.after.year.plural + this.TimeAgo.defaults.text.after.after;
                        }
                    }
            }
            if(Ago){
                var RRes = this.TimeAgo.defaults.text.ago.before + Res.toLowerCase();
            }else{
                var RRes = this.TimeAgo.defaults.text.in.before + Res.toLowerCase();
            }
                p.innerHTML = RRes;
            }
        }
    }
    
        TimeAgo.defaults = {
            selector: {
                pId: '',
                attr: 'timeAgo' // data-
            },
            TGClass: '',
            text: {
                ago: {
                    before: ''
                },
                in: {
                    before: 'In ', // before
                    fewSec: 'few seconds'
                }, 
                after: {
                    now: 'Just now', // less than 30 seconds
                    sec: 'seconds',
                    min: {
                        sing: 'minute',
                        plural: 'minutes'
                    },
                    hour: {
                        sing: 'hour',
                        plural: 'hours'
                    },
                    day: {
                        sing: 'day',
                        plural: 'days'
                    },
                    month: {
                        sing: 'month',
                        plural: 'months'
                    },
                    year: {
                        sing: 'year',
                        plural: 'years'
                    },
                    after: ' ago.'
                }
            },
            update: {
                active: true,
                interval: '1000'
            }
        }
    
        window.TimeAgo = TimeAgo;
    })()