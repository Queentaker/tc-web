// src/components/tc-job-card/tc-job-card.tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-job-card',
  styleUrl: 'tc-job-card.css',
  shadow: true
})
export class TcJobCard {
  @Prop() header: string;
  @Prop() shortDescription: string;
  @Prop() detailedDescription: string;
  @Prop() imageSrc: string;
  @Prop() altText: string = "Picture";
  @Prop() imagePosition: 'left' | 'right' = 'left'; // Default to left

  render() {
    const imageClass = this.imagePosition === 'left' ? "order-1" : "order-2";
    const contentClass = this.imagePosition === 'left' ? "order-2" : "order-1";

    return (
      <div class={`flex flex-col md:flex-row items-center gap-8`}>
        <div class={`w-full md:flex-1 md:${imageClass}`}>
          <img class="object-cover h-auto max-w-xs" src={this.imageSrc} alt={this.altText}/>
        </div>
        <div class={`flex-1 md:${contentClass}`}>
          <h4 class="text-3xl font-bold">{this.header}</h4>
          <p class="text-xl">{this.shortDescription}</p>
          <p>{this.detailedDescription}</p>
        </div>
      </div>
    );
  }
}
