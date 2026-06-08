function getSizew() {
    var ua = navigator.userAgent;
    var mobileAgents = ['Android', 'iPhone', 'Windows Phone', 'iPad'];
    var isDesktop = true;

    for (var i = 0; i < mobileAgents.length; i++) {
        if (ua.indexOf(mobileAgents[i]) > 0) {
            isDesktop = false;
            break;
        }
    }

    var loadPanel = document.getElementById('loadinint');
    if (loadPanel) {
        if (/(iPhone|Android|Windows Phone )/i.test(ua)) {
            loadPanel.style.transform = 'translate(-50%,-42%) scale(0.55)';
        } else {
            loadPanel.style.transform = 'translate(-50%,-42%) scale(0.85)';
        }
    }

    return isDesktop;
}

getSizew();

var app = pc.Application.getApplication();

function setLoadProgress(progress) {
    var bar = document.getElementById('loadnumberbar');
    var label = document.getElementById('loadnumber');
    if (!bar || !label) {
        return;
    }

    var percent = Math.round(100 * progress);
    bar.style.width = percent + '%';
    label.innerHTML = percent + '%';
}

function Load() {
    var white = document.getElementById('white');
    if (white) {
        white.style.opacity = 0;
        setTimeout(function () {
            white.style.display = 'none';
        }, 500);
    }

    var loadFrame = document.getElementById('loadframeint');
    if (loadFrame) {
        loadFrame.style.display = 'block';
    }

    app.on('start', function () {
        if (loadFrame) {
            loadFrame.style.display = 'none';
        }
    });

    app.on('preload:progress', setLoadProgress);
}

function intnumbx(step) {
    var bar = document.getElementById('loadnumberbar');
    var label = document.getElementById('loadnumber');
    if (!bar || !label) {
        return;
    }

    switch (step) {
        case 1:
            label.innerHTML = '15%';
            bar.style.width = '15%';
            break;
        case 2:
            label.innerHTML = '32%';
            bar.style.width = '32%';
            break;
        case 3:
            label.innerHTML = '48%';
            bar.style.width = '48%';
            break;
        case 4:
            label.innerHTML = '64%';
            bar.style.width = '64%';
            break;
        case 5:
            label.innerHTML = '80%';
            bar.style.width = '80%';
            break;
        case 6:
            label.innerHTML = '100%';
            bar.style.width = '100%';
            setTimeout(function () {
                var loadFrame = document.getElementById('loadframeint');
                if (loadFrame) {
                    loadFrame.style.display = 'none';
                }
            }, 300);
            break;
        default:
            label.innerHTML = '0%';
            bar.style.width = '0%';
    }
}

function loadscale() {
    var loadPanel = document.getElementById('loadinint');
    if (loadPanel) {
        loadPanel.style.transform = 'translate(-50%,-42%) scale(0.55)';
    }
}
