(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-517d9992"],{1079:function(e,n,t){"use strict";var o=t("541c");n["a"]=o["a"]},"3b99":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var o,c=t("2b0e"),a=t("c637"),r=t("a723"),l=t("d82f"),s=t("cf75"),i=t("f32e");function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=Object(s["d"])(Object(l["m"])(u(u({},i["c"]),{},(o={},b(o,i["a"],Object(s["c"])(r["b"],[])),b(o,"switches",Object(s["c"])(r["g"],!1)),o))),a["M"]),m=c["default"].extend({name:a["M"],mixins:[i["b"]],provide:function(){return{bvCheckGroup:this}},props:p,computed:{isRadioGroup:function(){return!1}}})},a15b:function(e,n,t){"use strict";t.d(n,"a",(function(){return C}));var o=t("b42e"),c=t("c637"),a=t("a723"),r=t("2326"),l=t("228e"),s=t("6c06"),i=t("b508"),d=t("d82f"),u=t("cf75"),b=t("fa73");function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=["start","end","center"],h=Object(i["a"])((function(e,n){return n=Object(b["h"])(Object(b["g"])(n)),n?Object(b["c"])(["row-cols",e,n].filter(s["a"]).join("-")):null})),x=Object(i["a"])((function(e){return Object(b["c"])(e.replace("cols",""))})),k=[],g=function(){var e=Object(l["b"])().reduce((function(e,n){return e[Object(u["g"])(n,"cols")]=Object(u["c"])(a["p"]),e}),Object(d["c"])(null));return k=Object(d["h"])(e),Object(u["d"])(Object(d["m"])(m(m({},e),{},{alignContent:Object(u["c"])(a["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(f,"between","around","stretch"),e)})),alignH:Object(u["c"])(a["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(f,"between","around"),e)})),alignV:Object(u["c"])(a["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(f,"baseline","stretch"),e)})),noGutters:Object(u["c"])(a["g"],!1),tag:Object(u["c"])(a["u"],"div")})),c["Ob"])},C={name:c["Ob"],functional:!0,get props(){return delete this.props,this.props=g(),this.props},render:function(e,n){var t,c=n.props,a=n.data,r=n.children,l=c.alignV,s=c.alignH,i=c.alignContent,d=[];return k.forEach((function(e){var n=h(x(e),c[e]);n&&d.push(n)})),d.push((t={"no-gutters":c.noGutters},v(t,"align-items-".concat(l),l),v(t,"justify-content-".concat(s),s),v(t,"align-content-".concat(i),i),t)),e(c.tag,Object(o["a"])(a,{staticClass:"row",class:d}),r)}}},ad8d:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("form-checkbox-basic"),t("form-checkbox-custom"),t("form-checkbox-color"),t("form-checkbox-multiple"),t("form-checkbox-change-names"),t("form-checkbox-stacked-inline"),t("form-checkbox-states"),t("form-checkbox-indeterminate")],1)],1)},c=[],a=t("a15b"),r=t("b28b"),l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Basic Checkbox"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("You can have ")]),t("code",[e._v("<b-form-checkbox-group>")]),t("span",[e._v(" or ")]),t("code",[e._v("<b-form-checkbox>")]),t("span",[e._v(" render a browser native checkbox input by setting the "),t("code",[e._v("plain")]),e._v(" prop.")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{attrs:{value:"A",plain:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Checked ")]),t("b-form-checkbox",{attrs:{value:"B",plain:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Unchecked ")]),t("b-form-checkbox",{attrs:{value:"C",plain:"",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Checked disabled ")]),t("b-form-checkbox",{attrs:{value:"D",plain:"",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Unchecked disabled ")])],1)],1)},s=[],i=t("1079"),d=t("c3e6"),u=t("d6e4"),b='\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      v-model="selected"\n      value="A"\n      class="custom-control-primary"\n    >\n      Primary\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="CC"\n      class="custom-control-secondary"\n    >\n      Secondary\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="C"\n      class="custom-control-success"\n    >\n      Success\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      v-model="selected"\n      value="F"\n      class="custom-control-danger"\n    >\n      Danger\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      v-model="selected"\n      value="D"\n      class="custom-control-warning"\n    >\n      Warning\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="G"\n      class="custom-control-info"\n    >\n      Info\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n  data() {\n    return {\n      selected: [\'A\', \'C\', \'CC\', \'B\', \'D\', \'E\', \'F\', \'G\'],\n    }\n  },\n}\n<\/script>\n',p='\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      v-model="selected"\n      value="A"\n    >\n      Checked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="B"\n    >\n      Unchecked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="C"\n      disabled\n    >\n      Checked disabled\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="D"\n      disabled\n    >\n      Unchecked disabled\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n   data() {\n    return {\n      selected: [\'B\', \'C\'],\n    }\n  },\n}\n<\/script>\n',m="\n<template>\n  <div>\n    <b-form-checkbox-group\n      v-model=\"value\"\n      :options=\"options\"\n      :state=\"state\"\n      class=\"demo-inline-spacing\"\n      name=\"checkbox-validation\"\n    >\n      <b-form-invalid-feedback :state=\"state\">\n        Please select two\n      </b-form-invalid-feedback>\n      <b-form-valid-feedback :state=\"state\">\n        Thank you\n      </b-form-valid-feedback>\n    </b-form-checkbox-group>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormCheckboxGroup,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n    BCardCode,\n  },\n  data() {\n    return {\n      value: [],\n      options: [\n        { text: 'First Check', value: 'first' },\n        { text: 'Second Check', value: 'second' },\n        { text: 'Third Check', value: 'third' },\n      ],\n    }\n  },\n  computed: {\n    state() {\n      return this.value.length === 2\n    },\n  },\n}\n<\/script>\n",v='\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      v-model="selected"\n      value="A"\n      plain\n    >\n      Checked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="B"\n      plain\n    >\n      Unchecked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="C"\n      plain\n      disabled\n    >\n      Checked disabled\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="D"\n      plain\n      disabled\n    >\n      Unchecked disabled\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n    BCardCode,\n  },\n data() {\n    return {\n      selected: [\'A\', \'C\']\n    }\n  },\n}\n<\/script>\n',f='\n<template>\n  <div>\n     \x3c!-- custom checkbox --\x3e\n    <b-form-group label="Using options array:">\n      <b-form-checkbox-group\n        id="checkbox-group-1"\n        v-model="selected"\n        :options="options"\n        name="flavour-1"\n        class="demo-inline-spacing"\n      />\n    </b-form-group>\n\n    \x3c!-- using sub-components --\x3e\n    <b-form-group label="Using sub-components:">\n      <b-form-checkbox-group\n        id="checkbox-group-2"\n        v-model="selected"\n        name="flavour-2"\n        class="demo-inline-spacing"\n      >\n        <b-form-checkbox value="orange">\n          Orange\n        </b-form-checkbox>\n        <b-form-checkbox value="apple">\n          Apple\n        </b-form-checkbox>\n        <b-form-checkbox value="pineapple">\n          Pineapple\n        </b-form-checkbox>\n        <b-form-checkbox value="grape">\n          Grape\n        </b-form-checkbox>\n      </b-form-checkbox-group>\n    </b-form-group>\n\n    <b-card-text class="mb-0">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport {BFormGroup, BFormCheckboxGroup, BCardText, BFormCheckbox} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n    BFormCheckboxGroup,\n    BCardCode,\n    BFormGroup,\n  },\n  data() {\n    return {\n      selected: [],\n      options: [\n        { text: \'Orange\', value: \'orange\' },\n        { text: \'Apple\', value: \'apple\' },\n        { text: \'Pineapple\', value: \'pineapple\' },\n        { text: \'Grape\', value: \'grape\' },\n      ],\n    }\n  },\n}\n<\/script>\n',h="\n<template>\n  <b-form-checkbox-group\n    v-model=\"selected\"\n    :options=\"options\"\n    value-field=\"item\"\n    text-field=\"name\"\n    disabled-field=\"notEnabled\"\n    class=\"demo-inline-spacing\"\n  />\n</template>\n\n<script>\nimport { BFormCheckboxGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormCheckboxGroup,\n    BCardCode,\n  },\n  data() {\n    return {\n      selected: [],\n      options: [\n        { item: 'A', name: 'Option A' },\n        { item: 'B', name: 'Option B' },\n        { item: 'D', name: 'Option C', notEnabled: true },\n        { item: { d: 1 }, name: 'Option D' },\n      ],\n    }\n  },\n}\n<\/script>\n",x='\n<template>\n  <div>\n    <b-form-group label="Form-checkbox-group inline checkboxes (default)">\n      <b-form-checkbox-group\n        v-model="selected"\n        :options="options"\n        name="flavour-1a"\n        class="demo-inline-spacing"\n      />\n    </b-form-group>\n\n    <b-form-group label="Form-checkbox-group stacked checkboxes">\n      <b-form-checkbox-group\n        v-model="selected"\n        :options="options"\n        name="flavour-2a"\n        class="demo-inline-spacing"\n        stacked\n      />\n    </b-form-group>\n\n    <b-form-group label="Individual stacked checkboxes (default)">\n      <b-form-checkbox\n        v-for="option in options"\n        :key="option.value"\n        v-model="selected"\n        :value="option.value"\n        name="flavour-3a"\n      >\n        {{ option.text }}\n      </b-form-checkbox>\n    </b-form-group>\n\n    <b-form-group label="Individual inline checkboxes">\n      <b-form-checkbox\n        v-for="option in options"\n        :key="option.value"\n        v-model="selected"\n        :value="option.value"\n        name="flavour-4a"\n        inline\n      >\n        {{ option.text }}\n      </b-form-checkbox>\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckboxGroup, BFormCheckbox, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckboxGroup,\n    BFormCheckbox,\n    BFormGroup,\n    BCardCode,\n  },\n  data() {\n    return {\n      selected: [],\n      options: [\n        { text: \'Orange\', value: \'orange\' },\n        { text: \'Apple\', value: \'apple\' },\n        { text: \'Pineapple\', value: \'pineapple\' },\n        { text: \'Grape\', value: \'grape\' },\n      ],\n    }\n  },\n}\n<\/script>\n',k='\n<template>\n  <div>\n    \x3c!-- checkbox --\x3e\n    <b-form-checkbox\n      v-model="checked"\n      :indeterminate.sync="indeterminate"\n    >\n      Click me to see what happens\n    </b-form-checkbox>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      class="mt-1"\n      variant="outline-primary"\n      @click="toggleIndeterminate"\n    >\n      Toggle Indeterminate State\n    </b-button>\n\n    <div class="mt-1">\n      Checked: <strong>{{ checked }}</strong><br>\n      Indeterminate: <strong>{{ indeterminate }}</strong>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n    BCardCode,\n    BButton,\n  },\n   directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      checked: true,\n      indeterminate: true,\n    }\n  },\n  methods: {\n    toggleIndeterminate() {\n      this.indeterminate = !this.indeterminate\n    },\n  },\n}\n<\/script>\n',g={components:{BCardCode:i["a"],BFormCheckbox:d["a"],BCardText:u["a"]},data:function(){return{selected:["A","C"],codeBasic:v}}},C=g,_=t("2877"),O=Object(_["a"])(C,l,s,!1,null,null,null),B=O.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Custom Checkboxes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustom)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("For cross browser consistency, ")]),t("code",[e._v("<b-form-checkbox-group>")]),t("span",[e._v(" and ")]),t("code",[e._v("<b-form-checkbox>")]),t("span",[e._v(" use Bootstrap's custom checkbox input to replace the browser default checkbox input. ")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{attrs:{value:"A"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Checked ")]),t("b-form-checkbox",{attrs:{value:"B"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Unchecked ")]),t("b-form-checkbox",{attrs:{value:"C",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Checked disabled ")]),t("b-form-checkbox",{attrs:{value:"D",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Unchecked disabled ")])],1)],1)},j=[],F={components:{BCardCode:i["a"],BFormCheckbox:d["a"],BCardText:u["a"]},data:function(){return{selected:["B","C"],codeCustom:p}}},w=F,G=Object(_["a"])(w,y,j,!1,null,null,null),S=G.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Color"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeColor)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("To change the color of the checkBox use the ")]),t("code",[e._v(".custom-control-{value}")]),t("span",[e._v(" for primary, secondary, success, danger, info, warning.")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{value:"A"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Primary ")]),t("b-form-checkbox",{staticClass:"custom-control-secondary",attrs:{value:"CC"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Secondary ")]),t("b-form-checkbox",{staticClass:"custom-control-success",attrs:{value:"C"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Success ")]),t("b-form-checkbox",{staticClass:"custom-control-danger",attrs:{value:"F"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Danger ")]),t("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{value:"D"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Warning ")]),t("b-form-checkbox",{staticClass:"custom-control-info",attrs:{value:"G"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" Info ")])],1)],1)},I=[],D={components:{BCardCode:i["a"],BFormCheckbox:d["a"],BCardText:u["a"]},data:function(){return{selected:["A","C","CC","B","D","E","F","G"],codeColor:b}}},A=D,E=Object(_["a"])(A,P,I,!1,null,null,null),T=E.exports,U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Contextual state and validation"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeStates)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Bootstrap includes validation styles for ")]),t("code",[e._v("valid")]),t("span",[e._v(" and ")]),t("code",[e._v("invalid")]),t("span",[e._v(" states on most form controls.")])]),t("div",[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,state:e.state,name:"checkbox-validation"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},[t("b-form-invalid-feedback",{attrs:{state:e.state}},[e._v(" Please select two ")]),t("b-form-valid-feedback",{attrs:{state:e.state}},[e._v(" Thank you ")])],1)],1)],1)},$=[],V=t("3b99"),M=t("3010"),N=t("5b4c"),R={components:{BFormCheckboxGroup:V["a"],BFormInvalidFeedback:M["a"],BFormValidFeedback:N["a"],BCardText:u["a"],BCardCode:i["a"]},data:function(){return{value:[],options:[{text:"First Check",value:"first"},{text:"Second Check",value:"second"},{text:"Third Check",value:"third"}],codeStates:m}},computed:{state:function(){return 2===this.value.length}}},H=R,J=Object(_["a"])(H,U,$,!1,null,null,null),W=J.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Multiple choice checkboxes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codemultipleChoice)+" ")]},proxy:!0}])},[t("b-form-group",{attrs:{label:"Using options array:"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{id:"checkbox-group-1",options:e.options,name:"flavour-1"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),t("b-form-group",{attrs:{label:"Using sub-components:"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{id:"checkbox-group-2",name:"flavour-2"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[t("b-form-checkbox",{attrs:{value:"orange"}},[e._v(" Orange ")]),t("b-form-checkbox",{attrs:{value:"apple"}},[e._v(" Apple ")]),t("b-form-checkbox",{attrs:{value:"pineapple"}},[e._v(" Pineapple ")]),t("b-form-checkbox",{attrs:{value:"grape"}},[e._v(" Grape ")])],1)],1),t("b-card-text",{staticClass:"mb-0"},[e._v(" Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)},Y=[],q=t("8226"),K={components:{BFormCheckboxGroup:V["a"],BCardCode:i["a"],BFormCheckbox:d["a"],BFormGroup:q["a"],BCardText:u["a"]},data:function(){return{selected:[],options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"},{text:"Grape",value:"grape"}],codemultipleChoice:f}}},L=K,Q=Object(_["a"])(L,z,Y,!1,null,null,null),X=Q.exports,Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Changing the option field names"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeChangeNames)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("If you want to customize the field property names (for example using ")]),t("code",[e._v("name")]),t("span",[e._v(" field for display ")]),t("code",[e._v("text")]),t("span",[e._v(" ) you can easily change them by setting the ")]),t("code",[e._v("text-field")]),t("span",[e._v(" , ")]),t("code",[e._v("html-field")]),t("span",[e._v(" , ")]),t("code",[e._v("value-field")]),t("span",[e._v(" , and ")]),t("code",[e._v("disabled-field")]),t("span",[e._v(" props to a string that contains the property name you would like to use:")])]),t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),t("b-card-text",{staticClass:"mt-1 mb-0"},[e._v(" Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)},ee=[],ne={components:{BFormCheckboxGroup:V["a"],BCardText:u["a"],BCardCode:i["a"]},data:function(){return{codeChangeNames:h,selected:[],options:[{item:"A",name:"Option A"},{item:"B",name:"Option B"},{item:"D",name:"Option C",notEnabled:!0},{item:{d:1},name:"Option D"}]}}},te=ne,oe=Object(_["a"])(te,Z,ee,!1,null,null,null),ce=oe.exports,ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Inline and stacked checkboxes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeInlineStacked)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Set the prop ")]),t("code",[e._v("stacked")]),t("span",[e._v(" on ")]),t("code",[e._v("<b-form-checkbox-group>")]),t("span",[e._v(" to place each form control one over the other, or if using individual checkboxes not inside a ")]),t("code",[e._v("<b-form-checkbox-group>")]),t("span",[e._v(", set the ")]),t("code",[e._v("inline")]),t("span",[e._v(" prop on ")]),t("code",[e._v("<b-form-checkbox>")]),t("span",[e._v(".")])]),t("div",[t("b-form-group",{attrs:{label:"Form-checkbox-group inline checkboxes (default)"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,name:"flavour-1a"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),t("b-form-group",{attrs:{label:"Form-checkbox-group stacked checkboxes"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,name:"flavour-2a",stacked:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),t("b-form-group",{attrs:{label:"Individual stacked checkboxes (default)"}},e._l(e.options,(function(n){return t("b-form-checkbox",{key:n.value,attrs:{value:n.value,name:"flavour-3a"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" "+e._s(n.text)+" ")])})),1),t("b-form-group",{attrs:{label:"Individual inline checkboxes"}},e._l(e.options,(function(n){return t("b-form-checkbox",{key:n.value,attrs:{value:n.value,name:"flavour-4a",inline:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v(" "+e._s(n.text)+" ")])})),1)],1)],1)},re=[],le={components:{BFormCheckboxGroup:V["a"],BFormCheckbox:d["a"],BFormGroup:q["a"],BCardCode:i["a"],BCardText:u["a"]},data:function(){return{codeInlineStacked:x,selected:[],options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"},{text:"Grape",value:"grape"}]}}},se=le,ie=Object(_["a"])(se,ae,re,!1,null,null,null),de=ie.exports,ue=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Indeterminate (tri-state) support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeIndeterminate)+" ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("<b-form-checkbox>")]),t("span",[e._v(" supports setting this visual indeterminate state via the ")]),t("code",[e._v("indeterminate")]),t("span",[e._v(" prop (defaults to ")]),t("code",[e._v("false")]),t("span",[e._v(" ). Clicking the checkbox will clear its indeterminate state. The ")]),t("code",[e._v("indeterminate")]),t("span",[e._v(" prop can be synced to the checkbox's state by v-binding the ")]),t("code",[e._v("indeterminate")]),t("span",[e._v(" prop with the ")]),t("code",[e._v(".sync")]),t("span",[e._v(" modifier.")])]),t("b-form-checkbox",{attrs:{indeterminate:e.indeterminate},on:{"update:indeterminate":function(n){e.indeterminate=n}},model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}},[e._v(" Click me to see what happens ")]),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1",attrs:{variant:"outline-primary"},on:{click:e.toggleIndeterminate}},[e._v(" Toggle Indeterminate State ")]),t("div",{staticClass:"mt-1"},[e._v(" Checked: "),t("strong",[e._v(e._s(e.checked))]),t("br"),e._v(" Indeterminate: "),t("strong",[e._v(e._s(e.indeterminate))])])],1)},be=[],pe=t("1947"),me=t("e009"),ve={components:{BFormCheckbox:d["a"],BCardCode:i["a"],BButton:pe["a"],BCardText:u["a"]},directives:{Ripple:me["a"]},data:function(){return{checked:!0,indeterminate:!0,codeIndeterminate:k}},methods:{toggleIndeterminate:function(){this.indeterminate=!this.indeterminate}}},fe=ve,he=Object(_["a"])(fe,ue,be,!1,null,null,null),xe=he.exports,ke={components:{BRow:a["a"],BCol:r["a"],FormCheckboxBasic:B,FormCheckboxCustom:S,FormCheckboxColor:T,FormCheckboxStates:W,FormCheckboxMultiple:X,FormCheckboxChangeNames:ce,FormCheckboxStackedInline:de,FormCheckboxIndeterminate:xe}},ge=ke,Ce=Object(_["a"])(ge,o,c,!1,null,null,null);n["default"]=Ce.exports},d6e4:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var o=t("2b0e"),c=t("b42e"),a=t("c637"),r=t("a723"),l=t("cf75"),s=Object(l["d"])({textTag:Object(l["c"])(r["u"],"p")},a["u"]),i=o["default"].extend({name:a["u"],functional:!0,props:s,render:function(e,n){var t=n.props,o=n.data,a=n.children;return e(t.textTag,Object(c["a"])(o,{staticClass:"card-text"}),a)}})}}]);
//# sourceMappingURL=chunk-517d9992.b3003c2c.js.map