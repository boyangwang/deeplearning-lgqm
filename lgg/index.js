const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const tempText = `第65535节 进来，不问可是对他们不满会在那个时候……文总的想着话又没满脸说。这家孩子虽山知道他们当位面，只是对高客吧……”

    至于确来，文德嗣拿出了一个杯子，一直挑高忠诚度……”

    萧子山点点头，文德嗣在本点看守宅子，萧子山本点的光对，“明代的具精务一番，他自己就差了不多啊，三家都是六处上运。不肯住来的女人都相比。

    高青赔笑道：“即以海商，好有点就吃了一眼，一觉就好了。”萧子山打叹了他的桌子，笑了起来了：

    萧子山见厅里看了一遍：“至于话，又大的一口人给高家吧。”

    萧子山点点头，换高家中哪中真有有些风箱，萧子山点看着眼高青的话，也没听说过不少钱。

    “女孩子没怎么名字，你我们一直没兴趣。”说着连传着女女儿取身大间用路。

    萧子山点点头，命又临高露洁的人物，进着眼下的发时大了。

    “让老爷们你见过的干银，先查这些不差，孩子也是编户齐民多年的多少好，孩子又没有下饭作。

    “你至通的话，他们的前显要是大家的人押一样的话，却没有意多的。”

    “所以给你们自己说起来，我们命年的标准来，你也愿意不好的。”

    这里看守宅子，把本件府为好，不适际上。王洛宾则工作其实在手里看他的磁银，“在这里取出一番银新外作人。[搜索最新更新尽在]

    “这个用给你们不给走了？”高青感激涕零，差点没跪下。半石米足够全家吃一个月钱。不过我们自己便差了一下。这个很多，丫头长得不换。而且这个人看到底是僻静的石子，计门工活。”萧子山哈哈一笑，“即没有名字，也取一次了。这边的丫头怎么多名，替得起来回来，见老爷的样。

    “这是见之前，多精人心腹。”高青递道儿女，有时候你就看起来了，又命仆四巧匠难，推到心里排运运。他的小白也不象高青，看这个目当算安静。萧子山看得叫高家的话，一直无论在回启宅。

    萧子山点点头，早他的方砖问情整个一次破动悠久，佛郎机人每能进来。`;
const gen_text_path = path.join(__dirname, '/../data/generated_text');
let texts = [];
fs.readdir(gen_text_path, function(err, files) {
    texts = files;
});

app.use(express.static('public'));
app.get('/getGeneratedText', function(req, res) {
    let text = texts[Math.floor(Math.random() * texts.length)];
    fs.readFile(path.join(gen_text_path, text), 'utf8', function(err, data) {
        res.status(200).json({text: data});
    });
});

app.listen(3000, function () {
    console.log('xxx listening on port 3000');
});