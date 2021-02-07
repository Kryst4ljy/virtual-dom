/**
 * @param tagName 标签名称
 * @param opts 参数配置
 */
export default (tagName, opts) => {
  // 创建一个空对象
  const vElement = Object.create(null);

  Object.assign(vElement, {
    tagName,
    props: opts.props || {},
    children: opts.children || [],
  });

  return vElement;
};
