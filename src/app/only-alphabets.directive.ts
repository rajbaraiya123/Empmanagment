
import { DOCUMENT } from '@angular/common'
import { Directive, HostBinding, HostListener, Inject } from '@angular/core'

@Directive({
  selector: '[appOnlyAlphabets]'
})
export class OnlyAlphabetsDirective {
  @HostBinding('autocomplete') public autocomplete
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }
  @HostListener('keypress', ['$event']) public disableKeys(e: any) {
    this.document ? e.keyCode : e.keyCode
    return (
      e.keyCode === 8 || e.keyCode === 32 ||
      (e.keyCode >= 97 && e.keyCode <= 122) ||
      (e.keyCode >= 65 && e.keyCode <= 90)
    )
  }

}
