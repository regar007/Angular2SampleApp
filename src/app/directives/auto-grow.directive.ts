import { Directive, ElementRef, Renderer } from '@angular/core' // ElementRef and Renderer are services by angular

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
    };

    onFocus() {
        console.log(this.el);
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }

    onBlur() {
        console.log(this.renderer);
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
    }

}
