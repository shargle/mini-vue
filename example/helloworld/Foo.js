import { h } from "../../lib/guide-mini-vue.esm.js"

export const Foo={
    setup(props,{emit}){
        const emitAdd=()=>{
            console.log("emit add")
            emit("add",1,2)
            emit("add-foo",1,2)
        }
        console.log(props)
        props.count++
        console.log('props',props)

        return {emitAdd}
    },
    render(){
        const btn=h("botton",{
            onclick:this.emitAdd
        },"emitAdd")
        const foo=h("p",{},"foo")
        return h("div",{},[foo, btn])
    }
}