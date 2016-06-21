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

/**
 *  隐藏元素
 *	e:元素
 *	reflow:true->所占空间消失；false->所占空间保留
 */
function hide(e,reflow) {
    if (reflow) {
        e.style.display="none"
    }else{
        e.style.visibility="hidden";
    }
}
