import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;
  //@Input() color: string = 'red';

  @Input() set color(valor: string) {
    //this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }

  //@Input() mensaje: string = 'Debe de ingresar este campo';

  @Input() set mensaje(valor: string) {
   // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido(valor: boolean) {
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }
    else{
      this.htmlElement.nativeElement.classList.remove('hidden');

    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    //console.log('Constructor directive');
    //console.log(el);

    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    //  if (changes['mensaje']) {
    //    const mensaje = changes['mensaje'].currentValue;
    //    console.log(mensaje);
    //    this.htmlElement.nativeElement.innerText = mensaje;
    //  }
    //  if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    //  }
    //console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.color); //undefined
    console.log(this.mensaje); //undefined

    //console.log('ngOnInit en la directiva');
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
    //this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
