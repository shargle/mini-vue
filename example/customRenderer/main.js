import {createRenderer} from "../../lib/guide-mini-vue.esm.js"

import {App} from "./App.js"

const game=new PIXI.Application({
    width:500,
    heigt:500
})

document.body.append(game.view)

const renderer=createRenderer({
    createElement(type){

        if(type==='rect'){
            const rect=new PIXI.Graphics()
            rect.beginFill(oxff0000)
            rect.drawRect(0,0,100,100)
            rect.endFill()

            return rect
        }
    },
    patchprop(el,key,vval){
        el[key]=val
    },
    insert(el,parent){
        parent.addChild(el)
    }
})
renderer.createApp(App).mount(game.stage)