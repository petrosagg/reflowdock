var r, o, i, s, a, u, l, c;

l = React.DOM;

o = l.a;

a = l.div;

i = require("classnames");

r = React.createFactory(require("../vector_icon"));

s = "M11.219297,12.803921 C11.2188795,13.287707 11.5307502,13.723651 12.0095154,13.908981 C12.4877588,14.093921 13.0390642,13.991804 13.4055227,13.650182 L19.6246697,7.847278 C20.1250405,7.380641 20.1250405,6.62344 19.6250872,6.156316 L13.4092801,0.350392 C13.1646266,0.121507 12.8368911,0 12.5033106,0 C12.3381903,0 12.1721307,0.029622 12.0136904,0.090716 C11.5349251,0.275656 11.222637,0.712087 11.222637,1.195483 L11.222637,4.755235 L8.988401,4.755235 C2.057852,4.755235 1.6948031,2.082537 1.1856852,1.074049 C1.018715,0.743306 0.4262512,0.646537 0.2128106,1.072977 C-0.7577142,3.01202 1.4935153,9.173136 8.988401,9.173136 L11.2205495,9.173136 L11.219297,12.803921 Z";

u = "M10,17.5 C5.85786438,17.5 2.5,14.1421356 2.5,10 C2.5,5.85786438 5.85786438,2.5 10,2.5 C14.1421356,2.5 17.5,5.85786438 17.5,10 C17.5,14.1421356 14.1421356,17.5 10,17.5 Z M9,9.53077793 L9,13.549222 C9,14.0890248 9.44771525,14.54 10,14.54 C10.5561352,14.54 11,14.0964136 11,13.549222 L11,9.53077793 C11,8.99097514 10.5522847,8.53999996 10,8.53999996 C9.44386482,8.53999996 9,8.98358637 9,9.53077793 Z M10,7.53999996 C10.5522847,7.53999996 11,7.09228471 11,6.53999996 C11,5.98771521 10.5522847,5.53999996 10,5.53999996 C9.44771525,5.53999996 9,5.98771521 9,6.53999996 C9,7.09228471 9.44771525,7.53999996 10,7.53999996 Z";

c = "M106.2,16H22c-7.7,0-14,6.2-14,13.7v49.6C8,86.8,14.3,93,22,93h29.9L80,112V93h26.2c7.7,0,14-6.2,14-13.7V29.7 C120.2,22.2,113.9,16,106.2,16z";

module.exports = React.createClass({
    displayName: "Bubble",
    _path: function() {
        if (this.props.isInformational) {
            return u;
        }
        if (this.props.isThreadStarter) {
            return c;
        }
        return s;
    },
    _classes: function() {
        return i({
            bubble: !0,
            "no-follow-link": !0,
            "tipsy-tooltip": !1
        });
    },
    render: function() {
        var e, t, n, i, s, u, l, c, p;
        c = this.props;
        n = c.color;
        i = c.isInformational;
        u = c.link;
        l = c.onClick;
        s = c.isThreadStarter;
        p = c.title;
        e = {
            className: this._classes(),
            href: u,
            onClick: l,
            title: p
        };
        if (n) {
            e.style = {
                borderColor: n,
                color: n,
                fill: n
            }
        };
        t = !s || i ? 20 : 128;
        return o(e, a({
            className: "drag-handle",
            draggable: "true"
        }), r({
            path: this._path(),
            boxHeight: t,
            boxWidth: t,
            className: "bubble-icon"
        }));
    }
});
