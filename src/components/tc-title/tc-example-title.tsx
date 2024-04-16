import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-example-title',
  styleUrl: 'tc-example-title.css',
  shadow: true
})
export class TcExampleHeading {
  @Prop() text: string; 

  render() {
    return (
      <h3 class="!mb-12 text-3xl font-mono  text-center md:text-4xl">
        {this.text}
      </h3>
    );
  }
}
