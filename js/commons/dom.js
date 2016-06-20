/**
 * Created by hll on 2016/6/20.
 * dom操作的工具方法
 */

/**
 *  根据input元素的name获取input元素
 */
function getInputByName(name) {
    return $("[name=" + name + "]");
}
