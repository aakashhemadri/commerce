(this.webpackJsonpcommerce=this.webpackJsonpcommerce||[]).push([[11],{93:function(t,e,i){"use strict";i.r(e);var s=i(7),c=i(8),r=i(10),n=i(9),a=i(1),o=i.n(a),d=i(28),j=i(29),l=i.n(j),u=(i(31),i(2)),h=function(t){Object(r.a)(i,t);var e=Object(n.a)(i);function i(t){var c;return Object(s.a)(this,i),c=e.call(this,t),console.log(t.item),c.state={title:t.item.title,description:t.item.description,rating:t.item.rating[0].description},c}return Object(c.a)(i,[{key:"render",value:function(){return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsxs)("div",{children:[this.state.title," - ",this.state.rating," out of 5"]}),Object(u.jsx)("div",{children:this.state.description}),Object(u.jsx)("hr",{})]})}}]),i}(o.a.Component),m=function(t){Object(r.a)(i,t);var e=Object(n.a)(i);function i(t){var c;return Object(s.a)(this,i),(c=e.call(this,t)).state={item:c.props.location.state,reviews:[]},c}return Object(c.a)(i,[{key:"componentDidMount",value:function(){var t,e=this;for(t=0;t<this.state.item.reviews.length;t++)l.a.get(d.a.PROXY_URL+d.a.BASE_PROXY+"/review/"+this.state.item.reviews[t]).then((function(t){var i=e.state.reviews;i.push(t.data),e.setState({item:e.state.item,reviews:i})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsxs)("div",{class:"product",children:[Object(u.jsx)("img",{src:this.state.item.imageURL,class:"product-image"}),Object(u.jsxs)("div",{class:"product-body",children:[Object(u.jsx)("div",{class:"product-title",children:this.state.item.name}),Object(u.jsxs)("div",{class:"product-price",children:["Rs. ",this.state.item.price]}),Object(u.jsx)("div",{class:"product-description",children:this.state.item.description})]}),Object(u.jsx)("div",{class:"product-information"}),Object(u.jsx)("div",{class:"product-recommendations"})]}),Object(u.jsxs)("div",{class:"product-reviews",children:[Object(u.jsx)("h4",{children:"Reviews"}),this.reviews(this.state.reviews)]})]})}},{key:"reviews",value:function(t,e){return Object(u.jsx)(o.a.Fragment,{children:t.map((function(t){return Object(u.jsx)(h,{item:t})}))})}}]),i}(o.a.Component);e.default=m}}]);
//# sourceMappingURL=11.ef08f088.chunk.js.map