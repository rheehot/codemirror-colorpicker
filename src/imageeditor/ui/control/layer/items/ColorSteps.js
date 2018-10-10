import UIElement from "../../../../../colorpicker/UIElement";
import GradientSteps from "../../colorsteps/GradientSteps";


export default class ColorSteps extends UIElement {
    template () {
        return `
            <div class='property-item gradient-steps'>
                <GradientSteps></GradientSteps>
            </div>
        `
    }

    components() {
        return { GradientSteps }
    }

    refresh () {
        this.$el.toggle(this.isShow())
    }

    '@changeEditor' () {
        this.refresh()
    }

    isShow () {
        var item = this.read('/item/current/image')

        if (!item) return false; 

        return this.read('/image/type/isGradient', item.type)
    }

}