// 1.导入所有的svg图标
// 2.完成SvgIcon的全局注册
import SvgIcon from '@/components/SvgIcon'
const svgRequire = require.context('@/icons/svg',false,/\.svg$/)
// 此时返回了一个Require函数，可以接收一个request函数，用于require的导入
// 该函数提供了两个属性，可以通过svgRequire.keys() 获得所有的svg图标
// 遍历图标，把图标作为request参数传入到svgRequire导入函数中，完成本地的svg图标
// console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => {
  svgRequire(svgIcon)
});


// const importAll = (requireContext) => {
//   requireContext.keys().forEach(requireContext);
// }
// try {
//   importAll(svgRequire);
// } catch (error) {
//   console.log(error);
// }


export default app => {
  app.component('svg-icon',SvgIcon)
}