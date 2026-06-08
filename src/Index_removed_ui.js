(function () {
    var removedIds = new Set([
        'img_01', 'img_02', 'img_03', 'img_btn01', 'img_btn02', 'img_btn03',
        'pzfloat', 'pziframe', 'pzclose', 'cloase_bg', 'pzclosein',
        'headbtn', 'headline', 'pzhide1', 'pzhide2', 'pzhide3', 'pzhide4',
        'btnt1_01', 'btnt2_01', 'btnt3_01', 'btnt4_01',
        'btnt1_01_text', 'btnt2_01_text', 'btnt3_01_text', 'btnt4_01_text',
        'loadintbg', 'loadintimg'
    ]);

    var stubs = {};

    function makeStub(id) {
        var styleStore = { display: 'none', opacity: '0', transform: '' };
        var style = new Proxy(styleStore, {
            get: function (_, prop) {
                if (prop in styleStore) return styleStore[prop];
                return '';
            },
            set: function (_, prop, value) {
                styleStore[prop] = value;
                return true;
            }
        });

        return {
            id: id,
            style: style,
            src: '',
            innerHTML: '',
            onclick: null,
            onmouseover: null,
            onmouseout: null,
            addEventListener: function () {},
            removeEventListener: function () {},
            setAttribute: function () {},
            getAttribute: function () { return null; }
        };
    }

    var origGetElementById = document.getElementById.bind(document);
    document.getElementById = function (id) {
        var el = origGetElementById(id);
        if (el || !removedIds.has(id)) return el;
        if (!stubs[id]) stubs[id] = makeStub(id);
        return stubs[id];
    };
})();
