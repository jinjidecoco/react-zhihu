### *1.ReactComponent*和*ReactElement*的区别

我们可以通过`React.createElement` 和 `React.cloneElement` 构建react元素

React构建组建的方式有 `React.createClass、 es6 class` 、无状态函数 

React元素描述的是React虚拟Dom结构

```js
const elemet = <h1 className='greeting'>Hello,world </h1>
```

#### React组件最核心的作用是返回React 元素

```react
//函数定义组件
function Welcome(props){
  return <h1> hello,world {props.name}</h1>
}
```

```js
//使用类构建
class Welcome extends React.Component{
  render(){
    return <h1>hello,world, {props.name}</h1>
  }
}
```

```js
class Home extends React.Component {
	render() {
	  return (
		  <div>
			  <Welcome name='coco'>
			  <p> Anything is possible</p>
		  </div>	
		)
	}
}
```

Home 组件使用了 Welcome组件  返回的React元素为 ：

```js
{
  type:'div',
  props:{
  children:[
    {
      type:'Welcome',
      props:{
        name:'coco'
      }
    },
    {
      type:'p',
      props:{
        children:'Anything is possible'
      }
    }
  ]
  }
}
```

当遇到`type='Welcome'` 时，React 判断这是React组件时，会根据`Welcome`组件返回的 React元素 渲染出来

React组件返回的React 元素类型

```js
// 数字类型的节点
function MyComponent(props) {
  return 1;
}

// 字符串类型的节点
function MyComponent(props) {
  return 'MyComponent';
}

// React元素类型的节点
function MyComponent(props) {
  return <div>React Element</div>;
}

// 数组类型的节点，数组的元素只能是其他合法的React节点
function MyComponent(props) {
  const element = <div>React Element</div>;
  const arr = [1, 'MyComponent', element];
  return arr;
}


```

