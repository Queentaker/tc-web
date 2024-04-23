// framework.tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'framework-item',
  styleUrl: 'tc-framework-item.css', // Your CSS file for styles
  shadow: true // Use Shadow DOM for style encapsulation
})
export class FrameworkItem {
  @Prop() image: string;
  @Prop() title: string;

  render() {
    return (
      <div class="flex flex-col items-center">
        <div class="relative w-full h-16">
          <img src={this.image} alt={this.title} />
        </div>
        <p class="mt-2 text-lg text-center">{this.title}</p>
      </div>
    );
  }
}
