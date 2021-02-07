/**
 * @param vNode 虚拟DOM对象：目前仅支持元素节点和文本节点进行渲染
 */
const render = (vNode) => {
  // 如果是字符串，认为是文本节点，创建一个文本节点（children里面为字符串）
  if (typeof vNode === "string") return document.createTextNode(vNode);

  // 其他情况默认为元素节点
  // 1.创建一个元素
  const $el = document.createElement(vNode.tagName);
  // 2.添加虚拟DOM对象上所有的属性
  for (const [key, value] of Object.entries(vNode.props)) {
    $el.setAttribute(key, value);
  }
  // 3.如果虚拟DOM上有子元素，则递归渲染
  for (const child of vNode.children) {
    $el.appendChild(render(child));
  }

  return $el;
};

export default render;
