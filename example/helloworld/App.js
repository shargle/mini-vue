import { h } from "../../lib/guide-mini-vue.esm.js"
import { Foo } from "./Foo.js"
window.self = null
export const App = {
    render() {
        // return history('div','hi,'+this.msg)
        window.self = this
        return h(
            "div",
            {
                id: "root", class: ["red", "hard"],
                onClick() {
                    console.log("click")
                },
                onMounsedown() {
                    console.log("mounsedown")
                },
                onMounsedown() {
                    console.log("mounsedown")
                }
            },
            //  "hi"+this.msg
            //  [h("p", { class: 'red' }, "hi"), h("p", { class: "blue" }, "helloword")]
            [
                h("div", {}, "hi" + this.msg),
                h(Foo, {
                    onAdd(a, b) {
                        console.log("onAdd", a, b)
                    },
                    onAddFoo() {
                        console.log("onAddFoo")
                    }
                })
            ])
    },
    setup() {
        return {
            msg: 'mini-vue'
        }
    }
}