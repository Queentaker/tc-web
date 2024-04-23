import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-title',
  styleUrl: 'tc-title.css',
  shadow: true
})
export class TcHeading {
  @Prop() text: string; 

  render() {
    return (
      <h3 class="!mb-12 text-3xl font-sans text-center md:text-4xl">
        {this.text}
      </h3>
    );
  }
}
