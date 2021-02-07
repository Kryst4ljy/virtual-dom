/**
 * @param $node 要渲染的DOM元素
 * @param $target 挂载目标元素
 */
export default ($node, $target) => {
  return $target.appendChild($node);
};
