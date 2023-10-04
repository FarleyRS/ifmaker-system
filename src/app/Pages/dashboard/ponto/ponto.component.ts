import { Component } from '@angular/core';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css'],
})
export class PontoComponent {
  inputs: string[] = ['', '', '', '', '', ''];
  combinedNumber: number | null = null;

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!value) {
      return;
    }

    this.inputs[index] = value;

    // Focus on the next input if available
    if (index < this.inputs.length - 1) {
      const nextInput = document.getElementById('otc-' + (index + 2));
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  combineNumbers() {
    // Combine the numbers in the array into a single string
    const combinedString = this.inputs.join('');

    // Parse the string as an integer
    this.combinedNumber = parseInt(combinedString, 10);
  }
}
