import {fromJS} from "immutable";

const defaultState = fromJS ({
  articleList: [
    {
      id: 1,
      title: '来来往往的列车',
      desc: '天气一天比一天冷，尤其下过雨后，满地水坑里的梧桐落叶黄澄澄的，像打破的鸡蛋，漫无目的地躺在湿漉漉的柏油路。 不知道这是秋天还是冬天，我已经...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/16241058-815befd5a9e9163b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '【讲座笔记】|闲话张翎小说的人物形象塑造 (1)',
      desc: '\n' +
          '      两年前在寒假的书房里看完张翎的《阵痛》，是凌晨两三点钟。 上官吟春的娘家与藻溪之间的二十里地，到底是一条什么样的路，书里没有详细描述。只知道有一...\n' +
          '    ',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/11410770-4aedb585ec26a7da.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      title: '画心',
      desc: '永徽十八年，康翊皇帝于长筠殿驾崩，此后数年，国力渐微，四世而亡。大延旧民曾叹道：“百年王朝，盛世皆系于永徽一朝。”后世史书所记对这位英年君主极尽...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/19141555-fab9ceaebfec4bc5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 4,
      title: '魔方',
      desc: '一 车子七拐八拐地开进了巷子，进了一道锈迹斑斑的铁门，几乎要擦着两旁满是粉笔画与广告纸的老墙，终于在一栋缀满青苔的楼前停了下来。 他...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/14873223-4d7ac53eba2f8f04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 5,
      title: '小麦进城',
      desc: '原创、文/狂躁的猫小姐 小麦第一次进城是在十六岁，去向一个男人讨要学费，还有她和母亲的生活费…… 她想读书,她要读书，她还要那个男人给妈妈一个交...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/7840805-fcfa0ad8cb11da33.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 6,
      title: '赤焰寒',
      desc: '1 夕阳西下，漫天的云海燃起熊熊烈火，天地间如同一个巨大的火炉，把楚锋手里的赤焰刀映得像刚出炉时一样通体红透，热气炎炎。 十步开外，沈炼重背对着...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/10433797-fafa2b06d5f1f59f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

// eslint-disable-next-line
export default (state = defaultState, action) => {

  return state;
}
