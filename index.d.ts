export var __esModule: boolean;
/**
    * @description 接收一个html字页面符串--给标题注入id-->得到tree菜单结构---》生成菜单模板--》注入到页面内容并返回
    * @param {Object} parObj 完整的参数对象信息
    * @param {String} parObj.html 要处理的html字符串
    * @param {String} parObj.fileName 生成的html文件名（如果存在html,head,外层的标签的话）
    * @param {Object} other 接收其他信息的对象
    * @param {Boolean} other.isAddHtmlHead  是否不给转换后的文档添加html,body等标签,默认为true
    * @param {Boolean} other.isAddMenu   是否给转换后的html文件注入锚点菜单,默认为true
    * @param {Boolean} other.isAddOrder   是否添加手动生成的序号,默认为true
    * @author zl-fire 2021/09/01
    * @example
    * let html = addMenu2Page(html, fileName);
  */
export function addMenu2Page(html: any, fileName?: string, other?: {
    isAddHtmlHead: boolean;
    isAddMenu: boolean;
    isAddOrder: boolean;
}): any;
/**
    * @description 传入docx类型文档，会解析成html，同时给这个html注入菜单，最后写入指定的路径
    * @param {Object} parObj 完整的参数对象信息
    * @param {String} parObj.docxPath 要处理的docx文档路径
    * @param {String} parObj.outPath 要输出的html文档路径，默认为当前docx文件所在目录
    * @param {Boolean} parObj.isAddHtmlHead  是否不给转换后的文档添加html,body等标签
    * @param {Boolean} parObj.isAddMenu   是否给转换后的html文件注入锚点菜单
    * @param {Boolean} parObj.autoHsSty   是否添加手动注入的h1--h6的大小样式
    * @param {Boolean} parObj.isAddOrder   是否添加手动生成的序号
    * @param {Boolean} parObj.isAddpagePadV   是否给页面注入默认的padding值
    * @param {Boolean} parObj.manualAssignment   用户手动注入的样式对象
    * @param {Boolean} parObj.showWarnMessage   是否显示docx文档转换为html时的警告信息（如果有的话），默认显示
    * @param {Boolean} parObj.showExeResult   创建html文件时，是否要显示提示信息
    * @author zl-fire 2021/09/01
    * @example
    * var path = require("path");
    * let { docx2htmlAddMenu } = require("./index");
    * let fileName = "6660.docx";
    * let docxPath = path.join(path.resolve("."), fileName); //通过path.join可以解决mac和window路径规则不一致的情况
    * let outPath = path.join(path.resolve("."), "/aa/bb/cc/dd/", fileName);
    * (async function () {
    *     await docx2htmlAddMenu({
    *         docxPath: docxPath,
    *         outPath:outPath,
    *         showWarnMessage: false,
    *     })
    * })()
  */
export function docx2htmlAddMenu(parObj: {
    docxPath: string;
    outPath: string;
    isAddHtmlHead: boolean;
    isAddMenu: boolean;
    autoHsSty: boolean;
    isAddOrder: boolean;
    isAddpagePadV: boolean;
    manualAssignment: boolean;
    showWarnMessage: boolean;
    showExeResult: boolean;
}): Promise<void>;
export namespace utils {
    export { addHtmlTag };
    export { createEndMenuTempla };
    export { numberToChinese };
    export { numToEng };
    export { resolveHtmlPageMenu };
}
/**
    * @description 如果内容没有外层的html，body包裹，则可使用此函数进行处理
    * @param {string} content 要处理的html字符串
    * @param {string} fileName html字符串的名字
    * @author zl-fire 2021/09/01
    * @return {string} 包裹了html,body的最终的字符串
  */
declare function addHtmlTag(content: string, fileName: string): string;
/**
    * @description 返回要创建固定定位的菜单容器字符串（固定格式），包含了html+css+js, 接收一个具体的菜单内容作为参数
    * @param {string} realMenu 菜单html字符串
    * @author zl-fire 2021/09/01
    * @return {string} 生成的最终的包含了样式和js逻辑的菜单字符串
  */
declare function createEndMenuTempla(realMenu: string): string;
/**
    * @description 将阿拉伯数字转换成中文的大写数字
    * @param {number} num 要转换的阿拉伯数字
    * @author zl-fire 2021/09/01
    * @return {string} 中文的大写数字字符串
    * @example
    * let n=numberToChinese(12);//返回'十二'
  */
declare function numberToChinese(num: number): string;
/**
    * @description 通过ASCII码的方式将1-26转换为字母a-z(可大写可小写)
    * @param {number} num 要转换的阿拉伯数字1-26
    * @param {boolean} big true:大写，false|不传:为小写
    * @author zl-fire 2021/09/01
    * @return {string} 英文字母a-zA-Z
    * @example
    * let n=numToEng(1);//返回'a'
  */
declare function numToEng(num: number, big: boolean): string;
/**
    * @description 传入能获取所有页面元素的$对象，从中获取由h1---h6组合成的树结构
    * @param {object} $ 能获取所有页面元素的$对象，这里使用的cheerio
    * @author zl-fire 2021/09/01
    * @return {object[]} json树结构
  */
declare function resolveHtmlPageMenu($: object): object[];
export {};
