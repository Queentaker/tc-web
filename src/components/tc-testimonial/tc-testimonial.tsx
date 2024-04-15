import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tc-testimonial',
  styleUrl: 'tc-testimonial.css', 
  shadow: true
})
export class MyTestimonial {
  @Prop() imageSrc: string;
  @Prop() altText: string = "Picture";
  @Prop() quote: string;
  @Prop() name: string;
  @Prop() description: string;

  render() {
    return (
      <div class="flex items-center justify-between bg-white p-5 shadow-md rounded-lg font-sans">
        <div class="flex items-center space-x-4">
          <div class="max-w-60%">
            <blockquote class="pl-5 m-0 text-xl leading-relaxed relative before:content-['“'] before:text-4xl before:absolute before:left-[-10px] before:top-[-20px] before:text-gray-300">
              {this.quote}
            </blockquote>
            <div class="mt-2.5">
              <p>{this.name}</p>
              <p class="text-sm text-gray-500">{this.description}</p>
            </div>
          </div>
          <div class="max-w-[200px]">
            <img class="rounded-lg" src={this.imageSrc} alt={this.altText} />
          </div>
        </div>
      </div>
    );
  }
}
