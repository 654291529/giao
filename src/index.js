import Icon from './base/icon/icon'
import Button from './base/button/button'
import ButtonGroup from './base/button/button-group'
import Input from './form/input/input'
import Row from './layout/grid/row'
import Col from './layout/grid/col'
import Layout from './layout/layout/layout'
import Header from './layout/layout/header'
import Sider from './layout/layout/sider'
import Content from './layout/layout/content'
import Footer from './layout/layout/footer'
import Toast from './notify/toast/toast'
import plugin from './plugins/plugin'
import Tabs from './datashow/tabs/tabs'
import TabsItem from './datashow/tabs/tabs-item'
import TabsNav from './datashow/tabs/tabs-nav'
import TabsPane from './datashow/tabs/tabs-pane'
import TabsContent from './datashow/tabs/tabs-content'
import Popover from './notify/popover/popover'
import Cascader from './form/cascader/cascader'
import CascaderItems from './form/cascader/cascader-items'
import Collapse from './datashow/collapse/collapse'
import CollapseItem from './datashow/collapse/collapse-item'
import Springs from './action/springs/springs'
import Slides from './datashow/slides/slides'


const components = [
  Icon,
  Button,
  ButtonGroup,
  Input,
  Row,
  Col,
  Layout,
  Header,
  Sider,
  Content,
  Footer,
  Toast,
  plugin,
  Tabs,
  TabsItem,
  TabsNav,
  TabsPane,
  TabsContent,
  Popover,
  Cascader,
  CascaderItems,
  Collapse,
  CollapseItem,
  Springs,
  Slides
]


const install = Vue => {
  components.forEach(component => {
    component.install(Vue)
  })
  Vue.use(Message)
  Vue.use(Loading)
}


export { Message, Loading, Formator }
export default { install, Loading, Message, Formator }