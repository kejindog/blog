<template><div><h3 id="ui" tabindex="-1"><a class="header-anchor" href="#ui" aria-hidden="true">#</a> UI</h3>
<p><a href="https://github.com/tusen-ai/naive-ui" target="_blank" rel="noopener noreferrer">naive-ui<ExternalLinkIcon/></a></p>
<blockquote>
<p>仅支持 Vue3 的组件库。拥有完善的 TypeScript 类型推导的 Vue3 组件库，拥有 80 多种组件、中文文档，如果你想换换“口味”可以试试它。</p>
</blockquote>
<h3 id="setup-语法糖" tabindex="-1"><a class="header-anchor" href="#setup-语法糖" aria-hidden="true">#</a> SetUp 语法糖</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'CustomName'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 无法在 setup 中使用， 需要使用单独的代码块声明</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> useAttrs<span class="token punctuation">,</span> useSlots<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./child/child.vue'</span>
 
<span class="token keyword">const</span> childRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
 
  <span class="token comment">// props 属性注册</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 事件注册</span>
  <span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 获取 attrs 属性</span>
  <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 获取 slots 插槽</span>
  <span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
  <span class="token comment">// 属性/方法暴露 ==> setup 语法糖中默认不会对外暴露组件的任何属性与方法，可以使用该方法将需要属性/方法暴露出去</span>
  <span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
 
  <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'Hello world！'</span><span class="token punctuation">)</span>
 
  <span class="token keyword">const</span> onClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    text<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'好好学习，天天向上！'</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'childRef===>'</span><span class="token punctuation">,</span> childRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


